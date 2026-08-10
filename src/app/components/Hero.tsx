import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Globe, TrendingUp, DollarSign } from 'lucide-react';

const U = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" };

const stats = [
  { value: '100+', label: 'IT Pros Placed',  icon: Users },
  { value: '4',    label: 'Countries',        icon: Globe },
  { value: '92%',  label: 'ATS Pass Rate',    icon: TrendingUp },
  { value: '$145k',label: 'Avg US Salary',    icon: DollarSign },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Section marker */}
      <div className="absolute top-28 left-5 md:left-10 flex items-center gap-2.5 select-none pointer-events-none">
        <span className="text-[#C8922A] text-[10px] font-bold tracking-[0.4em] uppercase" style={U}>00</span>
        <div className="w-10 h-px bg-[#C8922A]/35" />
      </div>

      <div className="relative z-10 text-center px-5 w-full max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8922A]/28 bg-[#C8922A]/7 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8922A] animate-pulse flex-shrink-0" />
          <span className="text-[#C8922A] text-xs font-semibold tracking-[0.25em] uppercase" style={U}>IT Career Accelerator</span>
        </motion.div>

        {/* Giant stacked brand */}
        <div className="relative mb-6 leading-none select-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              ...U,
              fontSize: 'clamp(68px, 13vw, 148px)',
              fontWeight: 200,
              letterSpacing: '0.03em',
              color: 'rgba(240,237,216,0.88)',
              lineHeight: 1.05,
            }}
          >
            Fidora
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{
              ...U,
              fontSize: 'clamp(68px, 13vw, 148px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              background: 'linear-gradient(130deg, #C8922A 0%, #E8B94A 45%, #C8922A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(255,184,0,1), 0 0 80px rgba(255,184,0,0.6), 0 0 160px rgba(255,184,0,0.3), 0 0 300px rgba(255,184,0,0.15)' }}
          >
            path.
          </motion.div>
        </div>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '1px', width: 'min(500px, 75%)', margin: '0 auto 2rem', background: 'linear-gradient(90deg, transparent, rgba(200,146,42,0.65), transparent)' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.72 }}
          className="text-[#F0EDD8]/48 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light"
        >
          We help IT professionals beat ATS systems and land dream jobs in the US market — Digital Resumes, LinkedIn optimization, and targeted career coaching.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#ats-calculator"
            className="flex items-center gap-2.5 px-8 py-4 bg-[#C8922A] text-[#06091A] rounded-full font-semibold text-sm hover:bg-[#E8B94A] hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(200,146,42,0.45)] active:translate-y-0 transition-all duration-300 shadow-lg shadow-[#C8922A]/28 group">
            Check ATS Score Free
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform flex-shrink-0" />
          </a>
          <a href="#services"
            className="flex items-center gap-2 px-8 py-4 border border-[#F0EDD8]/12 text-[#F0EDD8]/55 rounded-full font-medium text-sm hover:bg-[#0c1640] hover:border-[#C8922A]/32 hover:-translate-y-1 transition-all duration-300">
            Explore Services
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.98 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i}
              className="bg-[#0c1640]/65 backdrop-blur-sm border border-[#C8922A]/10 rounded-xl p-5 hover:border-[#C8922A]/32 hover:bg-[#0c1640]/90 transition-all duration-300 group cursor-default">
              <p className="text-2xl font-black text-[#F0EDD8] mb-0.5 group-hover:text-[#C8922A] transition-colors" style={U}>{stat.value}</p>
              <p className="text-xs text-[#F0EDD8]/32 font-light">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#F0EDD8]/20 text-[10px] tracking-[0.3em] uppercase" style={U}>Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#C8922A]/45 to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Decorative diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute"
          style={{ width: 1, height: '32%', left: '11%', top: '22%', transform: 'rotate(16deg)', background: 'linear-gradient(180deg, transparent, rgba(200,146,42,0.22), transparent)' }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute"
          style={{ width: 1, height: '26%', right: '13%', top: '32%', transform: 'rotate(-13deg)', background: 'linear-gradient(180deg, transparent, rgba(200,146,42,0.16), transparent)' }}
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />
      </div>
    </section>
  );
}
