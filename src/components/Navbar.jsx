import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Monitor scroll state for styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Initials with dynamic pulse */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
            aria-label="Aron Binoy Varghese Home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-base tracking-wider shadow-sm transition-colors duration-300"
            >
              {personalInfo.initials}
            </motion.div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 text-sm tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-tight mt-1">
                CSE Undergraduate
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-brand-600 font-semibold bg-brand-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full border border-brand-200 pointer-events-none"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Compact links for medium screens */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1" aria-label="Condensed navigation">
            {navItems.filter(i => ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].includes(i.name)).map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-600 font-semibold bg-brand-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Switcher & Let's Connect CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Theme Toggle Pill: Blue vs Red */}
            <div
              className="flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 shadow-2xs"
              role="group"
              aria-label="Theme Accent Color"
            >
              <button
                type="button"
                onClick={() => setTheme('blue')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 ${
                  theme === 'blue'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Switch to Blue Theme"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                <span className="hidden sm:inline">Blue</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme('red')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 ${
                  theme === 'red'
                    ? 'bg-white text-red-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Switch to Crimson Red Theme"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                <span className="hidden sm:inline">Red</span>
              </button>
            </div>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-white border-b border-slate-200 shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
              
              {/* Mobile Theme Selection Row */}
              <div className="px-3 py-2.5 mb-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-brand-600" />
                  Accent Theme:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTheme('blue')}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === 'blue' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Blue
                  </button>
                  <button
                    onClick={() => setTheme('red')}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === 'red' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Red
                  </button>
                </div>
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-50 text-brand-600 font-semibold border-l-4 border-brand-600 pl-3'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-100 mt-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
