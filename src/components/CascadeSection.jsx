import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Hand Bets',
    badge: null,
    sub: 'THE FOUNDATION',
    desc: 'Players place their base Hand Bets — selecting from the 10 fixed hand positions on the board. This initial commitment is the gateway to the full Cascade system.',
  },
  {
    num: '02',
    title: 'Rank Bet',
    badge: 'UNLOCKED',
    sub: 'UNLOCKS THE UPPER TIERS',
    desc: 'Committing to a Rank Bet unlocks both the Color Board and the River side bets. This mandatory engagement mechanic ensures players who want the highest-value positions demonstrate active commitment.',
  },
  {
    num: '03',
    title: 'Color Board',
    badge: 'UNLOCKED',
    sub: 'RED VS. BLACK SIDE ACTION',
    desc: 'Unlocked by Rank Bet, the Color Board offers 3, 4, or 5 card Red/Black bets with tiered payouts. Players build their stake tower as community cards are progressively revealed.',
  },
  {
    num: '04',
    title: 'River Bet',
    badge: 'UNLOCKED',
    sub: 'THE CRESCENDO',
    desc: 'The River — Low (2–7) or High (8–A) — is the final and largest unlocked bet. By the fifth card, maximum capital is committed at the peak of player engagement and tension.',
  },
];

const valueProps = [
  {
    label: 'Revenue Model',
    title: 'Engineered Commitment',
    desc: 'The Rank Bet requirement ensures players who want maximum action must first commit — organically increasing average bet size per round.',
  },
  {
    label: 'Player Psychology',
    title: 'Crescendo Effect',
    desc: 'Capital builds round by round. The escalating structure creates anticipation, keeping players mentally invested through every phase of the deal.',
  },
  {
    label: 'Operator Value',
    title: 'Adjustable Performance',
    desc: 'Full control over RTP (95–98%), payout tables, and hands-per-hour rate. Operators can dial in the exact financial profile required.',
  },
];

export default function CascadeSection() {
  const ref = useScrollReveal();

  return (
    <section id="cascade" style={{ backgroundColor: '#0D1420' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Proprietary System</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            The <span className="text-gold">Cascade Crescendo</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light">
            A tiered unlocking system that builds a tower of committed capital as the round progresses — rewarding active participation while maximizing operator revenue potential.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.num} className="card-dark p-5 rounded-sm flex gap-4 group hover:border-gold/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold font-bebas text-sm">{step.num}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white font-semibold">{step.title}</span>
                    {step.badge && (
                      <span className="text-[9px] tracking-widest uppercase px-2 py-0.5 border border-gold/50 text-gold bg-gold/10">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-gold/60 text-[10px] tracking-[0.2em] uppercase mb-2">{step.sub}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Artwork */}
          <div className="flex flex-col gap-5">
            <div className="card-dark rounded-sm overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a18db090bc2bcd630da3665/103cec161_TheSnowball.png"
                alt="The Cascade — Revenue Redefined"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
            {/* Stat row */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { num: '10', label: 'Card Hands', sub: 'Initial Bet' },
                { num: '7', label: 'Hand Ranks', sub: 'Payout Tiers' },
                { num: '6', label: 'Color Board', sub: 'Positions' },
                { num: '2', label: 'River', sub: 'Side Bets' },
              ].map(item => (
                <div key={item.label} className="card-dark p-4 rounded-sm text-center">
                  <div className="font-bebas text-4xl text-gold">{item.num}</div>
                  <div className="text-white text-xs font-semibold">{item.label}</div>
                  <div className="text-white/40 text-[10px]">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {valueProps.map(vp => (
            <div key={vp.title} className="card-dark p-6 rounded-sm border-t-2 border-t-gold">
              <div className="section-label mb-2">{vp.label}</div>
              <h4 className="text-white font-playfair text-xl font-bold mb-2">{vp.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{vp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}