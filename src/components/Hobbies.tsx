import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Trophy } from 'lucide-react';

const hobbiesList = [
  {
    name: 'Listening to Music',
    icon: Headphones,
    tagline: 'Melodic Focus & Rhythm',
    description: 'Unwinding and finding creative flow across diverse musical genres, soundtracks, and acoustic melodies that fuel mental clarity and inspiration.',
    color: 'text-cyan-400',
  },
  {
    name: 'Watching Cricket',
    icon: Trophy,
    tagline: 'Strategy & Sporting Passion',
    description: 'Avid cricket enthusiast following international tournaments, IPL, and tactical match dynamics, appreciating athletic excellence, team strategy, and high-stakes finishes.',
    color: 'text-amber-400',
  },
];

export const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 06 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              06 // PERSONAL INTERESTS
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              HOBBIES
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            BEYOND THE TERMINAL
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {hobbiesList.map((hobby, idx) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className={`w-7 h-7 ${hobby.color}`} />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-1.5 font-semibold">
                    {hobby.tagline}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="font-outfit text-sm text-zinc-400 leading-relaxed font-light">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
