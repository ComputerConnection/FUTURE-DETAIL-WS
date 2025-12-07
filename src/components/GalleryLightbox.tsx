'use client';

import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
}

interface GalleryLightboxProps {
  projects: Project[];
  categories: string[];
}

export default function GalleryLightbox({ projects, categories }: GalleryLightboxProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'PPF': return 'bg-cyan-500/20 text-cyan-400';
      case 'Wrap': return 'bg-purple-500/20 text-purple-400';
      case 'Tint': return 'bg-amber-500/20 text-amber-400';
      case 'Coating': return 'bg-emerald-500/20 text-emerald-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'PPF': return 'from-cyan-500/20 to-blue-500/20';
      case 'Wrap': return 'from-purple-500/20 to-pink-500/20';
      case 'Tint': return 'from-amber-500/20 to-orange-500/20';
      case 'Coating': return 'from-emerald-500/20 to-teal-500/20';
      default: return 'from-gray-500/20 to-gray-600/20';
    }
  };

  return (
    <>
      {/* Filter Buttons */}
      <section className="py-8 border-t border-white/5 sticky top-20 bg-black/90 backdrop-blur-xl z-10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-black scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    ({projects.filter((p) => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                {/* Placeholder image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(project.category)} group-hover:scale-105 transition-transform duration-500`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-700 text-sm">{project.title}</span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-light mt-2">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div 
            className="max-w-5xl w-full mx-auto px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${getCategoryGradient(filteredProjects[activeIndex].category)} flex items-center justify-center`}>
              <span className="text-gray-600">{filteredProjects[activeIndex].title}</span>
            </div>
            <div className="mt-6 text-center">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(filteredProjects[activeIndex].category)}`}>
                {filteredProjects[activeIndex].category}
              </span>
              <h3 className="text-2xl font-light mt-3">{filteredProjects[activeIndex].title}</h3>
              <p className="text-gray-400 mt-2">{filteredProjects[activeIndex].description}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-500">
            {activeIndex + 1} / {filteredProjects.length}
          </div>
        </div>
      )}
    </>
  );
}

