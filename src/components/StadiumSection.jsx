import { useScrollReveal } from '../hooks/useScrollReveal';

const pillars = [
  {
    icon: '🏟️',
    title: 'Multi-Game Stadium Compatible',
    desc: 'One installation. Multiple games. Rapid Fire runs on the same shared terminal infrastructure as Roulette and Blackjack — no separate cabinet required.',
  },
  {
    icon: '👥',
    title: 'Up to 44 Simultaneous Players',
    desc: 'A single Rapid Fire instance serves a full stadium row. Every player terminal is synchronized to the same live game round in real time.',
  },
  {
    icon: '💰',
    title: 'Higher GGR Per Square Foot',
    desc: 'Stadium format concentrates player action into a compact floor footprint — significantly outperforming individual ETG cabinets on revenue per square metre.',
  },
  {
    icon: '⚡',
    title: 'Zero Reconfiguration Required',
    desc: 'The identical EGM codebase powers both the standalone cabinet and a full stadium display. Same math, same RTP, same compliance package — no rebuild.',
  },
];

const stats = [
  { num: '20',   label: 'Players',        sub: 'Per installation' },
  { num: '1',    label: 'License',        sub: 'Covers all seats' },
  { num: '80',   label: 'Rounds / Hour',  sub: 'At full stadium capacity' },
];

export default function StadiumSection() {
  const ref = useScrollReveal();
  return (
    <section id="stadium" style={{ backgroundColor: '#0A0A0A' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Stadium Gaming</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Rapid Fire on the <span className="text-gold">Stadium Floor</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            The same EGM engine that powers a standalone cabinet scales instantly to a full Casino Stadium — no new development, no separate license, no compromise on speed or math integrity.
          </p>
        </div>

        {/* Stadium Image — full width, edge-to-edge */}
        <div className="card-dark rounded-sm overflow-hidden mb-5 border border-gold/20">
          <img
            src="https://base44.app/api/apps/69fcabf54838c8e18515a406/files/mp/public/69fcabf54838c8e18515a406/d6cf89872_0f8462519_ChatGPTImageMay29202611_28_23AM.png"
            alt="Casino Stadium — Rapid Fire Texas Hold'em alongside Roulette and Blackjack"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="px-5 py-3 border-t border-gold/10 flex items-center justify-between">
            <p className="text-white/30 text-xs italic">
              Rapid Fire Texas Hold'em — Casino Stadium configuration alongside Roulette and Blackjack.
            </p>
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Live Configuration</span>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map(s => (
            <div key={s.label} className="card-dark rounded-sm p-5 text-center border-t-2 border-t-gold">
              <div className="font-bebas text-4xl md:text-5xl text-gold mb-1">{s.num}</div>
              <div className="text-white font-semibold text-sm">{s.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Two-column — pillars left, operator callout right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Operator Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(p => (
              <div key={p.title} className="card-dark rounded-sm p-5 border border-gold/10 hover:border-gold/40 transition-all duration-300 group">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-gold transition-colors">{p.title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Operator Callout */}
          <div className="card-dark rounded-sm p-8 border border-gold/20 flex flex-col justify-between">
            <div>
              <span className="section-label">Operator Advantage</span>
              <h3 className="font-playfair text-3xl text-white font-bold mt-3 mb-4">
                One game.<br />
                <span className="text-gold">Two deployment formats.</span><br />
                One license.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Whether you're adding a single EGM cabinet to an existing floor or building a dedicated Casino Stadium zone, Rapid Fire Texas Hold'em slots in without hardware customization or re-certification. The math model is identical. The compliance package is the same. The operator experience is seamless.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'No dedicated hardware for stadium format',
                  'Synchronized round timing across all terminals',
                  'Single operator dashboard for all seats',
                  'Compatible with existing stadium terminal infrastructure',
                  'iGaming version adds a third deployment channel — same license',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                border: '1px solid #C9A84C',
                color: '#C9A84C',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.target.style.backgroundColor = '#C9A84C'; e.target.style.color = '#000'; }}
              onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#C9A84C'; }}
            >
              Discuss Stadium Licensing
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
