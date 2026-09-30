// src/components/CertificationsSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CertificateModal } from './CertificateModal';

interface CertificateItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialId?: string;
  fileUrl: string;
  isImage?: boolean;
  description: string;
  tags: string[];
}

const certificationsList: CertificateItem[] = [
  {
    id: 'aws-dev',
    number: '01',
    title: 'AWS Certified Developer - Associate',
    issuer: 'AWS & Infosys Wingspan',
    date: 'JUN 2025',
    category: 'CLOUD',
    credentialId: 'Wingspan Verified',
    fileUrl: '/certificates/aws-dev-cert.pdf',
    description:
      'Validated expertise in developing, deploying, and debugging cloud applications on AWS, including serverless architecture (Lambda, API Gateway), DynamoDB, CI/CD pipelines, and IAM security.',
    tags: ['AWS', 'Serverless', 'Lambda', 'DynamoDB', 'Cloud Architecture', 'CI/CD'],
  },
  {
    id: 'dbms-nptel',
    number: '02',
    title: 'Database Management System',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'MAR 2025',
    category: 'DATA & DB',
    credentialId: 'Roll: NPTEL25CS18S638800604',
    fileUrl: '/certificates/dbms-cert.pdf',
    description:
      'Rigorous academic certification covering relational algebra, advanced SQL, database schema normalization (3NF/BCNF), ACID transaction management, indexing, and query optimization.',
    tags: ['SQL', 'RDBMS', 'Schema Design', 'Normalization', 'Transactions', 'Indexing'],
  },
  {
    id: 'cloud-nptel',
    number: '03',
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'APR 2025',
    category: 'CLOUD',
    credentialId: 'Roll: NPTEL25CS11S1042801497',
    fileUrl: '/certificates/cloud-computing-cert.pdf',
    description:
      'Comprehensive 12-week certification in distributed computing, virtualization, cloud delivery models (IaaS/PaaS/SaaS), elasticity, microservices architecture, and cloud economics.',
    tags: ['Virtualization', 'Distributed Systems', 'Cloud Security', 'IaaS / PaaS', 'Scalability'],
  },
  {
    id: 'java-infosys',
    number: '04',
    title: 'Java Programming',
    issuer: 'Infosys Springboard',
    date: '2025',
    category: 'BACKEND',
    credentialId: 'Infosys Certified',
    fileUrl: '/certificates/java-cert.jpeg',
    isImage: true,
    description:
      'Professional credential in Core Java and object-oriented programming paradigms, multithreading, Collections API, stream processing, design patterns, and JVM internal mechanics.',
    tags: ['Core Java', 'OOP', 'Multithreading', 'Collections', 'Streams API', 'Exception Handling'],
  },
  {
    id: 'mckinsey-forward',
    number: '05',
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: 'DEC 2025',
    category: 'LEADERSHIP',
    credentialId: 'McKinsey.org Certified',
    fileUrl: '/certificates/mckinsey-cert.pdf',
    description:
      'Selective global program honing executive problem-solving methodologies, digital fluency, agile collaboration, critical thinking, and communication for high-impact tech leadership.',
    tags: ['Problem Solving', 'Digital Fluency', 'Agile Mindset', 'Leadership', 'Strategic Thinking'],
  },
  {
    id: 'sagex-genai',
    number: '06',
    title: 'Generative AI Fundamentals',
    issuer: 'SAGE X',
    date: '2025',
    category: 'AI & ML',
    credentialId: 'SAGE X Verified',
    fileUrl: '/certificates/sagex-cert.jpeg',
    isImage: true,
    description:
      'In-depth training on Foundation Models, Large Language Model architectures, prompt engineering strategies, embedding models, fine-tuning methodologies, and responsible AI ethics.',
    tags: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Transformers', 'Vector Embeddings'],
  },
];

const categories = ['ALL', 'CLOUD', 'BACKEND', 'DATA & DB', 'AI & ML', 'LEADERSHIP'];

