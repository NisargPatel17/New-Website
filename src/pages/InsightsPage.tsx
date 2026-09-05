import { useState } from 'react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    id: 'architecture-of-light',
    category: 'ARCHITECTURE',
    title: 'The Architecture of Light & Shade in Gujarat',
    excerpt: 'How natural light shapes the experience of space — from deep overhangs to open-to-sky water courtyards in modern western Indian homes.',
    date: 'September 2026',
    readTime: '6 min read',
    author: 'Pathik Chandarana',
    image: 'https://images.unsplash.com/photo-1761870065047-f2da9429db23?w=800&h=500&fit=crop&auto=format',
    content: `Light is the primary building material of architecture. In tropical and semi-arid climates like Gujarat, the challenge of daylighting is never simply about letting sun in — it is about controlling heat while sculpting atmosphere.

Through double-skin louvers, deep loggias, and book-matched stone surfaces, we channel indirect northern daylight deep into living spaces while completely shielding windows from peak afternoon heat.`,
  },
  {
    id: 'materiality-indian-home',
    category: 'MATERIALS',
    title: 'Materiality and the Modern Indian Home',
    excerpt: 'Kota stone, exposed concrete, teak and natural brass — building contemporary architecture that remains honest to local quarry traditions.',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Visionary Architects',
    image: 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=800&h=500&fit=crop&auto=format',
    content: `Material choice defines the acoustic, tactile, and thermal performance of a home. We advocate for local stone that weathers gracefully over decades over polished synthetic finishes that age poorly.`,
  },
  {
    id: 'biophilic-healthcare-design',
    category: 'HEALTHCARE',
    title: 'Biophilic Healthcare Design & Human Recovery',
    excerpt: 'Designing specialty clinics and medical centers centered on healing, circadian light rhythm, and acoustic calm.',
    date: 'July 2026',
    readTime: '7 min read',
    author: 'Visionary Architects',
    image: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=800&h=500&fit=crop&auto=format',
    content: `Modern medical facilities must go beyond sterile efficiency. Incorporating bamboo gardens, acoustic birch paneling, and natural light wells measurably improves patient recovery speed and reduces clinician stress.`,
  },
];

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

  return (
    <div className="bg-ivory text-charcoal pt-32 pb-24 md:pt-40 md:pb-36 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 border-b border-stone/60 pb-12">
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
            Visionary Architects · Architectural Journal
          </p>
          <h1
            className="font-serif text-charcoal leading-none mb-6"
            style={{ fontSize: 'clamp(42px, 6vw, 84px)' }}
          >
            Insights &amp; Journal
          </h1>
          <p className="text-charcoal/70 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
            Essays on spatial geometry, local materiality, daylight control, and biophilic healthcare environments.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-stone/20 border border-stone/50 p-6 flex flex-col justify-between cursor-pointer group hover:border-charcoal transition-all"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone mb-6">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-[9px] font-sans text-warm-gray tracking-[0.2em] uppercase mb-2">
                  <span>{art.category}</span>
                  <span>·</span>
                  <span>{art.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl text-charcoal mb-3 group-hover:italic transition-all">
                  {art.title}
                </h2>
                <p className="text-charcoal/70 font-sans font-light text-xs leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone/40 flex justify-between items-center text-[9px] font-sans text-charcoal/50">
                <span>By {art.author}</span>
                <span className="text-espresso font-semibold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Read Essay →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-[200] bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-ivory text-charcoal max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12 border border-stone shadow-2xl relative">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-charcoal/60 hover:text-charcoal text-xl font-sans"
              >
                ✕
              </button>

              <span className="text-amber-700 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase block mb-2">
                {selectedArticle.category} · {selectedArticle.date}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                {selectedArticle.title}
              </h2>
              <p className="text-xs font-sans text-warm-gray mb-8">Author: {selectedArticle.author} ({selectedArticle.readTime})</p>

              <div className="aspect-[16/9] overflow-hidden bg-stone mb-8">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="font-sans font-light text-sm md:text-base leading-relaxed text-charcoal/80 whitespace-pre-line space-y-4">
                {selectedArticle.content}
              </div>

              <div className="mt-10 pt-6 border-t border-stone/50 text-right">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-charcoal text-ivory text-[10px] font-sans tracking-[0.2em] uppercase px-6 py-3"
                >
                  Close Essay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
