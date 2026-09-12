import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CodeXml, Lightbulb, Sparkles } from 'lucide-react';

interface FloatingBadge {
  text: string;
  icon: React.ElementType;
  position: string;
  delay: number;
  glow: string;
}

export const HeroFloatingBadges: React.FC = () => {
  const badges: FloatingBadge[] = [
    {
      text: 'AI / ML',
      icon: Brain,
      position: 'top-6 left-2 sm:left-6 md:top-10 md:left-4',
      delay: 0,
      glow: 'text-cyan-400',
    },
    {
      text: 'DEVELOPER',
      icon: CodeXml,
      position: 'top-12 right-2 sm:right-6 md:top-16 md:right-6',
      delay: 0.2,
      glow: 'text-emerald-400',
    },
    {
      text: 'PROBLEM SOLVER',
      icon: Lightbulb,
      position: 'bottom-16 left-4 sm:left-8 md:bottom-20 md:left-6',
      delay: 0.4,
      glow: 'text-amber-400',
    },
    {
      text: 'CREATIVE THINKER',
      icon: Sparkles,
      position: 'bottom-8 right-4 sm:right-8 md:bottom-12 md:right-8',
      delay: 0.6,
      glow: 'text-purple-400',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.div
            key={b.text}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { delay: 0.5 + b.delay, duration: 0.6 },
              scale: { delay: 0.5 + b.delay, duration: 0.6 },
              y: {
                repeat: Infinity,
                duration: 4 + i,
                ease: 'easeInOut',
                delay: i * 0.7,
              },
            }}
            className={`absolute ${b.position} pointer-events-auto select-none`}
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill shadow-lg border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300">
              <Icon className={`w-3.5 h-3.5 ${b.glow}`} />
              <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                {b.text}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
