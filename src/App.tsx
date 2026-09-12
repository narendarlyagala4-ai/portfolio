import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-[#09090b] relative font-outfit">
      {/* Custom follower cursor matching reference */}
      <CustomCursor />

      {/* Sticky glassmorphic navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 00. Hero Section with 3D Center & Magnetic Action Buttons */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 01. About Me */}
        <About />

        {/* What I Build */}
        <WhatIBuild />

        {/* From Data to Intelligence Flow */}
        <Philosophy />

        {/* 02. Progression & Experience */}
        <Experience />

        {/* 03. Featured Projects Showcase with Visual Mockups */}
        <Projects />

        {/* 04. Certifications */}
        <Certifications />

        {/* 05. Education */}
        <Education />

        {/* 06. Hobbies & Interests */}
        <Hobbies />

        {/* 07. Contact Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Resume Document View Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
