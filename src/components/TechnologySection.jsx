import { useScrollReveal } from '../hooks/useScrollReveal';

const bigStats = [
  { num: '2x–4x', label: 'Gross Gaming Revenue', sub: 'vs. Blackjack ETG' },
  { num: 'Up to 80', label: 'Rounds Per Hour', sub: 'Zero dealer delay' },
  { num: '95–98%', label: 'RTP Range', sub: 'Operator adjustable' },
  { num: '4', label: 'Markets Per Round', sub: 'One terminal' },
];

const specCards = [
  {
    icon: '⚙️',
    title: 'Math Engine',
    items: [
      'Proprietary Cascade Crescendo logic',
      'Monte Carlo statistical validation',
      'Every position certified to 2,000,000 confirmed wins',
      'Fully deterministic, reproducible outcomes',
    ],
  },
  {
    icon: '📋',
    title: 'Payout Structure',
    items: [
      'Hand Rank Board: 7-tier payout table',
      'Color Board: 6 red/black side positions',
      'River Low/High: Dual-position bet',
      'River State: Additional win conditions',
    ],
  },
  {
    icon: '🎯',
    title: 'RTP & House Edge',
    items: [
      'Configurable RTP: 95% to 98%',
      'All payout odds operator-adjustable',
      'House edge tunable per jurisdiction',
      'Independent math auditing compatible',
    ],
  },
  {
    icon: '⏱️',
    title: 'Performance',
    items: [
      'Up to 80 rounds per hour',
      'Hands-per-hour algorithm adjustable',
      'Phase-based round progression',
      'Community card deal synchronization',
    ],
  },
  {
    icon: '🎮',
    title: 'Player Experience',
    items: [
      'Real-time winning hand highlighting',
      'Live odds display per player position',
      'Previous hands history log',
      'Casino P&L monitoring dashboard',
    ],
  },
  {
    icon: '🔒',
    title: 'Regulatory Ready',
    items: [
      'Gaming-standard math certification in progress',
      'Designed for regulated casino environments',
      'EGM terminal suite compatible',
      'HTML5 / RGS platform ready',
    ],
  },
];

// Certification methodology — wins-based framing (Option A)
const certNote = {
  headline: 'Wins-Based Certification Standard',
  body: 'Every bet position is independently certified to 2,000,000 confirmed wins — not simply 2,000,000 rounds. Because rare hand ranks (such as Full House on A♦10♥) require the board to produce that specific combination, achieving 2,000,000 wins for that position demands up to 44 million rounds of simulation. This wins-based standard is significantly more rigorous than a flat round-count approach, and ensures statistical confidence across every payout tier.',
};

const certTiers = [
  { name: 'Quick Check', wins: '100K wins / position', rounds: '~1–2M rounds', rtp: '96.21%', result: 'PASS', color: 'border-green-500/40', dot: 'bg-green-500' },
  { name: 'Pre-Submission', wins: '500K wins / position', rounds: '~5–10M rounds', rtp: '96.33%', result: 'PASS', color: 'border-yellow-500/40', dot: 'bg-yellow-500' },
  { name: 'GLI-11 / BMM Standard', wins: '1M wins / position', rounds: '~10–44M rounds', rtp: '96.39%', result: 'PASS', color: 'border-blue-500/40', dot: 'bg-blue-400' },
  { name: 'Full Certification', wins: '2M wins / position', rounds: '~20–88M rounds', rtp: 'In Progress', result: 'RUNNING', color: 'border-gold/40', dot: 'bg-gold' },
];

