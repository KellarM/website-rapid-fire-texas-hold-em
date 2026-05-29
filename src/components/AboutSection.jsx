import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-xfh-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">About XFH Game Studio</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Built by a game architect.<br />
            <span className="text-gold">Designed for the industry.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Studio Logo */}
          <div className="card-dark rounded-sm overflow-hidden flex items-center justify-center p-10">
            <img
              src="https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/0aeb7043a_RapidFireBlueLogo.png"
              alt="XFH Game Studio"
              className="max-w-xs w-full"
            />
          </div>

          {/* Bio */}
          <div>
            <div className="mb-1">
              <span className="section-label">Founder & Chief Architect</span>
            </div>
            <h3 className="font-playfair text-3xl text-white font-bold mb-1 mt-2">Michael Kellar</h3>
            <div className="text-gold text-sm tracking-wider mb-5">XFH Game Studio — Alberta, Canada</div>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Creator of Rapid Fire Texas Hold'em — a proprietary hybrid EGM engine combining poker mechanics with slot machine pacing and roulette-style betting architecture. Over 9 million calibration cycles validated through Monte Carlo simulation.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { label: 'AGLC Due Diligence', status: 'Active', color: 'text-green-400' },
                { label: 'GL/BMM Certification', status: 'In Progress', color: 'text-gold' },
                { label: 'Full Math & RTP Documentation', status: 'Available', color: 'text-green-400' },
                { label: 'Independent Math Audit', status: 'Compatible', color: 'text-green-400' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-gold/10">
                  <span className="text-white/60 text-sm">{item.label}</span>
                  <span className={`text-xs font-semibold tracking-wider ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gold text-xfh-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}