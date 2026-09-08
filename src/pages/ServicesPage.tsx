import { SERVICES_DATA } from '../data/servicesData';
import CostCalculator from '../components/CostCalculator';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="bg-ivory text-charcoal pt-32 pb-24 md:pt-40 md:pb-36 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 border-b border-stone/60 pb-12">
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
            Visionary Architects · Practice Scope
          </p>
          <h1
            className="font-serif text-charcoal leading-none mb-6"
            style={{ fontSize: 'clamp(42px, 6vw, 84px)' }}
          >
            Services &amp; Expertise
          </h1>
          <p className="text-charcoal/70 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
            We are a multidisciplinary architecture and interior design studio dedicated to crafting high-end, personalized spaces that marry grandeur with functional warmth.
          </p>
        </div>

        {/* 7 Core Services Detailed Breakdown */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-stone/20 border border-stone/60 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Number + Title + PDF Tagline */}
              <div className="lg:col-span-4 space-y-4">
                {/* <span className="text-amber-700/80 font-sans text-xs tracking-[0.2em] font-semibold uppercase block">
                  Discipline — {service.number}
                </span> */}
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
                  {service.title}
                </h2>
                <div className="w-10 h-px bg-espresso/40 my-4" />
                <p className="font-serif italic text-espresso text-base md:text-lg leading-snug">
                  "{service.pdfTagline}"
                </p>
                <div className="pt-4">
                  <span className="text-[10px] font-sans text-warm-gray uppercase tracking-widest block mb-1">
                    Typical Design Phase
                  </span>
                  <span className="text-xs font-sans font-medium text-charcoal">
                    {service.estimatedTimeline}
                  </span>
                </div>
              </div>

              {/* Middle Column: Scope & Deliverables */}
              <div className="lg:col-span-5 space-y-6">
                <p className="text-charcoal/80 font-sans font-light text-sm leading-relaxed">
                  {service.description}
                </p>

                {service.scopeOfWork && (
                  <div>
                    <h3 className="text-[10px] font-sans font-semibold tracking-[0.2em] text-charcoal uppercase mb-3">
                      Scope of Work &amp; Services
                    </h3>
                    <ul className="space-y-2">
                      {service.scopeOfWork.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-charcoal/70">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.deliverables && (
                  <div>
                    <h3 className="text-[10px] font-sans font-semibold tracking-[0.2em] text-charcoal uppercase mb-3">
                      Client Deliverables
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((del, i) => (
                        <span key={i} className="bg-ivory border border-stone/80 text-charcoal/80 text-[10px] font-sans px-3 py-1">
                          ✓ {del}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Image */}
              <div className="lg:col-span-3 aspect-[4/3] lg:aspect-[3/4] bg-stone overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator */}
        {/* <CostCalculator /> */}

        {/* Bottom Callout */}
        <div className="mt-20 text-center bg-charcoal text-ivory p-12 md:p-16 border border-white/10">
          <h3 className="font-serif text-3xl md:text-4xl mb-4">Have a Custom Architecture Brief?</h3>
          <p className="text-ivory/60 font-sans font-light text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Speak directly with Founder &amp; CEO Pathik Chandarana to discuss your site, budget range, and timeline requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ivory text-charcoal font-sans text-[10px] font-medium tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-all"
          >
            Start a Conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
