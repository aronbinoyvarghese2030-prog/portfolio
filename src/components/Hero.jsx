import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Code2, 
  Cpu, 
  Send,
  CheckCircle2,
  Terminal,
  Binary,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ onOpenResume }) {
  const [imageError, setImageError] = useState(false);
  const { theme } = useTheme();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Dynamic Ambient Animated Glow Spheres */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-brand-50/60 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-48 right-10 w-80 h-80 bg-brand-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Bento Grid Hero Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Primary Introduction (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-white rounded-bento border border-slate-200/80 p-8 sm:p-10 shadow-bento flex flex-col justify-between relative overflow-hidden spotlight-card group"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50/70 rounded-full blur-3xl -z-10 pointer-events-none transition-colors duration-500" />

          <div>
            {/* Small Introductory Label Badge with animated beacon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/60 mb-5 shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-slate-700">
                {personalInfo.label}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] font-medium text-slate-500">First-Year Undergrad</span>
            </motion.div>

            {/* Main Heading: Name with subtle gradient flair on hover */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-3"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Professional Title in Dynamic Accent Color */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-brand-600 mb-6 flex items-center gap-2 transition-colors duration-300"
            >
              <span>{personalInfo.headline}</span>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
            >
              {/* Explore My Work Button */}
              <button
                type="button"
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Contact Me Button */}
              <button
                type="button"
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-slate-500" />
              </button>

              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Aron_Binoy_Varghese_Resume.pdf"
                onClick={(e) => {
                  if (onOpenResume) {
                    e.preventDefault();
                    onOpenResume();
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 shadow-2xs"
              >
                <Download className="w-4 h-4 text-brand-600" />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Small Supporting Bento Elements / Status Badges */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/90 border border-slate-100/90 shadow-2xs transition-shadow"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center text-brand-600 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Location</p>
                <p className="text-xs font-semibold text-slate-800 truncate">{personalInfo.location}</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/90 border border-slate-100/90 shadow-2xs transition-shadow"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-100/80 flex items-center justify-center text-indigo-600 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Pursuing</p>
                <p className="text-xs font-semibold text-slate-800 truncate">B.Tech in CSE</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/90 border border-slate-100/90 shadow-2xs transition-shadow"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-600 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Key Focus</p>
                <p className="text-xs font-semibold text-slate-800 truncate">Software & AI</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image Bento Card with Floating Tech Badges (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          {/* Main Visual Avatar Card */}
          <div className="bg-white rounded-bento border border-slate-200/80 p-6 sm:p-8 shadow-bento flex flex-col items-center justify-center text-center relative overflow-hidden flex-1 group spotlight-card">
            
            {/* Background geometric grid & ambient spotlight */}
            <div className="absolute inset-0 bg-subtle-grid opacity-35 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-100/40 rounded-full blur-2xl -z-10 transition-colors duration-500" />

            {/* Profile Image Container with Fallback & Floating Chips */}
            <div className="relative mb-6">
              
              {/* Outer Glow Ring */}
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl p-1.5 bg-gradient-to-b from-brand-200 via-slate-200 to-brand-100 shadow-md relative group transition-colors duration-500">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 flex items-center justify-center relative">
                  {!imageError ? (
                    <img
                      src="/images/profile.jpg"
                      alt="Aron Binoy Varghese"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Fallback Monogram Avatar if profile.jpg is not yet added */
                    <div className="w-full h-full bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 flex flex-col items-center justify-center text-white p-4 transition-colors duration-500">
                      <div className="text-5xl font-black tracking-widest mb-1 drop-shadow-md">
                        {personalInfo.initials}
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase opacity-85 text-blue-100">
                        Engineering Student
                      </span>
                    </div>
                  )}

                  {/* Active Status Badge inside avatar */}
                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-semibold text-slate-700">Active & Coding</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbital Tag 1: C & Python */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-3 -left-5 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl px-3 py-1.5 shadow-md flex items-center gap-2 hidden sm:flex"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Binary className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-800 leading-none">C Language</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Algorithms & Logic</p>
                </div>
              </motion.div>

              {/* Floating Orbital Tag 2: AI & Python */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.6 }}
                className="absolute -bottom-3 -right-5 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl px-3 py-1.5 shadow-md flex items-center gap-2 hidden sm:flex"
              >
                <div className="w-6 h-6 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-800 leading-none">AgriTech AI</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Cardamom Vision</p>
                </div>
              </motion.div>
            </div>

            {/* Profile Info Summary */}
            <h3 className="text-lg font-bold text-slate-900 mb-0.5">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-brand-600 font-semibold mb-1">
              Amal Jyothi College of Engineering
            </p>
            <p className="text-[11px] text-slate-500 mb-4 font-medium">
              B.Tech Computer Science and Engineering
            </p>

            {/* Status Bento Pill */}
            <div className="w-full bg-slate-50/90 rounded-2xl p-3 border border-slate-100 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-snug">
                  Strengthening programming rigor in C, exploring beginner Python automation, and advancing student collaboration ideas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
