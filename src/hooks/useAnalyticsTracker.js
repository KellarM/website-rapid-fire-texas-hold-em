import { useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// Generate or reuse a session ID for this browser tab
function getSessionId() {
  let id = sessionStorage.getItem('xfh_session_id');
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('xfh_session_id', id);
  }
  return id;
}

function getDevice() {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return 'mobile';
  if (/Tablet|iPad/i.test(ua)) return 'tablet';
  return 'desktop';
}

// Save event to AnalyticsEvent entity (works on all devices, live + preview)
export function trackEvent(eventName, properties = {}) {
  const payload = {
    event_name: eventName,
    session_id: getSessionId(),
    occurred_at: new Date().toISOString(),
    device: getDevice(),
    screen_width: window.innerWidth,
    ...properties,
  };
  // Fire and forget — don't block anything
  base44.entities.AnalyticsEvent.create(payload).catch(() => {});
}

// Hook: attach all passive tracking on mount
export function useAnalyticsTracker() {
  useEffect(() => {
    // Page visit
    trackEvent('page_visit', {
      referrer: document.referrer || 'direct',
    });

    // Time on page — use visibilitychange for mobile (beforeunload unreliable on mobile)
    const startTime = Date.now();
    const handleExit = () => {
      if (document.visibilityState === 'hidden') {
        const seconds = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', { seconds });
      }
    };
    document.addEventListener('visibilitychange', handleExit);
    window.addEventListener('beforeunload', () => {
      const seconds = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', { seconds });
    });

    // Section views via IntersectionObserver
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
      }, { threshold: 0.25 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      document.removeEventListener('visibilitychange', handleExit);
      observers.forEach(o => o.disconnect());
    };
  }, []);
}