import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  MessageSquare,
  ShieldAlert
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeMail = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject.trim() || `Connecting with ${personalInfo.name}`);
    const mailBody = encodeURIComponent(
      `Hello Aron,\n\n${message.trim() || "I came across your portfolio and would like to connect."}\n\nBest regards,\n${senderName.trim() || "Visitor"}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-300">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Let's Build Something Together
        </h2>
        <p className="mt-2 text-slate-500 text-base max-w-2xl">
          I'm always interested in connecting with people, exploring ideas and learning about exciting opportunities.
        </p>
      </div>

      {/* Bento Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Info & Configurable Profiles (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Email Primary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-bento border border-slate-200/80 p-7 shadow-bento spotlight-card"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Direct Inquiries
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
              Email Address
            </h3>
            
            <p className="text-sm font-medium text-slate-800 break-all select-all mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100 font-mono">
              {personalInfo.email}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Native Mailto Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white font-semibold text-xs sm:text-sm hover:bg-brand-700 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              {/* Copy Email Button with instant feedback */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  copied 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 animate-bounce" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>
          </motion.div>

          {/* Location & Response Time Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento spotlight-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Location
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  {personalInfo.location}
                </h4>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Based in Kerala, India (IST / UTC+5:30). Typically available for emails and discussions regarding student initiatives, internships, and engineering projects.
            </p>
          </motion.div>

          {/* Configurable Profiles (GitHub & LinkedIn) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-bento border border-slate-200/80 p-6 shadow-bento space-y-4"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Social Profiles & Online Presence
            </span>

            {/* GitHub Card */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-900">GitHub</h5>
                  <p className="text-[11px] text-slate-500">
                    {personalInfo.socials.github.configured 
                      ? "Verified Profile" 
                      : personalInfo.socials.github.status}
                  </p>
                </div>
              </div>

              {personalInfo.socials.github.configured && personalInfo.socials.github.url ? (
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white text-slate-700 hover:text-brand-600 border border-slate-200"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                  Pending Setup
                </span>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-900">LinkedIn</h5>
                  <p className="text-[11px] text-slate-500">
                    {personalInfo.socials.linkedin.configured 
                      ? "Verified Profile" 
                      : personalInfo.socials.linkedin.status}
                  </p>
                </div>
              </div>

              {personalInfo.socials.linkedin.configured && personalInfo.socials.linkedin.url ? (
                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white text-slate-700 hover:text-brand-600 border border-slate-200"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                  Pending Setup
                </span>
              )}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Native Working Email Composer (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 bg-white rounded-bento border border-slate-200/80 p-7 sm:p-10 shadow-bento flex flex-col justify-between spotlight-card"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm transition-colors duration-300">
                <Sparkles className="w-4 h-4" />
                <span>Direct Email Composer</span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                Native Mailto Client
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Send a Message to Aron
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your thoughts below. Clicking "Launch Email Client" immediately opens your default email client (Outlook, Gmail, Apple Mail) with these details pre-filled.
            </p>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div>
                <label htmlFor="senderName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex (Engineering Recruiter / Peer)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject Line
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Project Discussion / Hackathon Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about what you'd like to build, opportunities, or feedback on projects..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Client</span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Direct recipient: {personalInfo.email}</span>
            <span>No fake forms or backend dependencies</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
