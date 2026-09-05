import { useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICE_TYPES = [
  { id: 'residential', label: 'Residential Design', basePerSqFt: 180, defaultArea: 3500 },
  { id: 'commercial', label: 'Commercial Spaces', basePerSqFt: 220, defaultArea: 8000 },
  { id: 'interiors', label: 'Interior Designing', basePerSqFt: 150, defaultArea: 2500 },
  { id: 'healthcare', label: 'Healthcare Architecture', basePerSqFt: 260, defaultArea: 12000 },
  { id: 'institutional', label: 'Institutional Architecture', basePerSqFt: 200, defaultArea: 20000 },
  { id: 'landscape', label: 'Landscape Design', basePerSqFt: 90, defaultArea: 10000 },
  { id: '3d-viz', label: '3D Visualization & Rendering', basePerSqFt: 40, defaultArea: 4000 },
];

const FINISH_TIERS = [
  { id: 'bespoke', label: 'Bespoke Architectural Luxury', multiplier: 1.4, desc: 'Handcrafted local stone, custom joinery, low-E curtain walls, full site supervision.' },
  { id: 'premium', label: 'Premium Architectural', multiplier: 1.0, desc: 'High-grade materials, structural optimization, 3D rendering & permit documentation.' },
  { id: 'core', label: 'Core Structural Concept', multiplier: 0.75, desc: 'Essential architectural layout drawings & key structural consultation.' },
];

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState(SERVICE_TYPES[0]);
  const [areaSqFt, setAreaSqFt] = useState(3500);
  const [selectedTier, setSelectedTier] = useState(FINISH_TIERS[0]);

  // Calculate estimated design & architectural consultancy investment range
  const estimatedCost = Math.round(areaSqFt * selectedService.basePerSqFt * selectedTier.multiplier);
  const minCost = Math.round(estimatedCost * 0.85);
  const maxCost = Math.round(estimatedCost * 1.15);

  const formatLakhsCr = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  return (
    <div className="bg-espresso text-ivory p-8 md:p-14 border-l-4 border-amber-600 shadow-2xl my-16">
      <div className="max-w-4xl">
        <p className="text-amber-500/90 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-2">
          Interactive Estimator
        </p>
        <h3 className="font-serif text-3xl md:text-5xl text-ivory mb-4 leading-tight">
          Project Scope &amp; Consultancy Estimator
        </h3>
        <p className="text-ivory/70 font-sans font-light text-sm md:text-base leading-relaxed mb-10 tracking-wide">
          Estimate architectural and design consultancy scope tailored to your project requirements in Gujarat and nationwide.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service Picker */}
            <div>
              <label className="block text-ivory/50 text-[10px] font-sans tracking-[0.2em] uppercase mb-3">
                1. Select Service Discipline
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {SERVICE_TYPES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedService(s);
                      setAreaSqFt(s.defaultArea);
                    }}
                    className={`text-left p-3 text-xs font-sans font-medium tracking-wide border transition-all ${
                      selectedService.id === s.id
                        ? 'border-amber-500 bg-amber-500/10 text-ivory'
                        : 'border-white/10 text-ivory/60 hover:border-white/30'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-ivory/50 text-[10px] font-sans tracking-[0.2em] uppercase">
                  2. Approximate Built-up Area
                </label>
                <span className="font-serif text-xl text-amber-400">
                  {areaSqFt.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="30000"
                step="250"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[9px] font-sans text-ivory/40 mt-2">
                <span>500 sq ft</span>
                <span>15,000 sq ft</span>
                <span>30,000+ sq ft</span>
              </div>
            </div>

            {/* Finish Tier */}
            <div>
              <label className="block text-ivory/50 text-[10px] font-sans tracking-[0.2em] uppercase mb-3">
                3. Design &amp; Craft Level
              </label>
              <div className="space-y-2.5">
                {FINISH_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`w-full text-left p-3.5 border transition-all flex flex-col ${
                      selectedTier.id === tier.id
                        ? 'border-amber-500 bg-amber-500/10 text-ivory'
                        : 'border-white/10 text-ivory/60 hover:border-white/30'
                    }`}
                  >
                    <span className="font-serif text-base text-ivory">{tier.label}</span>
                    <span className="text-ivory/50 font-sans text-xs mt-1">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-charcoal p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-2">
                Estimated Consultancy Investment
              </p>
              <div className="font-serif text-3xl md:text-4xl text-ivory mb-2">
                {formatLakhsCr(minCost)} – {formatLakhsCr(maxCost)}
              </div>
              <p className="text-ivory/50 text-xs font-sans mb-6">
                Estimated total architectural consultancy fee range for {areaSqFt.toLocaleString()} sq ft ({selectedService.label}).
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-sans text-ivory/70">
                <div className="flex justify-between">
                  <span className="text-ivory/50">Discipline:</span>
                  <span className="font-medium text-ivory">{selectedService.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ivory/50">Est. Timeline:</span>
                  <span className="font-medium text-ivory">8 – 14 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ivory/50">Lead Architect:</span>
                  <span className="font-medium text-amber-400">Pathik Chandarana</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 text-ivory font-sans text-[10px] font-medium tracking-[0.2em] uppercase py-4 hover:bg-amber-500 transition-colors"
              >
                Request Custom Proposal <span aria-hidden="true">→</span>
              </Link>
              <p className="text-[9px] font-sans text-ivory/30 text-center mt-3">
                Final scope &amp; fee proposal will be tailored following initial studio consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
