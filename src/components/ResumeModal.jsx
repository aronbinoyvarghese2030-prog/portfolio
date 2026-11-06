import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, User, GraduationCap, Code2, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, resumeData } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white rounded-bento border border-slate-200 shadow-2xl max-w-2xl w-full z-10 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 transition-colors duration-300">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Academic Profile & Resume Overview
                </h3>
                <p className="text-xs text-slate-500">
                  Aron Binoy Varghese • B.Tech CSE (First Year)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Document Preview */}
          <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
            {/* Header Card inside preview */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{personalInfo.name}</h4>
                  <p className="text-xs font-semibold text-brand-600 transition-colors duration-300">{personalInfo.headline}</p>
                </div>
                <div className="text-xs text-slate-500">
                  <p>{personalInfo.location}</p>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="pt-3 text-xs text-slate-600 space-y-1">
                <p><strong>Education:</strong> {personalInfo.college}</p>
                <p><strong>Program:</strong> B.Tech in Computer Science and Engineering (First Year)</p>
              </div>
            </div>

            {/* Core Competencies Summary */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-brand-600 transition-colors duration-300" />
                <span>Foundational Skills</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>Programming: C (Foundations), Python (Beginner)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>Web Basics: HTML5, CSS3, Modern Layouts</span>
                </div>
              </div>
            </div>

            {/* Active Projects Summary */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Undergraduate Project Explorations
              </h5>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-800">1. Cardamom AI Disease Detection & Yield Intelligence</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Agricultural computer vision exploration for Highland crops in Kerala.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-800">2. Teammate Finder App</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Student collaboration matching concept for college hackathons and study groups.</p>
                </div>
              </div>
            </div>

            {/* Status notification */}
            <div className="p-3 rounded-xl bg-brand-50 border border-brand-200 text-xs text-brand-900 flex items-start gap-2 transition-colors duration-300">
              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <span>
                Download the verified academic overview PDF below or connect via email for detailed course transcripts and project briefs.
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Format: <strong>PDF Document</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-300 transition-colors"
              >
                Close
              </button>
              <a
                href={resumeData.filePath}
                download="Aron_Binoy_Varghese_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
