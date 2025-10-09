'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientsSatisfied, setClientsSatisfied] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const fullText = "Ghifary Ahmad";

  // Mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Typewriter effect
  useEffect(() => {
    if (!isLoaded) return;
    
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [isLoaded]);

  // Counter animations
  useEffect(() => {
    if (!isLoaded) return;

    const countUp = (setValue: React.Dispatch<React.SetStateAction<number>>, target: number, delay: number) => {
      setTimeout(() => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setValue(target);
            clearInterval(timer);
          } else {
            setValue(Math.floor(current));
          }
        }, 30);
      }, delay);
    };

    countUp(setYearsExperience, 3, 3000);
    countUp(setProjectsCompleted, 25, 3200);
    countUp(setClientsSatisfied, 15, 3400);
  }, [isLoaded]);

  return (
    <motion.section 
      id="home"
      className="min-h-screen relative overflow-hidden bg-black flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 60% 20%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)
            `
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 60% 20%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 20% 70%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 70% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 30% 80%, rgba(34, 211, 238, 0.4) 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 60% 20%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content - Split Layout */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, staggerChildren: 0.3, delayChildren: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-left lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Main Heading with Typewriter Effect */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hi, I&apos;m{' '}
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                {displayText}
                <motion.span
                  className="inline-block w-1 h-12 lg:h-16 bg-cyan-400 ml-2"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                
                {/* Sparkles around text */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Front End Developer
              </span>{' '}
              passionate about creating{' '}
              <span className="font-semibold text-white">beautiful</span> and{' '}
              <span className="font-semibold text-white">functional</span> web experiences
            </motion.p>

            

            {/* Enhanced CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl overflow-hidden group"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </span>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-150 transition-transform duration-300"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 glass-strong text-white font-bold rounded-2xl border border-cyan-400/30 group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink size={20} />
                  View Projects
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 30, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 4.2 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotateY: 15,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-3 glass-strong rounded-xl group overflow-hidden"
                  aria-label={label}
                >
                  <Icon 
                    size={24} 
                    className="text-white group-hover:text-cyan-400 transition-colors duration-300 relative z-10" 
                  />
                </motion.a>
              ))}
            </motion.div>
            
          </motion.div>

          {/* Right Side - Avatar */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer rotating border */}
              <motion.div
                className="absolute -inset-8 rounded-3xl border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle rotating border */}
              <motion.div
                className="absolute -inset-4 rounded-2xl border border-cyan-400/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Main avatar */}
              <motion.div
                className="w-full h-full rounded-3xl relative overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect behind photo */}
                <motion.div
                  className="absolute inset-0 glass-strong rounded-3xl"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px rgba(59, 130, 246, 0.6)", 
                      "0 0 80px rgba(147, 51, 234, 0.8)", 
                      "0 0 60px rgba(236, 72, 153, 0.7)",
                      "0 0 40px rgba(59, 130, 246, 0.6)"
                    ]
                  }}
                  whileHover={{
                    boxShadow: "0 0 120px rgba(59, 130, 246, 1.0)"
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Profile Photo - Front layer */}
                <Image
                  src="/me/me.jpg"
                  alt="Ghifary Ahmad"
                  fill
                  className="object-cover rounded-3xl relative z-20"
                  priority
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl z-10" />
                
                {/* Floating particles around avatar */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-white/60 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: Math.cos(i * Math.PI / 6) * 80,
                      y: Math.sin(i * Math.PI / 6) * 80,
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        
      </motion.div>
    </motion.section>
  );
};
