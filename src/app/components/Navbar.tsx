import React from 'react';
import { Menu, X } from 'lucide-react';
import fpLogo from '@/imports/image.png';

const links = [
  { href: '#ats-calculator',     label: 'ATS Check' },
  { href: '#why-us',             label: 'Why Us' },
  { href: '#services',           label: 'Services' },
  { href: '#countries-we-serve', label: 'Global Reach' },
  { href: '#testimonials',       label: 'Success Stories' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#06091A]/90 backdrop-blur-xl border-b border-[#C8922A]/12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Brand: FP logo + Fidora path text */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#C8922A]/25 group-hover:border-[#C8922A]/65 group-hover:shadow-[0_0_18px_rgba(200,146,42,0.35)] transition-all duration-300 bg-[#0c1640]">
              <img src={fpLogo} alt="FP" className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform" />
            </div>
            <div className="hidden sm:flex items-baseline" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              <span className="text-[#F0EDD8]/75 text-lg font-light tracking-wide group-hover:text-[#F0EDD8] transition-colors">Fidora</span>
              <span className="text-[#FFB800] text-xl font-extrabold tracking-tight group-hover:text-[#FFC933] transition-colors" style={{ textShadow: '0 0 12px rgba(255,184,0,0.9), 0 0 30px rgba(255,184,0,0.5), 0 0 60px rgba(255,184,0,0.2)' }}>path</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className="relative text-[#F0EDD8]/42 hover:text-[#F0EDD8] text-sm font-medium transition-colors duration-200 tracking-wide group">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-[#C8922A] to-[#E8B94A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
            <a href="#pricing"
              className="bg-[#C8922A] text-[#06091A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#E8B94A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-[#C8922A]/25">
              Get Started
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F0EDD8]/55 hover:text-[#C8922A] transition-colors p-1">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#06091A]/98 backdrop-blur-xl border-b border-[#C8922A]/12 px-6 pt-4 pb-8 space-y-5 animate-in slide-in-from-top-2 duration-200">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
              className="block text-[#F0EDD8]/50 hover:text-[#C8922A] text-sm font-medium hover:translate-x-1.5 transition-all duration-200">
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#C8922A] text-[#06091A] px-6 py-3.5 rounded-full font-semibold hover:bg-[#E8B94A] transition-all shadow-lg shadow-[#C8922A]/25">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
