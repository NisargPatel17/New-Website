import { useParams, Link, useNavigate } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import BlueprintViewer from '../components/BlueprintViewer';
import { useState } from 'react';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
  const project = PROJECTS_DATA[projectIndex];

  if (!project) {
    return (
      <div className="bg-ivory text-charcoal min-h-screen pt-40 pb-24 text-center">
        <div className="max-w-md mx-auto px-6">
          <h1 className="font-serif text-4xl mb-4">Project Not Found</h1>
          <p className="text-charcoal/60 font-sans text-sm mb-8">The requested architectural case study could not be located.</p>
          <Link
            to="/projects"
            className="inline-block border border-charcoal text-charcoal text-[10px] font-sans tracking-[0.2em] uppercase px-6 py-3.5 hover:bg-charcoal hover:text-ivory transition-all"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = PROJECTS_DATA[(projectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* Top Banner Hero */}
      <section className="relative w-full h-[75vh] min-h-[500px] bg-charcoal flex items-end pb-16 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 w-full">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-ivory/60 text-[10px] font-sans tracking-[0.2em] uppercase mb-6 hover:text-ivory transition-colors"
          >
            ← Back to All Projects
          </Link>

          <p className="text-amber-400 text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-3">
            {project.categoryLabel}
          </p>

          <h1
            className="font-serif text-ivory leading-none mb-6"
            style={{ fontSize: 'clamp(36px, 5.5vw, 84px)' }}
          >
            {project.title}
          </h1>

          <p className="text-ivory/80 font-sans font-light text-base md:text-xl max-w-3xl leading-relaxed tracking-wide">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Metadata Strip */}
      <section className="bg-espresso text-ivory border-b border-white/10 py-8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-xs font-sans">
          <div>
            <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Location</p>
            <p className="text-ivory font-medium tracking-wide">{project.location}</p>
          </div>
          <div>
            <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Year Completed</p>
            <p className="text-ivory font-medium tracking-wide">{project.year}</p>
          </div>
          <div>
            <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Built Area</p>
            <p className="text-ivory font-medium tracking-wide">{project.area}</p>
          </div>
          <div>
            <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Lead Architect</p>
            <p className="text-amber-400 font-medium tracking-wide">{project.leadArchitect}</p>
          </div>
          <div>
            <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Client</p>
            <p className="text-ivory font-medium tracking-wide">{project.client}</p>
          </div>
        </div>
      </section>

      {/* Main Content & Narrative */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-6">
              <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
                01 — Design Brief
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
                The Brief &amp; Context
              </h2>
              <p className="text-charcoal/80 font-sans font-light text-base leading-relaxed tracking-wide">
                {project.brief}
              </p>
            </div>

            <div className="lg:col-span-6">
              <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
                02 — Architectural Concept
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
                Spatial Strategy &amp; Form
              </h2>
              <p className="text-charcoal/80 font-sans font-light text-base leading-relaxed tracking-wide">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Interactive Blueprint Viewer if available */}
          {project.blueprintUrl && (
            <BlueprintViewer
              blueprintUrl={project.blueprintUrl}
              hotspots={project.hotspots}
              title={`${project.title} — Floor Plan & CAD Overlay`}
            />
          )}

          {/* Materials Palette Section */}
          <div className="my-20 bg-stone/30 p-8 md:p-12 border border-stone/50">
            <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
              03 — Materiality &amp; Tactile Language
            </p>
            <h3 className="font-serif text-3xl text-charcoal mb-8">Selected Material Palette</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.materials.map((mat) => (
                <div key={mat.name} className="bg-ivory p-6 border border-stone/60">
                  <div className="w-6 h-6 rounded-sm mb-4" style={{ background: mat.accent }} />
                  <h4 className="font-serif text-xl text-charcoal mb-2">{mat.name}</h4>
                  <p className="text-charcoal/70 font-sans text-xs font-light leading-relaxed">{mat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* High Resolution Gallery */}
          <div className="my-20">
            <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
              04 — Visual Documentation
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">Project Gallery</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.url)}
                  className="group cursor-pointer bg-stone overflow-hidden relative aspect-[4/3]"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-ivory font-sans text-xs tracking-wide">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Switcher Navigation */}
          <div className="mt-24 pt-12 border-t border-stone/60 flex flex-col sm:flex-row justify-between gap-8">
            <Link
              to={`/projects/${prevProject.id}`}
              className="group text-left p-6 border border-stone/50 hover:border-charcoal transition-all flex-1"
            >
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mb-1">← Previous Project</p>
              <p className="font-serif text-2xl text-charcoal group-hover:italic">{prevProject.title}</p>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="group text-right p-6 border border-stone/50 hover:border-charcoal transition-all flex-1"
            >
              <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mb-1">Next Project →</p>
              <p className="font-serif text-2xl text-charcoal group-hover:italic">{nextProject.title}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] bg-charcoal/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img src={selectedImage} alt="Full view" className="w-full h-full object-contain max-h-[85vh] mx-auto" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-ivory text-xl bg-charcoal/60 px-4 py-2 border border-ivory/20"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
