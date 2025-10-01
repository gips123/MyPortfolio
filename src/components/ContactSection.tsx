'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ghifary.ahmad@example.com',
      href: 'mailto:ghifary.ahmad@example.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 812-3456-7890',
      href: 'tel:+628123456790',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      href: 'https://maps.google.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Availability',
      value: 'Available for new projects',
      href: '#',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-300',
      bg: 'hover:bg-gray-800',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-900/30',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-400',
      bg: 'hover:bg-sky-900/30',
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:ghifary.ahmad@example.com',
      color: 'hover:text-red-400',
      bg: 'hover:bg-red-900/30',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Additional floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
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
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-400 font-medium mb-6"
          >
            <Send size={16} />
            Get In Touch
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-6 glass-strong rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={24} className="text-white" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {item.value}
                </p>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Follow Me
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                className={`
                  relative p-4 glass-strong rounded-2xl border border-white/10 text-gray-400 
                  transition-all duration-300 group overflow-hidden
                  ${social.color} ${social.bg}
                `}
                aria-label={social.name}
              >
                {/* Background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderRadius: '1rem' }}
                />
                
                <social.icon 
                  size={24} 
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110" 
                />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {social.name}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-6">
            Have a project in mind? Let's discuss how we can work together.
          </p>
          <motion.a
            href="mailto:ghifary.ahmad@example.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Start a Conversation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
