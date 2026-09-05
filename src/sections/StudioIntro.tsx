import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const STUDIO_IMAGE = 'https://images.unsplash.com/photo-1758565811176-ccd94357a844?w=1200&h=900&fit=crop&auto=format';

export default function StudioIntro() {
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  return (
    <section
      id="studio"
      ref={ref}
      className="bg-ivory py-24 md:py-36 lg:py-44 relative"
      aria-labelledby="studio-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Image column */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative overflow-hidden bg-stone aspect-[4/3]">
              <img
                src={STUDIO_IMAGE}
                alt="Visionary Architects studio interior — refined living space with panoramic windows"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Editorial label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
                <p className="text-ivory/70 text-[9px] font-sans tracking-[0.2em] uppercase">
                  Architecture × Interiors × Experience
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div
            className={`lg:col-span-5 lg:pt-16 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-2 mb-4 text-amber-800/80">
              <span className="text-lg">✦✦</span>
              <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase">Visionary Architects</span>
            </div>

            <h2
              id="studio-heading"
              className="font-serif text-charcoal leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Let’s build &amp;
              <br />
              <span className="italic">create your</span>
              <br />
              space.
            </h2>

            <div className="w-8 h-px bg-warm-gray mb-8" />

            <p className="text-charcoal/70 font-sans font-light text-sm leading-loose mb-6 tracking-wide">
              Visionary Architects is a multidisciplinary architecture and interior design studio creating
              spaces that balance functionality, character and timeless design.
            </p>
            <p className="text-charcoal/70 font-sans font-light text-sm leading-loose mb-12 tracking-wide">
              Our work explores the relationship between people, space, material and light — creating
              environments that feel considered from the smallest detail to the overall experience.
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-3 text-espresso text-[10px] font-sans font-medium tracking-[0.2em] uppercase border-b border-espresso/40 pb-1 hover:border-espresso transition-colors duration-300 group"
            >
              Discover Our Studio
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
