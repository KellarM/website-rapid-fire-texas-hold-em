import { useState, useEffect } from 'react';
import { X, TrendingUp, Eye, MousePointerClick, Clock, Monitor, Send, BarChart2 } from 'lucide-react';

const GOLD = '#C9A84C';

// We read raw events from base44 analytics - grouped manually
function groupEvents(events) {
  const counts = {};
  events.forEach(e => {
    counts[e.eventName] = (counts[e.eventName] || 0) + 1;
  });
  return counts;
}

function sectionLabel(id) {
  const map = { overview: 'Overview', cascade: 'The Cascade', technology: 'Technology', competitive: 'Competitive', contact: 'Contact', gallery: 'Gallery' };
  return map[id] || id;
}

export default function AnalyticsDashboard({ onClose }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pull from base44 analytics (last 500 events)
    import('@/api/base44Client').then(({ base44 }) => {
      base44.analytics.list({ limit: 500 })
        .then(data => { setEvents(data || []); setLoading(false); })
        .catch(() => setLoading(false));
    });
  }, []);

  const counts = groupEvents(events);

  const pageVisits = counts['page_visit'] || 0;
  const navClicks = counts['nav_link_clicked'] || 0;
  const demoRequests = counts['demo_request_submitted'] || 0;
  const ctaClicks = counts['cta_clicked'] || 0;

  // Section views
  const sectionViews = ['overview', 'cascade', 'technology', 'competitive', 'contact', 'gallery'].map(id => ({
    id,
    label: sectionLabel(id),
    count: events.filter(e => e.eventName === 'section_viewed' && e.properties?.section === id).length,
  })).sort((a, b) => b.count - a.count);

  // Device breakdown
  const mobile = events.filter(e => e.eventName === 'page_visit' && e.properties?.device === 'mobile').length;
  const desktop = events.filter(e => e.eventName === 'page_visit' && e.properties?.device === 'desktop').length;

  // Avg time on page
  const timers = events.filter(e => e.eventName === 'time_on_page');
  const avgTime = timers.length ? Math.round(timers.reduce((s, e) => s + (e.properties?.seconds || 0), 0) / timers.length) : 0;

  // Nav clicks breakdown
  const navBreakdown = {};
  events.filter(e => e.eventName === 'nav_link_clicked').forEach(e => {
    const label = e.properties?.label || e.properties?.href || 'unknown';
    navBreakdown[label] = (navBreakdown[label] || 0) + 1;
  });

  const stat = (icon, label, value, sub) => (
    <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.25)', padding: '1rem 1.25rem', borderRadius: 2 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: GOLD }}>
        {icon}
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</span>
      </div>
      <div style={{ fontSize: '2rem', fontFamily: 'Bebas Neue, sans-serif', color: '#fff', lineHeight: 1 }}>{loading ? '—' : value}</div>
      {sub && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>{sub}</div>}
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '5rem', backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.4)', width: '100%', maxWidth: '720px', maxHeight: '80vh', overflowY: 'auto', borderRadius: 2, padding: '2rem', position: 'relative', margin: '0 1rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BarChart2 size={20} color={GOLD} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', color: '#fff', letterSpacing: '0.1em' }}>Site Analytics</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', padding: '0.25rem' }}>
            <X size={18} />
          </button>
        </div>

        {/* Top Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {stat(<Eye size={13} />, 'Page Visits', pageVisits)}
          {stat(<Clock size={13} />, 'Avg. Time on Page', avgTime > 0 ? `${avgTime}s` : '—', avgTime > 60 ? `${Math.floor(avgTime/60)}m ${avgTime%60}s` : '')}
          {stat(<MousePointerClick size={13} />, 'Nav Clicks', navClicks)}
          {stat(<Send size={13} />, 'Demo Requests', demoRequests)}
          {stat(<Monitor size={13} />, 'Desktop', desktop, `Mobile: ${mobile}`)}
          {stat(<TrendingUp size={13} />, 'CTA Clicks', ctaClicks)}
        </div>

        {/* Section Views */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.65rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Section Views</div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {sectionViews.map(s => {
              const max = sectionViews[0]?.count || 1;
              const pct = Math.round((s.count / max) * 100);
              return (
                <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '100px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }}>{s.label}</div>
                  <div style={{ flex: 1, height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                    <div style={{ width: `${pct}%`, height: '100%', backgroundColor: GOLD, borderRadius: 2, transition: 'width 0.5s' }} />
                  </div>
                  <div style={{ width: '30px', textAlign: 'right', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{loading ? '—' : s.count}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nav Breakdown */}
        <div>
          <div style={{ fontSize: '0.65rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Navigation Clicks</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {Object.entries(navBreakdown).length === 0 && !loading && (
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>No data yet</span>
            )}
            {Object.entries(navBreakdown).map(([label, count]) => (
              <div key={label} style={{ background: '#111', border: '1px solid rgba(201,168,76,0.2)', padding: '0.35rem 0.75rem', borderRadius: 2, fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.5rem' }}>
                <span>{label}</span>
                <span style={{ color: GOLD, fontWeight: 600 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
          Ctrl+Alt+J+L to hide this panel
        </div>
      </div>
    </div>
  );
}