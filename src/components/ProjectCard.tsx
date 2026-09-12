import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { CopilotPreview } from './previews/CopilotPreview';
import { DashboardPreview } from './previews/DashboardPreview';
import { ChurnPipelinePreview } from './previews/ChurnPipelinePreview';
import { MagneticButton } from './MagneticButton';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const renderPreview = () => {
    switch (project.type) {
      case 'rag':
        return <CopilotPreview />;
      case 'bi':
        return <DashboardPreview />;
      case 'ml':
        return <ChurnPipelinePreview />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Visual Preview Container */}
      <div className="p-4 sm:p-5 pb-2 relative overflow-hidden bg-black/40 border-b border-zinc-800/80">
        <div className="transition-transform duration-500 group-hover:scale-[1.01]">
          {renderPreview()}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Header Info */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {project.category}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all hover:scale-105"
                  title="Live deployment online"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-zinc-400 font-outfit text-sm leading-relaxed mb-5 font-light">
            {project.description}
          </p>

          {/* Key Details */}
          <div className="mb-5 space-y-2">
            {project.details.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-outfit text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button matching reference */}
        <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
          <MagneticButton className="flex-1">
            <button
              onClick={() => onSelect(project)}
              className="w-full py-3.5 px-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>VIEW DETAILS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </MagneticButton>

          {project.liveUrl && (
            <MagneticButton>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-md shadow-cyan-500/20"
                title="Open Live Application"
              >
                <span>LIVE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};
