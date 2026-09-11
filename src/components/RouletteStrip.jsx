// Authentic European roulette wheel order (0 green, red/black per standard layout)
const ORDER = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
const RED = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);

export default function RouletteStrip() {
  return (
    <div
      className="w-full flex flex-wrap justify-center gap-[3px] py-2.5"
      style={{
        background: 'linear-gradient(180deg, #08200F, #0A2419)',
        borderTop: '1px solid rgba(201,168,76,0.22)',
        borderBottom: '1px solid rgba(201,168,76,0.22)',
      }}
    >
      {ORDER.map((n) => {
        const bg = n === 0 ? '#176B4A' : RED.has(n) ? '#b91c1c' : '#161616';
        return (
          <span
            key={n}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '3px',
              fontSize: '0.6rem',
              fontWeight: 700,
              background: bg,
              color: '#fff',
              border: '1px solid rgba(201,168,76,0.28)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1,
            }}
          >
            {n}
          </span>
        );
      })}
    </div>
  );
}