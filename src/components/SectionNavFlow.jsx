// Visualises how users navigate between game sections
export default function SectionNavFlow({ events, loading, sectionLabels, gold }) {
  const navEvents = events.filter(e => e.event_name === 'section_navigated');

  // Build transition counts: "from → to"
  const transitions = {};
  navEvents.forEach(e => {
    if (!e.from_section || e.from_section === 'none') return;
    const key = `${e.from_section} → ${e.section}`;
    transitions[key] = (transitions[key] || 0) + 1;
  });

  // Direction breakdown
  const downMoves = navEvents.filter(e => e.direction === 'down').length;
  const upMoves = navEvents.filter(e => e.direction === 'up').length;

  // Average time per section
  const timeBySection = {};
  const countBySection = {};
  navEvents.forEach(e => {
    if (e.seconds_in_prev != null && e.from_section && e.from_section !== 'none') {
      timeBySection[e.from_section] = (timeBySection[e.from_section] || 0) + e.seconds_in_prev;
      countBySection[e.from_section] = (countBySection[e.from_section] || 0) + 1;
    }
  });

  const avgBySection = Object.keys(timeBySection).map(id => ({
    id,
    label: sectionLabels[id] || id,
    avg: Math.round(timeBySection[id] / countBySection[id]),
  })).sort((a, b) => b.avg - a.avg);

  const topTransitions = Object.entries(transitions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const maxTransition = topTransitions[0]?.[1] || 1;

  return (
    <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.2)', padding: '1rem', borderRadius: 2 }}>
      <div style={{ fontSize: '0.6rem', color: gold, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.85rem' }}>
        Section Navigation Flow
      </div>

      {navEvents.length === 0 && !loading && (
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>No navigation data yet — visit the site to generate data.</span>
      )}

      {navEvents.length > 0 && (
        <>
          {/* Scroll direction summary */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Scroll Down', value: downMoves, color: '#4ade80' },
              { label: 'Scroll Up (back)', value: upMoves, color: '#f97316' },
              { label: 'Total Navigations', value: navEvents.length, color: gold },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ flex: '1 1 100px', background: '#0A0A0A', border: `1px solid ${color}33`, padding: '0.5rem 0.75rem', borderRadius: 2, textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontFamily: 'Bebas Neue, sans-serif', color, lineHeight: 1 }}>{loading ? '—' : value}</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Top transitions */}
          {topTransitions.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Most common paths</div>
              {topTransitions.map(([path, count]) => {
                const pct = Math.round((count / maxTransition) * 100);
                const parts = path.split(' → ');
                const fromLabel = sectionLabels[parts[0]] || parts[0];
                const toLabel = sectionLabels[parts[1]] || parts[1];
                return (
                  <div key={path} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.45rem' }}>
                    <div style={{ width: '150px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', flexShrink: 0 }}>
                      {fromLabel} → {toLabel}
                    </div>
                    <div style={{ flex: 1, height: '5px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                      <div style={{ width: `${pct}%`, height: '100%', backgroundColor: gold, borderRadius: 2, transition: 'width 0.5s' }} />
                    </div>
                    <div style={{ width: '20px', textAlign: 'right', fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)' }}>{count}</div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Avg time per section */}
          {avgBySection.length > 0 && (
            <div>
              <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Avg. time before leaving section</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {avgBySection.map(({ id, label, avg }) => (
                  <div key={id} style={{ background: '#0A0A0A', border: '1px solid rgba(201,168,76,0.18)', padding: '0.3rem 0.65rem', borderRadius: 2, fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)' }}>
                    {label}: <span style={{ color: gold, fontWeight: 600 }}>{avg < 60 ? `${avg}s` : `${Math.floor(avg / 60)}m ${avg % 60}s`}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}