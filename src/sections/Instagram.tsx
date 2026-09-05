import { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const TESTIMONIAL_VIDEO = {
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  poster: 'https://images.unsplash.com/photo-1758565810954-7c97ad680715?w=800&h=1200&fit=crop&auto=format',
  clientName: 'Pathik Chandarana & Visionary Architects Client',
  project: 'Bespoke Residential & Interior Architecture',
  location: 'Ahmedabad, Gujarat',
  quote: '“Working with Visionary Architects turned our vision into an architectural masterpiece. The seamless integration of material, light, and functional elegance exceeded every expectation.”',
  rating: 5,
  likes: '3.8K',
  comments: '240',
  reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
};

const GRID_IMAGES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1787059591197-f3385d3df78d?w=600&h=600&fit=crop&auto=format',
    alt: 'Contemporary stone architecture detail',
    reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1758565810954-7c97ad680715?w=600&h=600&fit=crop&auto=format',
    alt: 'Interior kitchen with large windows overlooking landscape',
    reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=600&h=600&fit=crop&auto=format',
    alt: 'Concrete architectural pattern',
    reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1758565811024-d0c0bee3223f?w=600&h=600&fit=crop&auto=format',
    alt: 'Dining interior with landscape view',
    reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?w=600&h=600&fit=crop&auto=format',
    alt: 'Glass modern building facade',
    reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?w=600&h=600&fit=crop&auto=format',
    alt: 'Refined bathroom with natural accents',
    reelUrl: 'https://www.instagram.com/reel/Daz8ZmlyRfb/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
  },
];

export default function Instagram() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const visible = useReveal(ref);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const openInstagramReel = () => {
    window.open(TESTIMONIAL_VIDEO.reelUrl, '_blank', 'noopener,noreferrer');
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section
      id="instagram"
      ref={ref}
      className="bg-ivory py-24 md:py-36 border-t border-stone/30"
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div
          className={`mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-4">
              07 — Client Stories & Instagram
            </p>
            <h2
              id="instagram-heading"
              className="font-serif text-charcoal leading-tight"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
            >
              Client Testimonial Reel
            </h2>
            <p className="text-charcoal/60 font-sans font-light text-sm mt-2 tracking-wide max-w-md">
              Real client experiences, behind-the-scenes video reels, and architectural walkthroughs.
            </p>
          </div>
          <a
            href={TESTIMONIAL_VIDEO.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-charcoal text-charcoal text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-charcoal hover:text-ivory transition-all duration-300 group self-start md:self-auto"
          >
            Watch Testimonial on Instagram
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Featured Video Testimonial Reel Spotlight */}
        <div
          className={`mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center bg-stone/40 border border-stone p-6 md:p-10 lg:p-12 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column: Instagram Video Reel Player */}
          <div className="lg:col-span-5 flex justify-center">
            <a
              href={TESTIMONIAL_VIDEO.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[340px] aspect-[9/16] bg-charcoal overflow-hidden shadow-2xl group border border-white/10 block cursor-pointer"
              title="Click to view testimonial video reel on Instagram"
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                src={TESTIMONIAL_VIDEO.videoUrl}
                poster={TESTIMONIAL_VIDEO.poster}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Top Instagram Header Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent flex items-center justify-between text-ivory z-10 pointer-events-none">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-ivory/50 overflow-hidden bg-stone flex items-center justify-center font-serif text-xs font-bold text-charcoal">
                    VA
                  </div>
                  <div>
                    <span className="text-xs font-sans font-medium tracking-wide block leading-tight">
                      visionaryarchitects_
                    </span>
                    <span className="text-[9px] font-sans text-ivory/70 tracking-widest uppercase">
                      Client Testimonial Reel
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-sans px-2.5 py-1 bg-amber-500 text-charcoal font-semibold tracking-wider rounded uppercase">
                  OPEN IN INSTAGRAM ↗
                </span>
              </div>

              {/* Play/Pause Center Overlay */}
              <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-charcoal/70 backdrop-blur-md border border-ivory/30 flex items-center justify-center text-ivory group-hover:scale-110 transition-all duration-300 z-20 group-hover:bg-amber-500 group-hover:text-charcoal shadow-lg">
                <svg className="w-7 h-7 ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Bottom Reel UI overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent flex items-end justify-between z-10">
                <div className="space-y-1 max-w-[70%]">
                  <p className="text-xs text-ivory font-sans font-medium line-clamp-2 leading-snug">
                    {TESTIMONIAL_VIDEO.project}
                  </p>
                  <p className="text-[10px] text-ivory/70 font-sans tracking-wide">
                    📍 {TESTIMONIAL_VIDEO.location}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[9px] font-sans text-amber-400 font-semibold uppercase tracking-wider">
                    CLICK TO WATCH
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Detailed Testimonial Text & Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-amber-600 text-sm">
              {[...Array(TESTIMONIAL_VIDEO.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-xs font-sans text-charcoal/60 ml-2 font-medium">
                Verified Client Video Reel
              </span>
            </div>

            <blockquote className="font-serif text-charcoal text-xl md:text-2xl lg:text-3xl leading-relaxed italic">
              {TESTIMONIAL_VIDEO.quote}
            </blockquote>

            <div className="border-t border-stone pt-6">
              <p className="font-sans font-medium text-charcoal text-base">
                {TESTIMONIAL_VIDEO.clientName}
              </p>
              <p className="text-warm-gray text-xs font-sans tracking-wide mt-0.5">
                Client Review — {TESTIMONIAL_VIDEO.project} ({TESTIMONIAL_VIDEO.location})
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={TESTIMONIAL_VIDEO.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber-600 text-ivory text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-7 py-4 hover:bg-amber-500 transition-colors shadow-md"
              >
                Watch Full Testimonial Video on Instagram
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 6-image editorial grid */}
        <div className="space-y-4">
          <p className="text-xs font-sans font-medium tracking-[0.2em] text-charcoal/60 uppercase">
            Recent Editorial Feed & Instagram Walkthroughs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {GRID_IMAGES.map((img, i) => (
              <a
                key={img.id}
                href="https://www.instagram.com/visionaryarchitects_/"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden aspect-square bg-stone group transition-all duration-1000 ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
                aria-label={`Instagram post: ${img.alt}`}
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.06] group-hover:opacity-80"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        <p className="text-warm-gray/40 text-[9px] font-sans tracking-[0.15em] italic mt-6 text-center">
          Follow @visionaryarchitects_ on Instagram for full video walkthroughs and daily project updates.
        </p>
      </div>
    </section>
  );
}

