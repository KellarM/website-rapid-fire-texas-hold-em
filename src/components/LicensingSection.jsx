import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LicensingSection() {
  const ref = useScrollReveal();
  return (
    <section id="licensing" style={{ backgroundColor: '#0D1420' }} className="py-24">
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
                'Fully documented math model + RTP package',
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
                'Tier-1 gaming manufacturer or platform partner',
                'Regulatory certification support (GLI / BMM / eCOGRA)',
                'Land-based EGM or Stadium Gaming distribution network',
                'iGaming aggregator or Remote Game Server partnership',
                'Co-development or revenue-share arrangement',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">→</span>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Roadmap — pushed out 1 year from current position */}
        <div className="card-dark rounded-sm p-7">
          <div className="section-label mb-6">Certification & Commercialization Roadmap</div>
          <h3 className="font-playfair text-2xl text-white font-bold mb-2">Clear path. Defined milestones. No ambiguity.</h3>
          <p className="text-white/40 text-sm mb-8">From certified math model to first operator placement — here is the timeline.</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-gold/20" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {[
                {
                  period: 'Q3 2026',
                  title: 'Certification Complete',
                  sub: 'GLI/BMM + eCOGRA full certification. Provisional patent filed.',
                  status: 'progress',
                },
                {
                  period: 'Q4 2026',
                  title: 'Operator Demo Package',
                  sub: 'NDA partner package ready. First operator demonstrations.',
                  status: 'planned',
                },
                {
                  period: 'Q1–Q2 2027',
                  title: 'Partner LOI & Pilot',
                  sub: 'First Letter of Intent signed. 1–3 unit pilot placement.',
                  status: 'planned',
                },
                {
                  period: 'Q4 2027 / 2028',
                  title: 'Commercial Launch & Scale',
                  sub: 'Land-based commercial deployment. iGaming live. Multi-market expansion.',
                  status: 'planned',
                },
              ].map((milestone) => (
                <div key={milestone.period} className="pt-10 text-center relative">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-4 absolute -top-0 left-1/2 -translate-x-1/2 ${
                    milestone.status === 'complete'
                      ? 'bg-gold border-gold text-xfh-black'
                      : milestone.status === 'progress'
                      ? 'bg-gold/20 border-gold text-gold'
                      : 'bg-xfh-black border-gold/30 text-white/30'
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

          <p className="text-white/25 text-xs text-center mt-8 italic">
            Timeline is indicative. GLI/BMM certification typically takes 60–120 days from submission. Milestones subject to regulatory and partner timelines.
          </p>
        </div>

      </div>
    </section>
  );
}
