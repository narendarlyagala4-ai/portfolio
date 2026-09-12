import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 01 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              01 // BIOGRAPHY & IDENTITY
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              ABOUT
            </h2>
          </div>
        </div>

        <div className="max-w-5xl space-y-10">
          {/* Main Statement */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white leading-[1.4] font-medium tracking-tight"
            >
              I’m{' '}
              <span className="font-semibold text-white bg-zinc-800/80 px-2.5 py-0.5 rounded-lg border border-zinc-700">
                Narendar Lyagala
              </span>
              , a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at JNTUH University College Of Engineering Manthani.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-outfit text-lg sm:text-xl md:text-2xl text-zinc-300 leading-[1.7] font-light"
            >
              I enjoy transforming ideas into practical intelligent systems using Generative AI, Machine Learning, data analytics, and modern full-stack technologies. My experience includes building AI-powered applications, RAG systems, machine learning solutions, data pipelines, and interactive business intelligence dashboards.
            </motion.p>
          </div>

          {/* Mission Card matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-zinc-800 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-zinc-700">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block">
                  MISSION & CORE PHILOSOPHY
                </span>
                <p className="font-outfit text-lg sm:text-xl md:text-2xl text-zinc-200 font-normal leading-relaxed italic">
                  "My goal is to continuously learn, innovate, and build meaningful intelligent solutions that solve complex real-world challenges through data, generative models, and robust engineering."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Academic Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-xs text-zinc-400">JNTUH UCE Manthani</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">PROGRAM</span>
                <h4 className="text-base font-bold text-white mt-1">B.Tech CSE (AI & ML)</h4>
                <p className="text-xs text-zinc-400 mt-0.5">JNTUH University College Of Engineering Manthani</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span className="font-mono text-xs text-zinc-400">STATUS</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">DURATION</span>
                <h4 className="text-base font-bold text-white mt-1">2023 – 2027</h4>
                <p className="text-xs text-emerald-400 font-mono mt-0.5">Currently Enrolled</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#121215] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-xs text-cyan-300">MERIT</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">CGPA SCORE</span>
                <h4 className="text-2xl font-black text-white font-mono mt-1">7.65 / 10</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Academic Excellence</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Generative AI, RAG Systems & LLM Workflows</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Machine Learning & Predictive Classifiers</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>End-to-End ETL Pipelines & Power BI Dashboards</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>FastAPI Asynchronous APIs & React Frontends</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
