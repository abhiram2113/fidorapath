import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, X, CheckCircle, TrendingUp, Award, Quote } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

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

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)'; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={className} style={{ transition: 'transform 0.18s ease-out', transformStyle: 'preserve-3d' }}>{children}</div>;
}

const stories = [
  {
    candidate: 'Ramesh K.', role: 'Senior Full Stack Engineer', company: 'TechNexus Systems',
    location: 'San Francisco, CA', salary: '$145,000',
    quote: 'Fidorapath transformed my resume and I started getting calls from companies I only dreamed of working for. Within a month, I had multiple offers in the US.',
    image: 'https://images.unsplash.com/photo-1771244688590-1e481dba1b5a?w=200&h=200&fit=crop&auto=format',
    accentColor: '#FFB800',
    fullStory: {
      journey: 'Ramesh had 8 years of experience but struggled to get interviews. Within 2 weeks of using our ATS-optimized Digital Resume, he received 12 interview calls from top US tech firms.',
      challenges: ['Resume rejected by ATS systems', 'Outdated format not suited for US market', 'Keywords not aligned with US IT roles'],
      solution: ['Restructured with ATS-friendly format', 'Highlighted AWS, React, Node.js skills', 'Added quantifiable achievements with metrics'],
      results: ['12 interview calls in 2 weeks', '5 offers from top startups', '145% salary increase', 'Relocated with visa sponsorship'],
    },
  },
  {
    candidate: 'Priya M.', role: 'Cloud Architect', company: 'DataStream Solutions',
    location: 'London, UK', salary: '£90,000',
    quote: "Moving to the UK seemed impossible until Fidorapath helped me. Their understanding of what UK companies look for was spot-on. I'm now living my dream!",
    image: 'https://images.unsplash.com/photo-1656236577401-6c60e0baeed5?w=200&h=200&fit=crop&auto=format',
    accentColor: '#60A5FA',
    fullStory: {
      journey: 'Priya was an experienced cloud professional from Bangalore transitioning to the UK market. Her technical skills were exceptional but her resume needed a complete overhaul.',
      challenges: ['Format did not match UK professional standards', 'Lacking emphasis on cloud certifications', 'No leadership progression demonstrated'],
      solution: ['Reformatted to UK professional standards', 'Emphasized Azure and AWS certifications', 'Showcased cross-functional team leadership'],
      results: ['8 interview invitations from London firms', '3 offers including DataStream', 'UK work visa sponsorship secured', '£90,000 starting salary'],
    },
  },
  {
    candidate: 'Aditya V.', role: 'DevOps Engineer', company: 'CyberMatrix Corp',
    location: 'Austin, TX', salary: '$130,000',
    quote: 'Fidorapath helped me see my own value! The Digital Resume with my intro video was a game-changer. I am now earning what I am truly worth.',
    image: 'https://images.unsplash.com/photo-1716471453667-94383b1e4859?w=200&h=200&fit=crop&auto=format',
    accentColor: '#a78bfa',
    fullStory: {
      journey: 'Aditya from Hyderabad had strong DevOps skills but was stuck in underpaying roles. Our team repositioned him as a senior-level DevOps engineer for the US market.',
      challenges: ['Resume focused on tasks instead of impact', 'CI/CD skills buried in descriptions', 'No infrastructure scaling proof'],
      solution: ['Impact-focused bullet points with metrics', 'Highlighted Kubernetes, Docker, Terraform', 'Reduced deployment time metric: 70%'],
      results: ['15 interview requests in 3 weeks', '4 final round offers', '$130,000 base + equity', '$15,000 relocation package'],
    },
  },
];

