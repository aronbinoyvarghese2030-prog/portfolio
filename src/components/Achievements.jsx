import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, Flag, Star, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/portfolio';

export default function Achievements() {
  const hasAchievements = achievementsData.entries && achievementsData.entries.length > 0;

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
          <Trophy className="w-3.5 h-3.5" />
          <span>Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Achievements & Activities
        </h2>
        <p className="mt-2 text-slate-500 text-base max-w-2xl">
          Extracurricular involvements, tech club events, and upcoming hackathon milestones.
        </p>
      </div>

      {hasAchievements ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.entries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento">
              <Award className="w-6 h-6 text-brand-600 mb-3" />
              <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
              <p className="text-xs text-brand-600 font-semibold">{item.issuer}</p>
              <p className="text-xs text-slate-500 mt-1">{item.date}</p>
              <p className="text-xs text-slate-600 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        /* Tasteful, visually appealing empty state */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-bento border border-slate-200/80 p-8 sm:p-12 shadow-bento relative overflow-hidden spotlight-card"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Visual Trophy Icon Badge */}
            <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mx-auto mb-6 shadow-sm">
              <Trophy className="w-8 h-8" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{achievementsData.message}</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Building Milestones in Real-Time
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              {achievementsData.subtext}
            </p>

            {/* Aspirations & Target Activities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Flag className="w-4 h-4 text-brand-600 mb-2 transition-colors duration-300" />
                <h4 className="text-xs font-bold text-slate-900">Hackathon Sprints</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Actively teaming up for regional college and national level student hackathons.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Star className="w-4 h-4 text-amber-500 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Campus Coding Clubs</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Participating in departmental tech circles, seminars, and algorithmic workshops.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Award className="w-4 h-4 text-emerald-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Open Source Impact</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Working toward initial GitHub open source documentation and bug fix contributions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
