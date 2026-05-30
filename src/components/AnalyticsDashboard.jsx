import { useState, useEffect } from 'react';
import { X, TrendingUp, Eye, MousePointerClick, Clock, Monitor, Send, BarChart2, Download, FileText } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { jsPDF } from 'jspdf';

const GOLD = '#C9A84C';
const SECTION_LABELS = { overview: 'Overview', cascade: 'The Cascade', technology: 'Technology', competitive: 'Competitive', contact: 'Contact', gallery: 'Gallery' };

function fmt(seconds) {
  if (!seconds || seconds < 1) return '0s';
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

export default function AnalyticsDashboard({ onClose }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [timeframe, setTimeframe] = useState('1h');

  const TIMEFRAMES = [
    { value: '1h',   label: 'Hour' },
    { value: '4h',   label: '4 Hours' },
    { value: '8h',   label: '8 Hours' },
    { value: '24h',  label: '24 Hours' },
    { value: '7d',   label: '7 Days' },
    { value: '30d',  label: 'Month' },
    { value: 'all',  label: 'All Time' },
  ];

  function getStartTime(tf) {
    if (tf === 'all') return null;
    const now = Date.now();
    const map = { '1h': 1, '4h': 4, '8h': 8, '24h': 24, '7d': 168, '30d': 720 };
    return new Date(now - map[tf] * 60 * 60 * 1000).toISOString();
  }

  useEffect(() => {
    setLoading(true);
    setError('');
    base44.entities.AnalyticsEvent.list('-occurred_at', 2000)
      .then(data => {
        const all = data || [];
        const start = getStartTime(timeframe);
        setEvents(start ? all.filter(e => e.occurred_at && e.occurred_at >= start) : all);
        setLoading(false);
      })
      .catch(() => { setError('Could not load analytics. Are you logged in as admin?'); setLoading(false); });
  }, [timeframe]);

  // --- Computed stats ---
  const visits = events.filter(e => e.event_name === 'page_visit');
  const pageVisits = visits.length;

  const timers = events.filter(e => e.event_name === 'time_on_page' && e.seconds > 0);
  const avgTime = timers.length ? Math.round(timers.reduce((s, e) => s + (e.seconds || 0), 0) / timers.length) : 0;

  const navClicks = events.filter(e => e.event_name === 'nav_link_clicked').length;
  const ctaClicks = events.filter(e => e.event_name === 'cta_clicked').length;
  const demoRequests = events.filter(e => e.event_name === 'demo_request_submitted').length;

  const desktop = visits.filter(e => e.device === 'desktop').length;
  const mobile = visits.filter(e => e.device === 'mobile').length;
  const tablet = visits.filter(e => e.device === 'tablet').length;

  const sectionViews = Object.entries(SECTION_LABELS).map(([id, label]) => ({
    id, label,
    count: events.filter(e => e.event_name === 'section_viewed' && e.section === id).length,
  })).sort((a, b) => b.count - a.count);

  const navBreakdown = {};
  events.filter(e => e.event_name === 'nav_link_clicked').forEach(e => {
    const key = e.label || e.href || 'unknown';
    navBreakdown[key] = (navBreakdown[key] || 0) + 1;
  });

  const referrers = {};
  visits.forEach(e => {
    const key = e.referrer || 'direct';
    referrers[key] = (referrers[key] || 0) + 1;
  });

  const uniqueSessions = new Set(events.map(e => e.session_id).filter(Boolean)).size;

  // --- Build report text for export ---
  function buildReportText() {
    const now = new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' });
    const tfLabel = TIMEFRAMES.find(t => t.value === timeframe)?.label || timeframe;
    const lines = [
      'XFH GAME STUDIO — SITE ANALYTICS REPORT',
      `Generated: ${now} (Mountain Time)`,
      `Timeframe: ${tfLabel}`,
      '',
      '═══════════════════════════════════════',
      'SUMMARY',
      '═══════════════════════════════════════',
      `Page Visits:        ${pageVisits}`,
      `Unique Sessions:    ${uniqueSessions}`,
      `Avg. Time on Page:  ${fmt(avgTime)}`,
      `Nav Link Clicks:    ${navClicks}`,
      `CTA Clicks:         ${ctaClicks}`,
      `Demo Requests:      ${demoRequests}`,
      '',
      '═══════════════════════════════════════',
      'DEVICE BREAKDOWN',
      '═══════════════════════════════════════',
      `Desktop: ${desktop}`,
      `Mobile:  ${mobile}`,
      `Tablet:  ${tablet}`,
      '',
      '═══════════════════════════════════════',
      'SECTION VIEWS',
      '═══════════════════════════════════════',
      ...sectionViews.map(s => `${s.label.padEnd(20)} ${s.count}`),
      '',
      '═══════════════════════════════════════',
      'NAVIGATION CLICKS',
      '═══════════════════════════════════════',
      ...Object.entries(navBreakdown).map(([k, v]) => `${k.padEnd(20)} ${v}`),
      '',
      '═══════════════════════════════════════',
      'TRAFFIC SOURCES',
      '═══════════════════════════════════════',
      ...Object.entries(referrers).map(([k, v]) => `${k.slice(0, 40).padEnd(40)} ${v}`),
      '',
      '───────────────────────────────────────',
      'Rapid Fire Texas Hold\'em | XFH Game Studio',
      'Patent Pending — Application No. 3311959',
    ];
    return lines.join('\n');
  }

  // --- Export as PDF ---
  function exportPDF() {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const text = buildReportText();
    const lines = text.split('\n');
    let y = 15;
    doc.setFont('courier', 'normal');
    lines.forEach(line => {
      if (y > 275) { doc.addPage(); y = 15; }
      const isHeader = line.startsWith('═') || line.startsWith('─');
      const isTitle = line.includes('ANALYTICS REPORT');
      if (isTitle) {
        doc.setFontSize(12);
        doc.setTextColor(180, 140, 60);
      } else if (isHeader) {
        doc.setFontSize(7);
        doc.setTextColor(150, 120, 50);
      } else {
        doc.setFontSize(9);
        doc.setTextColor(30, 30, 30);
      }
      doc.text(line, 15, y);
      y += isHeader ? 4 : isTitle ? 7 : 5.5;
    });
    const now = new Date().toISOString().slice(0, 10);
    doc.save(`XFH_Analytics_${now}.pdf`);
  }

  // --- Export as Word (.doc via HTML blob) ---
  function exportWord() {
    const text = buildReportText();
    const html = `
      <html><head><meta charset="utf-8">
      <style>
        body { font-family: Courier New, monospace; font-size: 11pt; color: #111; }
        pre { white-space: pre-wrap; }
        h1 { color: #C9A84C; }
      </style></head>
      <body><pre>${text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre></body></html>`;
    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const now = new Date().toISOString().slice(0, 10);
    a.download = `XFH_Analytics_${now}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // --- Stat card ---
  const StatCard = ({ icon, label, value, sub }) => (
    <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.25)', padding: '0.875rem 1rem', borderRadius: 2 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem', color: GOLD }}>
        {icon}
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</span>
      </div>
      <div style={{ fontSize: '1.75rem', fontFamily: 'Bebas Neue, sans-serif', color: '#fff', lineHeight: 1 }}>{loading ? '—' : value}</div>
      {sub && <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.2rem' }}>{sub}</div>}
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '5rem', backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.4)', width: '100%', maxWidth: '740px', maxHeight: '82vh', overflowY: 'auto', borderRadius: 2, padding: '2rem', position: 'relative', margin: '0 1rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BarChart2 size={20} color={GOLD} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', color: '#fff', letterSpacing: '0.1em' }}>Site Analytics</span>
            {!loading && <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>{events.length} events recorded</span>}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* Export buttons */}
            <button onClick={exportPDF} title="Download PDF"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)', color: GOLD, padding: '0.3rem 0.65rem', cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem', borderRadius: 2 }}>
              <Download size={11} /> PDF
            </button>
            <button onClick={exportWord} title="Download Word"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)', color: GOLD, padding: '0.3rem 0.65rem', cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem', borderRadius: 2 }}>
              <FileText size={11} /> Word
            </button>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', padding: '0.25rem', marginLeft: '0.25rem' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {TIMEFRAMES.map(tf => (
            <button key={tf.value} onClick={() => setTimeframe(tf.value)}
              style={{
                padding: '0.3rem 0.75rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', borderRadius: 2, fontWeight: 600, transition: 'all 0.2s',
                border: `1px solid ${timeframe === tf.value ? GOLD : 'rgba(201,168,76,0.25)'}`,
                backgroundColor: timeframe === tf.value ? GOLD : 'transparent',
                color: timeframe === tf.value ? '#000' : 'rgba(201,168,76,0.7)',
              }}>
              {tf.label}
            </button>
          ))}
        </div>

        {error && <div style={{ color: '#f87171', fontSize: '0.8rem', marginBottom: '1rem', padding: '0.75rem', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 2 }}>{error}</div>}

        {/* Top Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <StatCard icon={<Eye size={12} />} label="Page Visits" value={pageVisits} />
          <StatCard icon={<Eye size={12} />} label="Unique Sessions" value={uniqueSessions} />
          <StatCard icon={<Clock size={12} />} label="Avg. Time" value={fmt(avgTime)} />
          <StatCard icon={<MousePointerClick size={12} />} label="Nav Clicks" value={navClicks} />
          <StatCard icon={<TrendingUp size={12} />} label="CTA Clicks" value={ctaClicks} />
          <StatCard icon={<Send size={12} />} label="Demo Requests" value={demoRequests} />
        </div>

        {/* Device + Referrers row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {/* Device */}
          <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.2)', padding: '1rem', borderRadius: 2 }}>
            <div style={{ fontSize: '0.6rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Monitor size={11} /> Device Breakdown
            </div>
            {[['Desktop', desktop], ['Mobile', mobile], ['Tablet', tablet]].map(([label, count]) => {
              const pct = pageVisits ? Math.round((count / pageVisits) * 100) : 0;
              return (
                <div key={label} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.2rem' }}>
                    <span>{label}</span><span>{loading ? '—' : `${count} (${pct}%)`}</span>
                  </div>
                  <div style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                    <div style={{ width: `${pct}%`, height: '100%', backgroundColor: GOLD, borderRadius: 2 }} />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Traffic Sources */}
          <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.2)', padding: '1rem', borderRadius: 2 }}>
            <div style={{ fontSize: '0.6rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Traffic Sources</div>
            {Object.entries(referrers).length === 0 && !loading && <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>No data yet</span>}
            {Object.entries(referrers).slice(0, 5).map(([src, count]) => (
              <div key={src} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.4rem' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '75%' }}>{src === 'direct' ? 'Direct / No Referrer' : src}</span>
                <span style={{ color: GOLD, fontWeight: 600, flexShrink: 0 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Views */}
        <div style={{ marginBottom: '1.25rem', background: '#111', border: '1px solid rgba(201,168,76,0.2)', padding: '1rem', borderRadius: 2 }}>
          <div style={{ fontSize: '0.6rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Section Views</div>
          {sectionViews.map(s => {
            const max = sectionViews[0]?.count || 1;
            const pct = Math.round((s.count / max) * 100);
            return (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '100px', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }}>{s.label}</div>
                <div style={{ flex: 1, height: '5px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                  <div style={{ width: `${pct}%`, height: '100%', backgroundColor: GOLD, borderRadius: 2, transition: 'width 0.5s' }} />
                </div>
                <div style={{ width: '28px', textAlign: 'right', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{loading ? '—' : s.count}</div>
              </div>
            );
          })}
        </div>

        {/* Nav Clicks */}
        <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.2)', padding: '1rem', borderRadius: 2 }}>
          <div style={{ fontSize: '0.6rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Navigation Clicks</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {Object.entries(navBreakdown).length === 0 && !loading && <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>No data yet</span>}
            {Object.entries(navBreakdown).map(([label, count]) => (
              <div key={label} style={{ background: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', padding: '0.3rem 0.65rem', borderRadius: 2, fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.5rem' }}>
                <span>{label}</span><span style={{ color: GOLD, fontWeight: 600 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '1.25rem', fontSize: '0.6rem', color: 'rgba(255,255,255,0.18)', textAlign: 'center' }}>
          Ctrl+Alt+J+L to toggle • Last {events.length} events shown
        </div>
      </div>
    </div>
  );
}