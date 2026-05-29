export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Dark bg guarantee */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0A0A0A', zIndex: 0 }} />

      {/* Background image — the game logo/speed visual */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <img
          src="https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/3be455822_SpeedofPoker.png"
          alt="Speed of Poker"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 70%, #0A0A0A 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0A0A0A 0%, transparent 25%, transparent 75%, #0A0A0A 100%)' }} />
      </div>

      {/* Gold line accents */}
      <div style={{ position: 'absolute', top: '33%', left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '33%', left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)', zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 1.5rem', maxWidth: '960px', width: '100%', margin: '0 auto' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(201,168,76,0.6)' }} />
          <span className="section-label">XFH Game Studio Presents</span>
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(201,168,76,0.6)' }} />
        </div>

        {/* Game Logo — the official title card */}
        <div style={{ marginBottom: '2rem' }}>
          <img
            src="https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/1a038e55c_ChatGPTImageMay8202612_48_32PM.png"
            alt="Rapid Fire Texas Hold'em"
            style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block', filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.3))' }}
          />
        </div>

        {/* Tagline */}
        <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          A proprietary Electronic Table Game engineered for the modern casino floor.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', fontWeight: 300, letterSpacing: '0.03em', marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem auto' }}>
          Built on the <span style={{ color: '#C9A84C', fontWeight: 500 }}>Cascade Crescendo</span> betting logic — delivering high-action engagement with precision operator control.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
          <a
            href="#overview"
            style={{ padding: '0.875rem 2rem', border: '1px solid #C9A84C', color: '#C9A84C', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#C9A84C'; e.target.style.color = '#0A0A0A'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#C9A84C'; }}
          >
            Explore the Game
          </a>
          <a
            href="#contact"
            style={{ padding: '0.875rem 2rem', backgroundColor: '#C9A84C', color: '#0A0A0A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#F5D78E'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = '#C9A84C'; }}
          >
            Request Demo
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          {[
            { icon: '🔥', stat: '9M+', label: 'Calibration Cycles' },
            { icon: '⚡', stat: '80–90', label: 'Rounds / Hour' },
            { icon: '🛡️', stat: '78/78', label: 'Gaming-Standard Math' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
              <span style={{ color: '#C9A84C', fontWeight: 600, fontSize: '0.875rem' }}>{item.stat}</span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.25)', zIndex: 3 }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
      </div>
    </section>
  );
}