import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/journey';
import { GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 02 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              02 // PROGRESSION & EXPERIENCE
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            ENGINEERING TIMELINE • 2023 — PRESENT
          </p>
        </div>

        {/* Academic Anchor Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-cyan-500/30 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
                  DEGREE & INSTITUTION
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  B.Tech in Computer Science and Engineering (AI & ML)
                </h3>
                <p className="text-sm text-zinc-300 font-outfit mt-1">
                  JNTUH University College Of Engineering Manthani • Telangana, India
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="px-4 py-1.5 rounded-full font-mono text-xs bg-zinc-800 border border-zinc-700 text-zinc-300">
                2023 — 2027
              </span>
              <span className="px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                CGPA: 7.65 / 10
              </span>
            </div>
          </div>
        </motion.div>

        {/* Technical Progression Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyData.map((milestone, idx) => (
            <motion.div
              key={milestone.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    PHASE {milestone.step}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {milestone.focus}
                  </span>
                </div>

                <h4 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {milestone.title}
                </h4>

                <p className="text-zinc-300 font-outfit text-sm leading-relaxed mb-6 font-light">
                  {milestone.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {milestone.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
