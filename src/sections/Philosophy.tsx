import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Context',
    body: 'Design that responds to place, climate and surroundings — architecture that belongs to where it is.',
  },
  {
    number: '02',
    title: 'Function',
    body: 'Spaces planned around real human needs and the rhythms of everyday experience.',
  },
  {
    number: '03',
    title: 'Character',
    body: 'Material, light, proportion and detail combine to create a distinctive, enduring identity.',
  },
];

const BG_IMAGE = 'https://images.unsplash.com/photo-1784407089139-0ea7d4c10c0d?w=1600&h=900&fit=crop&auto=format';

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative bg-espresso overflow-hidden py-24 md:py-36 lg:py-44"
      aria-labelledby="philosophy-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Brutalist architectural form — concrete texture and geometry"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-transparent to-espresso/80" aria-hidden="true" />

      {/* Thin horizontal line decoration */}
      <div className="absolute top-0 left-8 right-8 h-px bg-white/10" aria-hidden="true" />
      <div className="absolute bottom-0 left-8 right-8 h-px bg-white/10" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Headline */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-8">
              04 — Our Approach
            </p>
            <h2
              id="philosophy-heading"
              className="font-serif text-ivory leading-[1.0]"
              style={{ fontSize: 'clamp(36px, 5.5vw, 78px)' }}
            >
              Good Architecture
              <br />
              is Not Only Seen.
              <br />
              <span className="italic text-stone">It is Experienced.</span>
            </h2>
          </div>

          {/* Principles */}
          <div
            className={`lg:col-span-5 lg:pt-24 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-0 divide-y divide-white/10">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={p.number}
                  className="py-7"
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex gap-5 items-start">
                    <span className="text-warm-gray/40 text-[10px] font-sans tracking-[0.15em] font-medium pt-1.5">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-ivory text-2xl mb-3 italic">{p.title}</h3>
                      <p className="text-ivory/50 font-sans font-light text-sm leading-relaxed tracking-wide">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
