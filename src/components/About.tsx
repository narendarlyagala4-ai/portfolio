import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Award, Calendar, CheckCircle2, MapPin } from 'lucide-react';

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

        {/* 2-Column Grid with Profile Photo on Left & Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column: Portrait Photo & Quick Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 xl:col-span-4 space-y-4"
          >
            <div className="p-3 sm:p-4 rounded-3xl bg-[#121215] border border-zinc-800 shadow-2xl shadow-black/80 relative overflow-hidden group">
              {/* Profile Image with subtle hover zoom */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-black/60 border border-zinc-700/50">
                <img
                  src="/images/profile.jpg"
                  alt="Lyagala Narendar"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none"></div>

                {/* Status pill overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-bold tracking-wider">LYAGALA NARENDAR</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 pl-1">
                    AI & ML ENGINEER • JNTUH
                  </span>
                </div>
              </div>

              {/* Quick Profile Meta */}
              <div className="pt-4 px-1 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 py-1 border-b border-zinc-800/80">
                  <span>DISCIPLINE</span>
                  <span className="text-zinc-200 font-bold">B.Tech CSE (AI & ML)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 py-1 border-b border-zinc-800/80">
                  <span>COLLEGE</span>
                  <span className="text-cyan-400 font-semibold truncate max-w-[170px]" title="JNTUH University College Of Engineering Manthani">
                    JNTUH UCE Manthani
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 py-1 border-b border-zinc-800/80">
                  <span>LOCATION</span>
                  <span className="text-zinc-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" /> Telangana, India
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 py-1">
                  <span>ACADEMIC CGPA</span>
                  <span className="text-emerald-400 font-bold font-mono">7.65 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story, Mission, & Core Focus */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-8">
            {/* Main Statement */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-outfit text-2xl sm:text-3xl md:text-4xl text-white leading-[1.35] font-medium tracking-tight"
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
                className="font-outfit text-base sm:text-lg md:text-xl text-zinc-300 leading-[1.7] font-light"
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
              className="p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-zinc-800 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-zinc-700">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block">
                    MISSION & CORE PHILOSOPHY
                  </span>
                  <p className="font-outfit text-base sm:text-lg md:text-xl text-zinc-200 font-normal leading-relaxed italic">
                    "My goal is to continuously learn, innovate, and build meaningful intelligent solutions that solve complex real-world challenges through data, generative models, and robust engineering."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Academic Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-5 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-xs text-zinc-400">JNTUH</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">PROGRAM</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-1">B.Tech CSE (AI & ML)</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 truncate">JNTUH UCE Manthani</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <span className="font-mono text-xs text-zinc-400">STATUS</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">DURATION</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-1">2023 – 2027</h4>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">Currently Enrolled</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 rounded-2xl bg-[#121215] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-xs text-cyan-300">MERIT</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">CGPA SCORE</span>
                  <h4 className="text-xl font-black text-white font-mono mt-1">7.65 / 10</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Academic Excellence</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
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
      </div>
    </section>
  );
};
