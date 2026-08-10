import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X, Send, User } from 'lucide-react';
import fpLogo from '@/imports/image.png';

const U = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" };

interface Message { id: number; type: 'bot' | 'user'; text: string; }

const quickReplies = ['Digital Resume', 'Pricing', 'ATS Score', 'Countries', 'Contact Us'];

function aiReply(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes('digital') || m.includes('resume building'))
    return "Our Digital Resume Building starts at $80 — a living resume recruiters can click through, complete with a personalized video introduction and ATS-optimized layout!";
  if (m.includes('normal resume'))
    return "Normal Resume Building starts at $60. Classic, clean, recruiter-ready — perfectly formatted for US IT recruiters with the right keywords.";
  if (m.includes('portfolio'))
    return "Portfolio Building starts at $100 — a professional portfolio website that showcases your real work, GitHub projects, and gets you found on Google searches.";
  if (m.includes('pric') || m.includes('cost') || m.includes('how much') || m.includes('plan'))
    return "We offer 3 packages: Career Starter ($249), Career Accelerator ($499 - Most Popular), and Premium Program ($699). All one-time payments! Want details on any plan?";
  if (m.includes('ats') || m.includes('score') || m.includes('pass'))
    return "Our resumes have a 92% ATS pass rate! We test against Workday, Greenhouse, and Lever. Try our free ATS Calculator at the top of this page!";
  if (m.includes('cert'))
    return "IT Certification guidance (3 Certificates) starts at $120 — we guide you on AWS, Azure, CISSP, Security+ — the exact certs that maximize your US IT salary!";
  if (m.includes('linkedin') || m.includes('profile'))
    return "LinkedIn Optimization starts at just $15! We rewrite your headline, summary, and keywords to show up in US recruiter searches 24/7.";
  if (m.includes('application') || m.includes('apply') || m.includes('job role'))
    return "Applications for Job Roles starts at $150 — we handle targeted applications for you, with custom cover letters and 20+ applications per month!";
  if (m.includes('subscri') || m.includes('monthly') || m.includes('daily'))
    return "Resume Monthly Subscription is from $279/month — a fresh, role-tailored resume delivered every day! Unlimited resume variations all month long.";
  if (m.includes('countr') || m.includes('us') || m.includes('uk') || m.includes('german') || m.includes('ireland'))
    return "We help IT professionals get placed in the US, UK, Germany, and Ireland! We know the specific requirements, visa sponsorship needs, and salary expectations in each country.";
  if (m.includes('contact') || m.includes('reach') || m.includes('talk') || m.includes('whatsapp'))
    return "Reach us at support@fidorapath.com or WhatsApp +91 7997474891. We respond within 24 hours!";
  if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('help'))
    return "Hi there! I'm Fido, your Fidorapath AI assistant! I can help with our services, pricing, ATS scores, and more. What would you like to know?";
  return "Great question! I'm Fido, Fidorapath's AI assistant. We specialize in helping IT professionals from India land jobs in the US, UK, Germany & Ireland. Our services start from $15 (LinkedIn) to $699 (Premium Program). How can I help you?";
}

