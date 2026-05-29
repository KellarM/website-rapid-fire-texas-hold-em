export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid rgba(201,168,76,0.15)' }} className="pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-xfh-black">
                <span className="font-bebas text-gold text-sm tracking-wider">XFH</span>
              </div>
              <div>
                <div className="font-bebas text-white text-lg tracking-widest leading-none">X-FACTOR HYBRID</div>
                <div className="text-gold text-[9px] tracking-[0.3em] uppercase">Game Studio</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Innovative Electronic Table Game solutions engineered for the modern casino floor. Built on proprietary math, designed for regulated environments.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <div className="section-label mb-5">Product</div>
            <ul className="space-y-3">
              {[
                { label: 'Game Overview', href: '#overview' },
                { label: 'Cascade Crescendo', href: '#cascade' },
                { label: 'Technical Specs', href: '#technology' },
                { label: 'Competitive Analysis', href: '#competitive' },
                { label: 'Gallery', href: '#gallery' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 text-sm hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Flagship Title */}
          <div>
            <div className="section-label mb-5">Flagship Title</div>
            <div className="font-bebas text-white text-xl tracking-wider mb-2">RAPID FIRE TEXAS HOLD'EM</div>
            <p className="text-white/40 text-xs leading-relaxed mb-4">
              Multi-player ETG with Cascade Crescendo betting logic, RTP 95–98%, 80–90 rounds/hour. Validated via 9M+ Monte Carlo cycles.
            </p>
            <a
              href="#contact"
              className="inline-block px-5 py-2 border border-gold text-gold text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300"
            >
              Request Demo
            </a>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/30 text-xs">
            © 2026 XFH Game Studio. All rights reserved. Rapid Fire Texas Hold'em and Cascade Crescendo are proprietary systems.
          </div>
          <div className="text-white/20 text-xs">
            Designed for regulated gaming environments. Edmonton, Alberta, Canada.
          </div>
        </div>
      </div>
    </footer>
  );
}