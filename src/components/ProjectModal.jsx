import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Tag, Layers, Cpu, Compass, Info } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white rounded-bento border border-slate-200 shadow-2xl max-w-2xl w-full z-10 overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 transition-colors duration-300">
                {project.category}
              </span>
              <span className="text-xs font-medium text-slate-500">•</span>
              <span className="text-xs font-semibold text-slate-600">
                {project.status}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
            {/* Visual illustration banner */}
            <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={project.imagePlaceholder === 'cardamom-ai' ? '/images/cardamom-ai.svg' : '/images/teammate-finder.svg'}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Project Highlights */}
            {project.highlights && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-600 transition-colors duration-300" />
                  <span>Key Project Highlights & Scope</span>
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-600 transition-colors duration-300" />
                <span>Technologies & Domains</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repository & Deployment Status Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-brand-600 shrink-0 mt-0.5 transition-colors duration-300" />
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">
                  Transparency Notice:
                </p>
                <p>
                  This project is currently in the prototype and active development phase. Code repositories and live interactive deployments are maintained in private academic worktrees and will be published when milestone audits are complete.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Project Status: <strong className="text-slate-800">{project.status}</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-300 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
