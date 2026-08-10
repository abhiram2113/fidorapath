import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  FileText,
  Target,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function ATSResumeWriting() {
  return (
    <main className="min-h-screen bg-[#06091A] text-[#F0EDD8]">
      
      {/* Hero */}
      <section className="relative overflow-hidden py-28 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(200,146,42,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#C8922A]/30 bg-[#C8922A]/10"
          >
            <FileText className="w-4 h-4 text-[#C8922A]" />

            <span className="text-[#C8922A] text-xs font-semibold tracking-[0.2em] uppercase">
              ATS Resume Writing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            ATS-Friendly Resumes
            <span className="block text-[#C8922A] mt-2">
              Built for US IT Jobs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl mx-auto mt-7 text-[#F0EDD8]/65 text-lg leading-relaxed"
          >
            FidoraPath creates professional, ATS-friendly resumes designed
            to help IT professionals present their skills, experience, and
            achievements clearly for the US job market.
          </motion.p>

          <motion.a
            href="#get-started"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="inline-flex items-center gap-2 mt-10 px-7 py-4 rounded-full bg-[#C8922A] text-[#06091A] font-semibold hover:bg-[#E8B94A] transition-all"
          >
            Get Your Resume Started
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 border-t border-[#C8922A]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Approach
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Resume Optimization That Focuses on What Matters
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-[#F0EDD8]/55">
              We structure your resume to clearly communicate your technical
              background and professional value while keeping the document
              readable and recruiter-friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-2xl border border-[#C8922A]/15 bg-[#0c1640]/60">
              <Target className="w-9 h-9 text-[#C8922A] mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                ATS-Friendly Structure
              </h3>

              <p className="text-[#F0EDD8]/55 leading-relaxed">
                Clean formatting and structured content designed to make your
                resume easier for applicant tracking systems and recruiters to
                process.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-[#C8922A]/15 bg-[#0c1640]/60">
              <FileText className="w-9 h-9 text-[#C8922A] mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Professional Content
              </h3>

              <p className="text-[#F0EDD8]/55 leading-relaxed">
                Clear professional summaries, technical skills, experience,
                achievements, and project descriptions tailored around your
                career profile.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-[#C8922A]/15 bg-[#0c1640]/60">
              <Linkedin className="w-9 h-9 text-[#C8922A] mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Career Alignment
              </h3>

              <p className="text-[#F0EDD8]/55 leading-relaxed">
                Resume content can be aligned with your target roles,
                technical skills, and professional positioning for the US IT
                job market.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-widest mb-3">
                What You Get
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Resume Designed Around Your Career Goals
              </h2>

              <p className="text-[#F0EDD8]/55 leading-relaxed">
                Your resume should communicate your experience quickly and
                clearly. We focus on relevant information, strong positioning,
                and a professional structure.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "ATS-friendly resume structure",
                "Professional career summary",
                "Technical skills organization",
                "Achievement-focused experience",
                "Project and technology optimization",
                "US IT job market positioning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#C8922A]/10 bg-[#0c1640]/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C8922A] flex-shrink-0" />

                  <span className="text-[#F0EDD8]/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="get-started"
        className="py-24 px-6 border-t border-[#C8922A]/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Improve Your Resume?
          </h2>

          <p className="mt-5 text-[#F0EDD8]/55 text-lg">
            Start building a professional resume positioned for your target
            IT roles.
          </p>

          <a
            href="#services"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-[#C8922A] text-[#06091A] font-semibold hover:bg-[#E8B94A] transition-all"
          >
            Explore FidoraPath Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </main>
  );
}