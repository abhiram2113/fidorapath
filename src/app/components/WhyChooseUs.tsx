import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, Award } from 'lucide-react';

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

const reasons = [
  { icon: Target,      title: 'Laser-Focused on US IT',    description: 'We understand the specific keywords, formatting, and expectations of US-based tech recruiters — not generic advice.' },
  { icon: TrendingUp,  title: 'Proven LinkedIn Strategy',  description: 'We optimize your digital footprint to attract inbound opportunities from top tech companies in the US, UK, Germany, and Ireland.' },
  { icon: ShieldCheck, title: 'ATS-Beating Formats',       description: 'Our templates are rigorously tested against Workday, Greenhouse, and Lever — ensuring your resume passes every automated filter.' },
  { icon: Award,       title: 'Expert Cert Guidance',      description: 'We guide you on the exact IT certifications — AWS, Azure, CISSP, Security+ — that maximize your salary potential in the US.' },
];

export function WhyChooseUs() {
  const { ref, v } = useInView();

  return (
    <section id="why-us" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/22 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#C8922A] text-[10px] font-bold tracking-[0.4em] uppercase" style={U}>01</span>
            <div className="w-8 h-px bg-[#C8922A]/40" />
            <span className="text-[#F0EDD8]/28 text-[10px] font-semibold tracking-[0.25em] uppercase">Why Fidorapath</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0EDD8] leading-tight mb-5 max-w-2xl" style={U}>
            Your Unfair Advantage in the Tech Job Market
          </h2>
          <p className="text-[#F0EDD8]/42 max-w-lg leading-relaxed font-light text-sm md:text-base">
            Thousands of qualified IT professionals get rejected daily because their resume was not parsed correctly. We change that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {reasons.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.1 }}
              className="relative bg-[#0c1640]/70 backdrop-blur-sm rounded-xl p-7 border border-[#C8922A]/12 hover:border-[#C8922A]/38 hover:shadow-[0_10px_44px_rgba(200,146,42,0.1)] hover:-translate-y-2 transition-all duration-300 group cursor-default overflow-hidden"
            >
              <span className="absolute top-3.5 right-4 text-[44px] font-black leading-none select-none text-[#F0EDD8]/[0.035] group-hover:text-[#C8922A]/12 transition-colors duration-300" style={U}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="bg-[#C8922A]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-[#C8922A]/18 group-hover:bg-[#C8922A]/18 transition-colors">
                <r.icon className="h-5 w-5 text-[#C8922A]" />
              </div>
              <h4 className="text-sm font-bold text-[#F0EDD8] mb-3 leading-snug" style={U}>{r.title}</h4>
              <p className="text-[#F0EDD8]/38 text-xs leading-relaxed font-light">{r.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-[#0c1640]/75 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C8922A]/15 shadow-2xl shadow-black/40 flex flex-col lg:flex-row"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8922A]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="p-10 lg:p-14 lg:w-3/5 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8922A]/10 border border-[#C8922A]/25 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8922A] animate-pulse" />
              <span className="text-[#C8922A] text-xs font-semibold tracking-[0.25em] uppercase" style={U}>Premium Service</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#F0EDD8] mb-4 leading-tight" style={U}>
              Ready to stand out to US recruiters?
            </h3>
            <p className="text-[#F0EDD8]/40 text-sm mb-7 max-w-lg leading-relaxed font-light">
              Stop sending the same PDF as everyone else. Discover our Digital Resume format with a personalized self-introduction video.
            </p>
            <a href="#services" className="inline-flex items-center gap-2 bg-[#C8922A] text-[#06091A] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#E8B94A] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(200,146,42,0.4)] transition-all duration-300 shadow-lg shadow-[#C8922A]/28">
              Explore Digital Resumes
            </a>
          </div>
          <div className="lg:w-2/5 relative min-h-[220px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1580983553600-c49a1d083f54?w=800&h=600&fit=crop&auto=format" alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-28 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1640] to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/22 to-transparent" />
    </section>
  );
}
