import { useState, useEffect } from 'react';
import { trackEvent } from '../hooks/useAnalyticsTracker';
import AnalyticsDashboard from './AnalyticsDashboard';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'The Cascade', href: '#cascade' },
  { label: 'Technology', href: '#technology' },
  { label: 'Competitive', href: '#competitive' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnalyticsBtn, setShowAnalyticsBtn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Secret key combo: Ctrl + Alt + J + L
  useEffect(() => {
    const keys = new Set();
    const onDown = (e) => {
      keys.add(e.key.toLowerCase());
      if (e.ctrlKey && e.altKey && keys.has('j') && keys.has('l')) {
        e.preventDefault();
        setShowAnalyticsBtn(prev => !prev);
      }
    };
    const onUp = (e) => keys.delete(e.key.toLowerCase());
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.5s', backgroundColor: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + hidden analytics button */}
          <div className="flex flex-col">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-xfh-black">
                <span className="font-bebas text-gold text-sm tracking-wider">XFH</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bebas text-white text-lg tracking-widest leading-none">X-FACTOR HYBRID</div>
                <div className="text-gold text-[9px] tracking-[0.3em] uppercase">Game Studio</div>
              </div>
            </a>
            {showAnalyticsBtn && (
              <button
                onClick={() => setShowDashboard(true)}
                style={{
                  marginTop: '6px',
                  marginLeft: '0',
                  backgroundColor: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.5)',
                  color: '#C9A84C',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  padding: '4px 10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => { e.target.style.backgroundColor = 'rgba(201,168,76,0.25)'; }}
                onMouseLeave={e => { e.target.style.backgroundColor = 'rgba(201,168,76,0.1)'; }}
              >
                Analytics
              </button>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => trackEvent('nav_link_clicked', { href: link.href, label: link.label, section: link.href.replace('#','') })}
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
              onClick={() => trackEvent('cta_clicked', { location: 'navbar' })}
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
          <div style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid rgba(201,168,76,0.2)' }} className="lg:hidden px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => { setMenuOpen(false); trackEvent('nav_link_clicked', { href: link.href, label: link.label }); }}
                className="block text-[12px] font-semibold tracking-[0.2em] uppercase text-white/70 hover:text-gold py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => { setMenuOpen(false); trackEvent('cta_clicked', { location: 'mobile_menu' }); }} className="block mt-4 px-5 py-2 border border-gold text-gold text-[11px] font-semibold tracking-[0.2em] uppercase text-center">
              Request Demo
            </a>
          </div>
        )}
      </nav>

      {showDashboard && <AnalyticsDashboard onClose={() => setShowDashboard(false)} />}
    </>
  );
}