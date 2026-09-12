import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#070709] py-14 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand and Tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
              ⚡
            </div>
            <span className="font-mono font-bold text-white text-sm tracking-wider uppercase">
              NARENDAR LYAGALA
            </span>
          </div>
          <p className="text-xs font-outfit text-zinc-400 font-light">
            © 2026 Narendar Lyagala. Built with passion for AI, Machine Learning & Intelligent Systems.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/narendarlyagala4-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/narendar-lyagala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-sky-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.instagram.com/the_stranger._04?stkn=MWpvazltbDB4ZzBhNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-pink-400 transition-colors"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:narendarlyagala4@gmail.com"
            className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Email Narendar"
          >
            <Mail className="w-4 h-4" />
          </a>

          <MagneticButton>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-sm ml-2"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
