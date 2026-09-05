import { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const FILTERS = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INTERIORS', 'HEALTHCARE', 'INSTITUTIONAL', 'LANDSCAPE'] as const;
type Filter = typeof FILTERS[number];

const PROJECTS = [
  {
    id: 1,
    name: '[Project Name]',
    category: 'RESIDENTIAL',
    location: 'Ahmedabad, Gujarat',
    year: '[YEAR]',
    image: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?w=1200&h=800&fit=crop&auto=format',
    alt: 'Contemporary glass facade architecture',
    size: 'large',
  },
  {
    id: 2,
    name: '[Project Name]',
    category: 'INTERIORS',
    location: 'Ahmedabad, Gujarat',
    year: '[YEAR]',
    image: 'https://images.unsplash.com/photo-1758565811024-d0c0bee3223f?w=800&h=1100&fit=crop&auto=format',
    alt: 'Interior dining room with panoramic landscape view',
    size: 'tall',
  },
  {
    id: 3,
    name: '[Project Name]',
    category: 'COMMERCIAL',
    location: 'Science City, Ahmedabad',
    year: '[YEAR]',
    image: 'https://images.unsplash.com/photo-1786550765849-dffab1814552?w=900&h=700&fit=crop&auto=format',
    alt: 'Geometric triangular panel facade',
    size: 'medium',
  },
  {
    id: 4,
    name: '[Project Name]',
    category: 'INTERIORS',
    location: 'Ahmedabad, Gujarat',
    year: '[YEAR]',
    image: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=900&h=700&fit=crop&auto=format',
    alt: 'Modern interior living space with curated artwork',
    size: 'medium',
  },
  {
    id: 5,
    name: '[Project Name]',
    category: 'RESIDENTIAL',
    location: 'Gujarat',
    year: '[YEAR]',
    image: 'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?w=800&h=1100&fit=crop&auto=format',
    alt: 'Elegant bathroom with natural stone and organic forms',
    size: 'tall',
  },
  {
    id: 6,
    name: '[Project Name]',
    category: 'INSTITUTIONAL',
    location: 'Ahmedabad, Gujarat',
    year: '[YEAR]',
    image: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=1600&h=700&fit=crop&auto=format',
    alt: 'Repetitive concrete architectural detail',
    size: 'wide',
  },
];

interface ProjectCardProps {
  project: typeof PROJECTS[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-stone group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="article"
      tabIndex={0}
      aria-label={`${project.name} — ${project.category}`}
    >
      <img
        src={project.image}
        alt={project.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-charcoal/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-1">
          {project.category}
        </p>
        <h3 className="font-serif text-ivory text-xl mb-1">{project.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-ivory/50 text-[9px] font-sans tracking-[0.12em]">{project.location}</p>
          <p className="text-ivory/50 text-[9px] font-sans tracking-[0.12em]">{project.year}</p>
        </div>
        <div className="w-full h-px bg-ivory/20 mt-3 mb-3" />
        <span className="text-ivory text-[9px] font-sans tracking-[0.2em] uppercase inline-flex items-center gap-2 group/link hover:gap-3 transition-all duration-200">
          View Project <span aria-hidden="true">→</span>
        </span>
      </div>
      {/* Always-visible minimal label on bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="inline-block bg-charcoal/50 backdrop-blur-sm px-3 py-1.5">
          <p className="text-ivory text-[9px] font-sans tracking-[0.15em] uppercase">{project.category}</p>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL');
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  const filtered = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      ref={ref}
      className="bg-ivory py-24 md:py-36 lg:py-44"
      aria-labelledby="work-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div>
              <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
                02 — Selected Work
              </p>
              <h2
                id="work-heading"
                className="font-serif text-charcoal leading-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Selected Work
              </h2>
              <p className="text-charcoal/50 font-sans font-light text-sm mt-3 tracking-wide">
                A collection of spaces, ideas and architectural experiences.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={activeFilter === f}
                  className={`text-[9px] font-sans font-medium tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-charcoal text-ivory border-charcoal'
                      : 'bg-transparent text-charcoal/50 border-stone hover:border-charcoal/40 hover:text-charcoal'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-stone" />
        </div>

        {/* Asymmetric project grid */}
        <div className="space-y-4">
          {/* Row 1: large + tall */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {filtered[0] && (
              <div className={`md:col-span-8 aspect-[16/10] opacity-100 translate-y-0 transition-all duration-1000 delay-100`}>
                <ProjectCard project={filtered[0]} />
              </div>
            )}
            {filtered[1] && (
              <div className={`md:col-span-4 aspect-[4/5] md:aspect-auto opacity-100 translate-y-0 transition-all duration-1000 delay-200`}>
                <ProjectCard project={filtered[1]} />
              </div>
            )}
          </div>

          {/* Row 2: medium + medium (offset) */}
          {filtered.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className={`md:col-span-5 md:col-start-2 aspect-[4/3] opacity-100 translate-y-0 transition-all duration-1000 delay-300`}>
                {filtered[2] && <ProjectCard project={filtered[2]} />}
              </div>
              <div className={`md:col-span-5 aspect-[4/3] mt-0 md:mt-12 opacity-100 translate-y-0 transition-all duration-1000 delay-400`}>
                {filtered[3] && <ProjectCard project={filtered[3]} />}
              </div>
            </div>
          )}

          {/* Row 3: tall + wide */}
          {filtered.length > 4 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className={`md:col-span-4 aspect-[3/4] opacity-100 translate-y-0 transition-all duration-1000 delay-300`}>
                {filtered[4] && <ProjectCard project={filtered[4]} />}
              </div>
              <div className={`md:col-span-8 aspect-[16/9] opacity-100 translate-y-0 transition-all duration-1000 delay-400`}>
                {filtered[5] && <ProjectCard project={filtered[5]} />}
              </div>
            </div>
          )}
        </div>

        {/* Placeholder notice */}
        <p className="text-warm-gray/60 text-[9px] font-sans tracking-[0.15em] italic mt-12 text-center">
          Sample placeholder projects — replace with verified Visionary Architects project information before publishing.
        </p>

        {/* View all CTA */}
        <div className="mt-16 text-center border-t border-stone pt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-charcoal text-charcoal text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal hover:text-ivory transition-all duration-300 group"
          >
            Start a Project with Us
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
