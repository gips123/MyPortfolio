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
    title: 'Disbursement Dashboard',
    description: 'A comprehensive dashboard system for managing disbursement operations with secure fund transfers, role-based access, and detailed transaction history.',
    longDescription: 'This disbursement dashboard project was designed to streamline financial operations, providing an intuitive interface for both internal teams and merchants. The system includes role-based access (admin, maker, approver), secure fund management, merchant and user management, transfer and refund processing, and detailed transaction history with analytics. Built using React for the frontend and Node.js for the backend, it ensures scalability, maintainability, and robust integration with third-party services.',
    image: '/disbursement/1.png',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-orange-500 to-red-600',
    featured: true,
    category: 'Web Application',
    date: 'January 2024',
    client: 'TechCorp Solutions',
    duration: '4 months',
    images: [
    { id: 1, url: '/disbursement/login.png', title: 'Login Page', description: 'Secure login interface with modern UI for role-based access.' },
    { id: 2, url: '/disbursement/1.png', title: 'Merchant Management', description: 'Manage merchants with full CRUD operations and detailed profiles.' },
    { id: 3, url: '/disbursement/2.png', title: 'Merchant List Table', description: 'Interactive table with sorting, searching, and CRUD capabilities.' },
    { id: 4, url: '/disbursement/3.png', title: 'Create Merchant - Business Info', description: 'Form to register merchant business details including company data.' },
    { id: 5, url: '/disbursement/4.png', title: 'Create Merchant - PIC Info', description: 'Form to add merchant PIC (Person in Charge) information securely.' },
    { id: 6, url: '/disbursement/5.png', title: 'User Management', description: 'Manage internal users and merchant accounts with role assignments.' },
    { id: 7, url: '/disbursement/6.png', title: 'Create New User', description: 'Form to add new users with customizable roles and permissions.' },
    { id: 8, url: '/disbursement/7.png', title: 'Dashboard Overview', description: 'High-level summary of transactions, merchants, and user activities.' },
    { id: 9, url: '/disbursement/8.png', title: 'Transfer Funds', description: 'Interface to initiate, review, and approve fund disbursements.' },
    { id: 10, url: '/disbursement/9.png', title: 'User Funds', description: 'Monitor available balances and fund allocations for users.' },
    { id: 11, url: '/disbursement/10.png', title: 'Role-Based Access', description: 'Secure access control with roles such as Admin, Maker, and Approver.' },

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
    description: 'A landing page for UONEPAY with modern design, responsive layout, and seamless user experience.',
    longDescription: 'This task management application was designed for modern teams who need efficient collaboration tools. Built with React and Socket.io for real-time updates, the app features drag-and-drop task organization, team chat integration, advanced reporting, and productivity analytics. The application supports multiple project types and integrates with popular third-party tools.',
    image: '/uonepay/cover.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://uonepay.co',
    githubUrl: 'https://github.com/gips123/MyPortfolio',
    color: 'from-orange-500 to-red-600',
    featured: true,
    category: 'Landing Page',
    date: 'March 2024',
    client: 'UONEPAY',
    duration: '1 months',
    images: [
      { id: 1, url: '/cover_uone.png', title: 'Homepage Design', description: 'Modern landing page with hero section' },
      { id: 2, url: '/uonepay/1.png', title: 'Merchant Management List', description: 'Contact section with form and details' },
      { id: 3, url: '/uonepay/3.png', title: 'Merchant Detail', description: 'Featured projects showcase' },
      { id: 4, url: '/uonepay/4.png', title: 'Create Merchant', description: 'Interactive payment channels' },
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
    longDescription: 'This payment gateway and disbursement dashboard was developed to handle secure financial transactions with multiple payment channels integration. The system features real-time payment processing, automated disbursement workflows, comprehensive transaction monitoring, and detailed financial analytics. Built with modern web technologies, it ensures PCI DSS compliance, robust security measures, and seamless integration with various payment providers and banking systems.',
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
      { id: 1, url: '/payment/1.png', title: 'Payment Dashboard', description: '' },
      { id: 2, url: '/payment/2.png', title: 'Transaction Management', description: '' },
      { id: 3, url: '/payment/3.png', title: 'Payment Channels', description: '' },
      { id: 4, url: '/payment/4.png', title: 'Disbursement Interface', description: '' },
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
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Golang', 'Docker', 'AWS', ' API'],
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
