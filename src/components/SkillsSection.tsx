'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { 
  Code2, Database, Palette, Zap, Star, Cpu, 
  Monitor, Server, Smartphone, Cloud, 
  Layers, Globe, Box, GitBranch,
  Chrome, Terminal, Wrench, FileCode, Paintbrush,
  Triangle, Settings, Atom, Braces
} from 'lucide-react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      { name: 'React/Next.js', level: 95, category: 'Framework', experience: '3+ years', icon: Atom },
      { name: 'TypeScript', level: 90, category: 'Language', experience: '2+ years', icon: FileCode },
      { name: 'Tailwind CSS', level: 95, category: 'Styling', experience: '2+ years', icon: Paintbrush },
      { name: 'Framer Motion', level: 85, category: 'Animation', experience: '1+ years', icon: Layers },
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
      { name: 'Node.js', level: 88, category: 'Runtime', experience: '2+ years', icon: Terminal },
      { name: 'Express.js', level: 85, category: 'Framework', experience: '2+ years', icon: Zap },
      { name: 'PostgreSQL', level: 80, category: 'Database', experience: '1+ years', icon: Database },
      { name: 'MongoDB', level: 82, category: 'Database', experience: '1+ years', icon: Database },
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
      { name: 'Figma', level: 85, category: 'Design Tool', experience: '2+ years', icon: Box },
      { name: 'Adobe XD', level: 75, category: 'Design Tool', experience: '1+ years', icon: Layers },
      { name: 'Prototyping', level: 80, category: 'Skill', experience: '2+ years', icon: Settings },
      { name: 'User Research', level: 70, category: 'Skill', experience: '1+ years', icon: Star },
    ]
  }
];

const allTechnologies = [
  { name: 'React', icon: Atom, color: 'from-blue-400 to-blue-600', gradient: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', icon: Triangle, color: 'from-gray-600 to-gray-800' },
  { name: 'TypeScript', icon: FileCode, color: 'from-blue-500 to-blue-700' },
  { name: 'JavaScript', icon: Braces, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Node.js', icon: Terminal, color: 'from-green-500 to-green-700' },
  { name: 'Python', icon: Code2, color: 'from-green-400 to-blue-500' },
  { name: 'Tailwind', icon: Paintbrush, color: 'from-cyan-400 to-cyan-600' },
  { name: 'MongoDB', icon: Database, color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', icon: Database, color: 'from-blue-500 to-indigo-600' },
  { name: 'Docker', icon: Box, color: 'from-blue-400 to-blue-600' },
  { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-orange-600' },
  { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-red-600' },
  { name: 'Figma', icon: Box, color: 'from-purple-400 to-pink-500' },
  { name: 'Firebase', icon: Zap, color: 'from-yellow-500 to-orange-600' },
  { name: 'GraphQL', icon: Globe, color: 'from-pink-500 to-rose-600' },
  { name: 'Redux', icon: Layers, color: 'from-purple-500 to-purple-700' },
  { name: 'Vue.js', icon: Triangle, color: 'from-green-400 to-green-600' },
  { name: 'Sass', icon: Paintbrush, color: 'from-pink-400 to-pink-600' }
];  // Popular technologies cloud
  const techCloud = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL',
    'Tailwind CSS', 'Framer Motion', 'Express.js', 'GraphQL', 'Docker', 'AWS',
    'Figma', 'Git', 'Prisma', 'Redux', 'Jest', 'Cypress', 'Vercel', 'Supabase'
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
                              <p className="text-xs text-gray-400">
                                {skill.experience}
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

        {/* Interactive Tech Constellation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong text-cyan-400 font-semibold mb-6 border border-cyan-400/20"
            >
              <Zap className="w-5 h-5" />
              Technology Stack
            </motion.div>
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Digital Arsenal
              </span>
            </h3>
          </div>

          {/* Tech Grid with Hover Effects */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 max-w-5xl mx-auto">
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0 
                } : { 
                  opacity: 0, 
                  scale: 0, 
                  rotate: -180 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.9 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
                className="group/tech relative"
              >
                <div className={`relative p-4 rounded-2xl glass-subtle hover:glass-strong transition-all duration-400 hover:shadow-xl cursor-pointer border border-white/5 hover:border-white/20`}>
                  {/* Tech Icon */}
                  <div className="text-center">
                    <div className="mb-2 group-hover/tech:scale-110 transition-transform duration-300 text-white">
                      <tech.icon className="w-8 h-8 mx-auto" />
                    </div>
                    <p className="text-xs font-medium text-gray-400 group-hover/tech:text-white transition-colors duration-300 truncate">
                      {tech.name}
                    </p>
                  </div>

                  {/* Skill Level Dot */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${tech.color} opacity-60 group-hover/tech:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-20 transition-opacity duration-400 blur-sm`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
