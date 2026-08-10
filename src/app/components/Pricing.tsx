import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Star, X, Mail, Phone, Info, Globe, IndianRupee } from 'lucide-react';

const U = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" };

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.06 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, v };
}

const plans = [
  {
    name: 'Career Starter',
    tagline: 'Get resume-ready fast',
    usd: 249, inr: 20700,
    tag: '', isPopular: false,
    features: ['Digital Resume Building', 'LinkedIn Optimization', 'Job Board Access', '1 revision round', 'Email support'],
    cta: 'Choose Career Starter',
  },
  {
    name: 'Career Accelerator',
    tagline: 'Everything to start applying with confidence',
    usd: 499, inr: 41400,
    tag: 'Most Popular', isPopular: true,
    features: ['Everything in Career Starter', 'Portfolio Building', 'Applications for Job Roles (20+ applications)', '2 revision rounds', 'Priority support'],
    cta: 'Choose Career Accelerator',
  },
  {
    name: 'Premium Program',
    tagline: 'The full hire-ready package',
    usd: 699, inr: 58000,
    tag: '', isPopular: false,
    features: ['Everything in Career Accelerator', 'IT Certification (3 Certificates)', 'Applications for Job Roles (40+ Applications)', 'Resume Monthly Subscription (1 month included)', 'Unlimited revisions', 'Dedicated career coach'],
    cta: 'Choose Premium Program',
  },
];

export function Pricing() {
  const { ref, v } = useInView();
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [contact, setContact] = useState(false);

  return (
    <section id="pricing" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,184,0,0.12)', border: '1px solid rgba(255,184,0,0.28)' }}>
              <span className="text-[#FFB800] text-[9px] font-bold" style={U}>05</span>
            </div>
            <span className="text-[#FFB800] text-[10px] font-bold tracking-[0.35em] uppercase" style={U}>Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] leading-tight mb-5 max-w-2xl" style={U}>Invest in Your Career</h2>
          <p className="text-[#F0F4FF]/42 max-w-lg leading-relaxed font-light text-sm md:text-base">Transparent, one-time pricing. No subscriptions unless you want one.</p>
        </motion.div>

        {/* Currency toggle */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 relative" style={{ background: 'rgba(12,18,40,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <motion.button whileTap={{ scale: 0.96 }} onClick={() => setCurrency('inr')}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ background: currency === 'inr' ? 'rgba(255,255,255,0.08)' : 'transparent', color: currency === 'inr' ? '#F0F4FF' : 'rgba(240,244,255,0.4)', ...U }}>
              <IndianRupee className="h-3.5 w-3.5" /> IN India (₹ INR)
            </motion.button>
            <motion.button whileTap={{ scale: 0.96 }} onClick={() => setCurrency('usd')}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ background: currency === 'usd' ? '#F0F4FF' : 'transparent', color: currency === 'usd' ? '#020409' : 'rgba(240,244,255,0.4)', ...U }}>
              <Globe className="h-3.5 w-3.5" /> International ($ USD)
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="relative">
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full font-bold text-[11px] shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #FFB800, #FFC933)', color: '#020409', ...U }}>
                    <Star className="h-3 w-3" fill="currentColor" /> Most Popular
                  </div>
                </div>
              )}
              <motion.div whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.99 }}
                className="h-full rounded-2xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative"
                style={{
                  background: plan.isPopular ? 'rgba(20,28,58,0.9)' : 'rgba(12,18,40,0.72)',
                  backdropFilter: 'blur(20px)',
                  border: plan.isPopular ? '1.5px solid rgba(255,184,0,0.35)' : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: plan.isPopular ? '0 0 60px rgba(255,184,0,0.1), inset 0 1px 0 rgba(255,184,0,0.12)' : 'none',
                }}>
                {plan.isPopular && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(255,184,0,0.09) 0%, transparent 65%)' }} />
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#F0F4FF] mb-1" style={U}>{plan.name}</h3>
                  <p className="text-[#F0F4FF]/38 text-sm font-light">{plan.tagline}</p>
                </div>

                <motion.div key={currency} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
                  className="mb-6 pb-6 flex items-baseline gap-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-5xl font-black" style={{ color: plan.isPopular ? '#FFB800' : '#F0F4FF', ...U }}>
                    {currency === 'usd' ? `$${plan.usd}` : `₹${plan.inr.toLocaleString('en-IN')}`}
                  </span>
                  <span className="text-[#F0F4FF]/30 text-sm font-light">one-time</span>
                </motion.div>

                <ul className="space-y-3.5 mb-8 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: plan.isPopular ? 'rgba(255,184,0,0.15)' : 'rgba(255,255,255,0.06)', border: plan.isPopular ? '1px solid rgba(255,184,0,0.3)' : '1px solid rgba(255,255,255,0.12)' }}>
                        <Check className="h-3 w-3" style={{ color: plan.isPopular ? '#FFB800' : 'rgba(240,244,255,0.5)' }} />
                      </div>
                      <span className="text-[#F0F4FF]/55 text-sm leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-300"
                  style={{
                    background: plan.isPopular ? '#FFB800' : 'rgba(255,255,255,0.06)',
                    color: plan.isPopular ? '#020409' : 'rgba(240,244,255,0.65)',
                    border: plan.isPopular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    ...U,
                  }}>
                  {plan.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-[#F0F4FF]/35 text-xs max-w-max mx-auto px-6 py-3.5 rounded-full"
          style={{ background: 'rgba(12,18,40,0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center gap-2"><Info className="h-3.5 w-3.5 text-[#FFB800]" /><span>Need custom enterprise pricing?</span></div>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => setContact(true)} className="text-[#FFB800] font-bold hover:underline transition-colors" style={U}>Contact our team.</motion.button>
        </motion.div>
      </div>

      {contact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(2,4,9,0.88)' }} onClick={() => setContact(false)} />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative rounded-2xl shadow-2xl w-full max-w-sm p-7 text-center"
            style={{ background: '#0c1228', border: '1px solid rgba(255,184,0,0.18)' }}>
            <button onClick={() => setContact(false)} className="absolute top-4 right-4 text-[#F0F4FF]/30 hover:text-[#F0F4FF] p-2 rounded-xl transition-colors">
              <X className="h-4 w-4" />
            </button>
            <div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#FFB800]/25">
              <Mail className="h-6 w-6 text-[#020409]" />
            </div>
            <h3 className="text-xl font-bold text-[#F0F4FF] mb-1.5" style={U}>Contact Sales</h3>
            <p className="text-[#F0F4FF]/30 mb-6 text-xs font-light">Reach out for custom enterprise pricing and bulk discounts.</p>
            <div className="space-y-3">
              <motion.a whileHover={{ scale: 1.02 }} href="mailto:support@fidorapath.com" className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm" style={{ background: 'rgba(255,184,0,0.08)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.2)', ...U }}>
                <Mail className="h-4 w-4" /> support@fidorapath.com
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} href="https://wa.me/7997474891" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm" style={{ background: 'rgba(34,197,94,0.06)', color: '#86efac', border: '1px solid rgba(34,197,94,0.14)', ...U }}>
                <Phone className="h-4 w-4" /> WhatsApp: +91 7997474891
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
