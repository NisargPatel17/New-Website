import { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We listen before we draw. Understanding site, brief, context and the people who will inhabit the space.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'Ideas take form through sketches, diagrams and spatial studies — finding the organising idea that drives everything.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'The concept evolves into detailed design. Every decision — material, structure, light, threshold — resolved with care.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'Technical documentation, coordination and refinement. The design becomes buildable, without losing its integrity.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'On-site presence, quality oversight and the final act of completing a space ready to be lived in and experienced.',
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      ref={ref}
      className="bg-ivory py-24 md:py-36 lg:py-44 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
            05 — Process
          </p> */}
          <h2
            id="process-heading"
            className="font-serif text-charcoal leading-tight"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            From Idea to Space
          </h2>
        </div>

        {/* Desktop: horizontal step list */}
        <div className="hidden md:block">
          {/* Progress line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-stone -translate-y-1/2" />
            <div className="relative flex justify-between">
              {STEPS.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className="flex flex-col items-center gap-3 group"
                  aria-pressed={activeStep === i}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${i <= activeStep
                      ? 'bg-espresso border-espresso'
                      : 'bg-ivory border-stone group-hover:border-warm-gray'
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Step details */}
          <div className="grid grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`transition-all duration-500 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setActiveStep(i)}
              >
                <p className="text-warm-gray/50 text-[10px] font-sans tracking-[0.15em] mb-3">{step.number}</p>
                <h3
                  className={`font-serif mb-3 transition-colors duration-300 ${activeStep === i ? 'text-espresso italic' : 'text-charcoal/80'
                    }`}
                  style={{ fontSize: 'clamp(20px, 1.8vw, 28px)' }}
                >
                  {step.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeStep === i ? 'max-h-40 opacity-100' : 'max-h-0 md:max-h-40 opacity-0 md:opacity-100'
                    }`}
                >
                  <p className="text-charcoal/50 font-sans font-light text-xs leading-relaxed tracking-wide">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0 divide-y divide-stone/50">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`py-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center pt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-espresso shrink-0" />
                  {i < STEPS.length - 1 && <div className="w-px flex-1 bg-stone mt-3" style={{ minHeight: '40px' }} />}
                </div>
                <div className="flex-1">
                  <p className="text-warm-gray/50 text-[10px] font-sans tracking-[0.15em] mb-2">{step.number}</p>
                  <h3 className="font-serif text-charcoal text-2xl mb-3 italic">{step.title}</h3>
                  <p className="text-charcoal/50 font-sans font-light text-sm leading-relaxed tracking-wide">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className={`mt-20 pt-12 border-t border-stone transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* <blockquote className="font-serif text-charcoal/40 italic text-center" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>
            "Every great project begins with a great conversation."
          </blockquote> */}


          <blockquote
            className="font-serif font-bold text-charcoal/40 italic text-center"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            "Every great project begins with a great conversation."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
