export interface Service {
  id: string;
  number: string;
  title: string;
  pdfTagline: string;
  description: string;
  scopeOfWork: string[];
  deliverables: string[];
  image: string;
  iconName: string;
  estimatedTimeline: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'architectural-service',
    number: '01',
    title: 'Architectural Service',
    pdfTagline: 'We focus on durability, accessibility, and forward-thinking structures.',
    description:
      'From initial site analysis to structural design and construction administration, we craft high-end personalized spaces that marry grandeur with functional warmth. Our architectural practice explores the relationship between context, material, and human movement.',
    scopeOfWork: [
      'Site analysis, climate studies & zoning evaluation',
      'Architectural master planning & concept development',
      'Structural design & MEP engineering coordination',
      'Building authority approvals & municipal permits',
      'Construction documentation & site supervision',
    ],
    deliverables: [
      'Full architectural drawing sets (1:50 & 1:20 details)',
      '3D spatial models & sun-path analysis',
      'Material schedules & structural specifications',
      'On-site quality supervision reports',
    ],
    image: 'https://images.unsplash.com/photo-1761870065047-f2da9429db23?w=800&h=600&fit=crop&auto=format',
    iconName: 'Compass',
    estimatedTimeline: '8 – 16 Weeks (Design Phase)',
  },
  {
    id: 'interior-designing',
    number: '02',
    title: 'Interior Designing',
    pdfTagline: 'Create a home or space that feels comfortable, functional, and beautifully yours.',
    description:
      'We curate environments that tell your story through disciplined material palettes, artisanal detailing, and seamless spatial sequences. We handle custom millwork, soft furnishings, lighting design, and art procurement.',
    scopeOfWork: [
      'Spatial layout & ergonomic space planning',
      'Custom furniture, joinery & cabinetry design',
      'Lighting design & electrical layout curation',
      'Material palette selection (wood, stone, metal, textiles)',
      'Turnkey vendor management & installation',
    ],
    deliverables: [
      'Detailed interior elevation & joinery drawings',
      'Material moodboards & physical sample palettes',
      'Furniture procurement list & custom specifications',
      'Lighting overlay plans & fixture schedules',
    ],
    image: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=800&h=600&fit=crop&auto=format',
    iconName: 'Armchair',
    estimatedTimeline: '6 – 12 Weeks',
  },
  {
    id: 'landscape-design',
    number: '03',
    title: 'Landscape Design',
    pdfTagline: 'Designing impactful outdoor environments that work in harmony with natural light.',
    description:
      'Designing impactful outdoor environments and spatial sequences that elevate your site. We integrate native plants, terraced stone pathways, outdoor pavilions, water features, and sustainable irrigation.',
    scopeOfWork: [
      'Landscape master planning & grading studies',
      'Softscape planting design & microclimate curation',
      'Hardscape detail design (paving, steps, retaining walls)',
      'Outdoor lighting, pergola & water feature design',
    ],
    deliverables: [
      'Planting schedules & native species guides',
      'Hardscape layout & stone paving specifications',
      'Irrigation & storm-water management drawings',
    ],
    image: 'https://images.unsplash.com/photo-1784407089139-0ea7d4c10c0d?w=800&h=600&fit=crop&auto=format',
    iconName: 'Trees',
    estimatedTimeline: '4 – 8 Weeks',
  },
  {
    id: '3d-visualization',
    number: '04',
    title: '3D Visualization & Rendering',
    pdfTagline: 'Photorealistic 3D visualization bringing complex concepts to life before construction.',
    description:
      'State-of-the-art photorealistic 3D renders, video walkthroughs, and virtual reality experiences that accurately communicate material texture, natural daylight conditions, and architectural atmosphere.',
    scopeOfWork: [
      'Photorealistic exterior & interior 3D rendering',
      'Architectural animation & video walkthrough reels',
      'Daylight & artificial lighting simulation',
      'Material & texture mapping from physical samples',
    ],
    deliverables: [
      'Ultra-high-definition 4K still renders',
      '60fps video walkthrough reels (ready for marketing/social)',
      '360° interactive virtual tours',
    ],
    image: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=800&h=600&fit=crop&auto=format',
    iconName: 'Box',
    estimatedTimeline: '2 – 4 Weeks',
  },
  {
    id: 'residential-design',
    number: '05',
    title: 'Residential Design',
    pdfTagline: 'Create a home that feels comfortable, functional, and beautifully yours.',
    description:
      'Bespoke villas, private bungalows, multi-generational estates, and luxury penthouses designed around the personal rhythms and heritage of each family.',
    scopeOfWork: [
      'Private bungalow & villa architecture',
      'Penthouse & luxury apartment transformations',
      'Family courtyards, pool pavilions & private spas',
    ],
    deliverables: [
      'Custom architectural drawings & 3D visualizations',
      'Turnkey residential interior curation',
    ],
    image: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?w=800&h=600&fit=crop&auto=format',
    iconName: 'Home',
    estimatedTimeline: 'Custom per Project',
  },
  {
    id: 'commercial-spaces',
    number: '06',
    title: 'Commercial Spaces',
    pdfTagline: 'Design impactful environment that elevate your brand and customer experience.',
    description:
      'High-impact corporate headquarters, retail flagship stores, luxury hospitality suites, and boutique offices that reflect company culture and inspire peak productivity.',
    scopeOfWork: [
      'Corporate office & headquarters architecture',
      'Boutique retail & showroom interior design',
      'Hospitality & fine dining restaurant spaces',
    ],
    deliverables: [
      'High-occupancy space planning & acoustic design',
      'Brand identity spatial integration',
    ],
    image: 'https://images.unsplash.com/photo-1786550765849-dffab1814552?w=800&h=600&fit=crop&auto=format',
    iconName: 'Building2',
    estimatedTimeline: 'Custom per Project',
  },
  {
    id: 'healthcare-architecture',
    number: '07',
    title: 'Healthcare Architecture',
    pdfTagline: 'We build environments centred on healing & efficiency.',
    description:
      'Specialized medical institutes, surgical centers, and wellness clinics designed around patient healing, natural light, sterile ergonomics, and medical workflow efficiency.',
    scopeOfWork: [
      'Surgical center & clinic spatial layout',
      'Acoustic insulation & sterile surface curation',
      'Circadian daylighting & biophilic waiting lounges',
    ],
    deliverables: [
      'Medical compliance & zoning architectural documentation',
      'Specialized hygienic material schedules',
    ],
    image: 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=800&h=600&fit=crop&auto=format',
    iconName: 'HeartPulse',
    estimatedTimeline: 'Custom per Project',
  },
];
