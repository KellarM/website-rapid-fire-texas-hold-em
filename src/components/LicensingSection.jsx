import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LicensingSection() {
  const ref = useScrollReveal();

  return (
    <section id="licensing" className="py-24 bg-xfh-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">The Licensing Match</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            We license the engine.<br />
            <span className="text-gold">You bring the distribution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* What We Offer */}
          <div className="card-dark rounded-sm p-7 border-t-2 border-t-gold">
            <div className="section-label mb-5">What We Offer</div>
            <ul className="space-y-4">
              {[
                'Exclusive or non-exclusive engine license',
                'Fully documented with model + API catalog',
                'Configurable payout tables per jurisdiction',
                'HTML5 iGaming-ready codebase',
                'Ongoing development & content support',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">→</span>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Seek */}
          <div className="card-dark rounded-sm p-7 border-t-2 border-t-gold/50">
            <div className="section-label mb-5">What We Seek</div>
            <ul className="space-y-4">
              {[
                'Tier 1 operator or platform partner',
                'Regulatory unit support (B2B/B2C)',
                'Live ops or distribution network',
                'iGaming experience / AGS partnerships',
                'Co-development or revenue share deal',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">→</span>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Roadmap */}
        <div className="card-dark rounded-sm p-7">
          <div className="section-label mb-6">Certification & Commercialization Roadmap</div>
          <h3 className="font-playfair text-2xl text-white font-bold mb-2">Clear path. Defined milestones. No ambiguity.</h3>
          <p className="text-white/40 text-sm mb-8">From certified math model to first operator placement — here's the timeline.</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-gold/20" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {[
                { period: 'Q2 2026', title: 'Certification', sub: 'Internal Audit, GLI/BMM, Final Certification', status: 'complete' },
                { period: 'Q3–Q4 2026', title: 'Operator Demo & Pilot', sub: 'First partner placement', status: 'progress' },
                { period: '2027', title: 'Commercial Deployment', sub: 'Land-based + iGaming live', status: 'planned' },
                { period: '2027+', title: 'Scale & Expansion', sub: 'Multi-market rollout', status: 'planned' },
              ].map((milestone) => (
                <div key={milestone.period} className="pt-10 text-center">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-4 absolute -top-0 left-1/2 -translate-x-1/2 ${
                    milestone.status === 'complete' ? 'bg-gold border-gold text-xfh-black' :
                    milestone.status === 'progress' ? 'bg-gold/20 border-gold text-gold' :
                    'bg-xfh-black border-gold/30 text-white/30'
                  }`}>
                    {milestone.status === 'complete' ? '✓' : milestone.status === 'progress' ? '◐' : '○'}
                  </div>
                  <div className="text-gold text-xs font-semibold tracking-wider mb-1 mt-2">{milestone.period}</div>
                  <div className="text-white text-sm font-semibold mb-1">{milestone.title}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{milestone.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}