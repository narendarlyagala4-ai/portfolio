import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, BarChart3, Layers, ArrowUpRight } from 'lucide-react';

const focusAreas = [
  {
    number: '01',
    title: 'Generative AI',
    description: 'LLM applications, RAG systems and intelligent assistants',
    extended: 'Building grounded context retrieval pipelines, prompt orchestration with LangChain, and dense vector indexing for conversational enterprise intelligence.',
    icon: Sparkles,
    accent: 'from-cyan-500/10 to-blue-600/5',
    border: 'group-hover:border-cyan-500/40',
    iconColor: 'text-cyan-400',
    tags: ['LangChain', 'FAISS', 'OpenAI', 'Contextual RAG']
  },
  {
    number: '02',
    title: 'Machine Learning',
    description: 'Predictive models, classification and intelligent decision systems',
    extended: 'Designing end-to-end classification and predictive pipelines with Scikit-learn, addressing class imbalance, feature engineering, and evaluating multi-metric performance.',
    icon: Brain,
    accent: 'from-indigo-500/10 to-purple-600/5',
    border: 'group-hover:border-indigo-500/40',
    iconColor: 'text-indigo-400',
    tags: ['Scikit-learn', 'Feature Engineering', 'Classification', 'Model Evaluation']
  },
  {
    number: '03',
    title: 'Data & Analytics',
    description: 'ETL pipelines, data analysis, visualization and BI dashboards',
    extended: 'Engineering Python ETL workflows, structured SQL data warehousing, and interactive six-page Power BI reports powered by advanced DAX time-intelligence measures.',
    icon: BarChart3,
    accent: 'from-purple-500/10 to-pink-600/5',
    border: 'group-hover:border-purple-500/40',
    iconColor: 'text-purple-400',
    tags: ['Python ETL', 'SQL Warehousing', 'Power BI', 'DAX Measures']
  },
  {
    number: '04',
    title: 'AI Applications',
    description: 'Full-stack AI platforms using modern backend and frontend technologies',
    extended: 'Developing responsive React & TypeScript interfaces backed by asynchronous FastAPI microservices, SQLAlchemy ORM, PostgreSQL, and containerized Docker environments.',
    icon: Layers,
    accent: 'from-emerald-500/10 to-teal-600/5',
    border: 'group-hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker']
  }
];

export const WhatIBuild: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              ENGINEERING DOMAINS
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
              WHAT I BUILD
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            CORE DISCIPLINARY FOCUS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-[#121215] border border-zinc-800 ${area.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {area.number}
                    </span>
                    <div className={`p-3 rounded-2xl bg-zinc-900 border border-zinc-800 ${area.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {area.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </h3>

                  <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                    {area.description}
                  </p>

                  <p className="text-zinc-400 font-outfit text-sm leading-relaxed mb-6 font-light">
                    {area.extended}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
