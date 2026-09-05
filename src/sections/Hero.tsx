import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1787059591197-f3385d3df78d?w=1920&h=1080&fit=crop&auto=format';

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (prefersReducedMotion) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  }, [prefersReducedMotion]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const bgShift = {
    transform: `translate(${mouse.x * -18}px, ${mouse.y * -12}px) scale(1.06)`,
    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  const textShift = {
    transform: `translate(${mouse.x * 8}px, ${mouse.y * 6}px)`,
    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-20 md:pt-36 lg:pt-40 overflow-hidden bg-charcoal flex flex-col justify-center"
      aria-label="Hero — Where Vision Becomes Space"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Contemporary stone architecture"
          className="w-full h-full object-cover opacity-25 grayscale"
          style={bgShift}
          loading="eager"
        />
      </div>

      {/* Architectural grid + pavilion wireframe */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Base grid — very subtle */}
        <g opacity="0.06" stroke="#F2EEE8" strokeWidth="0.5" fill="none">
          <line x1="0" y1="300" x2="1440" y2="300" />
          <line x1="0" y1="600" x2="1440" y2="600" />
          <line x1="240" y1="0" x2="240" y2="900" />
          <line x1="1200" y1="0" x2="1200" y2="900" />
          <line x1="720" y1="0" x2="720" y2="900" />
        </g>

        {/* Architectural pavilion wireframe — perspective box, right side */}
        <g opacity="0.14" stroke="#F2EEE8" fill="none">
          {/* Front face */}
          <rect x="920" y="200" width="320" height="420" strokeWidth="0.6" />
          {/* Rear face (offset for perspective) */}
          <rect x="980" y="150" width="280" height="380" strokeWidth="0.4" />
          {/* Connecting edges */}
          <line x1="920" y1="200" x2="980" y2="150" strokeWidth="0.4" />
          <line x1="1240" y1="200" x2="1260" y2="150" strokeWidth="0.4" />
          <line x1="920" y1="620" x2="980" y2="530" strokeWidth="0.4" />
          <line x1="1240" y1="620" x2="1260" y2="530" strokeWidth="0.4" />
          {/* Interior horizontal rules — floor levels */}
          <line x1="920" y1="380" x2="1240" y2="380" strokeWidth="0.3" />
          <line x1="920" y1="500" x2="1240" y2="500" strokeWidth="0.3" />
          {/* Window grid on front face */}
          <line x1="1000" y1="200" x2="1000" y2="620" strokeWidth="0.3" />
          <line x1="1080" y1="200" x2="1080" y2="620" strokeWidth="0.3" />
          <line x1="1160" y1="200" x2="1160" y2="620" strokeWidth="0.3" />
        </g>

        {/* Left architectural element — thin tower */}
        <g opacity="0.10" stroke="#F2EEE8" fill="none">
          <rect x="80" y="80" width="90" height="600" strokeWidth="0.5" />
          <rect x="100" y="60" width="50" height="620" strokeWidth="0.3" />
          <line x1="80" y1="200" x2="170" y2="200" strokeWidth="0.3" />
          <line x1="80" y1="350" x2="170" y2="350" strokeWidth="0.3" />
          <line x1="80" y1="500" x2="170" y2="500" strokeWidth="0.3" />
        </g>

        {/* Vanishing point lines from bottom center */}
        <g opacity="0.05" stroke="#F2EEE8" strokeWidth="0.4" fill="none">
          <line x1="720" y1="900" x2="80" y2="80" />
          <line x1="720" y1="900" x2="1360" y2="80" />
          <line x1="720" y1="900" x2="240" y2="0" />
          <line x1="720" y1="900" x2="1200" y2="0" />
        </g>
      </svg>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #171514 0%, transparent 100%)' }}
        aria-hidden="true"
      />
      {/* Side vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(23,21,20,0.5) 100%)' }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16"
        style={textShift}
      >
        {/* Label */}
        <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-6 md:mb-8">
          01 — Visionary Architects
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-ivory leading-[0.92] mb-6 md:mb-8">
          <span
            className="block"
            style={{ fontSize: 'clamp(48px, 7.5vw, 118px)' }}
          >
            Where
          </span>
          <span
            className="block italic"
            style={{ fontSize: 'clamp(48px, 7.5vw, 118px)' }}
          >
            Vision
          </span>
          <span
            className="block"
            style={{ fontSize: 'clamp(48px, 7.5vw, 118px)' }}
          >
            Becomes
          </span>
          <span
            className="block"
            style={{ fontSize: 'clamp(48px, 7.5vw, 118px)' }}
          >
            Space.
          </span>
        </h1>

        {/* Body and CTAs */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-10 md:mt-14">
          <p className="text-ivory/60 font-sans font-light text-sm leading-relaxed tracking-wide max-w-xs">
            Thoughtful architecture and interiors shaped by context, function, material and experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-3 border border-ivory/50 text-ivory text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-ivory hover:text-charcoal transition-all duration-300 group"
            >
              Explore Our Work
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 text-ivory/70 text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:text-ivory border border-white/10 sm:border-none transition-colors duration-300 group"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned bottom right to avoid any overlap with CTAs */}
      <div className="absolute bottom-8 right-8 md:right-12 lg:right-16 hidden sm:flex flex-col items-center gap-3 z-10 pointer-events-none">
        <span className="text-ivory/40 text-[9px] font-sans tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-ivory/20 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-ivory/60"
            style={{
              height: '40%',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(350%); }
        }
      `}</style>
    </section>
  );
}
