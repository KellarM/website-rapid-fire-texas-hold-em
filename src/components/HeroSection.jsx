export default function HeroSection() {
  const suits = [
    { ch: '♠', pos: { top: '8%', left: '6%' } },
    { ch: '♥', pos: { top: '10%', right: '7%' } },
    { ch: '♦', pos: { bottom: '14%', left: '8%' } },
    { ch: '♣', pos: { bottom: '12%', right: '6%' } },
  ];
  const stats = [
    { stat: '2M+', label: 'Certified Wins / Position' },
    { stat: '80', label: 'Rounds / Hour' },
    { stat: '78', label: 'Bet Positions Validated' },
  ];

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '100vh', background: 'radial-gradient(ellipse 90% 70% at 50% 45%, #0E3A28 0%, #0A2419 75%)' }}>
      {/* ambient felt dots */}
      <div className="absolute inset-0 suit-bg" style={{ opacity: 0.5 }} />

      {/* large corner suits */}
      {suits.map(s => (
        <span key={s.ch} style={{ position: 'absolute', fontSize: '7rem', color: 'rgba(201,168,76,0.07)', lineHeight: 1, zIndex: 1, ...s.pos }}>{s.ch}</span>
      ))}

      {/* vignette */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A2419 0%, transparent 16%, transparent 84%, #0A2419 100%)', zIndex: 2 }} />

      {/* content */}
      <div className="relative z-10 px-6 w-full max-w-3xl mx-auto text-center">
        {/* table rail frame */}
        <div className="felt-rail mx-auto" style={{ maxWidth: '760px' }}>
          <div className="felt-rail-inner px-8 py-12 md:py-16">

            {/* eyebrow with suits */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.85rem' }}>♠</span>
              <span className="section-label">XFH Game Studio Presents</span>
              <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.85rem' }}>♣</span>
            </div>

            {/* title */}
            <h1 className="font-bebas text-gold text-glow-gold" style={{ fontSize: 'clamp(2.6rem, 9vw, 6rem)', letterSpacing: '0.08em', lineHeight: 1, margin: 0 }}>RAPID FIRE</h1>
            <h2 className="font-playfair text-white" style={{ fontSize: 'clamp(1rem, 3.5vw, 2rem)', letterSpacing: '0.3em', margin: '0.25rem 0 0 0', fontWeight: 700, textTransform: 'uppercase' }}>Texas Hold'em</h2>

            {/* suit divider */}
            <div className="flex items-center justify-center gap-2 my-6">
              <span style={{ color: 'rgba(201,168,76,0.5)' }}>♥</span>
              <div style={{ height: '1px', width: '3rem', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)' }} />
              <span style={{ color: 'rgba(201,168,76,0.5)' }}>♦</span>
            </div>

            <p style={{ color: 'rgba(245,240,230,0.85)', fontSize: '1.05rem', fontWeight: 300, marginBottom: '0.5rem' }}>
              A proprietary Electronic Gaming Machine engineered for the modern casino floor — and Stadium Gaming environments.
            </p>
            <p style={{ color: 'rgba(245,240,230,0.6)', fontSize: '0.9rem', fontWeight: 300, marginBottom: '2rem' }}>
              Built on the <span className="text-gold font-medium">Cascade Crescendo</span> betting logic with a Snowball Cap — high-action engagement with precision operator control.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#overview" className="rounded-md px-7 py-3 border border-gold text-gold text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300">Explore the Game</a>
              <a href="#contact" className="rounded-md glow-gold px-7 py-3 bg-gold text-xfh-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300">Request a Demo</a>
            </div>
          </div>
        </div>

        {/* chip-stack stats */}
        <div className="flex flex-wrap items-end justify-center gap-8 mt-10">
          {stats.map(item => (
            <div key={item.label} className="flex flex-col items-center">
              <div style={{ position: 'relative', height: '74px', width: '56px' }}>
                <div className="poker-chip" style={{ position: 'absolute', top: '18px', left: 0 }} />
                <div className="poker-chip" style={{ position: 'absolute', top: '9px', left: 0 }} />
                <div className="poker-chip" style={{ position: 'absolute', top: 0, left: 0 }}>{item.stat}</div>
              </div>
              <span className="mt-2 text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,230,0.65)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute left-1/2 flex flex-col items-center gap-2" style={{ bottom: '1.5rem', transform: 'translateX(-50%)', color: 'rgba(245,240,230,0.3)', zIndex: 10 }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
      </div>
    </section>
  );
}