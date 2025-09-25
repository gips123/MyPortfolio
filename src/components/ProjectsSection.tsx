'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.',
      longDescription: 'This comprehensive e-commerce platform showcases advanced full-stack development skills with features like user authentication, payment processing, inventory management, and responsive design.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-blue-500 to-purple-600',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'Built with React and Socket.io for real-time collaboration, featuring advanced state management, drag-and-drop interfaces, and team productivity tools.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-green-500 to-teal-600',
      featured: false,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with modern animations, dark mode support, and responsive design showcasing creative projects.',
      longDescription: 'This portfolio demonstrates advanced frontend skills with smooth animations, optimized performance, and modern web technologies.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-purple-500 to-pink-600',
      featured: false,
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by AI with natural language processing, conversation history, and customizable personas.',
      longDescription: 'Integration with modern AI APIs to create engaging conversational experiences with advanced natural language processing capabilities.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'OpenAI API', 'Express.js', 'WebSocket', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-cyan-500 to-blue-600',
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-medium mb-4"
          >
            <Sparkles size={16} />
            Featured Work
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
              My Recent Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-2xl font-bold`}>
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.longDescription}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tech stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    View Live Demo
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-6 h-6 flex items-center justify-center font-bold">
                      {project.title.split(' ')[0][0]}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
