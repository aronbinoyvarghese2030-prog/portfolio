import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Building2, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Path</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Education
        </h2>
        <p className="mt-2 text-slate-500 text-base max-w-2xl">
          Structured formal education and undergraduate degree curriculum in Computer Science and Engineering.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Education Card (Span 8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 bg-white rounded-bento border border-slate-200/80 p-7 sm:p-10 shadow-bento relative overflow-hidden spotlight-card"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-50/60 rounded-full blur-3xl -z-10 pointer-events-none transition-colors duration-500" />

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold mb-3 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-brand-600" />
                <span>{edu.currentStatus}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                {edu.program}
              </h3>
              <p className="text-base font-semibold text-brand-600 flex items-center gap-2 transition-colors duration-300">
                <Building2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{edu.institution}</span>
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-slate-500 gap-1.5 shrink-0">
              <span className="inline-flex items-center gap-1.5 font-medium bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{edu.location}</span>
              </span>
              <span className="text-[11px] text-slate-400">
                {edu.affiliation}
              </span>
            </div>
          </div>

          <div className="pt-6 space-y-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {edu.description}
            </p>

            {/* Core Coursework & Subject Focus */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-600 transition-colors duration-300" />
                <span>Current Core Study Modules</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.currentFocus.map((focusItem, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-start gap-2.5 transition-shadow hover:shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 transition-colors duration-300" />
                    <span className="text-xs font-medium text-slate-700 leading-snug">
                      {focusItem}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Side Timeline / Milestones Card (Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-4 bg-white rounded-bento border border-slate-200/80 p-6 sm:p-7 shadow-bento flex flex-col justify-between spotlight-card"
        >
          <div>
            <div className="w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4 transition-colors duration-300">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              Academic Milestone Timeline
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Progression through the engineering program.
            </p>

            {/* Step Timeline */}
            <div className="relative pl-6 space-y-6 border-l-2 border-slate-200">
              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-brand-600 ring-4 ring-brand-100 transition-colors duration-300" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 transition-colors duration-300">
                  Current Year
                </span>
                <p className="text-sm font-bold text-slate-900">
                  Year 1: Foundations & Logic
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Structured C programming, hardware concepts, problem formulation.
                </p>
              </div>

              <div className="relative opacity-60">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Upcoming
                </span>
                <p className="text-sm font-bold text-slate-700">
                  Year 2: Data Structures & OOP
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Algorithms, object-oriented paradigms, system design basics.
                </p>
              </div>

              <div className="relative opacity-40">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Future
                </span>
                <p className="text-sm font-bold text-slate-700">
                  Years 3 & 4: Specialization & Capstone
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Advanced AI, cloud computing, major industry capstone project.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
            * All timeline stages reflect standard KTU B.Tech engineering curriculum.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
