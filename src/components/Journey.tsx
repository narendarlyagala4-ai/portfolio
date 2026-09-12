import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/journey';
import { GraduationCap } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-sky-400 mb-3"
        >
          <span>LEARNING JOURNEY & PROGRESSION</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Technical Progression
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-zinc-400 text-base sm:text-lg"
        >
          From mastering foundational algorithms and Python to architecting production-grade Generative AI, RAG systems, and full-stack solutions.
        </motion.p>
      </div>

      {/* Main Anchor Card: B.Tech CSE (AI & ML) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl glass-panel border border-sky-500/30 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-purple-500/10 shadow-xl shadow-sky-500/5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-300 font-semibold uppercase tracking-wider">
                ACADEMIC FOUNDATION
              </span>
              <h3 className="text-xl font-bold text-white">
                B.Tech in Computer Science and Engineering (AI & ML)
              </h3>
              <p className="text-sm text-zinc-300">
                JNTUH University College of Engineering
              </p>
            </div>
          </div>
          <div className="sm:text-right">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white font-semibold">
              2023 – 2027
            </span>
          </div>
        </div>
      </motion.div>

      {/* Progression Flow Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center vertical glowing line */}
        <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-400 via-indigo-500 to-purple-500 opacity-30" />

        <div className="space-y-8 sm:space-y-12">
          {journeyData.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={milestone.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Milestone Card */}
                <div className="w-full sm:w-[calc(50%-2rem)] p-6 rounded-2xl glass-panel border border-white/10 hover:border-sky-500/30 transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      STEP {milestone.step}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {milestone.focus}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                    {milestone.title}
                  </h4>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {milestone.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Node Badge */}
                <div className="my-3 sm:my-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#09090b] border-2 border-sky-400 flex items-center justify-center font-mono text-xs font-bold text-sky-300 shadow-md shadow-sky-400/20">
                  {milestone.step}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
