'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Play, Pause, ZoomIn, X } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getProjectById, type ProjectDetail, type ProjectImage, type ProjectVideo } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<{ [key: number]: boolean }>({});
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'videos'>('overview');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const project = getProjectById(Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const toggleVideo = (videoId: number) => {
    setIsVideoPlaying(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <motion.div
            style={{ y }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => router.push('/')}
            className="fixed top-8 left-8 z-50 glass-strong p-3 rounded-full text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </motion.button>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-cyan-400 text-lg font-medium">{project.category}</span>
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="glass-strong p-4 rounded-2xl">
                <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Date</p>
                <p className="font-semibold">{project.date}</p>
              </div>
              <div className="glass-strong p-4 rounded-2xl">
                <User className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Client</p>
                <p className="font-semibold">{project.client}</p>
              </div>
              <div className="glass-strong p-4 rounded-2xl">
                <Tag className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Duration</p>
                <p className="font-semibold">{project.duration}</p>
              </div>
              <div className="glass-strong p-4 rounded-2xl">
                <ExternalLink className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Status</p>
                <p className="font-semibold">Completed</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.color} text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <span>View Live</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 glass-strong text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Source Code</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="glass-strong p-2 rounded-2xl flex gap-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'videos', label: 'Videos' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {/* Long Description */}
                <div className="max-w-4xl mx-auto item-center text-center">
                  <h3 className="text-3xl font-bold mb-6">Project Overview</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="px-4 py-2 glass-strong rounded-xl text-white border border-white/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong">
                        <Image
                          src={image.url}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold text-white">{image.title}</h4>
                        <p className="text-sm text-gray-400">{image.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.videos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="glass-strong rounded-2xl overflow-hidden"
                    >
                      <div className="relative aspect-video">
                        {isVideoPlaying[video.id] ? (
                          <video
                            src={video.url}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                            onEnded={() => toggleVideo(video.id)}
                          />
                        ) : (
                          <>
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              fill
                              className="object-cover"
                            />
                            <button
                              onClick={() => toggleVideo(video.id)}
                              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-300 group"
                            >
                              <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                            </button>
                          </>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-white mb-2">{video.title}</h4>
                        <p className="text-gray-400">
                          {isVideoPlaying[video.id] ? 'Video is now playing...' : 'Click to play video demonstration'}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
