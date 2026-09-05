import { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const MATERIALS = [
  {
    id: 'stone',
    label: 'Stone',
    description: 'Limestone, sandstone and granite — the ground of architecture. Each surface unique, each quarry a story told in texture and time.',
    bg: 'linear-gradient(135deg, #c8beb4 0%, #a8998c 40%, #8b7d72 100%)',
    accent: '#a8998c',
    texture: [
      { x: 0, y: 0, w: 100, h: 100, opacity: 0.06 },
      { x: 15, y: 25, w: 70, h: 2, opacity: 0.12 },
      { x: 0, y: 55, w: 100, h: 1.5, opacity: 0.08 },
      { x: 30, y: 75, w: 50, h: 1, opacity: 0.10 },
    ],
  },
  {
    id: 'concrete',
    label: 'Concrete',
    description: 'Cast and raw. The material of structural honesty — bearing weight visibly, aging gracefully, holding light in ways no other surface can.',
    bg: 'linear-gradient(135deg, #9a9590 0%, #7a7570 40%, #5a5550 100%)',
    accent: '#7a7570',
    texture: [
      { x: 0, y: 20, w: 100, h: 1, opacity: 0.15 },
      { x: 0, y: 45, w: 100, h: 0.8, opacity: 0.10 },
      { x: 0, y: 70, w: 100, h: 1.2, opacity: 0.12 },
      { x: 40, y: 0, w: 1, h: 100, opacity: 0.08 },
    ],
  },
  {
    id: 'wood',
    label: 'Wood',
    description: 'Warmth in its most elemental form. Teak, oak, walnut — each grain a map of growth, each surface a counterpoint to harder materials.',
    bg: 'linear-gradient(135deg, #c4956a 0%, #a67548 40%, #7a5530 100%)',
    accent: '#a67548',
    texture: [
      { x: 0, y: 15, w: 100, h: 0.8, opacity: 0.20 },
      { x: 0, y: 30, w: 100, h: 1.2, opacity: 0.15 },
      { x: 0, y: 48, w: 100, h: 0.6, opacity: 0.18 },
      { x: 0, y: 65, w: 100, h: 1, opacity: 0.12 },
      { x: 0, y: 80, w: 100, h: 0.8, opacity: 0.16 },
    ],
  },
  {
    id: 'glass',
    label: 'Glass',
    description: 'The boundary dissolved. Glass mediates between inside and outside, between shelter and landscape, between enclosure and openness.',
    bg: 'linear-gradient(135deg, rgba(200,220,240,0.6) 0%, rgba(160,200,230,0.4) 50%, rgba(180,210,235,0.7) 100%)',
    accent: '#a0c8e6',
    texture: [
      { x: 20, y: 0, w: 0.5, h: 100, opacity: 0.25 },
      { x: 60, y: 0, w: 0.5, h: 100, opacity: 0.20 },
      { x: 0, y: 35, w: 100, h: 0.5, opacity: 0.18 },
      { x: 0, y: 70, w: 100, h: 0.5, opacity: 0.15 },
    ],
  },
  {
    id: 'metal',
    label: 'Metal',
    description: 'Precision made visible. Steel, brass and bronze — structural confidence expressed through edge, joint and finish.',
    bg: 'linear-gradient(135deg, #b8b0a4 0%, #888078 40%, #4a4440 100%)',
    accent: '#888078',
    texture: [
      { x: 0, y: 0, w: 100, h: 0.4, opacity: 0.30 },
      { x: 0, y: 33, w: 100, h: 0.4, opacity: 0.20 },
      { x: 0, y: 66, w: 100, h: 0.4, opacity: 0.25 },
      { x: 0, y: 99, w: 100, h: 0.4, opacity: 0.30 },
    ],
  },
];

export default function Materials() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  const mat = MATERIALS[active];

  return (
    <section
      id="materials"
      ref={ref}
      className="bg-ivory py-24 md:py-36 lg:py-44 border-t border-stone/50"
      aria-labelledby="materials-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
            04b — Materiality
          </p>
          <h2
            id="materials-heading"
            className="font-serif text-charcoal leading-tight"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            The Language of Materials
          </h2>
          <p className="text-charcoal/40 font-sans font-light text-sm mt-3 tracking-wide max-w-md">
            Every project begins with a conversation about material — how a surface feels, how light crosses it, how it weathers with time.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Material selector tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2">
            {MATERIALS.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 text-left px-4 py-4 border transition-all duration-300 ${
                  active === i
                    ? 'border-charcoal bg-charcoal text-ivory'
                    : 'border-stone bg-transparent text-charcoal/50 hover:border-charcoal/40 hover:text-charcoal'
                }`}
                aria-pressed={active === i}
              >
                {/* Color swatch */}
                <div
                  className="w-4 h-4 shrink-0 rounded-sm"
                  style={{ background: m.accent }}
                  aria-hidden="true"
                />
                <span className="text-[10px] font-sans font-medium tracking-[0.18em] uppercase">
                  {m.label}
                </span>
              </button>
            ))}
          </div>

          {/* Material display */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Material visual */}
              <div
                className="relative overflow-hidden aspect-square md:aspect-auto cursor-pointer transition-all duration-700"
                style={{ background: mat.bg, minHeight: '320px' }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                aria-label={`${mat.label} material sample`}
              >
                {/* Texture lines SVG */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {mat.texture.map((t, i) => (
                    <rect
                      key={i}
                      x={t.x}
                      y={t.y}
                      width={t.w}
                      height={t.h}
                      fill="#171514"
                      opacity={t.opacity}
                    />
                  ))}
                </svg>

                {/* Hover scale indicator */}
                <div
                  className={`absolute inset-0 border-2 border-white/20 transition-all duration-500 ${
                    hovering ? 'scale-95 opacity-100' : 'scale-100 opacity-0'
                  }`}
                  style={{ margin: '16px' }}
                  aria-hidden="true"
                />

                {/* Material label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="font-serif text-white/90 leading-none"
                    style={{ fontSize: 'clamp(32px, 4vw, 56px)', textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
                  >
                    {mat.label}
                  </p>
                </div>

                {/* Thin corner marks */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/30" aria-hidden="true" />
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/30" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/30" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/30" aria-hidden="true" />
              </div>

              {/* Material info */}
              <div className="flex flex-col justify-between py-4">
                <div>
                  <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mb-4">
                    Material — {String(active + 1).padStart(2, '0')} / {String(MATERIALS.length).padStart(2, '0')}
                  </p>
                  <h3 className="font-serif text-charcoal italic mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
                    {mat.label}
                  </h3>
                  <div className="w-8 h-px bg-warm-gray mb-6" />
                  <p className="text-charcoal/60 font-sans font-light text-sm leading-loose tracking-wide">
                    {mat.description}
                  </p>
                </div>

                {/* Navigation dots */}
                <div className="flex gap-3 mt-10">
                  {MATERIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-px transition-all duration-300 ${
                        i === active ? 'bg-espresso w-8' : 'bg-stone w-4 hover:bg-warm-gray hover:w-6'
                      }`}
                      aria-label={`Select ${MATERIALS[i].label}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
