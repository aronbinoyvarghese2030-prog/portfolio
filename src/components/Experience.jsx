import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Compass, Target, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolio';

export default function Experience() {
  const hasEntries = experienceData.entries && experienceData.entries.length > 0;

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Journey</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Experience
        </h2>
        <p className="mt-2 text-slate-500 text-base max-w-2xl">
          A transparent representation of my current career stage, practical focus, and readiness for future engineering roles.
        </p>
      </div>

      {hasEntries ? (
        /* Dynamic entries when user adds them in portfolio.js */
        <div className="space-y-6">
          {experienceData.entries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento">
              <h3 className="font-bold text-lg text-slate-900">{item.role}</h3>
              <p className="text-sm text-brand-600">{item.company}</p>
              <p className="text-xs text-slate-500 mt-1">{item.period}</p>
              <p className="text-sm text-slate-600 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        /* Professional empty-state layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Focus Card (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white rounded-bento border border-slate-200/80 p-7 sm:p-10 shadow-bento flex flex-col justify-between spotlight-card"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 transition-colors duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Current Career Phase
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Early Undergraduate Preparation
                  </h3>
                </div>
              </div>

              {/* Minimal Required Message */}
              <div className="p-5 rounded-2xl bg-brand-50/60 border border-brand-100 mb-6 transition-colors duration-300">
                <p className="text-base sm:text-lg font-semibold text-brand-900 leading-snug">
                  "{experienceData.message}"
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {experienceData.subtext}
              </p>

              {/* Pillars of Active Preparation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <BookOpen className="w-4 h-4 text-brand-600 mb-1.5 transition-colors duration-300" />
                  <p className="text-xs font-bold text-slate-900">Foundational Rigor</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Hands-on lab assignments in C and algorithms.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Target className="w-4 h-4 text-emerald-600 mb-1.5" />
                  <p className="text-xs font-bold text-slate-900">Practical Projects</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Cardamom AI vision and collaborative apps.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Sparkles className="w-4 h-4 text-brand-600 mb-1.5 transition-colors duration-300" />
                  <p className="text-xs font-bold text-slate-900">Future Ready</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Eager for upcoming summer internships & hackathons.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Career Openness / Future Opportunities (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 bg-white rounded-bento border border-slate-200/80 p-6 sm:p-7 shadow-bento flex flex-col justify-between spotlight-card"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Open To Opportunities
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Interested in early-career student roles that value rapid learning, dedication, and problem-solving initiative:
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 transition-colors duration-300" />
                  <span>Summer Engineering Internships</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 transition-colors duration-300" />
                  <span>Student Developer Hackathons & Sprints</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 transition-colors duration-300" />
                  <span>Open Source Contribution Mentorship</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 transition-colors duration-300" />
                  <span>Campus Tech Club Collaborations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-brand-600 hover:text-white transition-all duration-200"
              >
                Reach Out for Opportunities
              </a>
            </div>
          </motion.div>

        </div>
      )}
    </section>
  );
}
