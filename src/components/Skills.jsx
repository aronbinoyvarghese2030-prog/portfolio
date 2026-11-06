import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Binary, 
  Terminal, 
  FileCode2, 
  Palette, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Code
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

const iconMap = {
  Binary: Binary,
  Terminal: Terminal,
  FileCode2: FileCode2,
  Palette: Palette,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
            <Wrench className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technologies & Skills
          </h2>
          <p className="mt-2 text-slate-500 text-base max-w-2xl">
            An honest, transparent view of the programming languages and web foundations I am developing as a first-year computer science engineering student.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Areas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('programming')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'programming' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Programming (C & Python)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web-dev')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'web-dev' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Web (HTML & CSS)
          </button>
        </div>
      </div>

      {/* Main Categories Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Programming & Web Development Categories (Span 8) */}
        <div className="lg:col-span-8 space-y-8">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: catIdx * 0.1 }}
                className="bg-white rounded-bento border border-slate-200/80 p-6 sm:p-8 shadow-bento spotlight-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-100 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 self-start sm:self-auto">
                    {category.skills.length} Focus Modules
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const Icon = iconMap[skill.icon] || Binary;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-brand-300 hover:bg-white hover:shadow-bento-hover transition-all duration-200 group cursor-default"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-white shadow-2xs group-hover:scale-105 transition-transform">
                              <Icon className="w-5 h-5 text-brand-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[11px] font-semibold text-slate-500">
                                {skill.level}
                              </span>
                            </div>
                          </div>

                          {/* Distinct Honest Badge */}
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 shadow-2xs">
                            {skill.badge}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Side: Learning Roadmap & Engineering Mindset (Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          {/* Active Learning Roadmap Card */}
          <div className="bg-white rounded-bento border border-slate-200/80 p-6 sm:p-7 shadow-bento flex-1 spotlight-card">
            <div className="flex items-center gap-2 text-brand-600 mb-2 transition-colors duration-300">
              <Compass className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 text-lg">
                Upcoming Roadmap
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Curriculum progression and self-initiated topics currently on my immediate learning track:
            </p>

            <div className="space-y-3">
              {skillsData.learningRoadmap.map((item, idx) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs transition-colors hover:bg-brand-50/40"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-800">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-100 transition-colors">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-start gap-2 text-xs text-slate-500">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  No invented percentages or exaggerated credentials. Transparent growth driven by curiosity.
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Notice Card */}
          <div className="bg-gradient-to-br from-brand-50/70 to-slate-50 rounded-bento border border-brand-100 p-6 shadow-sm transition-colors duration-300">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Modular & Expandable
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              This portfolio is architected to scale seamlessly as new languages, frameworks, and lab projects are completed.
            </p>
            <div className="flex items-center text-xs font-semibold text-brand-600 gap-1 transition-colors duration-300">
              <span>Updated continuously via centralized data</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
