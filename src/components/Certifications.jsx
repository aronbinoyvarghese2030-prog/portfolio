import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { certificationsData } from '../data/portfolio';

export default function Certifications() {
  const hasCerts = certificationsData.entries && certificationsData.entries.length > 0;

  return (
    <section id="certifications" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Continuous Learning</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Certifications & Learning
        </h2>
        <p className="mt-2 text-slate-500 text-base max-w-2xl">
          Formal credentials, external course completions, and verified skill certifications.
        </p>
      </div>

      {hasCerts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.entries.map((cert, idx) => (
            <div key={idx} className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento flex flex-col justify-between">
              <div>
                <Award className="w-6 h-6 text-brand-600 mb-3" />
                <h3 className="font-bold text-lg text-slate-900 mb-1">{cert.title}</h3>
                <p className="text-sm font-semibold text-brand-600">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
              </div>
              {cert.credentialLink && (
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Elegant empty state */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-bento border border-slate-200/80 p-8 sm:p-12 shadow-bento relative overflow-hidden spotlight-card"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Shield / Award Badge */}
            <div className="w-16 h-16 rounded-3xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600 mx-auto mb-6 shadow-sm transition-colors duration-300">
              <Award className="w-8 h-8" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-3">
              <Clock className="w-3.5 h-3.5 text-brand-600 transition-colors duration-300" />
              <span>{certificationsData.message}</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Verified Certifications in Pipeline
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              {certificationsData.subtext}
            </p>

            {/* In-Progress Learning Tracks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <BookOpen className="w-4 h-4 text-brand-600 mb-2 transition-colors duration-300" />
                <h4 className="text-xs font-bold text-slate-900">KTU Engineering Core</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Structured C programming, algorithms, and engineering fundamentals.
                </p>
                <div className="mt-3 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                  Enrolled
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-brand-600 mb-2 transition-colors duration-300" />
                <h4 className="text-xs font-bold text-slate-900">Python Basics</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Python scripting, syntax constructs, and introductory automation.
                </p>
                <div className="mt-3 text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md inline-block transition-colors duration-300">
                  In Progress
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Award className="w-4 h-4 text-indigo-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Web Development</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Semantic HTML5, CSS3 responsive grid layouts, and web accessibility.
                </p>
                <div className="mt-3 text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">
                  Active Practice
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
