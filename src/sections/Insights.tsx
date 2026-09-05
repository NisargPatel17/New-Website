import { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const CATEGORIES = ['ALL', 'ARCHITECTURE', 'INTERIORS', 'MATERIALS', 'PROCESS', 'IDEAS'] as const;
type Category = typeof CATEGORIES[number];

const ARTICLES = [
  {
    id: 1,
    category: 'ARCHITECTURE',
    title: 'The Architecture of Light',
    excerpt:
      'How natural light shapes the experience of space — from the angle of a window to the texture of a wall.',
    date: 'September 2026',
    image: 'https://images.unsplash.com/photo-1761870065047-f2da9429db23?w=800&h=500&fit=crop&auto=format',
    alt: 'White modern architecture against blue sky',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'INTERIORS',
    title: 'Designing Homes Around Everyday Life',
    excerpt:
      'Interior architecture that responds to how people actually move, gather and rest — not just how they pose for photographs.',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=600&h=400&fit=crop&auto=format',
    alt: 'Contemporary living interior with sectional sofa',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'MATERIALS',
    title: 'Materiality and the Modern Indian Home',
    excerpt:
      'Stone, concrete, wood and the local material tradition — building a contemporary Indian architecture that is honest about where it is.',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=600&h=400&fit=crop&auto=format',
    alt: 'Interior with natural materials and plants',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'IDEAS',
    title: 'The Role of Landscape in Architecture',
    excerpt:
      'Landscape is not a background — it is an active part of the architectural experience, shaping movement, views and the passage of time.',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?w=600&h=400&fit=crop&auto=format',
    alt: 'Serene natural interior with organic forms',
    readTime: '5 min read',
    featured: false,
  },
];

export default function Insights() {
  const [filter, setFilter] = useState<Category>('ALL');
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);

  const filtered = filter === 'ALL' ? ARTICLES : ARTICLES.filter((a) => a.category === filter);

  const featured = filtered.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <section
      id="insights"
      ref={ref}
      className="bg-ivory border-t border-stone/50 py-24 md:py-36 lg:py-44"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div>
              <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
                08 — Insights
              </p>
              <h2
                id="insights-heading"
                className="font-serif text-charcoal leading-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Insights
              </h2>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`text-[9px] font-sans font-medium tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-300 ${
                    filter === c
                      ? 'bg-charcoal text-ivory border-charcoal'
                      : 'bg-transparent text-charcoal/50 border-stone hover:border-charcoal/40 hover:text-charcoal'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-stone" />
        </div>

        {/* Articles grid */}
        <div
          className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Featured article */}
          {featured && (
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-stone/50">
              <div className="md:col-span-7 overflow-hidden bg-stone aspect-video">
                <img
                  src={featured.image}
                  alt={featured.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase">
                    {featured.category}
                  </span>
                  <span className="w-1 h-1 bg-warm-gray/40 rounded-full" aria-hidden="true" />
                  <span className="text-charcoal/40 text-[9px] font-sans tracking-[0.1em]">{featured.readTime}</span>
                </div>
                <h3 className="font-serif text-charcoal leading-snug mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
                  {featured.title}
                </h3>
                <p className="text-charcoal/50 font-sans font-light text-sm leading-relaxed mb-6 tracking-wide">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/30 text-[9px] font-sans tracking-[0.12em]">{featured.date}</span>
                  <span className="text-espresso text-[9px] font-sans font-medium tracking-[0.2em] uppercase inline-flex items-center gap-2 cursor-pointer hover:gap-3 transition-all duration-200">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((article, i) => (
              <article
                key={article.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="overflow-hidden bg-stone aspect-[4/3] mb-5">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-warm-gray text-[9px] font-sans tracking-[0.2em] uppercase">
                    {article.category}
                  </span>
                  <span className="w-1 h-1 bg-warm-gray/40 rounded-full" aria-hidden="true" />
                  <span className="text-charcoal/40 text-[9px] font-sans">{article.readTime}</span>
                </div>
                <h3 className="font-serif text-charcoal text-xl mb-3 group-hover:italic transition-all duration-300">
                  {article.title}
                </h3>
                <p className="text-charcoal/50 font-sans font-light text-xs leading-relaxed tracking-wide">
                  {article.excerpt}
                </p>
                <p className="text-charcoal/30 text-[9px] font-sans tracking-[0.12em] mt-4">{article.date}</p>
              </article>
            ))}
          </div>

          <p className="text-warm-gray/40 text-[9px] font-sans tracking-[0.15em] italic mt-12 text-center">
            Placeholder articles — replace with Visionary Architects published content.
          </p>
        </div>
      </div>
    </section>
  );
}
