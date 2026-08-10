import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  PlayCircle,
  FileText,
  LayoutDashboard,
  Award,
  Linkedin,
  Briefcase,
  CalendarClock,
  Check,
  CheckCircle,
  X,
} from 'lucide-react';

const U = {
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
};

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: 0.04 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return { ref, v };
}

function TiltCard({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.03)`;

    el.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(255,184,0,0.08)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        'perspective(900px) rotateY(0) rotateX(0) scale(1)';
      ref.current.style.boxShadow = '';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}
      style={{
        transition:
          'transform 0.16s ease-out, box-shadow 0.16s ease-out',
        transformStyle: 'preserve-3d',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </div>
  );
}

interface Service {
  title: string;
  subtitle: string;
  price: string;
  priceLabel: string;
  icon: React.ReactElement;
  accentColor: string;
  image: string;
  features: string[];
  longDesc: string;
}

const services: Service[] = [
  {
    title: 'Digital Resume Building',
    subtitle:
      'ATS-friendly digital resumes designed for US IT job applications',
    price: '$80',
    priceLabel: 'Starting at',
    icon: <PlayCircle className="h-6 w-6" />,
    accentColor: '#FFB800',
    image:
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=700&h=450&fit=crop&auto=format',
    features: [
      'Personalized intro video link',
      'ATS-friendly resume structure',
      'Click-through portfolio links',
      '7-day revision support',
    ],
    longDesc:
      'Our digital resume service creates a professional, ATS-friendly resume designed for the US IT job market. We organize your experience, skills, projects, keywords, and professional links into a recruiter-friendly digital resume that is easy to review and share.',
  },

  {
    title: 'Portfolio Building',
    subtitle:
      'Professional portfolios that showcase your IT projects and skills',
    price: '$100',
    priceLabel: 'Starting at',
    icon: <LayoutDashboard className="h-6 w-6" />,
    accentColor: '#a78bfa',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&h=450&fit=crop&auto=format',
    features: [
      'Project showcase pages',
      'GitHub integration',
      'Custom domain setup',
      'Mobile responsive design',
    ],
    longDesc:
      'We build professional portfolio websites for IT professionals who want to showcase their real projects, technical skills, achievements, GitHub work, and experience to recruiters and potential employers.',
  },

  {
    title: 'IT Certification Guidance',
    subtitle:
      'Career-focused IT certification guidance for the US job market',
    price: '$120',
    priceLabel: 'Starting at',
    icon: <Award className="h-6 w-6" />,
    accentColor: '#34d399',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=450&fit=crop&auto=format',
    features: [
      'AWS, Azure, CISSP, Security+',
      'Role-specific certification guidance',
      'Prep materials & mock tests',
      'Validity tracking & reminders',
    ],
    longDesc:
      'We help IT professionals identify relevant certifications based on their target role and career goals. Our guidance focuses on certifications commonly associated with technology careers in the US market.',
  },

  {
    title: 'LinkedIn Profile Optimization',
subtitle:
  'Optimize your LinkedIn profile to attract US IT recruiters and employers',
    price: '$15',
    priceLabel: 'Starting at',
    icon: <Linkedin className="h-6 w-6" />,
    accentColor: '#38bdf8',
    image:
      'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=700&h=450&fit=crop&auto=format',
    features: [
      'Keyword-rich headline & summary',
      'Recruiter search optimization',
      'Network growth strategy',
      'Connection message templates',
    ],
    longDesc:
  'We optimize your LinkedIn profile using relevant IT industry keywords, a stronger professional headline, an improved About section, optimized experience descriptions, and role-focused content designed to help recruiters understand your professional background.',
  },

  {
    title: 'US Job Application Services',
subtitle:
  'Professional and targeted job application support for US IT jobs',
    price: '$150',
    priceLabel: 'Starting at',
    icon: <Briefcase className="h-6 w-6" />,
    accentColor: '#fb923c',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&h=450&fit=crop&auto=format',
    features: [
      '20+ targeted applications/month',
      'Custom cover letters per role',
      'Job board monitoring',
      'Application tracking dashboard',
    ],
    longDesc:
  'Our US job application service helps IT professionals identify relevant job opportunities and manage targeted applications. We organize applications, prepare role-specific materials, track submitted positions, and provide structured career support throughout the US job search process.',
  },

  {
    title: 'Resume Monthly Subscription',
    subtitle:
      'Fresh, role-tailored digital resumes for ongoing US job applications',
    price: '$279',
    priceLabel: 'From',
    icon: <CalendarClock className="h-6 w-6" />,
    accentColor: '#FFB800',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=450&fit=crop&auto=format',
    features: [
      'Daily custom-tailored resumes',
      'Unlimited resume variations',
      'Role-specific keyword matching',
      'Priority support access',
    ],
    longDesc:
      'Our resume subscription provides ongoing resume customization for professionals applying to multiple US IT job roles. Resumes can be tailored around specific job descriptions, target positions, technologies, skills, and relevant keywords.',
  },
];

export function Services() {
  const { ref, v } = useInView();
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  return (
    <>
      <section
        id="services"
        ref={ref as React.RefObject<HTMLElement>}
        className="py-28 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={v ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(255,184,0,0.12)',
                  border: '1px solid rgba(255,184,0,0.28)',
                }}
              >
                <span
                  className="text-[#FFB800] text-[9px] font-bold"
                  style={U}
                >
                  02
                </span>
              </div>

              <span
                className="text-[#FFB800] text-[10px] font-bold tracking-[0.35em] uppercase"
                style={U}
              >
                Our Services
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#F0F4FF] leading-tight mb-5 max-w-3xl"
              style={U}
            >US Job Applications, ATS Resume Writing & Career Services
              
            </h2>

            <p className="text-[#F0F4FF]/42 max-w-2xl leading-relaxed font-light text-sm md:text-base">
             FidoraPath provides professional US job application services,
ATS-friendly resume writing, LinkedIn profile optimization,
IT portfolio development, certification guidance, and career
consulting for professionals targeting jobs in the United States.
            </p>
          </motion.div>

          {/* Main Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 5).map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={v ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.06 + i * 0.08,
                }}
              >
                <TiltCard
                  onClick={() => setSelectedService(svc)}
                  className="h-full rounded-2xl overflow-hidden flex flex-col relative"
                  style={
                    {
                      background: 'rgba(12,18,40,0.72)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    } as React.CSSProperties
                  }
                >

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img
                      src={svc.image}
                      alt={`${svc.title} - FidoraPath`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, rgba(2,4,9,0.1) 0%, rgba(12,18,40,1) 100%)',
                      }}
                    />

                    <div
                      className="absolute top-4 left-4 w-9 h-9 rounded-xl flex items-center justify-center text-[#020409] text-sm font-black shadow-lg"
                      style={{
                        background: svc.accentColor,
                        ...U,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div
                      className="absolute top-4 right-4 rounded-xl px-3 py-1.5 flex items-baseline gap-1"
                      style={{
                        background: 'rgba(2,4,9,0.88)',
                        border: `1px solid ${svc.accentColor}45`,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <span
                        className="font-black text-lg leading-none"
                        style={{
                          color: svc.accentColor,
                          ...U,
                        }}
                      >
                        {svc.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">

                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${svc.accentColor}14`,
                          border: `1px solid ${svc.accentColor}28`,
                          color: svc.accentColor,
                        }}
                      >
                        {svc.icon}
                      </div>

                      <h3
                        className="text-base font-bold text-[#F0F4FF] leading-tight"
                        style={U}
                      >
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-[#F0F4FF]/38 text-xs leading-relaxed mb-4 font-light flex-1">
                      {svc.subtitle}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[#F0F4FF]/28 text-[10px]">
                          {svc.priceLabel}{' '}
                        </span>

                        <span
                          className="font-black text-xl"
                          style={{
                            color: svc.accentColor,
                            ...U,
                          }}
                        >
                          {svc.price}
                        </span>

                        {svc.priceLabel === 'From' && (
                          <span className="text-[#F0F4FF]/28 text-[10px]">
                            {' '}
                            /mo
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.06, x: 2 }}
                        whileTap={{ scale: 0.94 }}
                        className="text-xs font-bold px-4 py-2 rounded-full transition-all"
                        style={{
                          background: `${svc.accentColor}15`,
                          color: svc.accentColor,
                          border: `1px solid ${svc.accentColor}30`,
                          ...U,
                        }}
                      >
                        Learn More →
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${svc.accentColor}06 0%, transparent 70%)`,
                    }}
                  />
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Monthly Resume Subscription */}
          {(() => {
            const svc = services[5];

            return (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={v ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                }}
              >
                <TiltCard
                  onClick={() => setSelectedService(svc)}
                  className="rounded-2xl overflow-hidden relative"
                  style={
                    {
                      background: 'rgba(12,18,40,0.80)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,184,0,0.20)',
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse 50% 80% at 100% 50%, rgba(255,184,0,0.07) 0%, transparent 60%)',
                    }}
                  />

                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">

                    <div className="flex-1">

                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                        style={{
                          background: 'rgba(255,184,0,0.08)',
                          border:
                            '1px solid rgba(255,184,0,0.25)',
                        }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800] animate-pulse" />

                        <span
                          className="text-[#FFB800] text-[10px] font-bold tracking-widest uppercase"
                          style={U}
                        >
                          Monthly Resume Service
                        </span>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-bold text-[#F0F4FF] mb-2"
                        style={U}
                      >
                        {svc.title}
                      </h3>

                      <p className="text-[#F0F4FF]/40 text-sm mb-5 font-light">
                        {svc.subtitle}
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span
                          className="text-4xl font-black text-[#FFB800]"
                          style={U}
                        >
                          {svc.price}
                        </span>

                        <span className="text-[#F0F4FF]/30 text-sm font-light">
                          / month
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 mb-6">
                        {svc.features.map((f, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2"
                          >
                            <div
                              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                background:
                                  'rgba(255,184,0,0.15)',
                                border:
                                  '1px solid rgba(255,184,0,0.3)',
                              }}
                            >
                              <Check className="h-2.5 w-2.5 text-[#FFB800]" />
                            </div>

                            <span className="text-[#F0F4FF]/50 text-xs">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href="#pricing"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-block bg-[#FFB800] text-[#020409] px-7 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#FFB800]/20"
                        style={U}
                      >
                        View Pricing Plans
                      </motion.a>
                    </div>

                    {/* Resume Preview */}
                    <div className="md:w-80 w-full flex-shrink-0">
                      <div
                        className="rounded-2xl p-5 transform md:rotate-1 hover:rotate-0 transition-all duration-500"
                        style={{
                          background: 'rgba(2,4,9,0.8)',
                          border:
                            '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        <div
                          className="flex justify-between items-center mb-4 pb-3"
                          style={{
                            borderBottom:
                              '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <div>
                            <h4
                              className="text-[#F0F4FF] font-bold text-sm"
                              style={U}
                            >
                              Daily Resume Support
                            </h4>

                            <p className="text-[#F0F4FF]/22 text-xs">
                              Role-tailored applications
                            </p>
                          </div>

                          <span
                            className="text-[#020409] text-xs font-black px-2 py-0.5 rounded-lg"
                            style={{
                              background: '#FFB800',
                              ...U,
                            }}
                          >
                            5 New
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {[
                            {
                              job: 'Senior Frontend Engineer',
                              co: 'US Technology Company',
                            },
                            {
                              job: 'React Developer',
                              co: 'US FinTech Company',
                            },
                            {
                              job: 'Cloud Architect',
                              co: 'US Cloud Services',
                            },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-xl flex justify-between items-center"
                              style={{
                                background:
                                  'rgba(12,18,40,0.9)',
                                border:
                                  '1px solid rgba(255,255,255,0.05)',
                              }}
                            >
                              <div className="flex items-center gap-2.5">
                                <div
                                  className="p-1.5 rounded-lg"
                                  style={{
                                    background:
                                      'rgba(255,184,0,0.1)',
                                  }}
                                >
                                  <FileText className="h-3 w-3 text-[#FFB800]" />
                                </div>

                                <div>
                                  <p className="text-[#F0F4FF]/75 font-semibold text-[11px]">
                                    {item.job}
                                  </p>

                                  <p className="text-[#F0F4FF]/22 text-[9px]">
                                    {item.co}
                                  </p>
                                </div>
                              </div>

                              <span className="text-[#FFB800] text-xs">
                                ↓
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              background: 'rgba(2,4,9,0.88)',
            }}
            onClick={() => setSelectedService(null)}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 24,
            }}
            className="relative rounded-2xl shadow-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto"
            style={{
              background: '#0c1228',
              border:
                '1px solid rgba(255,255,255,0.08)',
            }}
          >

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#F0F4FF]/35 hover:text-[#F0F4FF] p-2 rounded-xl transition-colors z-10"
              style={{
                background: 'rgba(2,4,9,0.8)',
              }}
            >
              <X className="h-4 w-4" />
            </motion.button>

            <div className="h-52 relative overflow-hidden">
              <img
                src={selectedService.image}
                alt={`${selectedService.title} - FidoraPath`}
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 flex items-end p-6"
                style={{
                  background:
                    'linear-gradient(to top, #0c1228, transparent)',
                }}
              >
                <div className="flex items-center gap-3">

                  <div
                    className="p-2.5 rounded-xl"
                    style={{
                      background: `${selectedService.accentColor}20`,
                      border: `1px solid ${selectedService.accentColor}30`,
                      color: selectedService.accentColor,
                    }}
                  >
                    {selectedService.icon}
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold text-[#F0F4FF]"
                      style={U}
                    >
                      {selectedService.title}
                    </h3>

                    <p
                      className="font-black text-lg"
                      style={{
                        color:
                          selectedService.accentColor,
                        ...U,
                      }}
                    >
                      {selectedService.priceLabel}{' '}
                      {selectedService.price}
                      {selectedService.priceLabel === 'From'
                        ? '/mo'
                        : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7">

              <p className="text-[#F0F4FF]/40 text-sm leading-relaxed mb-6 font-light">
                {selectedService.longDesc}
              </p>

              <div
                className="rounded-xl p-5 mb-6"
                style={{
                  background: 'rgba(2,4,9,0.6)',
                  border:
                    '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <h4
                  className="font-bold text-[#F0F4FF] mb-3 text-sm"
                  style={U}
                >
                  What's Included
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle
                        className="h-4 w-4 shrink-0"
                        style={{
                          color:
                            selectedService.accentColor,
                        }}
                      />

                      <span className="text-[#F0F4FF]/50 text-sm">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <motion.a
                  href="#pricing"
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 rounded-full text-[#020409] font-bold text-sm transition-all"
                  style={{
                    background:
                      selectedService.accentColor,
                    ...U,
                  }}
                >
                  See Pricing Plans
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}