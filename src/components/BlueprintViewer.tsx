import { useState } from 'react';
import { BlueprintHotspot } from '../data/projectsData';

interface BlueprintViewerProps {
  blueprintUrl: string;
  hotspots?: BlueprintHotspot[];
  title?: string;
}

export default function BlueprintViewer({ blueprintUrl, hotspots = [], title = 'Architectural Plan & Spatial Layout' }: BlueprintViewerProps) {
  const [activeHotspot, setActiveHotspot] = useState<BlueprintHotspot | null>(hotspots[0] || null);

  return (
    <div className="bg-charcoal text-ivory p-6 md:p-10 border border-white/10 my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <p className="text-amber-500/90 text-[10px] font-sans font-semibold tracking-[0.22em] uppercase mb-1">
            Interactive Technical Drawing
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-ivory">{title}</h3>
        </div>
        <p className="text-ivory/50 text-xs font-sans tracking-wider uppercase">
          Click pins to explore structural details & materials
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Blueprint Viewer Area */}
        <div className="lg:col-span-8 relative bg-stone/10 border border-white/10 aspect-[16/10] overflow-hidden group">
          <img
            src={blueprintUrl}
            alt="Architectural Blueprint Drawing"
            className="w-full h-full object-cover opacity-60 grayscale invert mix-blend-screen transition-all duration-500"
          />

          {/* Hotspot Pins */}
          {hotspots.map((spot) => {
            const isSelected = activeHotspot?.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isSelected ? 'z-30 scale-125' : 'z-20 scale-100 hover:scale-110'
                }`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                aria-label={`Hotspot: ${spot.title}`}
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                      isSelected ? 'bg-amber-400' : 'bg-ivory/60'
                    }`}
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-sans font-bold shadow-lg transition-all ${
                      isSelected
                        ? 'bg-amber-500 border-ivory text-charcoal'
                        : 'bg-charcoal border-ivory text-ivory hover:bg-ivory hover:text-charcoal'
                    }`}
                  >
                    {spot.id}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hotspot Detail Panel */}
        <div className="lg:col-span-4 bg-espresso/60 border border-white/10 p-6 flex flex-col justify-between min-h-[300px]">
          {activeHotspot ? (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-charcoal font-sans text-xs font-bold flex items-center justify-center">
                  {activeHotspot.id}
                </span>
                <span className="text-amber-500/90 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase">
                  Spatial Highlight
                </span>
              </div>
              <h4 className="font-serif text-2xl text-ivory mb-3">{activeHotspot.title}</h4>
              <p className="text-ivory/70 font-sans font-light text-sm leading-relaxed mb-6">
                {activeHotspot.description}
              </p>
              {activeHotspot.material && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mb-1">
                    Key Material
                  </p>
                  <p className="text-ivory font-sans text-xs font-medium tracking-wide">
                    {activeHotspot.material}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full text-center py-12">
              <p className="text-ivory/40 text-xs font-sans uppercase tracking-widest">
                Select a hotspot pin on the floor plan to view technical specifications.
              </p>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-white/10 text-right">
            <span className="text-[9px] font-sans text-ivory/40 uppercase tracking-widest">
              Visionary Architects · CAD/BIM Detail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
