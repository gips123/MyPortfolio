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
    title: 'Disbursement Dashboard',
    description: 'A comprehensive disbursement dashboard system for managing fund transfers, merchant operations, and financial transactions with role-based access control.',
    longDescription: 'This disbursement dashboard was developed to streamline financial operations and fund management. The system provides secure fund transfers, merchant management, user administration, and detailed transaction tracking. Built with React.js and TypeScript, it features role-based access control (admin, maker, approver), comprehensive merchant onboarding, fund allocation management, and real-time transaction monitoring with detailed analytics and reporting capabilities.',
    image: '/disbursement/1.png',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-orange-500 to-red-600',
    featured: true,
    category: 'Web Application',
    date: 'July 2025',
    client: 'TechCorp Solutions',
    duration: '2 months',
    images: [
      { id: 1, url: '/disbursement/login.png' },
      { id: 2, url: '/disbursement/1.png' },
      { id: 3, url: '/disbursement/2.png' },
      { id: 4, url: '/disbursement/3.png' },
      { id: 5, url: '/disbursement/4.png' },
      { id: 6, url: '/disbursement/5.png' },
      { id: 7, url: '/disbursement/6.png' },
      { id: 8, url: '/disbursement/7.png' },
      { id: 9, url: '/disbursement/8.png' },
      { id: 10, url: '/disbursement/9.png' },
      { id: 11, url: '/disbursement/10.png' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/demo.mp4', title: 'Platform Demo', thumbnail: '/api/placeholder/400/300' },
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
    description: 'A modern landing page for UONEPAY payment gateway with responsive design, interactive features, and seamless user experience.',
    longDescription: 'This UONEPAY landing page was designed to showcase the payment gateway services with a modern, professional interface. Built with React and Next.js, it features responsive design, smooth animations, interactive payment channel demonstrations, and comprehensive service information. The page includes hero sections, feature showcases, merchant testimonials, and contact forms, all optimized for conversion and user engagement.',
    image: '/uonepay/cover.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://uonepay.co',
    githubUrl: 'https://github.com/gips123/MyPortfolio',
    color: 'from-orange-500 to-red-600',
    featured: true,
    category: 'Landing Page',
    date: 'July 2025',
    client: 'UONEPAY',
    duration: '1 months',
    images: [
      { id: 1, url: '/cover_uone.png' },
      { id: 2, url: '/uonepay/1.png' },
      { id: 3, url: '/uonepay/3.png' },
      { id: 4, url: '/uonepay/4.png' },
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
    title: 'Payment Gateway & Disbursement Dashboard',
    description: 'A comprehensive payment gateway system with disbursement capabilities, supporting multiple payment channels, real-time transactions, and detailed financial reporting.',
    longDescription: 'This payment gateway and disbursement system was developed to handle secure financial transactions with multiple payment channel integrations. The system features real-time payment processing, automated disbursement workflows, comprehensive transaction monitoring, and detailed financial analytics. Built with Next.js, Node.js, and TypeScript, it ensures PCI DSS compliance, robust security measures, fraud detection, and seamless integration with various payment providers and banking systems.',
    image: '/payment/1.png',
    tags: ['Next.js', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-500 to-blue-600',
    featured: true,
    category: 'Financial Technology',
    date: 'Sept 2025',
    client: 'FinTech Solutions Inc',
    duration: 'On Going',
    images: [
      { id: 1, url: '/payment/1.png' },
      { id: 2, url: '/payment/2.png' },
      { id: 3, url: '/payment/3.png' },
      { id: 4, url: '/payment/4.png' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/video.mp4', title: 'Payment Gateway Demo', thumbnail: '/payment/1.png' },
    ],
    features: [
      'Multi-channel payment processing',
      'Real-time transaction monitoring',
      'Automated disbursement workflows',
      'PCI DSS compliance',
      'Fraud detection system',
      'Financial reporting & analytics',
      'API integration management',
      'Role-based access control',
    ],
    technologies: ['Next.js', 'Node.js', 'TypeScript'],
    challenges: [
      'Ensuring PCI DSS compliance',
      'Handling high-volume transactions',
      'Implementing fraud detection',
      'Managing multiple payment providers',
    ],
    solutions: [
      'Implemented tokenization and encryption',
      'Used Redis for caching and rate limiting',
      'Integrated machine learning for fraud detection',
      'Created unified API for multiple providers',
    ],
  },
  {
    id: 4,
    title: 'ifortepay Internship Experience',
    description: 'Software Development Intern at ifortepay, contributing to fintech solutions and payment gateway development with hands-on experience in modern web technologies.',
    longDescription: 'During my 6-month internship at ifortepay, I gained comprehensive experience in fintech development, working on payment gateway solutions and financial technology applications. I contributed to various projects involving secure payment processing, API integrations, user interface development, and backend systems. This experience provided me with real-world exposure to financial technology challenges, security best practices, collaborative development workflows, and professional software development methodologies in a fast-paced fintech environment.',
    image: '/ifortepay/cover.png',
    tags: ['React.js', 'Node.js', 'FinTech', 'API Integration', 'Next.js', 'Strapi'],
    liveUrl: 'https://ifortepay.id',
    githubUrl: '#',
    color: 'from-yellow-500 to-yellow-600',
    featured: true,
    category: 'Internship Experience',
    date: '2024',
    client: 'ifortepay',
    duration: '6 months',
    images: [
      { id: 1, url: '/ifortepay/1.png' },
      { id: 2, url: '/ifortepay/2.png' },
      { id: 3, url: '/ifortepay/3.png' },
      { id: 4, url: '/ifortepay/4.png' },
      { id: 5, url: '/ifortepay/5.png' },
      { id: 6, url: '/ifortepay/6.png' },
      { id: 7, url: '/ifortepay/7.png' },
      { id: 8, url: '/ifortepay/8.png' },
      { id: 9, url: '/ifortepay/9.png' },
      { id: 10, url: '/ifortepay/cover.png' },
      { id: 11, url: '/ifortepay/sertif.png' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/internship.mp4', title: 'Internship Journey', thumbnail: '/ifortepay/cover.png' },
    ],
    features: [
      'Payment gateway development',
      'API integration and testing',
      'Frontend development with React',
      'Backend development with Node.js',
      'Financial security best practices',
      'Collaborative development workflows',
      'Code review and quality assurance',
      'Documentation and testing',
    ],
    technologies: ['React.js', 'Node.js', 'Next.js', 'Strapi','JavaScript', 'TypeScript', 'REST APIs', 'Git', 'Docker'],
    challenges: [
      'Understanding complex financial regulations',
      'Implementing secure payment processing',
      'Working with legacy codebases',
      'Meeting strict security requirements',
    ],
    solutions: [
      'Studied financial compliance standards',
      'Implemented encryption and tokenization',
      'Refactored and modernized existing code',
      'Followed security best practices and audits',
    ],
  },
  {
    id: 5,
    title: 'Globementor - Holiday Booking Website UI/UX',
    description: 'A comprehensive travel and holiday booking website UI/UX design with intuitive room reservation system, destination discovery, and seamless booking experience for travelers.',
    longDescription: 'Globementor is a modern travel booking platform UI/UX design project that simplifies holiday planning and accommodation booking. The design features an intuitive interface for discovering destinations, comparing room options, and managing bookings. The UI/UX emphasizes visual storytelling through destination imagery, clear pricing displays, streamlined booking processes, and responsive design to enhance user confidence and conversion rates across all devices.',
    image: '/globemen/cover.png',
    tags: ['UI/UX Design', 'Figma', 'Web Design', 'Travel & Tourism'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-500 to-pink-600',
    featured: true,
    category: 'UI/UX Design',
    date: '2024',
    client: 'Globementor',
    duration: '2 months',
    images: [
      { id: 1, url: '/globemen/1.png' },
      { id: 2, url: '/globemen/2.png' },
      { id: 3, url: '/globemen/3.png' },
      { id: 4, url: '/globemen/cover.png' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/globementor.mp4', title: 'Globementor Website Demo', thumbnail: '/globemen/cover.png' },
    ],
    features: [
      'Destination discovery and search',
      'Advanced room filtering and comparison',
      'Real-time availability checking',
      'Secure booking and payment system',
      'User reviews and ratings',
      'Mobile-responsive design',
      'Multi-language support',
      'Travel itinerary management',
    ],
    technologies: ['Figma', 'Canva'],
    challenges: [
      'Creating intuitive search and filtering for complex travel data',
      'Designing for multiple device types and screen sizes',
      'Optimizing booking conversion rates',
      'Managing complex pricing and availability displays',
    ],
    solutions: [
      'Implemented smart search with location-based suggestions',
      'Used responsive design with mobile-first approach',
      'Conducted user testing to optimize booking flow',
      'Created clear visual hierarchy for pricing and availability',
    ],
  },
  {
    id: 6,
    title: 'Kost Finance - Student Financial Management App UI/UX',
    description: 'A mobile application UI/UX design specifically for students living in boarding houses (kost) to manage their finances, track expenses, and plan budgets effectively.',
    longDescription: 'Kost Finance is a mobile application UI/UX design project tailored for students living in boarding houses to help them manage their limited budgets effectively. The design features intuitive expense tracking interfaces, budget planning tools, bill reminder systems, and financial insights specifically designed for student life. The UI/UX emphasizes simplicity, visual clarity, gamification elements, and motivational design to encourage good financial habits among young adults.',
    image: '/kostfinenace/cover.png',
    tags: ['UI/UX Design', 'Figma', 'Mobile Design', 'FinTech'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-blue-500 to-cyan-600',
    featured: true,
    category: 'UI/UX Design',
    date: '2024',
    client: 'Kost Finance',
    duration: '3 months',
    images: [
      { id: 1, url: '/kostfinenace/1.png' },
      { id: 2, url: '/kostfinenace/2.png' },
      { id: 3, url: '/kostfinenace/3.png' },
      { id: 4, url: '/kostfinenace/4.png' },
      { id: 5, url: '/kostfinenace/5.png' },
      { id: 6, url: '/kostfinenace/6.png' },
      { id: 7, url: '/kostfinenace/cover.png' },
    ],
    videos: [
      { id: 1, url: '/api/placeholder/kostfinance.mp4', title: 'Kost Finance App Demo', thumbnail: '/kostfinenace/cover.png' },
    ],
    features: [
      'Monthly budget planning and tracking',
      'Quick expense logging with categories',
      'Bill reminders and due date notifications',
      'Spending analytics and insights',
      'Savings goals and progress tracking',
      'Receipt scanning and storage',
      'Multi-currency support',
      'Offline expense logging',
    ],
    technologies: ['Figma'],
    challenges: [
      'Designing for students with limited financial knowledge',
      'Creating engaging interface for budget tracking',
      'Balancing simplicity with comprehensive features',
      'Ensuring accessibility for various income levels',
    ],
    solutions: [
      'Used gamification elements and visual progress indicators',
      'Implemented intuitive categorization and smart suggestions',
      'Applied progressive disclosure to avoid overwhelming users',
      'Created inclusive design with clear visual hierarchy and simple language',
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
