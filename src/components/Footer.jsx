import React from 'react';
import { ArrowUp, Mail, Heart, Palette } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const footerNav = [
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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 mt-12 text-slate-600 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          
          {/* Identity & Mission (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-base tracking-wider shadow-sm transition-colors duration-300">
                {personalInfo.initials}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base leading-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-brand-600 font-medium transition-colors duration-300">
                  {personalInfo.headline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Undergraduate at Amal Jyothi College of Engineering, Kerala. Passionate about exploring computer science fundamentals, software engineering, and artificial intelligence.
            </p>

            <p className="text-xs font-semibold text-slate-700 italic">
              "Designed with curiosity and built with passion."
            </p>
          </div>

          {/* Quick Links (Span 4) */}
          <div className="md:col-span-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Navigation
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-slate-600 hover:text-brand-600 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Theme Switching (Span 3) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Stay Connected
              </h5>
              <div className="flex items-center gap-2 mb-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-brand-50 hover:text-brand-600 flex items-center justify-center text-slate-700 transition-colors"
                  title="Send Email"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {personalInfo.socials.github.configured && personalInfo.socials.github.url && (
                  <a
                    href={personalInfo.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}

                {personalInfo.socials.linkedin.configured && personalInfo.socials.linkedin.url && (
                  <a
                    href={personalInfo.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Footer Theme Quick Toggle */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Palette className="w-3.5 h-3.5 text-brand-600" />
                <span>Theme:</span>
                <button
                  onClick={() => setTheme('blue')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                    theme === 'blue' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Blue
                </button>
                <button
                  onClick={() => setTheme('red')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                    theme === 'red' ? 'bg-red-100 text-red-700' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Red
                </button>
              </div>
            </div>

            {/* Scroll to Top Pill */}
            <div className="mt-6 md:mt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-brand-600 bg-slate-50 hover:bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 transition-all"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Built with React, Vite, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
