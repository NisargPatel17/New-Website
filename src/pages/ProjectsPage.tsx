import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import AnimatedCounter from '../components/AnimatedCounter';

const CATEGORIES = ['ALL', 'COMMERCIAL', 'INTERIORS', 'HEALTHCARE', 'INSTITUTIONAL', 'LANDSCAPE'] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-ivory text-charcoal pt-32 pb-24 md:pt-40 md:pb-36 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 border-b border-stone/60 pb-12">
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
            Visionary Architects · Portfolio
          </p>
          <h1
            className="font-serif text-charcoal leading-none mb-6"
            style={{ fontSize: 'clamp(42px, 6vw, 84px)' }}
          >
            Built Work &amp; Spaces
          </h1>
          <p className="text-charcoal/70 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
            Explore our multidisciplinary portfolio spanning commercial headquarters, healthcare institutes, bespoke interior design, institutional projects, and landscape master plans in Gujarat and nationwide.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-stone/40">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-espresso">
                <AnimatedCounter end={300} start={1} suffix="+" />
              </p>
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-espresso">
                <AnimatedCounter end={7} start={1} suffix="+" />
              </p>
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mt-1">Core Disciplines</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-espresso">
                <AnimatedCounter end={100} start={1} suffix="%" />
              </p>
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mt-1">Custom Architecture</p>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] font-sans font-medium tracking-[0.18em] uppercase px-4 py-2.5 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-transparent text-charcoal/60 border-stone hover:border-charcoal/40 hover:text-charcoal'
                }`}
              >
                {cat === 'ALL' ? 'ALL WORK' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar + View Mode */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search location or project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone/30 border border-stone text-xs font-sans px-4 py-2.5 outline-none focus:border-charcoal placeholder-charcoal/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="hidden sm:flex border border-stone">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 text-xs ${viewMode === 'grid' ? 'bg-charcoal text-ivory' : 'text-charcoal/60'}`}
                aria-label="Grid view"
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 text-xs ${viewMode === 'list' ? 'bg-charcoal text-ivory' : 'text-charcoal/60'}`}
                aria-label="List view"
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Project Results */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-stone">
            <p className="font-serif text-2xl text-charcoal/60 mb-2">No projects matched your criteria.</p>
            <p className="text-xs font-sans text-warm-gray mb-6">Try resetting your search query or selecting another discipline.</p>
            <button
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="inline-block border border-charcoal text-charcoal text-[9px] font-sans tracking-[0.2em] uppercase px-6 py-3 hover:bg-charcoal hover:text-ivory transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-stone/20 border border-stone/40 flex flex-col justify-between overflow-hidden">
                <div>
                  <Link to={`/projects/${project.id}`} className="block relative aspect-[4/3] overflow-hidden bg-stone">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/85 text-ivory text-[9px] font-sans font-medium tracking-[0.18em] uppercase px-3 py-1">
                      {project.categoryLabel}
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex justify-between items-center text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:italic transition-all">
                      <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>
                    <p className="text-charcoal/70 font-sans font-light text-xs leading-relaxed line-clamp-3 mb-4">
                      {project.brief}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.materials.map((m) => (
                        <span key={m.name} className="text-[9px] font-sans bg-stone/60 text-charcoal/80 px-2 py-0.5 rounded-sm">
                          {m.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone/30 mt-auto">
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-[9px] font-sans text-charcoal/40 uppercase tracking-widest">
                      Area: {project.area}
                    </span>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-espresso text-[9px] font-sans font-semibold tracking-[0.2em] uppercase inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                    >
                      Case Study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="divide-y divide-stone/60 border-t border-b border-stone/60">
            {filteredProjects.map((project) => (
              <div key={project.id} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
                <div className="md:col-span-3 aspect-[16/10] overflow-hidden bg-stone">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-6 space-y-2">
                  <span className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase">
                    {project.categoryLabel} · {project.location} ({project.year})
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal group-hover:italic transition-all">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="text-charcoal/70 font-sans font-light text-xs leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
                <div className="md:col-span-3 text-right">
                  <p className="text-charcoal/40 text-[9px] font-sans tracking-widest uppercase mb-3">
                    Lead: {project.leadArchitect}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 border border-charcoal text-charcoal text-[9px] font-sans font-medium tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-charcoal hover:text-ivory transition-all"
                  >
                    View Project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
