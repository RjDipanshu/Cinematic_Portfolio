// src/components/EducationSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface EducationItem {
  id: string;
  number: string;
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  gradeLabel: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

const educationData: EducationItem[] = [
  {
    id: 'btech',
    number: '01',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science & Information Technology',
    institution: 'Sagar Institute of Research & Technology (SIRT)',
    location: 'Bhopal, Madhya Pradesh',
    duration: '2022 — 2026',
    grade: '7.42 / 10',
    gradeLabel: 'CUMULATIVE CGPA',
    description:
      'Pursuing comprehensive engineering education focused on core computer science foundations, enterprise software architecture, full-stack web applications, and artificial intelligence.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java)',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Cloud Computing',
      'Artificial Intelligence',
      'Software Engineering',
    ],
    highlights: [
      'Developed 15+ real-world repositories across backend systems, AI agents, and full-stack web applications',
      'Led academic project teams in architectural planning, Spring Boot microservices, and database normalization',
      'Active participant in technical coding challenges and machine learning hackathons',
    ],
  },
  {
    id: 'class12',
    number: '02',
    degree: 'Higher Secondary Education (Class XII)',
    specialization: 'Science Stream (Physics, Chemistry, Mathematics)',
    institution: 'Manav Devi Dedicated Inter College',
    location: 'Palamu, Jharkhand',
    duration: '2020 — 2022',
    grade: '85.6%',
    gradeLabel: 'AGGREGATE (DISTINCTION)',
    description:
      'Completed senior secondary school under the Jharkhand Academic Council (JAC) with distinction in mathematics and physical sciences, cementing rigorous analytical discipline.',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science Fundamentals'],
    highlights: [
      'Achieved 85.6% aggregate score with honors in mathematical sciences',
      'Developed strong algorithmic thinking and quantitative analytical problem solving',
    ],
  },
  {
    id: 'class10',
    number: '03',
    degree: 'Secondary Education (Class X)',
    specialization: 'General Science & Mathematics',
    institution: 'Sacred Heart School',
    location: 'Palamu, Jharkhand',
    duration: '2018 — 2020',
    grade: '70%',
    gradeLabel: 'AGGREGATE (FIRST DIVISION)',
    description:
      'Completed Secondary school under the ICSE board with First Division in Mathematics and Physical Sciences, cementing rigorous analytical discipline.',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Applications', 'English', 'Hindi', 'Social Studies'],
    highlights: [
      'Achieved 70% aggregate score with First Division in mathematical sciences',
      'Developed strong algorithmic thinking and quantitative analytical problem solving',
    ],
  },
];

export const EducationSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollToEducation = (index: number) => {
    setActiveIdx(index);
    const container = document.getElementById('education');
    if (!container) return;
    const cards = container.querySelectorAll('.scroll-stack-card');
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const rect = card.getBoundingClientRect();
      const targetScroll = rect.top + window.scrollY - (window.innerHeight * 0.12);
      window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
    }
  };

  return (
    <section
      id="education"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#1a1612]"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
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
            07 / EDUCATION
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                ACADEMIC
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                BACKGROUND.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A8988B] mt-4 md:mt-0 font-mono tracking-wider max-w-sm leading-relaxed">
            Scroll or click each card to unfold academic milestones from secondary education to computer science engineering.
          </p>
        </motion.div>

        {/* Quick Education Switcher Bar */}
        <div className="mb-10 p-3 sm:p-4 rounded-xl bg-[#0c0a08] border border-[#2a221b]">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C6D4F]">
              ACADEMIC MILESTONES ({educationData.length}) &bull; CLICK ANY TO JUMP
            </span>
            <span className="text-[10px] font-mono text-[#D4AF37]">
              ACTIVE: {educationData[activeIdx]?.number} &bull; {educationData[activeIdx]?.degree}
            </span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1">
            {educationData.map((edu, idx) => (
              <button
                key={edu.id}
                onClick={() => scrollToEducation(idx)}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all duration-300 border flex items-center space-x-2 ${
                  activeIdx === idx
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#14100c] text-[#A8988B] hover:text-[#D4AF37] hover:bg-[#1f1912] border-[#2c221a] hover:border-[#D4AF37]/40'
                }`}
              >
                <span className={activeIdx === idx ? 'text-black font-bold' : 'text-[#D4AF37]'}>
                  {edu.number}
                </span>
                <span>{edu.degree}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Stacking Deck (Overlapping like Featured Work) */}
        <ScrollStack
          itemDistance={35}
          itemScale={0.025}
          itemStackDistance={14}
          stackPosition="12%"
          baseScale={0.92}
          maxStackDepth={3}
          useWindowScroll={true}
          onActiveCardChange={setActiveIdx}
        >
          {educationData.map((edu, index) => (
            <ScrollStackItem
              key={edu.id}
              onClick={() => scrollToEducation(index)}
            >
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-all duration-300 hover:border-[#D4AF37]">
                
                {/* Clickable Header Strip for the Stack */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToEducation(index);
                  }}
                  className="w-full flex items-center justify-between py-2.5 px-6 bg-[#14100c] hover:bg-[#1e1710] border-b border-[#D4AF37]/25 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <span className="text-[11px] font-mono font-bold text-[#D4AF37] shrink-0">
                      {edu.number} //
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-white group-hover:text-[#F7E7C4] transition-colors truncate">
                      {edu.degree}
                    </span>
                    <span className="hidden sm:inline-block text-[9.5px] font-mono tracking-wider text-[#8C6D4F] uppercase shrink-0">
                      {edu.institution}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 shrink-0 text-[#D4AF37] text-[10px] font-mono">
                    <span className="hidden sm:inline text-[#D4AF37]/75">OPEN THIS CARD</span>
                    <span className="text-xs">&darr;</span>
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="p-7 sm:p-9 relative">
                  
                  {/* Top Gold Border Light Flare */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent group-hover:via-[#D4AF37] transition-colors" />

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                          {edu.duration}
                        </span>
                        <span className="text-xs text-[#8C6D4F] font-mono">
                          {edu.location}
                        </span>
                      </div>

                      <h3
                        className="text-3xl sm:text-4xl text-white group-hover:text-[#F7E7C4] transition-colors leading-none tracking-wide"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {edu.degree}
                      </h3>

                      <p
                        className="text-sm sm:text-base text-[#D4AF37] font-medium tracking-wide mt-1.5"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {edu.specialization}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A8988B] font-mono tracking-wider mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    {/* Score Badge */}
                    <div className="bg-[#14100c] border border-[#2d241c] group-hover:border-[#D4AF37]/40 rounded-xl p-4 text-center shrink-0 self-start lg:self-auto min-w-[160px] transition-colors">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D4F] block mb-1">
                        {edu.gradeLabel}
                      </span>
                      <span
                        className="text-2xl sm:text-3xl text-[#F7E7C4] font-bold tracking-tight block"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-[13px] text-[#A8988B] leading-[1.8] mb-6 font-light max-w-3xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {edu.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                      KEY HIGHLIGHTS
                    </span>
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2.5 text-xs text-[#D5CBC0]/90">
                        <span className="text-[#D4AF37] mt-0.5 text-xs">&#9670;</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coursework Tags */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C6D4F] block mb-2.5">
                      CORE RELEVANT COURSEWORK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 text-[10px] font-mono tracking-wider bg-white/[0.03] hover:bg-white/[0.08] text-[#C5B7AB] border border-white/5 rounded transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default EducationSection;