function RobotSVG({ isWaving, isPoking }: { isWaving: boolean; isPoking: boolean }) {
  return (
    <svg width="46" height="56" viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Antenna */}
      <line x1="23" y1="2" x2="23" y2="9" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="23" cy="2.5" r="2.5" fill="#FFB800" />
      <motion.circle cx="23" cy="2.5" r="4" stroke="#FFB800" strokeWidth="1" fill="none"
        animate={{ r: [4, 7, 4], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} />

      {/* Head */}
      <rect x="7" y="9" width="32" height="22" rx="7" fill="#0c1228" stroke="#FFB800" strokeWidth="1.5" />

      {/* Eyes */}
      <motion.g animate={{ scaleY: isWaving ? [1, 0.1, 1] : [1, 0.15, 1, 1, 1] }} transition={{ duration: isWaving ? 0.3 : 3.5, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="16.5" cy="20" r="4" fill="#020409" />
        <circle cx="29.5" cy="20" r="4" fill="#020409" />
        <circle cx="16.5" cy="20" r="2.5" fill="#FFB800" />
        <circle cx="29.5" cy="20" r="2.5" fill="#FFB800" />
        <circle cx="17.5" cy="19" r="1.2" fill="white" />
        <circle cx="30.5" cy="19" r="1.2" fill="white" />
      </motion.g>

      {/* Smile */}
      <path d="M16 27 Q23 31.5 30 27" stroke="#FFB800" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Body */}
      <rect x="10" y="33" width="26" height="17" rx="5" fill="#0c1228" stroke="#FFB800" strokeWidth="1.5" />
      {/* Body glow dot */}
      <motion.circle cx="23" cy="41.5" r="3.5" fill="#60A5FA" opacity="0.7"
        animate={{ opacity: [0.5, 1, 0.5], r: [3.5, 4.5, 3.5] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
      <circle cx="23" cy="41.5" r="2" fill="#020409" />

      {/* Left arm — waves when isWaving */}
      <motion.rect x="1" y="33" width="7" height="13" rx="3.5" fill="#0c1228" stroke="#FFB800" strokeWidth="1.5"
        style={{ transformOrigin: '4.5px 33px' }}
        animate={{ rotate: isWaving ? [0, -50, -30, -50, 0] : [0, 8, 0] }}
        transition={{ duration: isWaving ? 0.8 : 3, repeat: Infinity, ease: 'easeInOut' }} />

      {/* Right arm — pokes toward dot when isPoking */}
      <motion.rect x="38" y="33" width="7" height="13" rx="3.5" fill="#0c1228" stroke="#FFB800" strokeWidth="1.5"
        style={{ transformOrigin: '41.5px 33px' }}
        animate={{ rotate: isPoking ? [0, 30, 15, 30, 0] : [0, -8, 0], x: isPoking ? [0, 4, 2, 4, 0] : 0 }}
        transition={{ duration: isPoking ? 0.9 : 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />

      {/* Legs */}
      <rect x="12" y="50" width="8" height="6" rx="3" fill="#0c1228" stroke="#FFB800" strokeWidth="1.5" />
      <rect x="26" y="50" width="8" height="6" rx="3" fill="#0c1228" stroke="#FFB800" strokeWidth="1.5" />
    </svg>
  );
}

export function AIChatBot() {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [robotState, setRobotState] = useState<'idle' | 'wave' | 'poke'>('idle');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', text: "Hi! I'm Fido, your Fidorapath AI assistant. How can I help you land your dream IT job today? 🚀" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Drop-from-top entrance
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Robot behavior cycling
  useEffect(() => {
    if (chatOpen) return;
    const cycle = () => {
      const states: Array<'idle' | 'wave' | 'poke'> = ['idle', 'wave', 'idle', 'poke', 'idle'];
      let i = 0;
      const next = () => {
        setRobotState(states[i % states.length]);
        i++;
        setTimeout(next, 2200 + Math.random() * 1800);
      };
      setTimeout(next, 1500);
    };
    cycle();
  }, [chatOpen]);

  useEffect(() => {
    if (chatOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), type: 'user', text: input.trim() };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { id: Date.now() + 1, type: 'bot', text: aiReply(userMsg.text) }]);
    }, 1000 + Math.random() * 600);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">

      {/* Chat panel */}
      {chatOpen && (
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="rounded-2xl overflow-hidden shadow-2xl w-[340px] sm:w-[370px] flex flex-col"
          style={{ height: 520, background: '#0c1228', border: '1px solid rgba(255,184,0,0.18)' }}>
          {/* Header */}
          <div className="p-4 flex items-center justify-between flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, rgba(20,28,56,0.95), rgba(12,18,40,0.95))', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-sm" style={{ background: 'rgba(255,184,0,0.3)' }} />
                <div className="relative w-10 h-10 rounded-xl overflow-hidden" style={{ border: '1.5px solid rgba(255,184,0,0.4)', background: '#020409' }}>
                  <img src={fpLogo} alt="Fido" className="w-full h-full object-contain p-0.5" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2" style={{ borderColor: '#0c1228' }} />
              </div>
              <div>
                <p className="font-bold text-[#F0F4FF] text-sm" style={U}>Fido AI</p>
                <p className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                  Online · Fidorapath Assistant
                </p>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
              onClick={() => setChatOpen(false)} className="text-[#F0F4FF]/35 hover:text-[#F0F4FF] rounded-xl p-1.5 transition-colors">
              <X className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'none' }}>
            {messages.map((msg, idx) => (
              <motion.div key={msg.id} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, delay: idx === 0 ? 0 : 0 }}
                className={`flex gap-2.5 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: msg.type === 'bot' ? '#0c1228' : 'rgba(255,184,0,0.15)', border: msg.type === 'bot' ? '1px solid rgba(255,184,0,0.2)' : '1px solid rgba(255,184,0,0.3)' }}>
                  {msg.type === 'bot' ? <img src={fpLogo} alt="Fido" className="w-5 h-5 object-contain" /> : <User className="h-3.5 w-3.5 text-[#FFB800]" />}
                </div>
                <div className="max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed"
                  style={{
                    background: msg.type === 'bot' ? 'rgba(255,255,255,0.04)' : '#FFB800',
                    color: msg.type === 'bot' ? 'rgba(240,244,255,0.75)' : '#020409',
                    fontWeight: msg.type === 'user' ? 600 : 400,
                    borderRadius: msg.type === 'bot' ? '4px 18px 18px 18px' : '18px 4px 18px 18px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {typing && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: '#0c1228', border: '1px solid rgba(255,184,0,0.2)' }}>
                  <img src={fpLogo} alt="Fido" className="w-5 h-5 object-contain" />
                </div>
                <div className="rounded-2xl px-4 py-3 flex items-center gap-1"
                  style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '4px 18px 18px 18px' }}>
                  {[0, 0.22, 0.44].map(d => (
                    <motion.div key={d} className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: d }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: 'none' }}>
            {quickReplies.map(q => (
              <motion.button key={q} whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}
                onClick={() => setInput(q)}
                className="flex-shrink-0 text-[10px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{ background: 'rgba(255,184,0,0.08)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.2)', ...U }}>
                {q}
              </motion.button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 flex gap-2.5 flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), send())}
              placeholder="Ask me anything…"
              className="flex-1 rounded-xl px-4 py-2.5 text-xs text-[#F0F4FF] placeholder-[#F0F4FF]/22 outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', fontFamily: "'Inter', system-ui, sans-serif" }} />
            <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }}
              onClick={send} disabled={!input.trim()}
              className="w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-35 disabled:cursor-not-allowed"
              style={{ background: input.trim() ? '#FFB800' : 'rgba(255,184,0,0.12)' }}>
              <Send className="h-3.5 w-3.5" style={{ color: input.trim() ? '#020409' : '#FFB800' }} />
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Robot + chat button row */}
      <div className="flex items-end gap-3">
        {/* Robot character — always visible, playing with dot */}
        {!chatOpen && (
          <motion.div
            initial={{ y: -700, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.3 }}
            className="flex flex-col items-center relative"
          >
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.4 }}
              className="absolute -top-12 -left-2 whitespace-nowrap text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-lg mb-2 pointer-events-none"
              style={{ background: 'rgba(12,18,40,0.95)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.3)', ...U }}>
              Ask me! 👋
              <div className="absolute top-full left-6 border-[5px] border-transparent" style={{ borderTopColor: 'rgba(255,184,0,0.3)' }} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
              <RobotSVG isWaving={robotState === 'wave'} isPoking={robotState === 'poke'} />
            </motion.div>

            {/* Shadow under robot */}
            <motion.div className="w-8 h-2 rounded-full mx-auto -mt-1"
              style={{ background: 'rgba(255,184,0,0.15)', filter: 'blur(4px)' }}
              animate={{ scaleX: [1, 0.7, 1], opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.div>
        )}

        {/* Chat toggle button */}
        <motion.div
          initial={{ y: -700, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 15, delay: 0.15 }}
          className="relative">
          {/* Pulse rings */}
          {!chatOpen && [1, 2].map(i => (
            <motion.div key={i} className="absolute inset-0 rounded-full"
              style={{ border: '2px solid rgba(255,184,0,0.4)' }}
              animate={{ scale: [1, 1.7 + i * 0.3], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: (i - 1) * 0.6, ease: 'easeOut' }} />
          ))}

          {/* Notification dot */}
          {!chatOpen && (
            <motion.div className="absolute -top-1 -right-1 z-10 w-4 h-4 bg-[#FFB800] rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="text-[8px] font-black text-[#020409]" style={U}>1</span>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => { setChatOpen(!chatOpen); setRobotState('idle'); }}
            className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #FFB800 0%, #FFC933 100%)', boxShadow: '0 8px 32px rgba(255,184,0,0.45)' }}>
            {chatOpen
              ? <motion.div initial={{ rotate: -90, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <X className="h-6 w-6 text-[#020409]" />
                </motion.div>
              : <motion.div initial={{ rotate: 90, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <img src={fpLogo} alt="Fido" className="w-10 h-10 object-contain rounded-full" />
                </motion.div>
            }
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
