import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 05 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              05 // ACADEMIC RECORD
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              EDUCATION
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            DEGREES & FOUNDATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`p-7 sm:p-8 rounded-3xl bg-[#121215] border ${
                edu.current ? 'border-cyan-500/40 shadow-xl shadow-cyan-500/5' : 'border-zinc-800'
              } flex flex-col justify-between hover:-translate-y-1 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-700 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <p className="font-mono text-xs text-cyan-400 font-semibold mb-6">
                  {edu.institution}
                </p>

                {edu.highlights && (
                  <div className="space-y-2 mb-6">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-outfit">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Score Pill */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                  {edu.scoreType}
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono font-bold text-sm">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
