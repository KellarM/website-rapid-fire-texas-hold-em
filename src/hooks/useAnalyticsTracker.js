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

// Save event via backend function (works for unauthenticated visitors)
export function trackEvent(eventName, properties = {}) {
  const payload = {
    event_name: eventName,
    session_id: getSessionId(),
    occurred_at: new Date().toISOString(),
    device: getDevice(),
    screen_width: window.innerWidth,
    ...properties,
  };
  // Fire and forget via backend function (service role — no auth needed)
  base44.functions.invoke('trackAnalyticsEvent', payload).catch((e) => {
    console.warn('[Analytics] Failed to track event:', eventName, e?.message);
  });
}

// Hook: attach all passive tracking on mount
export function useAnalyticsTracker() {
  useEffect(() => {
    // Page visit — capture referrer (the actual source site)
    const referrerUrl = document.referrer;
    let referrerLabel = 'direct';
    if (referrerUrl) {
      try {
        referrerLabel = new URL(referrerUrl).hostname;
      } catch {
        referrerLabel = referrerUrl;
      }
    }
    trackEvent('page_visit', { referrer: referrerLabel });

    // Time on page — use visibilitychange for mobile reliability
    const startTime = Date.now();
    let exitTracked = false;
    const trackExit = () => {
      if (exitTracked) return;
      exitTracked = true;
      const seconds = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', { seconds });
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') trackExit();
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('beforeunload', trackExit);

    // Section views via IntersectionObserver — fire ONCE per section per session
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
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('beforeunload', trackExit);
      observers.forEach(o => o.disconnect());
    };
  }, []);
}