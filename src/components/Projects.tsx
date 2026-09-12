import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const categories = ['ALL', 'GENAI & RAG', 'BUSINESS INTELLIGENCE', 'MACHINE LEARNING'] as const;

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 03 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              03 // FEATURED WORK
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              PROJECTS
            </h2>
          </div>

          {/* Filter Pills matching reference */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                      : 'bg-[#121215] text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
