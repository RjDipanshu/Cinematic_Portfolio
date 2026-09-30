// src/components/ExperienceSection.tsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CertificateModal } from './CertificateModal';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  roleType: string;
  organization: string;
  description: string;
  skills: string[];
  certificateUrl: string;
  credentialBadge: string;
  highlightProject?: string;
}

const internships: RouteStop[] = [
  {
    id: '01',
    year: 'JUL 2026 - SEP 2026',
    title: 'AI SUMMER INTERN',
    roleType: 'APPLIED AI & LLM SYSTEMS',
    organization: 'MIRAI SCHOOL OF TECHNOLOGY',
    highlightProject: 'Autonomous Agentic Workflows & Multi-Modal AI Interface',
    description:
      'Engineered cutting-edge generative AI solutions and autonomous agentic workflows utilizing Large Language Models (LLMs), LangChain, and vector embeddings. Built interactive interfaces, streamlined prompt pipelines, and integrated external APIs with custom AI evaluation harnesses.',
    skills: ['Python', 'Generative AI', 'LLMs', 'LangChain', 'Prompt Engineering', 'REST APIs', 'Vector DBs'],
    certificateUrl: '/certificates/ai-summer-intern.pdf',
    credentialBadge: 'MIRAI CERTIFIED',
  },
  {
    id: '02',
    year: 'FEB 2026 - APR 2026',
    title: 'FULL STACK DEVELOPER INTERN',
    roleType: 'INTERNSHIP 6.0',
    organization: 'INFOSYS SPRINGBOARD',
    highlightProject: 'ParkEase: Intelligent Parking Availability Detection & Reservation System',
    description:
      'Engineered backend architecture and RESTful microservices using Java, Spring Boot, and MySQL. Implemented robust JWT-based authentication and role-based access control, designed relational schemas with optimized queries, and created interactive API documentation with Swagger UI.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JWT Auth', 'Hibernate / JPA', 'Swagger'],
    certificateUrl: '/certificates/full-stack-intern.pdf',
    credentialBadge: 'VERIFIED CERTIFICATE',
  },
  {
    id: '03',
    year: 'JAN 2026 - FEB 2026',
    title: 'AI WINTER INTERN',
    roleType: 'AI ENGINEERING & INTEGRATION',
    organization: 'MIRAI SCHOOL OF TECHNOLOGY',
    highlightProject: 'Identity Echo AI & Conversational Intelligence Engine (ID: MSOT-2026-001712)',
    description:
      'Researched and deployed conversational intelligence architectures, contextual memory pipelines, and automated reasoning workflows. Integrated AI capabilities into full-stack web environments with real-time response streaming and robust error boundaries.',
    skills: ['Python', 'Streamlit', 'RAG Architecture', 'FastAPI', 'AI Pipelines', 'Prompt Optimization'],
    certificateUrl: '/certificates/ai-winter-intern.pdf',
    credentialBadge: 'CREDENTIAL: MSOT-2026-001712',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<{
    isOpen: boolean;
    title: string;
    organization: string;
    fileUrl: string;
  }>({
    isOpen: false,
    title: '',
    organization: '',
    fileUrl: '',
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const openCertificate = (stop: RouteStop) => {
    setSelectedCert({
      isOpen: true,
      title: `${stop.title} - ${stop.organization}`,
      organization: stop.highlightProject || stop.organization,
      fileUrl: stop.certificateUrl,
    });
  };

  return (
    <>
      <section
        id="experience"
        ref={containerRef}
        className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-[#D4AF37]/[0.035] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full relative z-10">

          {/* Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-7"
          >
            <span
              className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              05 / EXPERIENCE
            </span>
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                EXPERIENCE &amp;
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                INTERNSHIPS.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] mt-4 font-mono tracking-wider max-w-xl">
              Real-world engineering internships across Enterprise Backend, Spring Boot microservices, and Advanced Generative AI systems. Click on any role to view verified certificates.
            </p>
          </motion.div>

          {/* Minimalist Route Map */}
          <div className="relative w-full">

            {/* Background Track */}
            <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

            {/* Animated Gold Track */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
            />

            <div className="space-y-16">
              {internships.map((stop, idx) => (
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Desktop Year (Left side of track) */}
                  <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-1 text-right">
                    <span className="text-[11px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors font-medium">
                      {stop.year}
                    </span>
                  </div>

                  {/* Route Node */}
                  <div className="absolute left-[19px] md:left-[140px] top-2 -translate-x-1/2 flex items-center justify-center">
                    <div className="absolute w-7 h-7 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 group-hover:scale-150 transition-all duration-700 ease-out" />
                    <div className="w-3 h-3 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_14px_#D4AF37] transition-all duration-300" />
                  </div>

                  {/* Content (Right side of track) */}
                  <div className="ml-14 md:ml-12 pl-2 flex-1">
                    {/* Mobile Year */}
                    <div className="md:hidden mb-1.5">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                        {stop.year}
                      </span>
                    </div>

                    {/* Role Title & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3
                        className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors leading-none"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {stop.title}
                      </h3>
                      <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full">
                        {stop.roleType}
                      </span>
                    </div>

                    {/* Organization */}
                    <span
                      className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.organization}
                    </span>

                    {/* Highlighted Project if present */}
                    {stop.highlightProject && (
                      <div className="mb-3 inline-flex items-center space-x-2 text-[11px] font-mono text-[#D5CBC0]/90 bg-[#16120d] border border-[#2e241b] px-3 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>Project: <strong className="text-white font-medium">{stop.highlightProject}</strong></span>
                      </div>
                    )}

                    {/* Description */}
                    <p
                      className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.8] max-w-2xl mb-4 group-hover:text-[#D5CBC0] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.description}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5 max-w-xl">
                      {stop.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-[10px] font-mono tracking-wider bg-white/[0.03] hover:bg-white/[0.08] text-[#B8A89A] border border-white/5 rounded transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Action Button */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => openCertificate(stop)}
                        className="group/btn relative inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/15 to-[#8C6D4F]/15 hover:from-[#D4AF37]/30 hover:to-[#8C6D4F]/30 border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-lg text-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.08)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                      >
                        <svg
                          className="w-4 h-4 text-[#D4AF37] group-hover/btn:scale-110 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="text-[11px] font-mono tracking-widest text-[#F7E7C4] uppercase">
                          VIEW CERTIFICATE
                        </span>
                        <svg
                          className="w-3.5 h-3.5 text-[#D4AF37] transform group-hover/btn:translate-x-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      <a
                        href={stop.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[#8C6D4F] hover:text-[#D4AF37] bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 rounded-lg transition-colors"
                        title="Open certificate in new tab"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={selectedCert.isOpen}
        onClose={() => setSelectedCert(prev => ({ ...prev, isOpen: false }))}
        title={selectedCert.title}
        organization={selectedCert.organization}
        fileUrl={selectedCert.fileUrl}
      />
    </>
  );
};

export default ExperienceSection;