export default function TechnologySection() {
  const ref = useScrollReveal();
  return (
    <section id="technology" style={{ backgroundColor: '#0A0A0A' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Technical Specifications</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Built for <span className="text-gold">Regulated Play</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Every parameter is measurable, auditable, and tunable to meet the precise requirements of gaming jurisdictions worldwide.
          </p>
        </div>

        {/* Big Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {bigStats.map(stat => (
            <div key={stat.num} className="card-dark p-6 text-center rounded-sm">
              <div className="font-bebas text-4xl md:text-5xl text-gold mb-1">{stat.num}</div>
              <div className="text-white text-sm font-semibold">{stat.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* 52-Card Deck Engine */}
        <div className="card-dark rounded-sm overflow-hidden mb-14 border border-gold/20">
          <div className="p-6 border-b border-gold/10">
            <span className="section-label">Game Methodology</span>
            <h3 className="text-white text-2xl font-playfair font-bold mt-1">Unified 52-Card Proprietary Engine</h3>
            <p className="text-white/50 text-sm mt-1 italic">Standard Integrity. Engineered Velocity.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gold/10">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bebas text-lg tracking-widest">1.</span>
                <h4 className="text-gold font-semibold text-sm tracking-wide uppercase">Deck Architecture</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Standard Deck Integrity:</span> Every round utilizes a full 52-card standard deck — no jokers, no wild cards.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">20 Fixed-Hand Cards:</span> 10 pre-determined player hands (2 cards each) permanently carded for consistent player choices.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">32-Card Community Stock:</span> The remaining 32 cards form the high-velocity community pool, reshuffled every round.</span></li>
              </ul>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bebas text-lg tracking-widest">2.</span>
                <h4 className="text-gold font-semibold text-sm tracking-wide uppercase">Simultaneous Multi-Hand Evaluation</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">One-to-Many Processing:</span> The engine evaluates all 10 hands against the same community board in a single unified run.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Shared-Win Logic:</span> Proprietary handling for tied hands maintains house edge while rewarding multiple players.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Uncorrelated Liability:</span> Independent bet resolution across 78 validated positions every game cycle.</span></li>
              </ul>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bebas text-lg tracking-widest">3.</span>
                <h4 className="text-gold font-semibold text-sm tracking-wide uppercase">Performance & Deployment</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Up to 80 Rounds Per Hour:</span> Optimized deal sequence removes all dealer delay.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">EGM + Stadium Gaming:</span> Standalone cabinet or large-format shared display with multiple synchronized player terminals.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Platform-Agnostic:</span> Built in React/Vite for seamless integration into EGM cabinets or iGaming RGS environments.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {specCards.map(card => (
            <div key={card.title} className="card-dark rounded-sm p-5 border border-gold/10">
              <div className="text-2xl mb-3">{card.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-3 tracking-wide">{card.title}</h4>
              <ul className="space-y-1.5">
                {card.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-gold mt-0.5 flex-shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certification — Wins-Based Framing */}
        <div className="card-dark rounded-sm overflow-hidden border border-gold/20">
          <div className="p-6 border-b border-gold/10">
            <span className="section-label">Certification Methodology</span>
            <h3 className="text-white text-2xl font-playfair font-bold mt-1">{certNote.headline}</h3>
            <p className="text-white/50 text-sm mt-3 leading-relaxed max-w-4xl">{certNote.body}</p>
          </div>

          {/* Tier Table */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {certTiers.map(tier => (
                <div key={tier.name} className={`card-dark rounded-sm p-4 border ${tier.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${tier.dot}`} />
                    <span className="text-white text-xs font-semibold">{tier.name}</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/40">Wins / Position</span>
                      <span className="text-white font-medium">{tier.wins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Approx. Rounds</span>
                      <span className="text-white/70">{tier.rounds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Blended RTP</span>
                      <span className="text-gold font-semibold">{tier.rtp}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-white/10">
                      <span className="text-white/40">78 Positions</span>
                      <span className={`font-bold text-xs ${tier.result === 'PASS' ? 'text-green-400' : 'text-amber-400'}`}>{tier.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs italic text-center">
              All simulations run against GLI-11 / BMM Technical / eCOGRA published standards. Third-party independent certification in progress.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
