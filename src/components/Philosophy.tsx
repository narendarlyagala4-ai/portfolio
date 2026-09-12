import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, BarChart2, BrainCircuit, Sparkles, Zap, ChevronRight } from 'lucide-react';

const steps = [
  { label: 'DATA', icon: Database, desc: 'Ingesting raw events & documents' },
  { label: 'PROCESS', icon: Cpu, desc: 'Cleaning, ETL & vectorizing' },
  { label: 'ANALYZE', icon: BarChart2, desc: 'EDA & statistical discovery' },
  { label: 'LEARN', icon: BrainCircuit, desc: 'Model training & RAG context' },
  { label: 'INTELLIGENCE', icon: Sparkles, desc: 'Synthesized grounded answers' },
  { label: 'ACTION', icon: Zap, desc: 'Impactful decisions & workflows' }
];

export const Philosophy: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              PHILOSOPHY
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
              FROM DATA TO INTELLIGENCE
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            THE TRANSFORMATION PIPELINE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-5 rounded-2xl bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white group-hover:bg-cyan-500/20 transition-all mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold text-white tracking-wider mb-1">
                  {step.label}
                </span>
                <span className="text-[11px] font-outfit text-zinc-400 leading-tight font-light">
                  {step.desc}
                </span>

                {!isLast && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#09090b] border border-zinc-700 items-center justify-center text-zinc-400">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
