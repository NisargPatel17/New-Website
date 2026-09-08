export interface BlueprintHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  material?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'COMMERCIAL' | 'INTERIORS' | 'HEALTHCARE' | 'INSTITUTIONAL' | 'LANDSCAPE' | '3D_VISUALIZATION';
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  client: string;
  leadArchitect: string;
  heroImage: string;
  gallery: { url: string; caption: string }[];
  tagline: string;
  brief: string;
  concept: string;
  materials: { name: string; description: string; accent: string }[];
  blueprintUrl?: string;
  hotspots?: BlueprintHotspot[];
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aspen-ridge-pavilion',
    title: 'Aspen Ridge Pavilion & Residence',
    category: 'INTERIORS',
    categoryLabel: 'Bespoke Interiors',
    location: 'Science City Road, Ahmedabad',
    year: '2025',
    area: '8,500 sq ft',
    client: 'Private Client',
    leadArchitect: 'Pathik Chandarana',
    heroImage: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?w=1600&h=900&fit=crop&auto=format',
    tagline: 'Harmonizing raw granite, floor-to-ceiling glass, and tranquil courtyards.',
    brief: 'The client envisioned a multi-generational sanctuary where luxury indoor living seamlessly dissolves into sprawling landscape gardens while providing quiet privacy from the urban noise of Ahmedabad.',
    concept: 'Built around a series of enclosed light wells and cantilevered stone slabs, the residence responds dynamically to Gujarat’s climate — blocking harsh afternoon heat with deep overhangs while channeling cool breeze through central water courtyards.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?w=1200&h=800&fit=crop&auto=format',
        caption: 'North elevation highlighting cantilevered stone overhangs and double-height glazing.',
      },
      {
        url: 'https://images.unsplash.com/photo-1758565811024-d0c0bee3223f?w=1200&h=800&fit=crop&auto=format',
        caption: 'Panoramic dining area overlooking the sunken reflecting pool.',
      },
      {
        url: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=1200&h=800&fit=crop&auto=format',
        caption: 'Custom walnut wall panelling with integrated indirect acoustic ceiling lighting.',
      },
      {
        url: 'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?w=1200&h=800&fit=crop&auto=format',
        caption: 'Master bath featuring book-matched Italian marble and organic oval bath fixture.',
      },
    ],
    materials: [
      { name: 'Kota Stone Slabs', description: 'Hand-chiselled local stone with thermal mass benefits.', accent: '#8C827A' },
      { name: 'Low-E Double Glazing', description: 'Thermal-break curtain walls reducing solar heat gain.', accent: '#a0c8e6' },
      { name: 'Reclaimed Teak Wood', description: 'Warm tactile louvers for natural privacy screening.', accent: '#a67548' },
    ],
    blueprintUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format',
    hotspots: [
      { id: '1', x: 25, y: 35, title: 'Central Light Court', description: 'Open-to-sky courtyard providing natural stack-effect ventilation.', material: 'Kota Stone' },
      { id: '2', x: 60, y: 55, title: 'Great Room & Loggia', description: '14-foot motorized glass doors that retract into hidden wall pockets.', material: 'Low-E Glazing' },
      { id: '3', x: 80, y: 25, title: 'Cantilevered Pavilion', description: 'Pre-stressed concrete canopy creating shaded outdoor lounge area.', material: 'Raw Concrete' },
    ],
    featured: true,
  },
  {
    id: 'satyamev-corporate-headquarters',
    title: 'Satyamev Commercial Tower',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial Spaces',
    location: 'SG Highway, Ahmedabad',
    year: '2026',
    area: '24,000 sq ft',
    client: 'Satyamev Developers',
    leadArchitect: 'Pathik Chandarana',
    heroImage: 'https://images.unsplash.com/photo-1786550765849-dffab1814552?w=1600&h=900&fit=crop&auto=format',
    tagline: 'An iconic glass & geometric panel facade elevating corporate identity.',
    brief: 'A landmark commercial development designed to accommodate tech headquarters, executive suites, and collaborative innovation lounges with maximum energy efficiency.',
    concept: 'Using a double-skin kinetic louver facade, the building self-shades during peak sunlight hours while maximizing natural daylight deep within the open-plan office plates.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1786550765849-dffab1814552?w=1200&h=800&fit=crop&auto=format',
        caption: 'Geometric double-skin facade under evening illumination.',
      },
      {
        url: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=1200&h=800&fit=crop&auto=format',
        caption: 'Triple-height reception atrium with board-formed concrete pillars.',
      },
    ],
    materials: [
      { name: 'Anodized Bronze Aluminum', description: 'Corrosion-resistant custom triangular sunshades.', accent: '#888078' },
      { name: 'Board-Formed Concrete', description: 'Architectural concrete with visible wood-grain graining.', accent: '#7a7570' },
    ],
    blueprintUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&auto=format',
    hotspots: [
      { id: '1', x: 30, y: 40, title: 'Atrium Skylight', description: 'Structural glass roof channeling daylight down 5 office stories.', material: 'Laminated Glass' },
      { id: '2', x: 70, y: 65, title: 'Executive Sky Deck', description: 'Open-air garden lounge overlooking the city skyline.', material: 'Bronze Aluminum' },
    ],
    featured: true,
  },
  {
    id: 'zenith-wellness-center',
    title: 'Aura Healthcare & Healing Center',
    category: 'HEALTHCARE',
    categoryLabel: 'Healthcare Architecture',
    location: 'Ambli Road, Ahmedabad',
    year: '2025',
    area: '14,500 sq ft',
    client: 'Aura Medical Group',
    leadArchitect: 'Pathik Chandarana',
    heroImage: 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=1600&h=900&fit=crop&auto=format',
    tagline: 'Biophilic healthcare design focused on human recovery, light, and clinical efficiency.',
    brief: 'Designing a specialized specialty surgical and wellness institute that eliminates traditional cold hospital atmospheres in favor of serene, warm, light-filled environments.',
    concept: 'Integrated healing gardens, acoustic insulation, circadian light corridors, and antibacterial natural stone surfaces ensure patients and medical staff experience maximum comfort and focus.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1783667440357-bf89d00c2077?w=1200&h=800&fit=crop&auto=format',
        caption: 'Biophilic waiting lounge with continuous indoor bamboo courtyard.',
      },
      {
        url: 'https://images.unsplash.com/photo-1761870065047-f2da9429db23?w=1200&h=800&fit=crop&auto=format',
        caption: 'Exterior pavilion showcasing soothing horizontal sun louvers.',
      },
    ],
    materials: [
      { name: 'Antibacterial Terrazzo', description: 'Seamless hygienic flooring with recycled quartz aggregate.', accent: '#c8beb4' },
      { name: 'Sound-Dampening Birch', description: 'Acoustic slatted timber ceilings in patient wings.', accent: '#c4956a' },
    ],
    blueprintUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1862408?w=1200&h=800&fit=crop&auto=format',
    hotspots: [
      { id: '1', x: 45, y: 30, title: 'Healing Courtyard', description: 'Central zen garden accessible from recovery suites.', material: 'Birch & Bamboo' },
      { id: '2', x: 20, y: 70, title: 'Acoustic Reception', description: 'Double-glazed soundproof glass walls separating lobby and clinical suites.', material: 'Acoustic Terrazzo' },
    ],
    featured: true,
  },
  {
    id: 'suburb-landscape-estate',
    title: 'Bodh Institutional Campus',
    category: 'INSTITUTIONAL',
    categoryLabel: 'Institutional Architecture',
    location: 'Gandhinagar, Gujarat',
    year: '2024',
    area: '42,000 sq ft',
    client: 'Bodh Education Trust',
    leadArchitect: 'Pathik Chandarana',
    heroImage: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=1600&h=900&fit=crop&auto=format',
    tagline: 'Durability, accessibility, and forward-thinking structural form for future generations.',
    brief: 'A multi-disciplinary educational and research institute incorporating auditoriums, collaborative laboratories, and quiet study wings.',
    concept: 'Utilizing exposed concrete, thermal brickwork, and wide covered colonnades, the campus provides shaded pedestrian walkways and durable academic infrastructure designed to endure decades of use.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1785240825521-9880313e9b23?w=1200&h=800&fit=crop&auto=format',
        caption: 'Repetitive concrete architectural colonnade.',
      },
      {
        url: 'https://images.unsplash.com/photo-1784407089139-0ea7d4c10c0d?w=1200&h=800&fit=crop&auto=format',
        caption: 'Central amphitheater connecting the academic blocks.',
      },
    ],
    materials: [
      { name: 'Exposed Red Terracotta', description: 'High thermal mass local clay brickwork.', accent: '#7a5530' },
      { name: 'Cast Concrete Columns', description: 'Unadorned structural columns creating dramatic light shadows.', accent: '#5a5550' },
    ],
    featured: false,
  },
  {
    id: 'urban-sanctuary-penthouse',
    title: 'Eminence Penthouse Interiors',
    category: 'INTERIORS',
    categoryLabel: 'Interior Designing',
    location: 'Science City, Ahmedabad',
    year: '2026',
    area: '4,200 sq ft',
    client: 'Private Owner',
    leadArchitect: 'Pathik Chandarana',
    heroImage: 'https://images.unsplash.com/photo-1758565811024-d0c0bee3223f?w=1600&h=900&fit=crop&auto=format',
    tagline: 'Bespoke luxury interior curation blending minimalist leather, brass, and velvet.',
    brief: 'Transforming a top-floor duplex penthouse into a serene sanctuary of tailored furniture, ambient lighting, and rich material depth.',
    concept: 'Custom brass detailing, smoked oak cabinetry, and continuous Italian marble floors tie together living, dining, and outdoor terrace suites into one fluid luxury home.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1758565811024-d0c0bee3223f?w=1200&h=800&fit=crop&auto=format',
        caption: 'Formal dining suite with bronze pendant lights.',
      },
      {
        url: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=1200&h=800&fit=crop&auto=format',
        caption: 'Curated lounge featuring bespoke Italian leather furniture.',
      },
    ],
    materials: [
      { name: 'Smoked Oak Paneling', description: 'Hand-finished matte wood surfaces.', accent: '#7a5530' },
      { name: 'Brushed Brass Metalwork', description: 'Precision trim and custom lighting fixtures.', accent: '#888078' },
    ],
    featured: true,
  },
  {
    id: 'oasis-landscape-resort',
    title: 'The Terraces Landscape & Garden',
    category: 'LANDSCAPE',
    categoryLabel: 'Landscape Design',
    location: 'Sanand, Gujarat',
    year: '2025',
    area: '18,000 sq ft',
    client: 'Private Estate',
    leadArchitect: 'Pathik Chandarana',
    heroImage: 'https://images.unsplash.com/photo-1784407089139-0ea7d4c10c0d?w=1600&h=900&fit=crop&auto=format',
    tagline: 'Terraced stone gardens, indigenous flora, and tranquil water channels.',
    brief: 'Designing an expansive outdoor environment that seamlessly integrates with a private estate while managing monsoon drainage and local ecology.',
    concept: 'Cascading granite steps, native drought-tolerant plants, and reflecting pools create microclimates that reduce ambient outdoor temperatures by 4°C.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1784407089139-0ea7d4c10c0d?w=1200&h=800&fit=crop&auto=format',
        caption: 'Terraced stone pathways surrounded by native grasses.',
      },
    ],
    materials: [
      { name: 'Flamed Granite Paving', description: 'Non-slip outdoor stone paths.', accent: '#7a7570' },
      { name: 'Water Feature Slate', description: 'Dark basalt channels reflecting daylight.', accent: '#33241F' },
    ],
    featured: false,
  },
];
