import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Cpu, 
  Globe, 
  Sparkles, 
  Lightbulb, 
  Compass, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  Globe: Globe,
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300"
        >
          <User className="w-3.5 h-3.5" />
          <span>Background</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          About Me
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-slate-500 text-base max-w-2xl"
        >
          A glimpse into my academic journey, core curiosities, and personal philosophy as a first-year Computer Science Engineering student.
        </motion.p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Main Narrative Bento Card (Span 8) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 bg-white rounded-bento border border-slate-200/80 p-7 sm:p-10 shadow-bento flex flex-col justify-between relative overflow-hidden spotlight-card group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50/50 rounded-full -z-10 blur-2xl transition-colors duration-500" />

          <div>
            <div className="flex items-center gap-2 mb-6 text-brand-600 font-semibold text-sm transition-colors duration-300">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Who I Am & What Drives Me</span>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                {personalInfo.bio[0]}
              </p>
              <p>
                {personalInfo.bio[1]}
              </p>
              <p className="text-slate-600">
                {personalInfo.bio[2]}
              </p>
            </div>
          </div>

          {/* Core Philosophy Badges */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5 bg-slate-50 hover:bg-brand-50/50 px-3.5 py-1.5 rounded-xl border border-slate-200/70 text-slate-700 transition-colors">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              Hands-on Experimentation
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 hover:bg-brand-50/50 px-3.5 py-1.5 rounded-xl border border-slate-200/70 text-slate-700 transition-colors">
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              Curiosity-Led Problem Solving
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 hover:bg-brand-50/50 px-3.5 py-1.5 rounded-xl border border-slate-200/70 text-slate-700 transition-colors">
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              Solid Foundations First
            </span>
          </div>
        </motion.div>

        {/* Academic Status & Location Card (Span 4) */}
        <div className="md:col-span-4 flex flex-col gap-6">
          
          {/* Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento flex-1 spotlight-card transition-shadow hover:shadow-bento-hover"
          >
            <div className="w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4 transition-colors duration-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Academic Status
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1">
              B.Tech in CSE
            </h3>
            <p className="text-xs text-brand-600 font-semibold mb-2 transition-colors duration-300">
              First-year Undergraduate
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enrolled at <span className="font-semibold text-slate-800">{personalInfo.college}</span>, mastering computer engineering fundamentals and algorithmic logic.
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento flex-1 spotlight-card transition-shadow hover:shadow-bento-hover"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Current Base
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1">
              {personalInfo.location}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Studying and coding from Kerala, India. Passionate about applying computational technology to solve practical regional and global challenges.
            </p>
          </motion.div>
        </div>

        {/* Career Interests Grid (Span 12 -> 3 columns) */}
        <div className="md:col-span-12">
          <div className="mt-4 mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Key Areas of Interest
              </h3>
              <p className="text-xs text-slate-500">
                Domains where I dedicate my ongoing technical study and project experiments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalInfo.careerInterests.map((interest, idx) => {
              const IconComponent = iconMap[interest.icon] || Code2;
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                  className="bg-white rounded-bento border border-slate-200/80 p-7 shadow-bento hover:shadow-bento-hover transition-all duration-300 flex flex-col justify-between group spotlight-card"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-brand-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-brand-600 transition-all duration-300 mb-5 group-hover:scale-105">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600">
                    <span>Active Exploration</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
