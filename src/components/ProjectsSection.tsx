'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Star, Eye, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { getFeaturedProjects } from '@/data/projects';
import Image from 'next/image';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);

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

  // Get projects from global data
  const featuredProjects = getFeaturedProjects();

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (featuredProjects.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
      }, 5000); // 5 seconds
    }
  }, [featuredProjects.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying && isVisible && featuredProjects.length > 1) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, isVisible, startAutoPlay, stopAutoPlay, featuredProjects.length]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    stopAutoPlay();
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  }, [featuredProjects.length, stopAutoPlay]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    stopAutoPlay();
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  }, [featuredProjects.length, stopAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    stopAutoPlay();
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  }, [stopAutoPlay]);

  if (featuredProjects.length === 0) {
    return null; // Render nothing if no featured projects
  }

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-cyan-400" />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover my latest work featuring cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="relative mb-32">
          {/* Auto-play Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute -top-16 right-4 z-20 glass-strong p-3 rounded-full text-white hover:bg-white/10 transition-all duration-300"
          >
            {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>

          {/* Navigation Arrows - Outside the card */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={prevSlide}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-20 glass-strong p-4 rounded-full text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={nextSlide}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-20 glass-strong p-4 rounded-full text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          {/* Carousel Container */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 400, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, x: -400, scale: 0.8, rotateY: -45 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 1, ease: "easeOut" },
                  rotateY: { duration: 1, ease: "easeInOut" }
                }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full p-8 glass-strong rounded-3xl relative overflow-hidden group">
                  {/* Project Visual */}
                  <div className="lg:col-span-7 relative">
                    <motion.div
                      className="relative group h-full"
                      onMouseEnter={() => setHoveredProject(featuredProjects[currentSlide].id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      whileHover={{ 
                        scale: 1.03,
                        rotateY: 8,
                        rotateX: 3
                      }}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {/* Project Image Container */}
                      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        {/* Background Image */}
                        <motion.div
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1.2 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={featuredProjects[currentSlide].image}
                            alt={featuredProjects[currentSlide].title}
                            fill
                            className="object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20" />
                        </motion.div>

                        {/* Floating Action Buttons */}
                        <AnimatePresence>
                          {hoveredProject === featuredProjects[currentSlide].id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5, y: 30, rotateX: -90 }}
                              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                              exit={{ opacity: 0, scale: 0.5, y: 30, rotateX: 90 }}
                              transition={{
                                duration: 0.8,
                                ease: [0.34, 1.56, 0.64, 1],
                                opacity: { duration: 0.4 }
                              }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4"
                            >
                              <motion.a
                                href={featuredProjects[currentSlide].liveUrl}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="p-4 glass-strong rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
                              >
                                <Eye className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                              </motion.a>
                              <motion.a
                                href={featuredProjects[currentSlide].githubUrl}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="p-4 glass-strong rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
                              >
                                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                              </motion.a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 80, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        staggerChildren: 0.1
                      }}
                      className="space-y-6"
                    >
                      {/* Project Number & Icon */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${featuredProjects[currentSlide].color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {String(currentSlide + 1).padStart(2, '0')}
                        </div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Star className="w-6 h-6 text-yellow-400" />
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-black text-white leading-tight"
                      >
                        {featuredProjects[currentSlide].title}
                      </motion.h3>

                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                      >
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {featuredProjects[currentSlide].description || featuredProjects[currentSlide].description}
                        </p>
                      </motion.div>

                      {/* Tags */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-wrap gap-3"
                      >
                        {featuredProjects[currentSlide].tags.map((tag: string, tagIndex: number) => (
                          <motion.span
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: tagIndex * 0.1,
                              ease: [0.34, 1.56, 0.64, 1]
                            }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                            className="px-4 py-2 rounded-xl glass-strong text-white font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex gap-4"
                      >
                        <motion.a
                          href={`/projects/${featuredProjects[currentSlide].id}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`group flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${featuredProjects[currentSlide].color} text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                        >
                          <span>Detail</span>
                          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.a>
                        <motion.a
                          href={featuredProjects[currentSlide].githubUrl}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group flex items-center gap-3 px-8 py-4 glass-strong text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                        >
                          <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                          <span>Code</span>
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-3 mt-8"
          >
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
