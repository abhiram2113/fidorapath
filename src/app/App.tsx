import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ATSCalculator } from './components/ATSCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { CountriesWeServe } from './components/CountriesWeServe';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AIChatBot } from './components/AIChatBot';

function AnimatedBackground() {
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 0.5,
      left: Math.random() * 100,
      duration: Math.random() * 38 + 16,
      delay: -(Math.random() * 38),
      peakOpacity: Math.random() * 0.5 + 0.08,
      xDrift: (Math.random() - 0.5) * 150,
    })), []);

  const shootingStars = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: `${10 + i * 14}%`,
      width: 100 + i * 30,
      duration: 1.5 + i * 0.3,
      delay: i * 6 + 2,
      repeatDelay: 12 + i * 4,
    })), []);

  const stars = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i, w: Math.random() * 1.8 + 0.3,
      left: Math.random() * 100, top: Math.random() * 100,
      lo: Math.random() * 0.05 + 0.02, hi: Math.random() * 0.25 + 0.05,
      dur: Math.random() * 6 + 2, del: Math.random() * 6,
    })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Diamond cross-hatch grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: [
          'linear-gradient(rgba(200,146,42,0.022) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(200,146,42,0.022) 1px, transparent 1px)',
          'linear-gradient(45deg, rgba(200,146,42,0.038) 1px, transparent 1px)',
          'linear-gradient(-45deg, rgba(200,146,42,0.038) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: '200px 200px, 200px 200px, 46px 46px, 46px 46px',
      }} />

      {/* Orb — top left */}
      <motion.div className="absolute rounded-full" style={{
        width: 900, height: 900, left: '-5%', top: '-20%',
        background: 'radial-gradient(circle, rgba(200,146,42,0.09) 0%, transparent 65%)',
      }} animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />

      {/* Orb — bottom right */}
      <motion.div className="absolute rounded-full" style={{
        width: 750, height: 750, right: '-8%', bottom: '0%',
        background: 'radial-gradient(circle, rgba(200,146,42,0.08) 0%, transparent 65%)',
      }} animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }} />

      {/* Orb — center deep */}
      <motion.div className="absolute rounded-full" style={{
        width: 650, height: 650, left: '38%', top: '38%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(6,9,26,0.8) 0%, transparent 70%)',
      }} animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 8 }} />

      {/* Orb — mid right accent */}
      <motion.div className="absolute rounded-full" style={{
        width: 400, height: 400, right: '15%', top: '20%',
        background: 'radial-gradient(circle, rgba(232,185,74,0.06) 0%, transparent 70%)',
      }} animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />

      {/* Orb — lower left */}
      <motion.div className="absolute rounded-full" style={{
        width: 500, height: 500, left: '10%', bottom: '10%',
        background: 'radial-gradient(circle, rgba(200,146,42,0.055) 0%, transparent 70%)',
      }} animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 10 }} />

      {/* Shooting stars */}
      {shootingStars.map(s => (
        <motion.div key={`ss-${s.id}`}
          className="absolute" style={{
            top: s.top, left: '-20%', width: s.width, height: 1.5,
            background: 'linear-gradient(90deg, transparent, rgba(200,146,42,0.8), rgba(232,185,74,0.3), transparent)',
            transform: 'rotate(-13deg)',
          }}
          animate={{ x: ['0vw', '210vw'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, repeatDelay: s.repeatDelay, ease: 'linear', times: [0, 0.07, 0.86, 1] }} />
      ))}

      {/* Particles */}
      {particles.map(p => (
        <motion.div key={`p-${p.id}`}
          className="absolute rounded-full bg-[#C8922A]"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, bottom: '-10px' }}
          animate={{ y: [0, -2900], x: [0, p.xDrift], opacity: [0, p.peakOpacity, p.peakOpacity, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear', times: [0, 0.06, 0.94, 1] }} />
      ))}

      {/* Stars */}
      {stars.map(s => (
        <motion.div key={`st-${s.id}`}
          className="absolute rounded-full bg-[#F0EDD8]"
          style={{ width: s.w, height: s.w, left: `${s.left}%`, top: `${s.top}%` }}
          animate={{ opacity: [s.lo, s.hi, s.lo] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.del }} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06091A] text-[#F0EDD8] selection:bg-[#C8922A]/30 selection:text-[#F0EDD8]" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ATSCalculator />
          <WhyChooseUs />
          <Services />
          <CountriesWeServe />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
      <AIChatBot />
    </div>
  );
}
