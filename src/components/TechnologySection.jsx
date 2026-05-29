import { useScrollReveal } from '../hooks/useScrollReveal';

const bigStats = [
  { num: '2x–4x', label: 'Gross Gaming Revenue', sub: 'vs. Blackjack ETG' },
  { num: '80 RPH', label: 'Rounds Per Hour', sub: 'Zero dealer delay' },
  { num: '95–98%', label: 'RTP Range', sub: 'Operator adjustable' },
  { num: '4', label: 'Markets Per Round', sub: 'One terminal' },
];

const specCards = [
  {
    icon: '⚙️',
    title: 'Math Engine',
    items: ['Proprietary Cascade Crescendo logic', 'Monte Carlo statistical validation', '9 million calibration cycle certification', 'Fully deterministic, reproducible outcomes'],
  },
  {
    icon: '📋',
    title: 'Payout Structure',
    items: ['Hand Rank Board: 7 tier payout table', 'Color Board: 6 red/black side positions', 'River Low/High: Dual-position bet'],
  },
  {
    icon: '🎯',
    title: 'RTP & House Edge',
    items: ['Configurable RTP: 95% to 98%', 'All payout odds operator-adjustable', 'House edge tunable per jurisdiction', 'Independent math auditing compatible'],
  },
  {
    icon: '⏱️',
    title: 'Performance',
    items: ['80 to 90 rounds per hour baseline', 'Hands-per-hour algorithm adjustable', 'Phase-based round progression', 'Community card deal synchronization'],
  },
  {
    icon: '🎮',
    title: 'Player Experience',
    items: ['Real-time winning hand highlighting', 'Live odds display per player position', 'Previous hands history log', 'Casino P&L monitoring dashboard'],
  },
  {
    icon: '🔒',
    title: 'Regulatory Ready',
    items: ['Gaming-standard math certification', 'Designed for regulated casino environments', 'ETG terminal suite compatible', 'HTML5 / RGS platform ready'],
  },
];

const certTiers = [
  { name: 'Quick Check', rounds: '100,000', rtp: '96.21%', result: 'PASS', color: 'border-green-500/40' },
  { name: 'Pre-Submission', rounds: '500,000', rtp: '96.33%', result: 'PASS', color: 'border-yellow-500/40' },
  { name: 'GLI-11 / BMM', rounds: '1,000,000', rtp: '96.39%', result: 'PASS', color: 'border-blue-500/40' },
  { name: 'eCOGRA Full', rounds: '2,000,000', rtp: '96.46%', result: 'PASS', color: 'border-gold/40' },
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
            {/* Deck Architecture */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bebas text-lg tracking-widest">1.</span>
                <h4 className="text-gold font-semibold text-sm tracking-wide uppercase">Deck Architecture</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Standard Deck Integrity:</span> Every round utilizes a full 52-card standard deck — no jokers, no wild cards.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">20 Fixed-Hand Cards:</span> 10 pre-determined player hands (2 cards each) permanently carded for consistent player choices.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">32-Card Community Stock:</span> The remaining 32 cards form the high-velocity community pool, reshuffled every round for maximum mathematical volatility.</span></li>
              </ul>
            </div>
            {/* Multi-Hand Evaluation */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bebas text-lg tracking-widest">2.</span>
                <h4 className="text-gold font-semibold text-sm tracking-wide uppercase">Simultaneous Multi-Hand Evaluation</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">One-to-Many Processing:</span> The engine evaluates all 10 hands against the same community board in a single unified run.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Shared-Win Logic:</span> Proprietary handling for tied hands (Splits) maintains house edge while rewarding multiple players.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Uncorrelated Liability:</span> Independent bet resolution across 78+ possible positions in every game cycle.</span></li>
              </ul>
            </div>
            {/* Performance & Stability */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bebas text-lg tracking-widest">3.</span>
                <h4 className="text-gold font-semibold text-sm tracking-wide uppercase">Performance & Stability</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">80 Rounds Per Hour:</span> Optimized deal sequence removes all human/dealer delay.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Data-Verified Consistency:</span> Blended RTP of 96.46% based on internal simulations of 2,000,000 rounds per position.</span></li>
                <li className="flex items-start gap-2 text-sm text-white/60"><span className="text-gold mt-0.5 flex-shrink-0">•</span><span><span className="text-white font-medium">Platform-Agnostic Build:</span> Built in React/Vite for seamless integration into EGM cabinets or iGaming RGS environments.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {specCards.map(card => (
            <div key={card.title} className="card-dark p-5 rounded-sm group hover:border-gold/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{card.icon}</span>
                <h4 className="text-white font-semibold">{card.title}</h4>
              </div>
              <ul className="space-y-1.5">
                {card.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certification Table */}
        <div className="card-dark rounded-sm overflow-hidden">
          <div className="p-6 border-b border-gold/10">
            <span className="section-label">Simulation Data & Regulatory Compliance</span>
            <h3 className="text-white text-xl font-playfair font-bold mt-1">Data-Verified Engine Stability Across Four Simulation Tiers</h3>
            <p className="text-white/40 text-sm mt-1">All certifications completed through in-house testing modelled off real casino standards and regulations (GLI-11 / BMM Technical / eCOGRA).</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gold/10">
            {certTiers.map(tier => (
              <div key={tier.name} className={`p-5 border-t-2 ${tier.color}`}>
                <div className="text-white/60 text-xs tracking-wider uppercase mb-3">{tier.name}</div>
                <div className="font-bebas text-3xl text-gold mb-1">{tier.rtp}</div>
                <div className="text-white/50 text-xs mb-2">Blended RTP</div>
                <div className="text-white/40 text-xs">{tier.rounds} Rounds</div>
                <div className="mt-3 inline-block px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-bold tracking-wider">
                  78/78 {tier.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}