export const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
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

  const filteredCerts =
    activeCategory === 'ALL'
      ? certificationsList
      : certificationsList.filter(c => c.category === activeCategory);

  // Keep active index in bounds when category changes
  const safeActiveIndex = Math.min(activeCardIndex, Math.max(0, filteredCerts.length - 1));

  const openCertModal = (cert: CertificateItem) => {
    setSelectedCert({
      isOpen: true,
      title: cert.title,
      organization: `${cert.issuer} • ${cert.date}`,
      fileUrl: cert.fileUrl,
    });
  };

  const handleNext = () => {
    setActiveCardIndex(prev => (prev + 1) % filteredCerts.length);
  };

  const handlePrev = () => {
    setActiveCardIndex(prev => (prev - 1 + filteredCerts.length) % filteredCerts.length);
  };

  return (
    <>
      <section
        id="certifications"
        className="relative w-full bg-[#050505] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#1a1612]"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/4 w-[38rem] h-[38rem] bg-[#D4AF37]/[0.035] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[38rem] h-[38rem] bg-[#8C6D4F]/[0.045] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
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
              06 / CERTIFICATIONS
            </span>
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          {/* Section Headline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  HONORS &amp;
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  CREDENTIALS.
                </span>
              </h2>
            </motion.div>

            {/* View Mode & Filter Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Stack vs Grid View Switcher */}
              <div className="inline-flex p-1 bg-[#120F0C] border border-[#2d241c] rounded-xl self-start sm:self-auto">
                <button
                  onClick={() => setViewMode('stack')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all duration-300 flex items-center space-x-1.5 ${
                    viewMode === 'stack'
                      ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                      : 'text-[#8C6D4F] hover:text-[#D4AF37]'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>HORIZONTAL STACK</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all duration-300 flex items-center space-x-1.5 ${
                    viewMode === 'grid'
                      ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                      : 'text-[#8C6D4F] hover:text-[#D4AF37]'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>GRID</span>
                </button>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveCardIndex(0);
                    }}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-semibold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                        : 'bg-white/[0.02] text-[#8C6D4F] hover:text-[#D4AF37] border-white/5 hover:border-[#D4AF37]/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= 1. HORIZONTAL OVERLAPPING STACK DECK ================= */}
          {viewMode === 'stack' ? (
            <div className="relative w-full">
              
              {/* Stack Navigation Bar & Instructions */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                    // LEFT-TO-RIGHT OVERLAPPING DECK &bull; CLICK ANY CARD TO EXPAND
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-[#8C6D4F] mr-2">
                    <span className="text-[#D4AF37] font-semibold">{safeActiveIndex + 1}</span> / {filteredCerts.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous credential"
                    className="p-2 rounded-lg bg-[#14100c] border border-[#2d241c] hover:border-[#D4AF37] text-[#A8988B] hover:text-[#D4AF37] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next credential"
                    className="p-2 rounded-lg bg-[#14100c] border border-[#2d241c] hover:border-[#D4AF37] text-[#A8988B] hover:text-[#D4AF37] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Desktop Horizontal Overlapping Stack (Accordion Deck) */}
              <div className="hidden lg:flex w-full h-[520px] items-stretch gap-3 overflow-hidden p-2 rounded-3xl bg-[#090807] border border-[#251d16] shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                {filteredCerts.map((cert, index) => {
                  const isActive = index === safeActiveIndex;

                  return (
                    <motion.div
                      key={cert.id}
                      layout
                      onClick={() => setActiveCardIndex(index)}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        zIndex: isActive ? 20 : 10 + index,
                      }}
                      className={`relative rounded-2xl cursor-pointer overflow-hidden border transition-all duration-500 flex flex-col justify-between ${
                        isActive
                          ? 'flex-[5] bg-[#0f0c09] border-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.18)]'
                          : 'flex-[0.8] hover:flex-[1.1] bg-[#120f0c] hover:bg-[#18130e] border-[#292018] hover:border-[#D4AF37]/40 shadow-[-15px_0_30px_rgba(0,0,0,0.85)]'
                      }`}
                    >
                      {/* Top Gold Border Light Flare */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

                      {/* ============ COLLAPSED SPINE VIEW (When card is not active) ============ */}
                      {!isActive && (
                        <div className="h-full w-full py-8 px-3 flex flex-col justify-between items-center select-none group/spine">
                          {/* Top Spine: Number & Category */}
                          <div className="flex flex-col items-center space-y-3">
                            <span className="text-xs font-mono font-bold text-[#D4AF37]">
                              {cert.number}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 group-hover/spine:bg-[#D4AF37]" />
                          </div>

                          {/* Vertical Rotated Title Spine */}
                          <div className="flex-1 flex items-center justify-center my-6">
                            <span
                              className="text-base font-semibold tracking-wider text-[#D5CBC0]/80 group-hover/spine:text-white transition-colors uppercase whitespace-nowrap"
                              style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                              }}
                            >
                              {cert.title}
                            </span>
                          </div>

                          {/* Bottom Spine: Date & Expand Cue */}
                          <div className="flex flex-col items-center space-y-2">
                            <span className="text-[9px] font-mono tracking-widest text-[#8C6D4F] group-hover/spine:text-[#D4AF37]">
                              {cert.date}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-white/5 group-hover/spine:bg-[#D4AF37]/20 border border-white/10 group-hover/spine:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] text-xs">
                              &rarr;
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ============ EXPANDED CARD VIEW (When card is active) ============ */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                          className="h-full w-full p-8 sm:p-10 flex flex-col justify-between overflow-y-auto"
                        >
                          <div>
                            {/* Card Header: Category & Date */}
                            <div className="flex items-center justify-between mb-5">
                              <div className="flex items-center space-x-3">
                                <span className="text-xs font-mono font-bold text-[#D4AF37]">
                                  {cert.number} //
                                </span>
                                <span className="px-3 py-1 text-[9.5px] font-mono tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full">
                                  {cert.category}
                                </span>
                              </div>
                              <span className="text-xs font-mono tracking-widest text-[#8C6D4F] font-medium">
                                {cert.date}
                              </span>
                            </div>

                            {/* Title */}
                            <h3
                              className="text-3xl sm:text-4xl lg:text-[42px] text-white leading-[0.95] mb-3 tracking-wide"
                              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                              {cert.title}
                            </h3>

                            {/* Issuer & Verified ID */}
                            <div className="mb-5 flex flex-wrap items-center gap-3">
                              <p
                                className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                              >
                                {cert.issuer}
                              </p>
                              {cert.credentialId && (
                                <span className="text-[10.5px] font-mono text-[#D5CBC0]/80 bg-[#1a140f] border border-[#35271a] px-2.5 py-0.5 rounded">
                                  {cert.credentialId}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            <p
                              className="text-xs sm:text-[13.5px] text-[#B8A89A] leading-[1.8] mb-6 font-light max-w-2xl"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {cert.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                              {cert.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#E8D7C5] bg-[#1a140f] border border-[#33261a] rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Footer Action Buttons */}
                          <div className="pt-5 border-t border-[#261d15] flex flex-wrap items-center justify-between gap-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openCertModal(cert);
                              }}
                              className="inline-flex items-center space-x-2.5 px-6 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#8C6D4F]/20 hover:from-[#D4AF37] hover:to-[#C99E5D] text-[#F7E7C4] hover:text-black border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-xl font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] group/btn"
                            >
                              <svg className="w-4 h-4 text-[#D4AF37] group-hover/btn:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span>VIEW CREDENTIAL</span>
                              <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>

                            <div className="flex items-center space-x-3">
                              <a
                                href={cert.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-mono text-[#8C6D4F] hover:text-[#D4AF37] hover:bg-white/[0.04] border border-[#2d231a] rounded-lg transition-colors"
                              >
                                <span>OPEN FULL</span>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>

                              <a
                                href={cert.fileUrl}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-mono text-[#8C6D4F] hover:text-[#D4AF37] hover:bg-white/[0.04] border border-[#2d231a] rounded-lg transition-colors"
                              >
                                <span>DOWNLOAD</span>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile / Tablet Horizontal Swipeable Overlapping Cards */}
              <div className="lg:hidden flex items-stretch space-x-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none no-scrollbar">
                {filteredCerts.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => openCertModal(cert)}
                    className="shrink-0 w-[85vw] max-w-[360px] snap-center rounded-2xl bg-[#0c0a08] border border-[#2d241c] hover:border-[#D4AF37] p-6 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.9)] cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full">
                          {cert.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#8C6D4F]">
                          {cert.date}
                        </span>
                      </div>

                      <h3
                        className="text-2xl text-white mb-2 leading-tight"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {cert.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                        {cert.issuer}
                      </p>
                      {cert.credentialId && (
                        <p className="text-[10px] font-mono text-[#8C6D4F] mb-3">
                          {cert.credentialId}
                        </p>
                      )}

                      <p className="text-xs text-[#A8988B] leading-relaxed mb-4 line-clamp-3">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cert.tags.slice(0, 4).map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 text-[9px] font-mono bg-white/[0.03] text-[#B8A89A] border border-white/5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openCertModal(cert);
                      }}
                      className="w-full py-2.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/40 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>VIEW CREDENTIAL</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Deck Indicators & Quick Selector */}
              <div className="hidden lg:flex items-center justify-center space-x-2 mt-6">
                {filteredCerts.map((cert, idx) => (
                  <button
                    key={cert.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === safeActiveIndex
                        ? 'w-10 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]'
                        : 'w-2 bg-[#2d241c] hover:bg-[#8C6D4F]'
                    }`}
                    aria-label={`Jump to ${cert.title}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* ================= 2. GRID VIEW (ALTERNATIVE VIEW) ================= */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCerts.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative bg-[#0c0a08] border border-[#2a221b] hover:border-[#D4AF37]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25 rounded-full">
                          {cert.category}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F]">
                          {cert.date}
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-[26px] text-white group-hover:text-[#F7E7C4] transition-colors leading-tight mb-2 tracking-wide"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {cert.title}
                      </h3>

                      <div className="mb-4">
                        <p
                          className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {cert.issuer}
                        </p>
                        {cert.credentialId && (
                          <p className="text-[10px] font-mono text-[#8C6D4F] tracking-wide mt-0.5">
                            {cert.credentialId}
                          </p>
                        )}
                      </div>

                      <p
                        className="text-xs text-[#9E9085] leading-[1.7] mb-5 font-light"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[9px] font-mono text-[#A8988B] bg-white/[0.03] border border-white/5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1d1712] flex items-center justify-between">
                      <button
                        onClick={() => openCertModal(cert)}
                        className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-[#D4AF37] hover:text-white transition-colors"
                      >
                        <span>VIEW CREDENTIAL</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#8C6D4F] hover:text-[#D4AF37] hover:bg-white/[0.04] rounded transition-colors"
                        title="Open full document"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Verification Badge Bar */}
          <div className="mt-12 p-4 rounded-xl bg-[#0c0a08] border border-[#2a221b] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xs text-[#A8988B] font-mono">
                All certificates are issued by recognized organizations (Infosys Springboard, NPTEL IIT Kharagpur, AWS, McKinsey &amp; SAGE X) with verified digital credential records.
              </p>
            </div>
            <a
              href="#resume"
              className="text-xs font-mono tracking-widest text-[#D4AF37] hover:underline whitespace-nowrap"
            >
              SEE FULL RESUME &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* Modal View */}
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

export default CertificationsSection;
