import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Cpu, 
  Sparkles, 
  Eye, 
  Layers, 
  Lock, 
  Clock 
} from 'lucide-react';
import { projectsData } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Innovations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-2 text-slate-500 text-base max-w-2xl">
          Practical initiatives exploring artificial intelligence in regional agriculture and modern web platforms for student collaboration.
        </p>
      </div>

      {/* Bento Grid Projects Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, delay: idx * 0.15 }}
            className="bg-white rounded-bento border border-slate-200/80 overflow-hidden shadow-bento hover:shadow-bento-hover transition-all duration-300 flex flex-col justify-between group spotlight-card"
          >
            {/* Visual Image Header */}
            <div className="relative h-60 sm:h-72 bg-slate-100 overflow-hidden border-b border-slate-100">
              <img
                src={project.imagePlaceholder === 'cardamom-ai' ? '/images/cardamom-ai.svg' : '/images/teammate-finder.svg'}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Category & Status Overlay Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm border border-slate-200/60">
                  {project.category.split('|')[0].trim()}
                </span>
              </div>

              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-medium text-white shadow-sm">
                  <Clock className="w-3 h-3 text-brand-300" />
                  <span>{project.status}</span>
                </span>
              </div>
            </div>

            {/* Project Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors duration-200 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technology Badges with dynamic hover */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium group-hover:border-brand-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: View Project & Verified GitHub */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                {/* View Project Button */}
                <button
                  type="button"
                  onClick={() => handleOpenProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white font-semibold text-xs sm:text-sm hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </button>

                {/* GitHub Button - transparent state when repository is pending public release */}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-500 text-xs font-medium"
                    title="Code repository is in internal staging and will be published once initial validation is completed."
                  >
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Repo in Staging</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