export function Testimonials() {
  const { ref, v } = useInView();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,184,0,0.12)', border: '1px solid rgba(255,184,0,0.28)' }}>
              <span className="text-[#FFB800] text-[9px] font-bold" style={U}>04</span>
            </div>
            <ShieldCheck className="h-3 w-3 text-[#F0F4FF]/28" />
            <span className="text-[#FFB800] text-[10px] font-bold tracking-[0.35em] uppercase" style={U}>Verified Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] leading-tight mb-5 max-w-2xl" style={U}>Real Results. Real Careers.</h2>
          <p className="text-[#F0F4FF]/42 max-w-lg leading-relaxed font-light text-sm md:text-base">
            Join hundreds of Indian IT professionals who landed their dream jobs abroad through Fidorapath's proven process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 32 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }}>
              <TiltCard className="h-full rounded-2xl overflow-hidden flex flex-col cursor-default"
                style={{ background: 'rgba(12,18,40,0.72)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.07)' } as React.CSSProperties}>
                <div className="h-0.5" style={{ background: `linear-gradient(to right, transparent, ${story.accentColor}60, transparent)` }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-6 flex-1">
                    <Quote className="h-7 w-7 mb-3" style={{ color: `${story.accentColor}40` }} />
                    <p className="text-[#F0F4FF]/55 text-sm leading-relaxed italic font-light">"{story.quote}"</p>
                  </div>
                  <div className="rounded-xl p-3.5 mb-5 flex items-center justify-between" style={{ background: 'rgba(2,4,9,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="text-[#F0F4FF]/30 text-xs">Final Offer</span>
                    <span className="font-black text-[#F0F4FF] text-sm select-none" style={{ filter: 'blur(5px)', ...U }}>{story.salary}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <img src={story.image} alt={story.candidate} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" style={{ border: `2px solid ${story.accentColor}30` }} />
                    <div>
                      <p className="text-sm font-bold text-[#F0F4FF]" style={U}>{story.candidate}</p>
                      <p className="text-xs font-semibold" style={{ color: story.accentColor }}>{story.role}</p>
                      <p className="text-[10px] text-[#F0F4FF]/28">{story.company} · {story.location}</p>
                    </div>
                  </div>
                  <Dialog.Root open={selected === index} onOpenChange={open => setSelected(open ? index : null)}>
                    <Dialog.Trigger asChild>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                        className="w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        style={{ background: `${story.accentColor}0d`, border: `1px solid ${story.accentColor}28`, color: story.accentColor, ...U }}>
                        Read Full Story <ChevronRight className="h-3.5 w-3.5" />
                      </motion.button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm animate-in fade-in" style={{ background: 'rgba(2,4,9,0.88)' }} />
                      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto z-50 animate-in fade-in zoom-in-95" style={{ background: '#0c1228', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Dialog.Title className="sr-only">Success Story: {story.candidate}</Dialog.Title>
                        <Dialog.Description className="sr-only">Full story of {story.candidate}.</Dialog.Description>
                        <div className="sticky top-0 rounded-t-2xl p-5" style={{ background: '#020409', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <img src={story.image} alt={story.candidate} className="w-12 h-12 rounded-xl object-cover" style={{ border: `2px solid ${story.accentColor}30` }} />
                              <div>
                                <div className="flex items-center gap-2 mb-1"><Award className="h-3 w-3" style={{ color: story.accentColor }} /><span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest" style={{ background: `${story.accentColor}12`, border: `1px solid ${story.accentColor}22`, color: story.accentColor }}>Success Story</span></div>
                                <h3 className="text-xl font-bold text-[#F0F4FF]" style={U}>{story.candidate}</h3>
                                <p className="text-[#F0F4FF]/35 text-xs">{story.role} at {story.company}</p>
                              </div>
                            </div>
                            <Dialog.Close asChild>
                              <button className="text-[#F0F4FF]/30 hover:text-[#F0F4FF] rounded-xl p-1.5 transition-colors"><X className="h-4 w-4" /></button>
                            </Dialog.Close>
                          </div>
                        </div>
                        <div className="p-5 space-y-4">
                          <div><div className="flex items-center gap-2 mb-2"><TrendingUp className="h-4 w-4" style={{ color: story.accentColor }} /><h4 className="font-bold text-[#F0F4FF] text-sm" style={U}>The Journey</h4></div><p className="text-[#F0F4FF]/40 text-xs leading-relaxed font-light">{story.fullStory.journey}</p></div>
                          <div className="rounded-xl p-4" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.14)' }}>
                            <h4 className="font-bold text-red-300 mb-2 text-sm" style={U}>Challenges Faced</h4>
                            <ul className="space-y-1.5">{story.fullStory.challenges.map((c, i) => <li key={i} className="flex items-start gap-2 text-[#F0F4FF]/40 text-xs font-light"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{c}</li>)}</ul>
                          </div>
                          <div className="rounded-xl p-4" style={{ background: `${story.accentColor}06`, border: `1px solid ${story.accentColor}16` }}>
                            <h4 className="font-bold text-[#F0F4FF] mb-2 text-sm" style={U}>Results Achieved</h4>
                            <ul className="space-y-1.5">{story.fullStory.results.map((r, i) => <li key={i} className="flex items-start gap-2 text-[#F0F4FF]/55 text-xs font-medium"><CheckCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: story.accentColor }} />{r}</li>)}</ul>
                          </div>
                          <div className="text-center pt-2">
                            <motion.a href="#services" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all" style={{ background: story.accentColor, color: '#020409', ...U }}>
                              Start Your Success Story <ChevronRight className="h-4 w-4" />
                            </motion.a>
                          </div>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
