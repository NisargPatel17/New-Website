import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import VALogo from '../components/VALogo';

const DISCIPLINES = [
  'Architecture',
  'Interior Design',
  'Landscape Design',
  'Healthcare Design',
  'Institutional Architecture',
  '3D Visualisation',
];

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=900&h=1100&fit=crop&auto=format';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-stone/30 py-24 md:py-36 lg:py-44"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Text left */}
          <div
            className={`lg:col-span-6 order-2 lg:order-1 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-8">
              06 — About
            </p>

            <VALogo size={40} color="#33241F" className="mb-10 opacity-60" />

            <h2
              id="about-heading"
              className="font-serif text-charcoal leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              About
              <br />
              <span className="italic">Visionary Architects</span>
            </h2>

            <div className="w-8 h-px bg-warm-gray mb-8" />

            <p className="text-charcoal/80 font-sans font-light text-sm md:text-base leading-relaxed mb-6 tracking-wide">
              Welcome to Visionary Architecture where structural innovation meets bespoke interior elegance. We are a multidisciplinary architecture and interior design studio dedicated to crafting high-end, personalized spaces that marry grandeur with functional warmth.
            </p>
            <p className="text-charcoal/70 font-sans font-light text-sm leading-relaxed mb-10 tracking-wide">
              We don't just build structures; we curate environments that tell your story through disciplined material palettes, artisanal detailing, and seamless spatial sequences.
            </p>

            {/* Founder Spotlight Card */}
            <div className="bg-espresso text-ivory p-6 md:p-8 mb-10 border-l-4 border-amber-600/80 shadow-md">
              <p className="text-amber-500/90 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-1">
                Founder & CEO
              </p>
              <p className="font-serif text-2xl text-ivory tracking-wide">
                Pathik Chandarana
              </p>
              <p className="text-ivory/60 font-sans text-xs mt-2 tracking-wider uppercase">
                Visionary Architects · Ahmedabad
              </p>
            </div>

            {/* Disciplines */}
            <div className="mb-12">
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-5">
                Our Disciplines
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {DISCIPLINES.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-700/60 rounded-full shrink-0" aria-hidden="true" />
                    <span className="text-charcoal/80 font-sans text-xs tracking-wide font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-espresso text-ivory text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-charcoal transition-colors duration-300 group"
              >
                Start a Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border border-espresso/30 text-espresso text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:border-espresso transition-colors duration-300 group"
              >
                View Our Work
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Image right */}
          <div
            className={`lg:col-span-5 lg:col-start-8 order-1 lg:order-2 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-stone">
              <img
                src={ABOUT_IMAGE}
                alt="Interior architectural space — light, plants and refined modern living"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 right-8 border border-ivory/30 p-5">
                <p className="text-ivory text-[9px] font-sans tracking-[0.2em] uppercase mb-1">
                  Visionary Architects
                </p>
                <p className="text-ivory/50 text-[9px] font-sans tracking-[0.12em]">
                  Architecture · Interiors · Spaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
