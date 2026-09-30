import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// GitHub SVG icon
const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Download icon
const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Eye icon
const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Close icon
const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ResumeSection: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <section
        id="resume"
        className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/3 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[26rem] h-[26rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

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
              04 / RESUME
            </span>
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                MY RESUME.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                VIEW & DOWNLOAD.
              </span>
            </h2>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative"
          >
            <motion.div
              variants={fadeUpVariants}
              className="relative p-8 sm:p-12 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden group hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              {/* Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

              {/* Corner Pins */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Left: Resume Info */}
                <div className="lg:col-span-7">
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                      // PROFESSIONAL DOCUMENT
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4 uppercase leading-[0.9]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    DIPANSHU RAJ'S RESUME
                  </h3>

                  <p
                    className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Computer Science graduate with hands-on experience in Java, Spring Boot, RESTful APIs, SQL, and AI applications.
                    Interned at Infosys Springboard and MirAI School of Technology. Explore my professional journey below.
                  </p>

                  {/* Resume Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {[
                      { label: 'CGPA', value: '7.42 / 10' },
                      { label: 'INTERNSHIPS', value: '3 Completed' },
                      { label: 'CERTIFICATIONS', value: '4+' },
                      { label: 'LANGUAGES', value: 'Java, Python, JS' },
                      { label: 'BACKEND', value: 'Spring Boot' },
                      { label: 'LOCATION', value: 'Bengaluru' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-3 rounded-sm border border-[#8C6D4F]/25 bg-[#050403]"
                      >
                        <span className="block text-[9px] font-mono text-[#8C6D4F] mb-1">
                          {item.label}
                        </span>
                        <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* GitHub Profile Link */}
                  <a
                    href="https://github.com/RjDipanshu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#A8988B] hover:text-[#D4AF37] transition-colors mb-2"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>github.com/RjDipanshu</span>
                  </a>
                </div>

                {/* Right: Action Buttons */}
                <div className="lg:col-span-5 flex flex-col space-y-4 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">

                  <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                    // ACTIONS
                  </span>

                  {/* View Resume Button */}
                  <button
                    onClick={() => setIsViewerOpen(true)}
                    className="w-full inline-flex items-center justify-center space-x-3 px-6 py-4 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] group/btn"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <EyeIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                    <span>VIEW RESUME</span>
                  </button>

                  {/* Download Resume Button */}
                  <a
                    href="/resume.pdf"
                    download="Dipanshu_Resume.pdf"
                    className="w-full inline-flex items-center justify-center space-x-3 px-6 py-4 border border-[#D4AF37]/60 bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#EAD8C7] hover:text-[#F7E7C4] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.08)] group/btn"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <DownloadIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                    <span>DOWNLOAD RESUME</span>
                    <span className="text-xs">↓</span>
                  </a>

                  {/* GitHub Profile Button */}
                  <a
                    href="https://github.com/RjDipanshu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-3 px-6 py-4 border border-[#8C6D4F]/40 bg-[#16120E] hover:border-[#8C6D4F] hover:bg-[#1A1510] text-[#A8988B] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 group/btn"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <GitHubIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                    <span>GITHUB PROFILE</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {isViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsViewerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[90vh] rounded-sm border border-[#8C6D4F]/50 bg-[#0E0C0A] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.98)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#8C6D4F]/25 bg-[#0A0806]">
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                    // RESUME VIEWER
                  </span>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
                </div>

                <div className="flex items-center space-x-3">
                  {/* Download from modal */}
                  <a
                    href="/resume.pdf"
                    download="Dipanshu_Resume.pdf"
                    className="inline-flex items-center space-x-2 px-4 py-2 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#EAD8C7] text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <DownloadIcon className="w-3.5 h-3.5" />
                    <span>DOWNLOAD</span>
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsViewerOpen(false)}
                    className="p-2 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#A8988B] hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <CloseIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-[calc(100%-60px)] bg-[#1a1714]">
                <iframe
                  src="/resume.pdf"
                  title="Dipanshu's Resume"
                  className="w-full h-full border-0"
                  style={{ backgroundColor: '#1a1714' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeSection;
