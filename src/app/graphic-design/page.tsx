'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Star } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { getDesignsByType, designTabs, GraphicDesign, DesignTab } from '../../data/graphicDesigns';
import Image from 'next/image';
import Link from 'next/link';

export default function GraphicDesignPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('design');
  const [filteredDesigns, setFilteredDesigns] = useState<GraphicDesign[]>([]);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
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

  // Filter designs based on active tab
  useEffect(() => {
    const designs = getDesignsByType(activeTab);
    setFilteredDesigns(designs);
  }, [activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleVideoPlay = (videoId: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    // Find the video element and play it
    const videoElement = document.querySelector(`video[data-video-id="${videoId}"]`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play().then(() => {
        setPlayingVideo(videoId);
      }).catch((error) => {
        console.log('Video play failed:', error);
        // Fallback: just show controls
        setPlayingVideo(videoId);
      });
    } else {
      setPlayingVideo(videoId);
    }
  };

  const handleVideoPause = (videoId: number) => {
    setPlayingVideo(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900" />
          <motion.div
            style={{ y: y1 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-pink-400" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 tracking-tight">
              Graphic Design
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore my creative journey through visual design, branding, and digital art
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section ref={sectionRef} className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-center">
            <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
              {designTabs.map((tab: DesignTab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-black font-semibold shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

          {/* Design Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900">
                    {design.type === 'video' && design.image.endsWith('.mp4') ? (
                      <div className="relative w-full h-full group/video">
                        <video
                          data-video-id={design.id}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          controls={playingVideo === design.id}
                          preload="metadata"
                          muted
                          onPlay={() => setPlayingVideo(design.id)}
                          onPause={() => handleVideoPause(design.id)}
                          onEnded={() => handleVideoPause(design.id)}
                        >
                          <source src={design.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Custom Play Button Overlay */}
                        {playingVideo !== design.id && (
                          <div 
                            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/40 via-black/20 to-black/40 cursor-pointer group/play"
                            onClick={(e) => handleVideoPlay(design.id, e)}
                          >
                            <div className="relative">
                              {/* Outer ring */}
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                              
                              {/* Main play button */}
                              <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-8 group-hover/play:bg-white group-hover/play:scale-110 transition-all duration-300 shadow-2xl border-2 border-white/30">
                                <svg 
                                  className="w-16 h-16 text-gray-800 ml-1 drop-shadow-lg" 
                                  fill="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                              
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover/play:bg-white/20 transition-all duration-300"></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Video duration badge */}
                        {playingVideo !== design.id && (
                          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                            <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                            </svg>
                            Video
                          </div>
                        )}
                      </div>
                    ) : (
                      <Image
                        src={design.image}
                        alt={design.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Featured Badge */}
                    {design.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full">
                          <Star className="w-3 h-3 text-white" />
                          <span className="text-xs font-semibold text-white">Featured</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {design.type === 'video' && (
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-white/60">
                          {designTabs.find((tab: DesignTab) => tab.id === design.type)?.icon}
                        </span>
                        <span className="text-sm text-white/60">
                          {designTabs.find((tab: DesignTab) => tab.id === design.type)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                        {design.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 leading-relaxed">
                        {design.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {design.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredDesigns.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">No designs found</h3>
              <p className="text-white/60">No designs available for this category yet</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
