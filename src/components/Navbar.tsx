import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CERTIFICATES', href: '#certificates' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'HOBBIES', href: '#hobbies' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Narendar Lyagala Home"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:border-cyan-400/50 group-hover:text-white transition-all shadow-sm">
            ⚡
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-mono tracking-wider font-bold text-white uppercase group-hover:text-cyan-300 transition-colors">
              NARENDAR LYAGALA
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
              AI / ML ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links matching reference */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-mono text-xs tracking-widest transition-all duration-200 uppercase ${
                  isActive
                    ? 'text-cyan-400 font-bold underline underline-offset-8 decoration-cyan-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 bg-white/5 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME</span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase text-black bg-white hover:bg-zinc-200 font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-zinc-300 hover:text-white bg-white/5 rounded-lg border border-white/10 text-xs flex items-center gap-1"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-zinc-800 py-6 px-8 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-sm tracking-widest py-1 transition-colors uppercase ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 px-4 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-zinc-200 bg-zinc-900 border border-zinc-700 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                VIEW & PRINT RESUME
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 px-4 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-black bg-white flex items-center justify-center gap-1.5"
              >
                LET'S TALK
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
