export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-xfh-black">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/3be455822_SpeedofPoker.png"
          alt="Rapid Fire"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-xfh-black/60 via-transparent to-xfh-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-xfh-black/80 via-transparent to-xfh-black/80" />
      </div>

      {/* Gold particle line accents */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold/60" />
          <span className="section-label">XFH Game Studio Presents</span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        {/* Main Logo */}
        <div className="mb-6">
          <img
            src="https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/1a038e55c_ChatGPTImageMay8202612_48_32PM.png"
            alt="Rapid Fire Texas Hold'em"
            className="mx-auto max-w-2xl w-full"
          />
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-lg md:text-xl font-light tracking-wider mb-3">
          A proprietary Electronic Table Game engineered for the modern casino floor.
        </p>
        <p className="text-white/60 text-sm md:text-base font-light tracking-wide mb-10 max-w-2xl mx-auto">
          Built on the <span className="text-gold font-medium">Cascade Crescendo</span> betting logic — delivering high-action engagement with precision operator control.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#overview"
            className="px-8 py-3.5 border border-gold text-gold font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300"
          >
            Explore the Game
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-gold text-xfh-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Request Demo
          </a>
        </div>

        {/* Stat Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {[
            { icon: '🔥', stat: '9M+', label: 'Calibration Cycles' },
            { icon: '⚡', stat: '80–90', label: 'Rounds / Hour' },
            { icon: '🛡️', stat: '70/70', label: 'Gaming-Standard Math' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/60">
              <span className="text-base">{item.icon}</span>
              <span className="text-gold font-semibold text-sm">{item.stat}</span>
              <span className="text-xs tracking-wider uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}