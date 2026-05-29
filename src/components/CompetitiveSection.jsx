import { useScrollReveal } from '../hooks/useScrollReveal';

const rows = [
  { label: 'Game Format', rf: 'EGM — Hybrid', ib: 'ETG Simulation', lw: 'ETG / Dealer-Assist', lp: 'Live Table' },
  { label: 'Rounds Per Hour', rf: '~80 RPH', ib: '~45–55 RPH', lw: '~50–60 RPH', lp: '~28 RPH' },
  { label: 'Bet Markets / Round', rf: 'Up to 4', ib: '1', lw: '1–2', lp: '1–2' },
  { label: 'Dealer Required', rf: false, ib: false, lw: 'Optional', lp: true },
  { label: 'Poker-Based', rf: true, ib: true, lw: 'Limited', lp: true },
  { label: 'iGaming-Ready', rf: 'HTML5 / RGS', ib: false, lw: 'Partial', lp: false },
  { label: 'Skill Required', rf: false, ib: 'Basic Strategy', lw: 'Basic Strategy', lp: 'High' },
];

function Cell({ val, isRf }) {
  if (val === true) return <span className={`text-green-400 font-bold ${isRf ? 'text-gold' : ''}`}>✓</span>;
  if (val === false) return <span className="text-red-400/70">✗</span>;
  return <span className={`text-sm ${isRf ? 'text-gold font-semibold' : 'text-white/50'}`}>{val}</span>;
}

export default function CompetitiveSection() {
  const ref = useScrollReveal();

  return (
    <section id="competitive" style={{ backgroundColor: '#0D1420' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Competitive Landscape</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            A Different <span className="text-gold">Category</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Rapid Fire doesn't compete with Interblock or Light & Wonder. It fills the gap they left.
          </p>
        </div>

        <div className="card-dark rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-4 px-5 text-white/40 text-xs tracking-wider uppercase font-normal w-40">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-gold font-bebas text-lg tracking-wider">Rapid Fire</div>
                    <div className="text-gold/60 text-[10px] tracking-wider">TEXAS HOLD'EM</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-white/70 font-semibold text-sm">Interblock</div>
                    <div className="text-white/30 text-[10px]">Poker ETC</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-white/70 font-semibold text-sm">Light & Wonder</div>
                    <div className="text-white/30 text-[10px]">Ovation ETG</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-white/70 font-semibold text-sm">Live Poker</div>
                    <div className="text-white/30 text-[10px]">Table</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={`border-b border-gold/10 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3.5 px-5 text-white/50 text-xs font-medium">{row.label}</td>
                    <td className="py-3.5 px-4 text-center bg-gold/5 border-l border-r border-gold/20">
                      <Cell val={row.rf} isRf={true} />
                    </td>
                    <td className="py-3.5 px-4 text-center"><Cell val={row.ib} /></td>
                    <td className="py-3.5 px-4 text-center"><Cell val={row.lw} /></td>
                    <td className="py-3.5 px-4 text-center"><Cell val={row.lp} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gold/10 text-white/30 text-[10px] leading-relaxed">
            Source: Interblock product guide, Light & Wonder Ovation ETG / 2024 decker, and operator performance reviews.
          </div>
        </div>

        {/* Market Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {[
            { num: '2x–4x', label: 'GGR per seat', sub: 'vs. Blackjack ETG' },
            { num: '80', label: 'Rounds per hour', sub: 'Zero dealer delay' },
            { num: '4', label: 'Revenue markets', sub: 'Per round, one terminal' },
          ].map(item => (
            <div key={item.label} className="card-dark p-6 rounded-sm text-center border-t-2 border-t-gold">
              <div className="font-bebas text-5xl text-gold mb-1">{item.num}</div>
              <div className="text-white font-semibold">{item.label}</div>
              <div className="text-white/40 text-xs mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}