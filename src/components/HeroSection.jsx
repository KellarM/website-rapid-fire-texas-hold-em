export default function HeroSection() {
  return (
    <section id="hero" className="felt-table relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Felt vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(201,168,76,0.10) 0%, transparent 60%)', zIndex: 1 }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A2419 0%, transparent 22%, transparent 78%, #0A2419 100%)', zIndex: 2 }} />
      <div className="absolute inset-0 suit-bg" style={{ zIndex: 1, opacity: 0.6 }} />

      {/* Gold line accents */}
      <div className="absolute left-0 right-0" style={{ top: '33%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.30), transparent)', zIndex: 3 }} />
      <div className="absolute left-0 right-0" style={{ bottom: '33%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)', zIndex: 3 }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(201,168,76,0.6)' }} />
          <span className="section-label">XFH Game Studio Presents</span>
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(201,168,76,0.6)' }} />
        </div>

        {/* Game Title */}
        <div className="mb-8">
          <h1 className="font-bebas text-gold text-glow-gold" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '0.08em', lineHeight: 1, margin: 0 }}>
            RAPID FIRE
          </h1>
          <h2 className="font-playfair text-white" style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', letterSpacing: '0.3em', margin: '0.25rem 0 0 0', fontWeight: 700, textTransform: 'uppercase' }}>
            Texas Hold'em
          </h2>
        </div>

        {/* Tagline */}
        <p style={{ color: 'rgba(245,240,230,0.85)', fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          A proprietary Electronic Gaming Machine engineered for the modern casino floor — and Stadium Gaming environments.
        </p>
        <p className="mx-auto" style={{ color: 'rgba(245,240,230,0.6)', fontSize: '0.9rem', fontWeight: 300, letterSpacing: '0.03em', marginBottom: '2.5rem', maxWidth: '580px' }}>
          Built on the <span className="text-gold font-medium">Cascade Crescendo</span> betting logic with a Snowball Cap — delivering high-action engagement with precision operator control. Single terminal or full stadium multi-player configuration.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <a href="#overview" className="rounded-md px-8 py-3.5 border border-gold text-gold text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300">
            Explore the Game
          </a>
          <a href="#contact" className="rounded-md glow-gold px-8 py-3.5 bg-gold text-xfh-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300">
            Request a Demo
          </a>
        </div>

        {/* Stats — chip-style */}
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {[
            { stat: '2M+', label: 'Certified Wins / Position' },
            { stat: 'Up to 80', label: 'Rounds / Hour' },
            { stat: '78/78', label: 'Bet Positions Validated' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-5 py-3 rounded-full" style={{ background: 'rgba(10,36,25,0.6)', border: '1px solid rgba(201,168,76,0.35)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bebas text-xfh-black text-sm" style={{ background: 'linear-gradient(135deg, #C9A84C, #F5D78E)' }}>
                {item.stat}
              </div>
              <span className="text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,240,230,0.7)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 flex flex-col items-center gap-2" style={{ bottom: '2rem', transform: 'translateX(-50%)', color: 'rgba(245,240,230,0.3)', zIndex: 10 }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
      </div>
    </section>
  );
}