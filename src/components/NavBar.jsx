import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'The Cascade', href: '#cascade' },
  { label: 'Technology', href: '#technology' },
  { label: 'Competitive', href: '#competitive' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-xfh-black/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-xfh-black">
            <span className="font-bebas text-gold text-sm tracking-wider">XFH</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-bebas text-white text-lg tracking-widest leading-none">X-FACTOR HYBRID</div>
            <div className="text-gold text-[9px] tracking-[0.3em] uppercase">Game Studio</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2 border border-gold text-gold text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-xfh-black transition-all duration-300"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-gold transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gold transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gold transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-xfh-black/98 border-t border-gold/20 px-6 py-4 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[12px] font-semibold tracking-[0.2em] uppercase text-white/70 hover:text-gold py-2"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block mt-4 px-5 py-2 border border-gold text-gold text-[11px] font-semibold tracking-[0.2em] uppercase text-center">
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}