import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import fpLogo from '@/imports/image.png';

const U = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" };

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, v };
}

const countries = [
  { name: 'United States', code: 'US', flag: '🇺🇸', jobs: '350+ roles' },
  { name: 'United Kingdom',code: 'UK', flag: '🇬🇧', jobs: '80+ roles' },
  { name: 'Germany',       code: 'DE', flag: '🇩🇪', jobs: '45+ roles' },
  { name: 'Ireland',       code: 'IE', flag: '🇮🇪', jobs: '30+ roles' },
];

export function CountriesWeServe() {
  const { ref, v } = useInView();

  return (
    <section id="countries-we-serve" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/22 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#C8922A] text-[10px] font-bold tracking-[0.4em] uppercase" style={U}>03</span>
            <div className="w-8 h-px bg-[#C8922A]/40" />
            <Globe className="h-3 w-3 text-[#F0EDD8]/28" />
            <span className="text-[#F0EDD8]/28 text-[10px] font-semibold tracking-[0.25em] uppercase">Global Reach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0EDD8] leading-tight mb-5 max-w-2xl" style={U}>
            We Help People Across the World
          </h2>
          <p className="text-[#F0EDD8]/42 max-w-lg leading-relaxed font-light text-sm md:text-base">
            Proudly serving IT job seekers in the United States, United Kingdom, Germany, and Ireland — helping them land dream roles with visa sponsorship.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
          {countries.map((country, i) => (
            <motion.div key={country.code}
              initial={{ opacity: 0, y: 18 }} animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="bg-[#0c1640]/75 backdrop-blur-sm rounded-xl p-5 border border-[#C8922A]/12 hover:border-[#C8922A]/40 hover:shadow-[0_6px_24px_rgba(200,146,42,0.14)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#06091A] border-2 border-[#C8922A]/22 group-hover:border-[#C8922A] flex items-center justify-center overflow-hidden transition-all group-hover:shadow-[0_0_12px_rgba(200,146,42,0.4)]">
                  <img src={fpLogo} alt="FP" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <p className="font-bold text-[#F0EDD8] group-hover:text-[#C8922A] transition-colors text-sm leading-tight" style={U}>{country.name}</p>
                  <p className="text-[10px] text-[#F0EDD8]/28 uppercase tracking-widest">{country.flag} {country.code}</p>
                </div>
              </div>
              <p className="text-[10px] text-[#C8922A]/70 font-semibold tracking-wide">{country.jobs} available</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.55 }} className="text-center">
          <p className="text-sm text-[#F0EDD8]/35 mb-5 font-light">Ready to take your career global?</p>
          <a href="#pricing" className="inline-block bg-[#C8922A] text-[#06091A] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#E8B94A] hover:shadow-[0_8px_30px_rgba(200,146,42,0.4)] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#C8922A]/28">
            Get Your ATS-Optimized Resume
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/22 to-transparent" />
    </section>
  );
}
