import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: '👁️',
    title: 'Watch & Play Mechanics',
    desc: "Immediately identifiable to any Texas Hold'em player. Classic best 5-card hand wins in a player-vs-house format. A new player grasps winning conditions after a single observed round.",
  },
  {
    icon: '📊',
    title: 'Mathematical Rigor',
    desc: 'Every one of 78 bet positions is certified to 2,000,000 confirmed wins — requiring up to 44 million rounds per position for rare hand ranks. Monte Carlo validation ensures repeatable, auditable performance.',
  },
  {
    icon: '🔺',
    title: 'Cascade Crescendo Logic',
    desc: 'A multi-phase tiered unlocking process ties the largest betting opportunities to mandatory Rank commitment — rewarding active participation and building a tower of action each round.',
  },
  {
    icon: '📈',
    title: 'Real-Time Visual Feedback',
    desc: 'Winning positions are highlighted dynamically as community cards are revealed. Winning hands are celebrated and losing bets clearly defined, anchoring player attention throughout.',
  },
  {
    icon: '⚙️',
    title: 'Adjustable Math Engine',
    desc: 'Flexible RTP range of 95% to 98%. All odds and payout structures are adjustable to meet specific house requirements. Hands-per-hour algorithm tunable to up to 80 rounds/hour.',
  },
  {
    icon: '🏟️',
    title: 'EGM + Stadium Gaming Ready',
    desc: 'Operates as a standalone EGM cabinet or as a full Stadium Gaming configuration — large shared display with multiple synchronized player terminals creating the community atmosphere of a live poker room at slot-machine speed.',
  },
];

export default function OverviewSection() {
  const ref = useScrollReveal();
  return (
    <section id="overview" style={{ backgroundColor: '#0A0A0A' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Product Overview</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Engineered for the <span className="text-gold-gradient">Modern Casino Floor</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Poker intelligence. Slot velocity. Casino simplicity. EGM and Stadium Gaming ready.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-dark p-6 rounded-sm hover:border-gold/50 transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold transition-colors">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Game Interface */}
        <div className="card-dark rounded-sm overflow-hidden">
          <div className="p-6 border-b border-gold/10">
            <span className="section-label">Game Interface</span>
            <h3 className="text-white text-2xl font-playfair font-bold mt-1">Rapid Fire Texas Hold'em Terminal Interface</h3>
            <p className="text-white/50 text-sm mt-1">10-seat layout with live odds, community cards, and four bet zones — unified on a single display. Scalable to full stadium configuration.</p>
          </div>
          <div style={{ backgroundColor: '#0A0A0A', display: 'flex', justifyContent: 'center', padding: '1.5rem' }}>
            <img
              src="https://media.base44.com/images/public/6a18db090bc2bcd630da3665/787432b72_image.png"
              alt="Game Interface"
              style={{ maxWidth: '100%', width: 'auto', height: 'auto', display: 'block', imageRendering: 'crisp-edges' }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-gold/10">
            {['No Dealer Required', 'No Skill Required', 'EGM & Stadium Ready', 'iGaming-Ready HTML5', 'RGS Compatible'].map((item, i) => (
              <div key={item} className={`px-4 py-3 text-center ${i < 4 ? 'border-r border-gold/10' : ''}`}>
                <div className="text-gold text-lg mb-0.5">✓</div>
                <div className="text-white/60 text-xs leading-tight">{item}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
