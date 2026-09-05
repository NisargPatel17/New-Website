import { Link } from 'react-router-dom';
import VALogo from '../components/VALogo';

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'WORK', href: '/projects' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'INSIGHTS', href: '/insights' },
  { label: 'CONTACT', href: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/visionaryarchitects_/' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Pinterest', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10 pt-16 pb-8 text-ivory" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" aria-label="Visionary Architects Home">
              <VALogo size={36} color="#F2EEE8" className="mb-5 opacity-80" />
            </Link>
            <p className="font-serif text-ivory text-xl mb-1">Visionary Architects</p>
            <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase">
              Architecture · Interiors · Spaces
            </p>
            <div className="mt-8">
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.18em] uppercase mb-3">
                Studio Address &amp; Contact
              </p>
              <address className="not-italic text-ivory/60 font-sans font-light text-xs leading-relaxed tracking-wide space-y-1">
                <p>1209, Satyamev Eminence</p>
                <p>Science City, Ahmedabad – 380060</p>
                <p>Gujarat, India</p>
                <p className="pt-2 text-amber-400 font-medium">📞 +91 79846 31148</p>
                <p className="text-ivory/90 font-medium">✉️ visionaryarchitects.va@gmail.com</p>
              </address>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-5">Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-ivory/50 text-[10px] font-sans tracking-[0.18em] uppercase hover:text-ivory transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social + CTA */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-5">Follow &amp; Connect</p>
            <ul className="space-y-3 mb-10">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/50 text-[10px] font-sans tracking-[0.18em] uppercase hover:text-ivory transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    {s.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-ivory/30 text-ivory text-[9px] font-sans font-medium tracking-[0.18em] uppercase px-5 py-3 hover:bg-ivory hover:text-charcoal transition-all duration-300 group"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-ivory/30 text-[9px] font-sans tracking-[0.15em]">
            © 2026 Visionary Architects · Founder &amp; CEO Pathik Chandarana. All Rights Reserved.
          </p>
          <p className="text-ivory/30 text-[9px] font-sans tracking-[0.12em]">
            Where Vision Becomes Space.
          </p>
        </div>
      </div>
    </footer>
  );
}
