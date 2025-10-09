'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { 
  Code2, Database, Palette, Zap, Star, 
  Monitor, Server, Cloud, 
  Layers, Globe, Box, GitBranch,
  Terminal, FileCode, Paintbrush,
  Triangle, Settings, Atom, Braces
} from 'lucide-react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), springConfig);

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

  // Enhanced skill categories with more detailed information
const skillDomains = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Monitor,
    description: 'Creating beautiful, responsive, and interactive user interfaces with modern frameworks.',
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    level: 'Expert',
    skills: [
      { name: 'React/Next.js', level: 90, category: 'Framework', icon: Atom },
      { name: 'TypeScript', level: 88, category: 'Language', icon: FileCode },
      { name: 'Tailwind CSS', level: 90, category: 'Styling', icon: Paintbrush },
      { name: 'Framer Motion', level: 80, category: 'Animation', icon: Layers },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    description: 'Building robust, scalable server-side applications and APIs with modern technologies.',
    color: 'from-green-500 to-emerald-500',
    bgGradient: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
    level: 'Advanced',
    skills: [
      { name: 'Node.js', level: 80, category: 'Runtime', experience: '', icon: Terminal },
      { name: 'Express.js', level: 80, category: 'Framework', experience: '', icon: Zap },
      { name: 'MySQL', level: 88, category: 'Database', experience: '', icon: Database },
      { name: 'MongoDB', level: 70, category: 'Database', experience: '', icon: Database },
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Designing intuitive and aesthetically pleasing user experiences.',
    color: 'from-indigo-500 to-purple-500',
    bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10',
    level: 'Advanced',
    skills: [
      { name: 'Figma', level: 80, category: 'Design Tool', experience: '', icon: Box },
      { name: 'Canva', level: 95, category: 'Design Tool', experience: '', icon: Layers },
      { name: 'Prototyping', level: 80, category: 'Skill', experience: '', icon: Settings },
      { name: 'User Research', level: 88, category: 'Skill', experience: '', icon: Star },
    ]
  }
];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-purple-400 font-medium mb-4"
          >
            ⚡ Skills & Technologies
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              My Tech Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Advanced Skills Matrix */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillDomains.map((domain, domainIndex) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 100, rotateY: -30 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3 + domainIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              onMouseEnter={() => setHoveredSkill(domain.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative perspective-1000"
            >
              {/* Interactive Card */}
              <motion.div 
                className="relative preserve-3d transform-gpu"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              >
                {/* Main Card */}
                <div className={`relative p-8 glass-strong rounded-3xl backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-700 overflow-hidden`}>
                  
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${domain.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`} />
                  <div className={`absolute inset-[1px] rounded-3xl bg-black/80 backdrop-blur-xl`} />
                  
                  {/* Interactive Icon */}
                  <motion.div
                    className="relative z-10 mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 1, delay: 0.5 + domainIndex * 0.15, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${domain.color} text-white shadow-2xl`}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: `0 25px 50px -12px rgba(${hoveredSkill === domain.id ? '139, 92, 246' : '0, 0, 0'}, 0.25)`,
                        transition: { duration: 0.4 }
                      }}
                      animate={hoveredSkill === domain.id ? {
                        scale: 1.1,
                        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)"
                      } : {}}
                    >
                      <domain.icon className="w-10 h-10" />
                    </motion.div>
                  </motion.div>

                  {/* Domain Info */}
                  <div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.8, delay: 0.7 + domainIndex * 0.15 }}
                      className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-500"
                    >
                      {domain.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.8, delay: 0.9 + domainIndex * 0.15 }}
                      className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                    >
                      {domain.description}
                    </motion.p>

                    {/* Expert Level Indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 + domainIndex * 0.15 }}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${domain.color} text-white text-xs font-bold mb-6 shadow-lg`}
                    >
                      <Star className="w-3 h-3" />
                      {domain.level}
                    </motion.div>
                  </div>

                  {/* Enhanced Skills Display */}
                  <div className="relative z-10 space-y-4">
                    {domain.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.3 + domainIndex * 0.15 + skillIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        className="group/skill relative"
                      >
                        <div className="flex items-center justify-between p-4 rounded-xl glass-subtle hover:glass-strong hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="group-hover/skill:scale-110 transition-transform duration-200">
                              <skill.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-white text-sm">
                                {skill.name}
                              </p>
                            </div>
                          </div>
                          
                          {/* Skill Level Indicator */}
                          <div className="flex items-center gap-2">
                            <div className="text-xs font-bold text-gray-300">
                              {skill.level}%
                            </div>
                            <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ 
                                  duration: 2, 
                                  delay: 1.8 + domainIndex * 0.15 + skillIndex * 0.1,
                                  ease: "easeOut"
                                }}
                                className={`h-full bg-gradient-to-r ${domain.color} rounded-full relative overflow-hidden`}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-white/30"
                                  animate={{ x: [-100, 100] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Corner Decoration */}
                  <motion.div
                    className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${domain.color}`}
                    animate={hoveredSkill === domain.id ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
