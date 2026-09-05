import { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    number: '01',
    title: 'Architectural Service',
    description:
      'We focus on durability, accessibility, and forward-thinking structures — crafting high-end, personalized spaces that marry grandeur with functional warmth.',
    image: 'https://images.unsplash.com/photo-1761870065047-f2da9429db23?w=600&h=400&fit=crop&auto=format',
    alt: 'White modern residential architecture',
  },
  {
    number: '02',
    title: 'Interior Designing',
    description:
      'Create a home or space that feels comfortable, functional, and beautifully yours — curated through disciplined material palettes and artisanal detailing.',
    image: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=600&h=400&fit=crop&auto=format',
    alt: 'Refined modern interior with sectional and artwork',
  },
  {
    number: '03',
    title: 'Landscape Design',
    description:
      'Designing impactful outdoor environments and spatial sequences that elevate your site, working in harmony with natural light and surrounding ecology.',
    image: 'https://images.unsplash.com/photo-1784407089139-0ea7d4c10c0d?w=600&h=400&fit=crop&auto=format',
    alt: 'Architectural concrete landscape',
  },
  {
    number: '04',
    title: '3D Visualization & Rendering',
    description:
      'Photorealistic 3D visualization and rendering that communicate design intent — bringing complex architectural concepts to life before construction.',
    image: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=600&h=400&fit=crop&auto=format',
    alt: 'Detailed architectural surface rendering',
  },
  {
    number: '05',
    title: 'Commercial Spaces',
    description:
      'Design impactful environment that elevate your brand and customer experience.',
    image: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?w=600&h=400&fit=crop&auto=format',
    alt: 'Contemporary glass commercial building',
  },
  {
    number: '06',
    title: 'Healthcare Architecture',
    description:
      'We build environments centred on healing & efficiency.',
    image: 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=600&h=400&fit=crop&auto=format',
    alt: 'Bright interior space with natural light',
  },
  {
    number: '07',
    title: 'Institutional Architecture',
    description:
      'We focus on durability, accessibility, and forward-thinking structures.',
    image: 'https://images.unsplash.com/photo-1786550765849-dffab1814552?w=600&h=400&fit=crop&auto=format',
    alt: 'Geometric institutional facade',
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  return (
    <section
      id="services"
      ref={ref}
      className="bg-charcoal py-24 md:py-36 lg:py-44"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
            03 — Services
          </p>
          <h2
            id="services-heading"
            className="font-serif text-ivory leading-tight"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Our Expertise
          </h2>
        </div>

        {/* Service rows */}
        <div className="border-t border-white/10">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              className={`border-b border-white/10 transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                className="w-full text-left"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                aria-controls={`service-desc-${i}`}
              >
                <div className="flex items-center gap-6 py-6 md:py-8 group">
                  <span className="text-warm-gray/50 text-[10px] font-sans tracking-[0.15em] font-medium w-8 shrink-0">
                    {service.number}
                  </span>
                  <h3
                    className={`font-serif transition-all duration-300 flex-1 ${
                      active === i ? 'text-ivory italic' : 'text-ivory/80 group-hover:text-ivory'
                    }`}
                    style={{ fontSize: 'clamp(22px, 3vw, 40px)' }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className={`text-warm-gray text-sm transition-transform duration-300 ${
                      active === i ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              <div
                id={`service-desc-${i}`}
                className="overflow-hidden transition-all duration-500"
                style={{ maxHeight: active === i ? '320px' : '0' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 pl-14">
                  <p className="md:col-span-6 text-ivory/50 font-sans font-light text-sm leading-loose tracking-wide">
                    {service.description}
                  </p>
                  <div className="md:col-span-4 md:col-start-9 aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover opacity-70"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
