import { useScrollReveal } from '../hooks/useScrollReveal';

export default function MarketSection() {
  const ref = useScrollReveal();

  return (
    <section id="market" className="py-24 bg-xfh-black">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Market Opportunity</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Two Converging <span className="text-gold">Growth Markets</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Positioned to compete in both markets simultaneously — land-based EGM placement AND iGaming/RGS platform licensing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* ETG Market */}
          <div className="card-dark rounded-sm p-7 border-t-2 border-t-gold">
            <div className="section-label mb-4">ETG Market</div>
            <div className="flex items-end gap-6 mb-6">
              <div>
                <div className="text-white/40 text-xs mb-1">2024 Valuation</div>
                <div className="font-bebas text-4xl text-white">$1.97B</div>
              </div>
              <div className="text-gold">→</div>
              <div>
                <div className="text-white/40 text-xs mb-1">Projected 2032</div>
                <div className="font-bebas text-4xl text-gold">$3.42B</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gold/10 border border-gold/20 rounded-sm">
              <div className="font-bebas text-3xl text-gold">9.1%</div>
              <div>
                <div className="text-white text-sm font-semibold">Compound Annual Growth Rate</div>
                <div className="text-white/40 text-xs">2025–2030 · Source: Verified Market Research / Feb 2024</div>
              </div>
            </div>
          </div>

          {/* iGaming Market */}
          <div className="card-dark rounded-sm p-7 border-t-2 border-t-gold">
            <div className="section-label mb-4">iGaming Market</div>
            <div className="flex items-end gap-6 mb-6">
              <div>
                <div className="text-white/40 text-xs mb-1">2024 Revenue</div>
                <div className="font-bebas text-4xl text-white">$78.7B</div>
              </div>
              <div className="text-gold">→</div>
              <div>
                <div className="text-white/40 text-xs mb-1">Projected 2030</div>
                <div className="font-bebas text-4xl text-gold">$153.6B</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gold/10 border border-gold/20 rounded-sm">
              <div className="font-bebas text-3xl text-gold">11.9%</div>
              <div>
                <div className="text-white text-sm font-semibold">Compound Annual Growth Rate</div>
                <div className="text-white/40 text-xs">2025–2030 · Source: Grand View Research / Dec 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* iGaming Ready */}
        <div className="card-dark rounded-sm p-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="section-label">iGaming Growth Vector</span>
              <h3 className="font-playfair text-3xl text-white font-bold mt-2 mb-3">
                Same engine. Zero extra development cost. <span className="text-gold">$153B market.</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                The EGM codebase is already iGaming-ready. This is not a future feature — it exists today. One license covers both land-based and online deployment.
              </p>
              <a href="#contact" className="inline-block px-6 py-3 border border-gold text-gold text-sm font-semibold tracking-[0.15em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300">
                Explore Licensing
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '<>', title: 'HTML5 Architecture', desc: 'Built in React/Vue — runs in any browser, any device.' },
                { icon: '🔌', title: 'RGS Compatible', desc: 'Plug into any Remote Game Server. No custom integration needed.' },
                { icon: '🛡️', title: 'Same Math Model', desc: 'Identical certified engine — same RTP, same compliance package.' },
                { icon: '♾️', title: 'Zero Redevelopment', desc: 'One license covers both land-based and online deployment.' },
              ].map(item => (
                <div key={item.title} className="bg-white/5 border border-gold/10 p-4 rounded-sm">
                  <div className="text-gold text-lg mb-2">{item.icon}</div>
                  <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}