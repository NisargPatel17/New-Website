import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import VALogo from './VALogo';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'WORK', href: '/projects' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHero = location.pathname === '/' || location.pathname.startsWith('/projects/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Determine dynamic styling based on scroll position and route
  const headerBg = scrolled
    ? 'bg-ivory/95 border-b border-stone/50 backdrop-blur-md shadow-sm'
    : isDarkHero
    ? 'bg-transparent border-b border-white/10'
    : 'bg-ivory/80 border-b border-stone/30 backdrop-blur-sm';

  const textColor = scrolled
    ? 'text-charcoal'
    : isDarkHero
    ? 'text-ivory'
    : 'text-charcoal';

  const logoColor = scrolled
    ? '#171514'
    : isDarkHero
    ? '#F2EEE8'
    : '#171514';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
        style={{ height: scrolled ? '68px' : '84px' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* Logo + Brand name */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group"
            aria-label="Visionary Architects — Home"
          >
            <VALogo size={scrolled ? 28 : 34} color={logoColor} className="transition-all duration-500" />
            <div className="flex flex-col">
              <span
                className={`text-[11px] font-sans font-medium tracking-[0.22em] uppercase transition-all duration-500 ${textColor}`}
              >
                Visionary Architects
              </span>
              <span className={`text-[8px] font-sans tracking-[0.15em] opacity-60 uppercase transition-all duration-500 ${textColor}`}>
                Ahmedabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[10px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 relative py-1.5 ${textColor} ${
                    isActive ? 'opacity-100 font-semibold' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        scrolled || !isDarkHero ? 'bg-espresso' : 'bg-ivory'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-5">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-2.5 text-[10px] font-sans font-medium tracking-[0.2em] uppercase border transition-all duration-300 px-5 py-2.5 ${
                scrolled || !isDarkHero
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory'
                  : 'border-ivory/60 text-ivory hover:bg-ivory/15'
              }`}
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className={`lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 p-1 ${textColor}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-current transition-all duration-300" />
              <span className="block w-4 h-0.5 bg-current transition-all duration-300 self-end" />
              <span className="block w-6 h-0.5 bg-current transition-all duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-charcoal text-ivory flex flex-col transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20 border-b border-white/10">
          <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Home">
            <VALogo size={32} color="#F2EEE8" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-ivory/60 hover:text-ivory text-2xl w-10 h-10 flex items-center justify-center border border-white/10 rounded-full"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-3">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl md:text-5xl text-ivory hover:text-warm-gray transition-colors duration-300 py-3 border-b border-white/10 flex items-center justify-between"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              <span>{link.label}</span>
              <span className="text-xs font-sans text-ivory/40 tracking-widest">0{i + 1}</span>
            </Link>
          ))}
        </div>

        <div className="px-8 md:px-16 pb-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-amber-500/90 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase mb-1">
              Founder & CEO
            </p>
            <p className="font-serif text-lg text-ivory">Pathik Chandarana</p>
            <p className="text-ivory/50 text-xs font-sans mt-0.5">
              1209 Satyamev Eminence, Science City, Ahmedabad
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 text-[10px] font-sans font-medium tracking-[0.2em] uppercase bg-ivory text-charcoal px-6 py-3.5 hover:bg-white transition-colors"
          >
            Enquire Now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
