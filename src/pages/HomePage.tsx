import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import StudioIntro from '../sections/StudioIntro';
import Services from '../sections/Services';
import Philosophy from '../sections/Philosophy';
import Process from '../sections/Process';
import About from '../sections/About';
import Instagram from '../sections/Instagram';
import Contact from '../sections/Contact';
import { PROJECTS_DATA } from '../data/projectsData';
import { useReveal } from '../hooks/useReveal';

export default function HomePage() {
  const workRef = useRef<HTMLElement>(null);
  const workVisible = useReveal(workRef);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Studio Introduction */}
      <StudioIntro />

      {/* Featured Projects Highlight Section */}
      <section
        ref={workRef}
        className="bg-ivory py-24 md:py-36 border-t border-stone/40"
        aria-labelledby="featured-work-heading"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-1000 ${workVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div>
              {/* <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
                02 — Selected Portfolio
              </p> */}
              <h2
                id="featured-work-heading"
                className="font-serif text-charcoal leading-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Featured Work
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-3 border border-charcoal text-charcoal text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-3.5 hover:bg-charcoal hover:text-ivory transition-all duration-300 group self-start md:self-auto"
            >
              Explore Full Portfolio ({PROJECTS_DATA.length}+ Projects)
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Grid of featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, i) => (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${workVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Link to={`/projects/${project.id}`} className="block overflow-hidden bg-stone aspect-[4/3] mb-5 relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 text-ivory text-[9px] font-sans font-medium tracking-[0.18em] uppercase px-3 py-1.5 backdrop-blur-sm">
                    {project.categoryLabel}
                  </div>
                </Link>

                <p className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase mb-1">
                  {project.location} · {project.year}
                </p>
                <h3 className="font-serif text-2xl text-charcoal mb-2 group-hover:italic transition-all">
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-charcoal/60 font-sans font-light text-xs line-clamp-2 leading-relaxed mb-4">
                  {project.tagline}
                </p>
                {/* <Link
                  to={`/projects/${project.id}`}
                  className="text-espresso text-[9px] font-sans font-semibold tracking-[0.2em] uppercase inline-flex items-center gap-2 group/link hover:gap-3 transition-all"
                >
                  View Case Study <span aria-hidden="true">→</span>
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Services & Disciplines */}
      <Services />

      {/* 04 — Architectural Philosophy */}
      <Philosophy />

      {/* 05 — Design Process */}
      <Process />

      {/* 06 — Founder Spotlight & About */}
      <About />

      {/* 07 — Client Video Reels & Instagram */}
      <Instagram />

      {/* 08 — Contact & Consultation */}
      <Contact />
    </div>
  );
}
