export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  featured: boolean;
}

export interface ProjectImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

export interface ProjectVideo {
  id: number;
  url: string;
  title: string;
  thumbnail: string;
}

export interface ProjectDetail extends Project {
  category: string;
  date: string;
  client: string;
  duration: string;
  images: ProjectImage[];
  videos: ProjectVideo[];
  features: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
}

// Global Projects Data
export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI, secure payments, inventory management, and advanced analytics dashboard.',
    longDescription: 'This comprehensive e-commerce platform was built to handle high-traffic loads while maintaining exceptional user experience. The project features a modern React frontend, robust Node.js backend, and integrates with multiple third-party services for payments, shipping, and analytics. The platform supports multi-vendor functionality, real-time inventory tracking, and advanced customer analytics.',
    image: '/',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500 to-teal-600',
    featured: true,
    category: 'Web Application',
    date: 'January 2024',
    client: 'TechCorp Solutions',
    duration: '4 months',
    images: [
      { id: 1, url: '/api/placeholder/800/600', title: 'Homepage Design', description: 'Modern and clean homepage with featured products' },
      { id: 2, url: '/api/placeholder/800/600', title: 'Product Catalog', description: 'Advanced filtering and search functionality' },
      { id: 3, url: '/api/placeholder/800/600', title: 'Shopping Cart', description: 'Intuitive cart with real-time price calculations' },
      { id: 4, url: '/api/placeholder/800/600', title: 'Checkout Process', description: 'Streamlined checkout with multiple payment options' },
      { id: 5, url: '/api/placeholder/800/600', title: 'Admin Dashboard', description: 'Comprehensive analytics and inventory management' },
      { id: 6, url: '/api/placeholder/800/600', title: 'Mobile Responsive', description: 'Fully optimized for mobile devices' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/video.mp4', title: 'Platform Demo', thumbnail: '/api/placeholder/400/300' },
      { id: 2, url: '/api/placeholder/video2.mp4', title: 'Admin Features', thumbnail: '/api/placeholder/400/300' },
    ],
    features: [
      'Multi-vendor marketplace',
      'Real-time inventory tracking',
      'Advanced search and filtering',
      'Secure payment processing',
      'Order management system',
      'Customer analytics dashboard',
      'Mobile-responsive design',
      'Email notifications',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis', 'AWS S3', 'Tailwind CSS'],
    challenges: [
      'Handling high-traffic loads during peak sales',
      'Implementing real-time inventory synchronization',
      'Ensuring secure payment processing',
      'Creating responsive design for all devices',
    ],
    solutions: [
      'Implemented Redis caching and database optimization',
      'Used WebSocket connections for real-time updates',
      'Integrated Stripe with PCI compliance',
      'Adopted mobile-first design approach',
    ],
  },
  {
    id: 2,
    title: 'Landing Page UONEPAY',
    description: 'A landing page for UONEPAY with modern design, responsive layout, and seamless user experience.',
    longDescription: 'This task management application was designed for modern teams who need efficient collaboration tools. Built with React and Socket.io for real-time updates, the app features drag-and-drop task organization, team chat integration, advanced reporting, and productivity analytics. The application supports multiple project types and integrates with popular third-party tools.',
    image: '/cover_uone.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://uonepay.co',
    githubUrl: '#',
    color: 'from-orange-500 to-red-600',
    featured: true,
    category: 'Landing Page',
    date: 'March 2024',
    client: 'UONEPAY',
    duration: '1 months',
    images: [
      { id: 1, url: '/cover_uone.png', title: 'Homepage Design', description: 'Modern landing page with hero section' },
      { id: 2, url: '/uonepay/1.png', title: 'Contact Section', description: 'Contact section with form and details' },
      { id: 3, url: '/uonepay/3.png', title: 'Featured Section', description: 'Featured projects showcase' },
      { id: 4, url: '/uonepay/4.png', title: 'Payment Channels', description: 'Interactive payment channels' },
        { id: 5, url: '/uonepay/2.png', title: 'Footer Design', description: 'Clean and informative footer' },
    ],
    videos: [
      { id: 1, url: '/uonepay/vid.mp4', title: 'Landing Page Demo', thumbnail: '/cover_uone.png' },
    ],
    features: [
      'Modern responsive design',
      'Fast loading performance',
      'SEO optimized',
      'Contact forms',
      'Smooth animations',
      'Cross-browser compatibility',
      'Mobile-first approach',
      'Analytics integration',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    challenges: [
      'Optimizing loading performance',
      'Creating engaging animations',
      'Ensuring cross-browser compatibility',
    ],
    solutions: [
      'Implemented lazy loading and image optimization',
      'Used Framer Motion for smooth animations',
      'Tested across multiple browsers and devices',
    ],
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'An intelligent chat application powered by AI with natural language processing, conversation history, and customizable personas.',
    longDescription: 'This AI-powered chat application leverages modern natural language processing to provide intelligent conversations. Built with React and integrated with OpenAI APIs, the application features customizable AI personas, conversation history, context awareness, and advanced message formatting. The app includes real-time typing indicators, message reactions, and export functionality.',
    image: '/',
    tags: ['React', 'OpenAI API', 'Express.js', 'WebSocket', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-500 to-blue-600',
    featured: true,
    category: 'AI Application',
    date: 'May 2024',
    client: 'AI Innovations Ltd',
    duration: '2 months',
    images: [
      { id: 1, url: '/api/placeholder/800/600', title: 'Chat Interface', description: 'Clean and modern chat interface' },
      { id: 2, url: '/api/placeholder/800/600', title: 'AI Personas', description: 'Customizable AI personality settings' },
      { id: 3, url: '/api/placeholder/800/600', title: 'Conversation History', description: 'Organized chat history with search' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/video.mp4', title: 'AI Demo', thumbnail: '/api/placeholder/400/300' },
    ],
    features: [
      'AI-powered conversations',
      'Customizable personas',
      'Conversation history',
      'Context awareness',
      'Real-time typing indicators',
      'Message export',
      'Dark/light themes',
      'Voice input support',
    ],
    technologies: ['React', 'OpenAI API', 'Express.js', 'WebSocket', 'PostgreSQL'],
    challenges: [
      'Managing API rate limits',
      'Maintaining conversation context',
      'Optimizing response times',
    ],
    solutions: [
      'Implemented intelligent caching system',
      'Used conversation threading',
      'Added response streaming',
    ],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A stunning portfolio website with modern animations, dark mode support, and responsive design showcasing creative projects.',
    longDescription: 'This portfolio demonstrates advanced frontend skills with smooth animations, optimized performance, and modern web technologies.',
    image: '/cover_uone.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-500 to-pink-600',
    featured: false,
    category: 'Portfolio',
    date: 'June 2024',
    client: 'Personal Project',
    duration: '1 month',
    images: [
      { id: 1, url: '/api/placeholder/800/600', title: 'Homepage', description: 'Modern portfolio homepage with animations' },
      { id: 2, url: '/api/placeholder/800/600', title: 'Projects Gallery', description: 'Interactive projects showcase' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/video.mp4', title: 'Portfolio Demo', thumbnail: '/api/placeholder/400/300' },
    ],
    features: [
      'Modern animations',
      'Dark mode support',
      'Responsive design',
      'Project showcase',
      'Contact forms',
      'Performance optimized',
    ],
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    challenges: [
      'Creating smooth animations',
      'Optimizing performance',
      'Responsive design implementation',
    ],
    solutions: [
      'Used Framer Motion for animations',
      'Implemented code splitting',
      'Mobile-first design approach',
    ],
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.',
    longDescription: 'Full-featured banking solution with advanced security measures, intuitive UI/UX, and seamless integration with financial services.',
    image: '/cover_uone.png',
    tags: ['React Native', 'Firebase', 'Plaid API', 'Redux', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-indigo-500 to-purple-600',
    featured: false,
    category: 'Mobile App',
    date: 'July 2024',
    client: 'FinTech Startup',
    duration: '5 months',
    images: [
      { id: 1, url: '/api/placeholder/800/600', title: 'App Interface', description: 'Clean mobile banking interface' },
      { id: 2, url: '/api/placeholder/800/600', title: 'Security Features', description: 'Biometric authentication screens' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/video.mp4', title: 'App Demo', thumbnail: '/api/placeholder/400/300' },
    ],
    features: [
      'Biometric authentication',
      'Real-time transactions',
      'Financial analytics',
      'Secure messaging',
      'Bill payments',
      'Investment tracking',
    ],
    technologies: ['React Native', 'Firebase', 'Plaid API', 'Redux', 'TypeScript'],
    challenges: [
      'Implementing secure authentication',
      'Real-time data synchronization',
      'Regulatory compliance',
    ],
    solutions: [
      'Used Firebase Auth with biometrics',
      'Implemented WebSocket connections',
      'Followed banking security standards',
    ],
  },
];

// Helper functions
export const getFeaturedProjects = (): ProjectDetail[] => {
  return projectsData.filter(project => project.featured);
};

export const getProjectById = (id: number): ProjectDetail | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getAllProjects = (): ProjectDetail[] => {
  return projectsData;
};
