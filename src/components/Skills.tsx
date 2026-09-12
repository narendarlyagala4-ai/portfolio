import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, skillCategories } from '../data/skills';
import type { SkillCategory } from '../types';
import {
  Terminal, Database, Cpu, Brain, Sparkles, Bot, FileSearch,
  MessageSquareText, TrendingUp, Workflow, Filter, PieChart,
  LineChart, Boxes, Search, Zap, Code2, FileCode, Server,
  Layers, BarChart3, Calculator, Container, Network, Binary
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Terminal, Database, Cpu, Brain, Sparkles, Bot, FileSearch,
  MessageSquareText, TrendingUp, Workflow, Filter, PieChart,
  LineChart, Boxes, Search, Zap, Code2, FileCode, Server,
  Layers, BarChart3, Calculator, Container, Network, Binary
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative w-full py-20 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              TECHNICAL ARSENAL
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
              SKILLS & STACK
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as SkillCategory)}
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

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Cpu;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 shrink-0">
                        {skill.category}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-xs font-outfit text-zinc-400 leading-relaxed font-light line-clamp-2">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
