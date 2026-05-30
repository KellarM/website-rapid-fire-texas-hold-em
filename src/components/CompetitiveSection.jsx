import { useScrollReveal } from '../hooks/useScrollReveal';

const rows = [
  { label: 'Game Format',       rf: 'EGM — Hybrid',  ib: 'ETG Simulation',  lw: 'ETG / Dealer-Assist', lp: 'Live Table' },
  { label: 'Rounds Per Hour',   rf: '~80 RPH',        ib: '~45–55 RPH',      lw: '~50–60 RPH',          lp: '~28 RPH' },
  { label: 'Bet Markets / Round', rf: 'Up to 4',      ib: '1',               lw: '1–2',                 lp: '1–2' },
  { label: 'Dealer Required',   rf: false,            ib: false,             lw: 'Optional',             lp: true },
  { label: 'Poker-Based',       rf: true,             ib: true,              lw: 'Limited',              lp: true },
  { label: 'iGaming-Ready',     rf: 'HTML5 / RGS',   ib: false,             lw: 'Partial',              lp: false },
  { label: 'Skill Required',    rf: false,            ib: 'Basic Strategy',  lw: 'Basic Strategy',       lp: 'High' },
];

function Cell({ val, isRf }) {
  if (val === true)  return <span className={`text-green-400 font-bold ${isRf ? 'text-gold' : ''}`}>✓</span>;
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

        <div className="w-full">
          <img
            src="https://media.base44.com/images/public/6a18db090bc2bcd630da3665/f0238ef08_ChatGPTImageMay30202601_00_48AM.png"
            alt="Rapid Fire Texas Hold'em Competitive Comparison"
            className="w-full h-auto rounded-sm"
          />
        </div>

      </div>
    </section>
  );
}