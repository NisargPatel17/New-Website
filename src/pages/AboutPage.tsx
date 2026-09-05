import { Link } from 'react-router-dom';
import VALogo from '../components/VALogo';

const TEAM_LEADS = [
  {
    name: 'Pathik Chandarana',
    title: 'Founder & CEO',
    bio: 'Leading Visionary Architects with a commitment to structural innovation, material discipline, and timeless architectural elegance in modern Indian design.',
    image: 'https://images.unsplash.com/photo-1758565811024-d0c0bee3223f?w=600&h=800&fit=crop&auto=format',
  },
  {
    name: 'Architectural Design Team',
    title: 'Senior Associates & BIM Specialists',
    bio: 'A multidisciplinary collective of architects, CAD leads, interior curators, and landscape planners bringing complex projects to life.',
    image: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=600&h=800&fit=crop&auto=format',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ivory text-charcoal pt-32 pb-24 md:pt-40 md:pb-36 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-20 border-b border-stone/60 pb-16">
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
            About Visionary Architects
          </p>
          <h1
            className="font-serif text-charcoal leading-none mb-8"
            style={{ fontSize: 'clamp(42px, 6.5vw, 92px)' }}
          >
            Where Structural Innovation Meets Bespoke Interior Elegance.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
            <div className="lg:col-span-7 font-sans font-light text-base md:text-lg leading-relaxed space-y-6 text-charcoal/80">
              <p>
                Welcome to Visionary Architects, a multidisciplinary architecture and interior design studio dedicated to crafting high-end, personalized spaces that marry grandeur with functional warmth.
              </p>
              <p>
                We don't just build structures; we curate environments that tell your story through disciplined material palettes, artisanal detailing, and seamless spatial sequences.
              </p>
            </div>
            <div className="lg:col-span-5 bg-espresso text-ivory p-8 md:p-10 border-l-4 border-amber-600 shadow-lg">
              <VALogo size={36} color="#F2EEE8" className="mb-6 opacity-80" />
              <p className="text-amber-500/90 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-1">
                Founder &amp; CEO
              </p>
              <p className="font-serif text-3xl text-ivory mb-2">Pathik Chandarana</p>
              <p className="text-ivory/60 font-sans text-xs uppercase tracking-widest mb-6">
                Visionary Architects · Ahmedabad
              </p>
              <p className="text-ivory/80 font-sans font-light text-xs leading-relaxed italic border-t border-white/10 pt-4">
                "Good architecture is not only seen — it is experienced through the harmony of light, material, climate and human scale."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="my-24">
          <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
            Our Architectural Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-12">The Three Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone/20 p-8 border border-stone/60">
              <span className="text-amber-700/60 font-serif text-4xl block mb-4">01</span>
              <h3 className="font-serif text-2xl text-charcoal mb-3 italic">Context &amp; Place</h3>
              <p className="text-charcoal/70 font-sans font-light text-sm leading-relaxed">
                Design that responds to site microclimate, local quarry stones, orientation, and surrounding ecology — architecture rooted where it belongs.
              </p>
            </div>
            <div className="bg-stone/20 p-8 border border-stone/60">
              <span className="text-amber-700/60 font-serif text-4xl block mb-4">02</span>
              <h3 className="font-serif text-2xl text-charcoal mb-3 italic">Functional Warmth</h3>
              <p className="text-charcoal/70 font-sans font-light text-sm leading-relaxed">
                Spaces planned around real human movement, quiet sanctuary, and family gathering — avoiding cold ostentation in favor of liveable elegance.
              </p>
            </div>
            <div className="bg-stone/20 p-8 border border-stone/60">
              <span className="text-amber-700/60 font-serif text-4xl block mb-4">03</span>
              <h3 className="font-serif text-2xl text-charcoal mb-3 italic">Material Discipline</h3>
              <p className="text-charcoal/70 font-sans font-light text-sm leading-relaxed">
                Honest expression of raw granite, teak, brass, concrete and glass — allowing age and natural light to weather each surface gracefully.
              </p>
            </div>
          </div>
        </div>

        {/* Founder & Team Spotlight */}
        <div className="my-24 bg-charcoal text-ivory p-10 md:p-16 border border-white/10">
          <div className="max-w-3xl mb-12">
            <p className="text-amber-400 text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-2">
              Studio Leadership
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">The People Behind the Spaces</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEAM_LEADS.map((member) => (
              <div key={member.name} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-44 aspect-[3/4] bg-stone shrink-0 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div>
                  <p className="text-amber-400 text-[9px] font-sans tracking-[0.2em] uppercase mb-1">{member.title}</p>
                  <h3 className="font-serif text-2xl text-ivory mb-3">{member.name}</h3>
                  <p className="text-ivory/60 font-sans font-light text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Location & Contact Card */}
        <div className="my-24 bg-stone/30 p-10 md:p-14 border border-stone/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.25em] uppercase">
              Visit Our Studio
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
              1209, Satyamev Eminence, Science City, Ahmedabad – 380060
            </h3>
            <p className="text-charcoal/70 font-sans text-sm">
              Phone: +91 79846 31148 | Email: visionaryarchitects.va@gmail.com
            </p>
          </div>
          <div className="lg:col-span-4 text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-charcoal text-ivory text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-8 py-4 hover:bg-espresso transition-all"
            >
              Get Studio Directions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
