'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Heart, Coffee, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

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

  const expertise = [
    {
      title: 'Frontend Mastery',
      description: 'Building responsive, performant web applications with React, Next.js, and modern CSS frameworks.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500',
      percentage: 88,
    },
    {
      title: 'Backend Engineering',
      description: 'Developing scalable server-side applications and APIs with Node.js ecosystem.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Strapi'],
      color: 'from-green-500 to-emerald-500',
      percentage: 70,
    },
    {
      title: 'Design Systems',
      description: 'Creating cohesive design languages and user experiences that delight users.',
      skills: ['Figma', 'Canva', 'UI/UX', 'Prototyping'],
      color: 'from-purple-500 to-pink-500',
      percentage: 88,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-pink-600/15 rounded-full blur-2xl"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blue-400 font-medium mb-4"
          >
            <Sparkles size={16} />
            About Me
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating meaningful digital experiences that combine beautiful design with powerful functionality.
          </p>
        </motion.div>

        {/* Interactive Hero Section */}
        <div className="relative mb-32">
          {/* Floating Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 45 }}
            animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 45 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left - Personality Traits */}
                <div className="lg:col-span-5 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                  </motion.div>

                  {/* Personality Traits */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {[
                      { icon: Coffee, title: "Coffee Enthusiast", desc: "Powered by caffeine & creativity", color: "text-amber-400" },
                      { icon: Heart, title: "Open Source Advocate", desc: "Building for the community", color: "text-red-400" },
                      { icon: Sparkles, title: "Continuous Learner", desc: "Always exploring new frontiers", color: "text-purple-400" }
                    ].map((trait, index) => (
                      <motion.div
                        key={trait.title}
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={isVisible ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 group"
                      >
                        <trait.icon className={`w-6 h-6 ${trait.color} mb-3 group-hover:scale-110 transition-transform`} />
                        <div className="text-white font-semibold text-base mb-2">{trait.title}</div>
                        <div className="text-gray-400 text-sm leading-relaxed">{trait.desc}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right - Story */}
                <div className="lg:col-span-7 space-y-6 lg:pl-4">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <motion.h3 
                      className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                      animate={isVisible ? { 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                      } : {}}
                      transition={{ duration: 8, repeat: Infinity }}
                      style={{
                        background: "linear-gradient(90deg, #60A5FA, #A78BFA, #F472B6, #60A5FA)",
                        backgroundSize: "300% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Digital Craftsman & Innovator
                    </motion.h3>
                    
                    <div className="space-y-4">
                      <motion.p 
                        className="text-xl text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        I transform complex ideas into elegant digital solutions. With a passion for both 
                        <span className="text-blue-400 font-semibold"> cutting-edge technology</span> and 
                        <span className="text-purple-400 font-semibold"> beautiful design</span>, 
                        I create experiences that users love and businesses trust.
                      </motion.p>
                      
                      <motion.p 
                        className="text-lg text-gray-400 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                      >
                        Every line of code is crafted with intention, every pixel placed with purpose. 
                        I don&apos;t just build applications—I create digital experiences that leave lasting impressions.
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Expertise Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="relative"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-6"
            >
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Expertise & Skills</span>
            </motion.div>
            
            <motion.h3 
              className="text-4xl md:text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mastering the Art of Code
              </span>
            </motion.h3>
          </div>

          {/* 3D Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-6 perspective-1000">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, rotateX: 60, z: -200 }}
                animate={isVisible ? { opacity: 1, rotateX: 0, z: 0 } : { opacity: 0, rotateX: 60, z: -200 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.5 + index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  rotateY: 15, 
                  rotateX: -10, 
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="group transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="glass-strong rounded-3xl p-6 h-full relative overflow-hidden group-hover:glass transition-all duration-500 flex flex-col">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`,
                        `linear-gradient(135deg, ${item.color.split(' ')[3]}, ${item.color.split(' ')[1]})`,
                        `linear-gradient(45deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 mx-auto relative z-10`}
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <div className="w-8 h-8 bg-white rounded-lg opacity-90" />
                    
                    {/* Orbiting particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        animate={{
                          rotate: [0, 360],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        style={{
                          transformOrigin: `${30 + i * 10}px center`
                        }}
                      />
                    ))}
                  </motion.div>

                  <div className="relative z-10 text-center flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors flex-1">
                      {item.description}
                    </p>

                    {/* Animated Progress Ring */}
                    <div className="relative w-16 h-16 mx-auto mb-6">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                        <circle
                          cx="32"
                          cy="32"
                          r="24"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="6"
                          fill="none"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="24"
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={isVisible ? { pathLength: item.percentage / 100 } : { pathLength: 0 }}
                          transition={{ duration: 2, delay: 3 + index * 0.2 }}
                        />
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="50%" stopColor="#A78BFA" />
                            <stop offset="100%" stopColor="#F472B6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.5, delay: 3.5 + index * 0.2 }}
                        >
                          {item.percentage}%
                        </motion.span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 20, rotateX: 90 }}
                          animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: 90 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 3.8 + index * 0.2 + skillIndex * 0.1,
                            type: "spring"
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-medium hover:text-white hover:glass-strong transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${item.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : item.color.includes('green') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(147, 51, 234, 0.1)'} 0%, transparent 70%)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
