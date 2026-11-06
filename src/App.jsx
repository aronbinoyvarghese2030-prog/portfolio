import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FBFBFD] text-slate-800 flex flex-col font-sans selection:bg-brand-600 selection:text-white transition-colors duration-300">
        {/* Sticky Navigation Bar with Theme Switcher */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Technologies & Skills Section */}
          <Skills />

          {/* Featured Projects Section */}
          <Projects />

          {/* Education Section */}
          <Education />

          {/* Experience Section */}
          <Experience />

          {/* Achievements & Activities Section */}
          <Achievements />

          {/* Certifications & Learning Section */}
          <Certifications />

          {/* Dedicated Resume Section */}
          <Resume onOpenPreview={() => setResumeModalOpen(true)} />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Resume Preview Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
