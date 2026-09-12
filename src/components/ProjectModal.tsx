import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, Wrench, Sparkles, TrendingUp, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0d12] border border-zinc-800 rounded-3xl shadow-2xl shadow-black flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 border-b border-zinc-800 bg-[#121215] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {project.category}
                </span>
                {project.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Deployment
                  </span>
                )}
              </div>
              <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-zinc-400 font-outfit text-sm mt-1">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-zinc-300 text-sm font-outfit leading-relaxed">
            {/* 1. Overview */}
            <section>
              <h3 className="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Overview
              </h3>
              <p className="text-zinc-300 leading-relaxed bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 font-light text-sm sm:text-base">
                {project.overview}
              </p>
            </section>

            {/* 2. Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-bold text-rose-300 mb-2 font-mono uppercase tracking-wider">PROBLEM STATEMENT</h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-bold text-emerald-300 mb-2 font-mono uppercase tracking-wider">ENGINEERED SOLUTION</h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 3. Technology Stack */}
            <section>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 4. Implementation Details */}
            <section>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                Implementation Architecture
              </h3>
              <ul className="space-y-2.5">
                {project.implementation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800">
                    <span className="font-mono text-cyan-400 text-xs font-bold mt-0.5">0{idx + 1}</span>
                    <span className="font-light">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Key Features */}
            <section>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs sm:text-sm font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Results / Evaluation */}
            <section>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                Results & Evaluation
              </h3>
              <div className="p-5 rounded-2xl bg-zinc-900 border border-cyan-500/20 space-y-2.5">
                {project.resultsOrMetrics.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Future Improvements */}
            <section>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Future Enhancements
              </h3>
              <ul className="space-y-2">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2"></span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 border-t border-zinc-800 bg-[#121215] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400 font-mono">
              NARENDAR LYAGALA • ARCHITECTURE SPEC
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-xs font-mono font-bold uppercase rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>LAUNCH LIVE APPLICATION</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-mono font-bold uppercase rounded-full bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
