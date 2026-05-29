import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryItems = [
  {
    url: 'https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/3be455822_SpeedofPoker.png',
    label: 'Brand Identity',
    title: 'The New Speed of Poker',
    desc: 'High-energy brand visual — the sphere of speed',
    span: 'col-span-1 md:col-span-2',
  },
  {
    url: 'https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/1a038e55c_ChatGPTImageMay8202612_48_32PM.png',
    label: 'Game Logo',
    title: 'Rapid Fire Texas Hold\'em',
    desc: 'Official game logo — gold & navy prestige edition',
    span: 'col-span-1',
  },
  {
    url: 'https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/2ebf10514_TheSnowball.png',
    label: 'Proprietary System',
    title: 'The Cascade — Revenue Redefined',
    desc: 'Engineered commitment: the Cascade Crescendo betting flow',
    span: 'col-span-1 md:col-span-2',
  },
  {
    url: 'https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/7d0407f48_image.png',
    label: 'Game Interface',
    title: 'Texas 10 Terminal',
    desc: 'Live 10-seat multi-player interface with real-time odds',
    span: 'col-span-1',
  },
  {
    url: 'https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/0aeb7043a_RapidFireBlueLogo.png',
    label: 'Studio Brand',
    title: 'XFH Game Studio',
    desc: 'X-Factor Hybrid — Edmonton, Alberta, Canada',
    span: 'col-span-1',
  },
  {
    url: 'https://media.base44.com/images/public/user_69c5fbdb68e165c3f394466b/b3407ba89_image.png',
    label: 'ETG Terminal',
    title: 'Casino Floor Ready',
    desc: 'Physical ETG cabinet render — designed for the casino floor',
    span: 'col-span-1 md:col-span-2',
  },
];

export default function GallerySection() {
  const ref = useScrollReveal();

  return (
    <section id="gallery" className="py-24 bg-xfh-black">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Visual Assets</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Game <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
            From the casino floor to the betting table — a complete ETG experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`${item.span} group relative overflow-hidden rounded-sm card-dark cursor-pointer`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <div className="text-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-base mb-1">{item.title}</div>
                  <div className="text-white/60 text-xs">{item.desc}</div>
                </div>
              </div>
              <div className="p-3 border-t border-gold/10">
                <div className="text-gold/60 text-[10px] tracking-widest uppercase">{item.label}</div>
                <div className="text-white/70 text-sm font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}