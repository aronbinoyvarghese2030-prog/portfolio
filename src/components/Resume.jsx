import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { resumeData, personalInfo } from '../data/portfolio';

export default function Resume({ onOpenPreview }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-white via-slate-50/50 to-brand-50/40 rounded-bento-lg border border-slate-200/90 p-8 sm:p-12 shadow-bento relative overflow-hidden spotlight-card group transition-colors duration-500"
      >
        {/* Background decorative ambient glow */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-500" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 transition-colors duration-300">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {resumeData.heading}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {resumeData.description}
            </p>

            {/* Quick Summary Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 transition-colors duration-300" />
                Updated for 2026 Academic Year
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Student Details
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:shrink-0">
            {/* Preview Button */}
            <button
              type="button"
              onClick={onOpenPreview}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs hover:-translate-y-0.5 active:translate-y-0"
            >
              <Eye className="w-4 h-4 text-slate-600" />
              <span>Preview Overview</span>
            </button>

            {/* Download Button */}
            <a
              href={resumeData.filePath}
              download="Aron_Binoy_Varghese_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Instant Download Confirmation Feedback */}
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Resume download initiated successfully (/resume.pdf).</span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
