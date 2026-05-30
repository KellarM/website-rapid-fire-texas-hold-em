import { useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// Track a single event
export function trackEvent(eventName, properties = {}) {
  base44.analytics.track({ eventName, properties });
}

// Hook: attach all passive tracking on mount
export function useAnalyticsTracker() {
  useEffect(() => {
    // Track page visit
    trackEvent('page_visit', {
      referrer: document.referrer || 'direct',
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      screen_width: window.innerWidth,
      timestamp: new Date().toISOString(),
    });

    // Track time on page
    const startTime = Date.now();
    const handleUnload = () => {
      const seconds = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', { seconds });
    };
    window.addEventListener('beforeunload', handleUnload);

    // Track section views via IntersectionObserver
    const sectionIds = ['overview', 'cascade', 'technology', 'competitive', 'contact', 'gallery'];
    const observers = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('section_viewed', { section: id });
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(el);
      observers.push(obs);
    });

    // Track nav link clicks
    const handleNavClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) trackEvent('nav_link_clicked', { href: link.getAttribute('href'), label: link.innerText.trim() });
    };
    document.addEventListener('click', handleNavClick);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      document.removeEventListener('click', handleNavClick);
      observers.forEach(o => o.disconnect());
    };
  }, []);
}