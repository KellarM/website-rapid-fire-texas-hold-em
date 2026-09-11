export default function HeroSection() {
  const cornerSuits = [
    { ch: '♠', pos: { top: '6%', left: '5%' } },
    { ch: '♥', pos: { top: '8%', right: '6%' } },
    { ch: '♦', pos: { bottom: '10%', left: '7%' } },
    { ch: '♣', pos: { bottom: '8%', right: '5%' } },
  ];
  const stats = [
    { stat: '2M+', label: 'Certified Wins / Position', stack: ['chip-black', 'chip-red', 'chip-gold'] },
    { stat: '80', label: 'Rounds / Hour', stack: ['chip-blue', 'chip-white', 'chip-red'] },
    { stat: '78', label: 'Bet Positions Validated', stack: ['chip-green', 'chip-black', 'chip-gold'] },
  ];

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '100vh', background: 'radial-gradient(ellipse 100% 80% at 50% 50%, #0E3A28 0%, #0A2419 80%)' }}>
      {/* ambient felt dots */}
      <div className="absolute inset-0 suit-bg" style={{ opacity: 0.4 }} />

      {/* corner suits */}
      {cornerSuits.map(s => (
        <span key={s.ch} style={{ position: 'absolute', fontSize: '7rem', color: 'rgba(201,168,76,0.07)', lineHeight: 1, zIndex: 1, ...s.pos }}>{s.ch}</span>
      ))}

      {/* oval poker table */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 'min(94vw, 1040px)', height: 'min(82vh, 640px)', borderRadius: '50%',
        background: 'linear-gradient(135deg, #4a2f18, #2a1a0c 50%, #4a2f18)',
        boxShadow: '0 0 90px rgba(0,0,0,0.65), inset 0 0 0 2px rgba(201,168,76,0.35)',
        zIndex: 2,
      }}>
        <div style={{
          position: 'absolute', inset: '18px', borderRadius: '50%',
          background: 'radial-gradient(ellipse 80% 70% at 50% 42%, #176B4A 0%, #0E3A28 62%, #0A2419 100%)',
          border: '2px solid rgba(201,168,76,0.4)',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)',
        }}>
          {/* felt seam line */}
          <div style={{ position: 'absolute', top: '50%', left: '8%', right: '8%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.14), transparent)' }} />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 px-6 w-full max-w-2xl mx-auto text-center">
        {/* eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.85rem' }}>♠</span>
          <span className="section-label">XFH Game Studio Presents</span>
          <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.85rem' }}>♣</span>
        </div>

        <h1 className="font-bebas text-gold text-glow-gold" style={{ fontSize: 'clamp(2.6rem, 9vw, 6rem)', letterSpacing: '0.08em', lineHeight: 1, margin: 0 }}>RAPID FIRE</h1>
        <h2 className="font-playfair text-white" style={{ fontSize: 'clamp(1rem, 3.5vw, 2rem)', letterSpacing: '0.3em', margin: '0.25rem 0 0 0', fontWeight: 700, textTransform: 'uppercase' }}>Texas Hold'em</h2>

        {/* suit divider */}
        <div className="flex items-center justify-center gap-2 my-5">
          <span style={{ color: 'rgba(201,168,76,0.5)' }}>♥</span>
          <div style={{ height: '1px', width: '3rem', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)' }} />
          <span style={{ color: 'rgba(201,168,76,0.5)' }}>♦</span>
        </div>

        <p style={{ color: 'rgba(245,240,230,0.85)', fontSize: '1.05rem', fontWeight: 300, marginBottom: '0.4rem' }}>
          A proprietary Electronic Gaming Machine engineered for the modern casino floor — and Stadium Gaming environments.
        </p>
        <p style={{ color: 'rgba(245,240,230,0.6)', fontSize: '0.9rem', fontWeight: 300, marginBottom: '1.75rem' }}>
          Built on the <span className="text-gold font-medium">Cascade Crescendo</span> betting logic with a Snowball Cap — high-action engagement with precision operator control.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#overview" className="rounded-md px-7 py-3 border border-gold text-gold text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300">Explore the Game</a>
          <a href="#contact" className="rounded-md glow-gold px-7 py-3 bg-gold text-xfh-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300">Request a Demo</a>
        </div>

        {/* multi-color chip stacks */}
        <div className="flex flex-wrap items-end justify-center gap-10 mt-9">
          {stats.map(item => (
            <div key={item.label} className="flex flex-col items-center">
              <div style={{ position: 'relative', height: '74px', width: '56px' }}>
                <div className={`poker-chip ${item.stack[0]}`} style={{ position: 'absolute', top: '18px', left: 0 }} />
                <div className={`poker-chip ${item.stack[1]}`} style={{ position: 'absolute', top: '9px', left: 0 }} />
                <div className={`poker-chip ${item.stack[2]}`} style={{ position: 'absolute', top: 0, left: 0 }}>{item.stat}</div>
              </div>
              <span className="mt-2 text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,230,0.65)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute left-1/2 flex flex-col items-center gap-2" style={{ bottom: '1.25rem', transform: 'translateX(-50%)', color: 'rgba(245,240,230,0.3)', zIndex: 10 }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '1.75rem', background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
      </div>
    </section>
  );
}