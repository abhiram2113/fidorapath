import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import fpLogo from '@/imports/image.png';

const U = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" };

const productLinks = ['Digital Resume', 'LinkedIn Optimization', 'IT Certifications', 'Resume Subscription'];
const companyLinks = ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-[#06091A]/95 backdrop-blur-sm border-t border-[#C8922A]/14">
      {/* Top gold rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large brand display at top */}
        <div className="mb-16 pb-16 border-b border-[#C8922A]/10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#C8922A]/28 bg-[#0c1640]">
                  <img src={fpLogo} alt="Fidorapath" className="w-full h-full object-contain p-0.5" />
                </div>
              </div>
              <div style={U} className="leading-none mb-4">
                <div className="text-[#F0EDD8]/65 font-light" style={{ fontSize: 'clamp(38px, 6vw, 74px)' }}>Fidora</div>
                <div className="font-extrabold text-[#FFB800]" style={{ fontSize: 'clamp(38px, 6vw, 74px)', textShadow: '0 0 20px rgba(255,184,0,1), 0 0 50px rgba(255,184,0,0.6), 0 0 100px rgba(255,184,0,0.3)' }}>path.</div>
              </div>
              <p className="text-[#F0EDD8]/32 text-sm font-light max-w-xs leading-relaxed">
                Empowering IT professionals to land dream jobs in the US tech market.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:text-right">
              <a href="mailto:support@fidorapath.com" className="flex items-center gap-2 text-[#F0EDD8]/38 hover:text-[#C8922A] transition-colors text-sm lg:justify-end">
                <Mail className="h-4 w-4 text-[#C8922A]" /> support@fidorapath.com
              </a>
              <a href="https://wa.me/7997474891" className="flex items-center gap-2 text-[#F0EDD8]/38 hover:text-[#C8922A] transition-colors text-sm lg:justify-end">
                <Phone className="h-4 w-4 text-[#C8922A]" /> +91 7997474891
              </a>
              <span className="flex items-start gap-2 text-[#F0EDD8]/28 text-sm lg:justify-end">
                <MapPin className="h-4 w-4 text-[#C8922A] shrink-0 mt-0.5" /> 123 Tech Avenue, Silicon Valley, CA
              </span>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-[#C8922A] font-bold mb-5 uppercase tracking-widest text-xs" style={U}>Products</h5>
            <ul className="space-y-3.5">
              {productLinks.map(item => (
                <li key={item}>
                  <a href="#" className="text-[#F0EDD8]/38 hover:text-[#C8922A] text-sm font-light transition-colors hover:translate-x-1 inline-block duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[#C8922A] font-bold mb-5 uppercase tracking-widest text-xs" style={U}>Company</h5>
            <ul className="space-y-3.5">
              {companyLinks.map(item => (
                <li key={item}>
                  <a href="#" className="text-[#F0EDD8]/38 hover:text-[#C8922A] text-sm font-light transition-colors hover:translate-x-1 inline-block duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[#C8922A] font-bold mb-5 uppercase tracking-widest text-xs" style={U}>Countries</h5>
            <ul className="space-y-3.5 text-[#F0EDD8]/38 text-sm font-light">
              {['🇺🇸 United States', '🇬🇧 United Kingdom', '🇩🇪 Germany', '🇮🇪 Ireland'].map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[#C8922A] font-bold mb-5 uppercase tracking-widest text-xs" style={U}>Follow Us</h5>
            <div className="flex flex-wrap gap-2.5">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
                <a key={idx} href="#"
                  className="w-9 h-9 bg-[#0c1640] border border-[#C8922A]/14 rounded-xl flex items-center justify-center text-[#F0EDD8]/28 hover:text-[#C8922A] hover:border-[#C8922A]/45 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#C8922A]/8">
          <p className="text-xs text-[#F0EDD8]/22">&copy; {new Date().getFullYear()} Fidorapath.in. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8922A]/28" />
            <span className="text-[#C8922A]/40 text-[10px] tracking-widest uppercase" style={U}>Designed for Excellence</span>
            <span className="h-px w-8 bg-[#C8922A]/28" />
          </div>
        </div>
      </div>
    </footer>
  );
}
