export interface GraphicDesign {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  tags: string[];
  featured: boolean;
}

export interface DesignTab {
  id: string;
  name: string;
  icon: string;
}

// Design tabs configuration
export const designTabs: DesignTab[] = [
  { id: 'design', name: 'Design', icon: '🎨' },
  { id: 'video', name: 'Video', icon: '🎬' },
];

// Graphic designs data
export const graphicDesigns: GraphicDesign[] = [
  // Design Items
  {
    id: 1,
    title: 'Design Portfolio 1',
    description: 'Creative design work showcasing modern visual aesthetics and innovative layout concepts.',
    image: '/design/1.jpg',
    type: 'design',
    tags: ['Portfolio', 'Creative', 'Modern', 'Visual'],
    featured: true,
  },
  {
    id: 2,
    title: 'Design Portfolio 2',
    description: 'Professional design project with clean typography and sophisticated color palette.',
    image: '/design/2.jpg',
    type: 'design',
    tags: ['Professional', 'Typography', 'Clean', 'Sophisticated'],
    featured: false,
  },
  {
    id: 3,
    title: 'Design Portfolio 3',
    description: 'Bold and dynamic design featuring striking visual elements and contemporary style.',
    image: '/design/6.jpg',
    type: 'design',
    tags: ['Bold', 'Dynamic', 'Contemporary', 'Striking'],
    featured: true,
  },
  {
    id: 4,
    title: 'Design Portfolio 4',
    description: 'Elegant design solution with refined aesthetics and attention to detail.',
    image: '/design/4.PNG',
    type: 'design',
    tags: ['Elegant', 'Refined', 'Detail', 'Aesthetic'],
    featured: false,
  },
  {
    id: 5,
    title: 'Design Portfolio 5',
    description: 'Comprehensive design project showcasing versatility and creative problem-solving.',
    image: '/design/7.PNG',
    type: 'design',
    tags: ['Comprehensive', 'Versatile', 'Creative', 'Problem-solving'],
    featured: true,
  },
  {
    id: 6,
    title: 'Design Portfolio 6',
    description: 'Modern design approach with innovative concepts and user-centered thinking.',
    image: '/design/3.PNG',
    type: 'design',
    tags: ['Modern', 'Innovative', 'User-centered', 'Concept'],
    featured: false,
  },
  {
    id: 7,
    title: 'Design Portfolio 7',
    description: 'Artistic design work with creative flair and expressive visual communication.',
    image: '/design/5.PNG',
    type: 'design',
    tags: ['Artistic', 'Creative', 'Expressive', 'Communication'],
    featured: true,
  },
  {
    id: 8,
    title: 'Design Portfolio 8',
    description: 'Professional design solution with strategic thinking and brand consistency.',
    image: '/design/8.PNG',
    type: 'design',
    tags: ['Professional', 'Strategic', 'Brand', 'Consistency'],
    featured: false,
  },
  {
    id: 9,
    title: 'Design Portfolio 9',
    description: 'Innovative design project pushing creative boundaries and exploring new possibilities.',
    image: '/design/9.PNG',
    type: 'design',
    tags: ['Innovative', 'Boundaries', 'Exploration', 'Possibilities'],
    featured: true,
  },
  {
    id: 10,
    title: 'Design Portfolio 10',
    description: 'Final design showcase representing the culmination of creative vision and technical skill.',
    image: '/design/10.PNG',
    type: 'design',
    tags: ['Showcase', 'Vision', 'Technical', 'Skill'],
    featured: false,
  },

  // Video Items
  {
    id: 11,
    title: 'Ragam Svarav V1',
    description: 'First version of Ragam Svarav video project showcasing creative video production and storytelling.',
    image: '/video/ragamsvarav1.mp4',
    type: 'video',
    tags: ['Ragam Svarav', 'Version 1', 'Storytelling', 'Production'],
    featured: true,
  },
  {
    id: 12,
    title: 'Ragam Svarav V2',
    description: 'Second version of Ragam Svarav with enhanced visuals and improved narrative flow.',
    image: '/video/ragamsvarav2.mp4',
    type: 'video',
    tags: ['Ragam Svarav', 'Version 2', 'Enhanced', 'Narrative'],
    featured: false,
  },
  {
    id: 13,
    title: 'Selatan Superia',
    description: 'Selatan Superia video project featuring dynamic visuals and engaging content presentation.',
    image: '/video/selatansuperia.mp4',
    type: 'video',
    tags: ['Selatan Superia', 'Dynamic', 'Engaging', 'Presentation'],
    featured: true,
  },
];

// Helper functions
export const getFeaturedDesigns = (): GraphicDesign[] => {
  return graphicDesigns.filter(design => design.featured);
};

export const getAllDesigns = (): GraphicDesign[] => {
  return graphicDesigns;
};

export const getDesignsByType = (type: string): GraphicDesign[] => {
  return graphicDesigns.filter(design => design.type === type);
};

export const getDesignById = (id: number): GraphicDesign | undefined => {
  return graphicDesigns.find(design => design.id === id);
};
