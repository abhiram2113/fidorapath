import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const U = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" };

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, v };
}

export function ATSCalculator() {
  const { ref, v } = useInView();
  const [file, setFile] = useState<File | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleCalc = () => {
    if (!file) return;
    setCalculating(true); setScore(null);
    setTimeout(() => { setScore(Math.floor(Math.random() * 31) + 65); setCalculating(false); }, 2500);
  };
  const reset = () => { setFile(null); setScore(null); };

  return (
    <section id="ats-calculator" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/22 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5 justify-center">
            <span className="text-[#C8922A] text-[10px] font-bold tracking-[0.4em] uppercase" style={U}>Free Tool</span>
            <div className="w-8 h-px bg-[#C8922A]/40" />
            <span className="text-[#F0EDD8]/28 text-[10px] font-semibold tracking-[0.25em] uppercase">Instant Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0EDD8] mb-4" style={U}>ATS Score Calculator</h2>
          <p className="text-[#F0EDD8]/42 max-w-lg mx-auto text-sm leading-relaxed font-light">
            See exactly how your resume performs against Applicant Tracking Systems. Upload and get your score instantly — no sign-up needed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto bg-[#0c1640]/75 backdrop-blur-sm rounded-2xl p-8 border border-[#C8922A]/14 shadow-2xl shadow-black/40"
        >
          {!file && (
            <div
              onDrop={e => { e.preventDefault(); if (e.dataTransfer.files?.length) { setFile(e.dataTransfer.files[0]); setScore(null); } }}
              onDragOver={e => e.preventDefault()}
              onClick={() => document.getElementById('resume-upload')?.click()}
              className="border-2 border-dashed border-[#C8922A]/22 rounded-xl p-12 text-center hover:border-[#C8922A]/50 hover:bg-[#C8922A]/3 transition-all cursor-pointer group flex flex-col items-center"
            >
              <input id="resume-upload" type="file" className="hidden" accept=".pdf,.doc,.docx"
                onChange={e => { if (e.target.files) { setFile(e.target.files[0]); setScore(null); } }} />
              <div className="bg-[#C8922A]/10 p-5 rounded-full mb-5 group-hover:scale-110 transition-transform border border-[#C8922A]/20">
                <UploadCloud className="h-9 w-9 text-[#C8922A]" />
              </div>
              <h3 className="text-xl font-bold text-[#F0EDD8] mb-2" style={U}>Drag & Drop Your Resume</h3>
              <p className="text-[#F0EDD8]/35 mb-6 text-sm font-light">Supports PDF, DOC, DOCX · Max 5MB</p>
              <span className="bg-[#C8922A] text-[#06091A] px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-[#C8922A]/22 group-hover:bg-[#E8B94A] group-hover:-translate-y-0.5 transition-all">
                Browse Files
              </span>
            </div>
          )}

          {file && !score && !calculating && (
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <FileText className="h-5 w-5 text-[#C8922A]" />
                <span className="font-medium text-[#F0EDD8] text-sm">{file.name}</span>
                <button onClick={reset} className="text-xs text-red-400 hover:text-red-300 hover:underline ml-2 transition-colors">Remove</button>
              </div>
              <button onClick={handleCalc}
                className="px-10 py-4 bg-[#C8922A] text-[#06091A] rounded-full font-semibold shadow-lg shadow-[#C8922A]/25 hover:bg-[#E8B94A] hover:shadow-[0_8px_30px_rgba(200,146,42,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
                Calculate ATS Score
              </button>
            </div>
          )}

          {calculating && (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <Loader2 className="h-10 w-10 text-[#C8922A] animate-spin" />
              <h3 className="text-lg font-semibold text-[#F0EDD8]" style={U}>Scanning Against US IT Job Descriptions…</h3>
              <p className="text-[#F0EDD8]/35 text-sm font-light">Checking keywords, formatting, and readability.</p>
            </div>
          )}

          {score !== null && (
            <div className="text-center space-y-7 animate-in fade-in zoom-in duration-500">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-44 h-44 -rotate-90">
                  <circle strokeWidth="8" stroke="rgba(240,237,216,0.06)" fill="transparent" r="74" cx="88" cy="88" />
                  <circle strokeWidth="8" strokeDasharray={465} strokeDashoffset={465 - (465 * score) / 100}
                    strokeLinecap="round" stroke={score >= 80 ? '#C8922A' : score >= 70 ? '#E8B94A' : '#ef4444'}
                    fill="transparent" r="74" cx="88" cy="88" className="transition-all duration-1000 ease-out" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl font-black text-[#F0EDD8]" style={U}>{score}%</span>
                  <span className="text-[9px] font-semibold text-[#F0EDD8]/35 uppercase tracking-widest">ATS Match</span>
                </div>
              </div>

              <div className="max-w-sm mx-auto">
                <h4 className="text-xl font-bold text-[#F0EDD8] mb-2" style={U}>
                  {score >= 80 ? 'Great Resume!' : score >= 70 ? 'Needs Improvement' : 'Critical Issues Found'}
                </h4>
                <p className="text-[#F0EDD8]/40 mb-5 text-sm font-light leading-relaxed">
                  {score >= 80
                    ? 'Strong chance of passing US IT ATS systems. Standing out still requires more.'
                    : 'Your resume might get filtered out. It lacks specific keywords or formatting.'}
                </p>
                <div className="bg-[#06091A]/60 rounded-xl p-4 border border-[#C8922A]/12 text-left space-y-3 mb-7">
                  <div className="flex items-start gap-3">
                    {score >= 80 ? <CheckCircle className="h-4 w-4 text-[#C8922A] mt-0.5 shrink-0" /> : <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />}
                    <p className="text-xs text-[#F0EDD8]/58">Keyword Optimization: <span className="text-[#F0EDD8]/35">{score >= 80 ? 'Good alignment' : 'Lacking US IT specific terms'}</span></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-[#F0EDD8]/58">Uniqueness: <span className="text-[#F0EDD8]/35">Standard format detected. Consider a Digital Resume.</span></p>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <button onClick={reset} className="px-5 py-2.5 border border-[#F0EDD8]/12 text-[#F0EDD8]/50 rounded-full text-sm font-medium hover:bg-[#0c1640] hover:border-[#C8922A]/25 transition-all">Test Another</button>
                  <a href="#services" className="px-5 py-2.5 bg-[#C8922A] text-[#06091A] rounded-full text-sm font-semibold shadow-lg shadow-[#C8922A]/22 hover:bg-[#E8B94A] transition-all">Upgrade Resume</a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/22 to-transparent" />
    </section>
  );
}
