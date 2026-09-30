import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  language: string;
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'HireHub AI',
    category: 'AI / TALENT ACQUISITION',
    description:
      'A smart talent acquisition system utilizing AI to match candidates, automate resume parsing, and enhance the interview scheduling workflow. Built with modern full-stack JavaScript architecture.',
    githubUrl: 'https://github.com/RjDipanshu/HireHub-AI',
    language: 'JavaScript',
    tech: [
      'JavaScript',
      'Node.js',
      'AI/ML',
      'Resume Parsing',
      'REST APIs',
      'Full Stack',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'JavaScript' },
      { label: 'TYPE', value: 'AI Platform' },
      { label: 'STATUS', value: 'Active' },
    ],
  },
  {
    number: '02',
    title: 'LifeOS AI Intelligence',
    category: 'AI / DIGITAL WELLBEING',
    description:
      'AI-powered personal digital wellbeing platform with behavioral analytics, anomaly detection, adaptive goals, multimodal journaling, and closed-loop AI recommendations. Deployed on Streamlit Cloud.',
    githubUrl: 'https://github.com/RjDipanshu/LifeOS-AI-Intelligence',
    language: 'Python',
    tech: [
      'Python',
      'Streamlit',
      'Gemini AI',
      'Pandas',
      'Analytics',
      'Machine Learning',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'ENGINE', value: 'Gemini AI' },
      { label: 'DEPLOY', value: 'Streamlit Cloud' },
    ],
  },
  {
    number: '03',
    title: 'Story Forge AI',
    category: 'AI / CREATIVE ENGINE',
    description:
      'A stateful AI visual novel engine — Gemini writes the story, Pollinations.ai illustrates it, and gTTS narrates it aloud. Dynamic choices, 10 genres, 12 art styles, and full story export.',
    githubUrl: 'https://github.com/RjDipanshu/story-forge-ai',
    language: 'Python',
    tech: [
      'Python',
      'Streamlit',
      'Gemini API',
      'Pollinations AI',
      'gTTS',
      'NLP',
    ],
    metrics: [
      { label: 'GENRES', value: '10 Genres' },
      { label: 'STYLES', value: '12 Art Styles' },
      { label: 'NARRATION', value: 'gTTS Audio' },
    ],
  },
  {
    number: '04',
    title: 'AI Image Generator',
    category: 'AI / GENERATIVE ART',
    description:
      'A modern AI-powered image generation web application built with Streamlit and Pollinations AI, featuring customizable art styles, image enhancement, surprise prompts, and instant image downloads.',
    githubUrl: 'https://github.com/RjDipanshu/Ai_Image',
    language: 'Python',
    tech: [
      'Python',
      'Streamlit',
      'Pollinations AI',
      'Image Processing',
      'Art Styles',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'AI ENGINE', value: 'Pollinations' },
      { label: 'FEATURE', value: 'Instant Download' },
    ],
  },
  {
    number: '05',
    title: 'AI Multiverse Chat Studio',
    category: 'AI / CONVERSATIONAL',
    description:
      'A premium, stateful Streamlit chatbot powered by the Google Gemini API. Features 15+ interactive AI personas, multilingual responses, dynamic prompt inspector, and robust session-state memory retention.',
    githubUrl: 'https://github.com/RjDipanshu/ai-multiverse-chat-studio',
    language: 'Python',
    tech: [
      'Python',
      'Streamlit',
      'Gemini API',
      'NLP',
      'Multi-Persona',
      'Session State',
    ],
    metrics: [
      { label: 'PERSONAS', value: '15+ AI Roles' },
      { label: 'LANGUAGES', value: 'Multilingual' },
      { label: 'MODEL', value: 'Gemini Flash' },
    ],
  },
  {
    number: '06',
    title: 'Store Rating Platform',
    category: 'FULL STACK / WEB APP',
    description:
      'A premium full-stack store evaluation registry built with React, ExpressJS, Prisma ORM, and PostgreSQL. Features cyberpunk dark theme, JWT-gated role authorization (Admin/Owner/User), and robust validation.',
    githubUrl: 'https://github.com/RjDipanshu/store-rating-platform',
    language: 'JavaScript',
    tech: [
      'React.js',
      'Express.js',
      'Prisma ORM',
      'PostgreSQL',
      'JWT',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'ROLES', value: 'Admin/Owner/User' },
      { label: 'AUTH', value: 'JWT RBAC' },
      { label: 'DATABASE', value: 'PostgreSQL' },
    ],
  },
  {
    number: '07',
    title: 'RAG Chatbot',
    category: 'AI / NLP RETRIEVAL',
    description:
      'Retrieval-Augmented Generation chatbot that combines document retrieval with generative AI to provide accurate, context-aware responses from uploaded knowledge bases.',
    githubUrl: 'https://github.com/RjDipanshu/RAG-Chatbot',
    language: 'Python',
    tech: [
      'Python',
      'RAG',
      'Vector DB',
      'LLM',
      'NLP',
      'Document Processing',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'APPROACH', value: 'RAG Pipeline' },
      { label: 'TYPE', value: 'Knowledge Bot' },
    ],
  },
  {
    number: '08',
    title: 'MirAI Identity Echo',
    category: 'AI / INTERNSHIP PROJECT',
    description:
      'Streamlit-based web application developed for the MirAI School of Technology Virtual Summer Internship 2026, featuring user input validation, personalized message transmission, and AI token usage estimation.',
    githubUrl: 'https://github.com/RjDipanshu/mirai-identity-echo-interface',
    language: 'Python',
    tech: [
      'Python',
      'Streamlit',
      'AI Tokens',
      'Validation',
      'MirAI Tech',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'CONTEXT', value: 'Internship' },
      { label: 'YEAR', value: '2026' },
    ],
  },
  {
    number: '09',
    title: 'Trackify Train Voyage',
    category: 'WEB APP / TRANSPORT',
    description:
      'A modern train tracking and voyage management web application built with TypeScript and React. Deployed on Vercel for seamless, real-time travel planning and monitoring.',
    githubUrl: 'https://github.com/RjDipanshu/trackify-train-voyage',
    language: 'TypeScript',
    tech: [
      'TypeScript',
      'React',
      'Vite',
      'Vercel',
      'Real-Time',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'TypeScript' },
      { label: 'DEPLOY', value: 'Vercel' },
      { label: 'TYPE', value: 'Web App' },
    ],
  },
  {
    number: '10',
    title: 'Sign Language AI',
    category: 'AI / ACCESSIBILITY',
    description:
      'An AI-powered sign language recognition system designed to bridge the communication gap. Leverages computer vision and machine learning to interpret hand gestures in real-time.',
    githubUrl: 'https://github.com/RjDipanshu/sign_language_ai',
    language: 'Python',
    tech: [
      'Python',
      'Computer Vision',
      'Machine Learning',
      'OpenCV',
      'Gesture Recognition',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'DOMAIN', value: 'Accessibility' },
      { label: 'TYPE', value: 'CV / ML' },
    ],
  },
  {
    number: '11',
    title: 'News Summarizer',
    category: 'AI / NLP',
    description:
      'An intelligent news summarization engine that fetches, processes, and condenses news articles using NLP techniques. Provides quick, digestible summaries for efficient information consumption.',
    githubUrl: 'https://github.com/RjDipanshu/News-Summarizer-main',
    language: 'Python',
    tech: [
      'Python',
      'NLP',
      'Text Summarization',
      'News API',
      'Streamlit',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'DOMAIN', value: 'NLP' },
      { label: 'TYPE', value: 'Summarizer' },
    ],
  },
  {
    number: '12',
    title: 'Life OS AI Dashboard',
    category: 'AI / PRODUCTIVITY',
    description:
      'AI-powered digital wellbeing dashboard built with Streamlit, Gemini AI, and Pandas to analyze screen time, visualize productivity trends, generate personalized lifestyle coaching, and track achievements.',
    githubUrl: 'https://github.com/RjDipanshu/Life_Os_Ai',
    language: 'Python',
    tech: [
      'Python',
      'Streamlit',
      'Gemini AI',
      'Pandas',
      'Data Viz',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'ENGINE', value: 'Gemini AI' },
      { label: 'TYPE', value: 'Dashboard' },
    ],
  },
  {
    number: '13',
    title: 'Dipanshu Chatbot',
    category: 'AI / CONVERSATIONAL',
    description:
      'A personal AI chatbot showcasing conversational AI capabilities. Built with Python and modern AI libraries for interactive, context-aware dialogue experiences.',
    githubUrl: 'https://github.com/RjDipanshu/dipanshu-chatbot-main',
    language: 'Python',
    tech: [
      'Python',
      'AI',
      'Chatbot',
      'NLP',
      'Conversational AI',
    ],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'TYPE', value: 'Chatbot' },
      { label: 'STATUS', value: 'Active' },
    ],
  },
];

// GitHub SVG icon component
const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollToProject = (index: number) => {
    setActiveIdx(index);
    const cards = document.querySelectorAll('.scroll-stack-card');
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const rect = card.getBoundingClientRect();
      const targetScroll = rect.top + window.scrollY - (window.innerHeight * 0.12);
      window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
    }
  };

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-28 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
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
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed font-mono"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Click any project card or tab to open it. Each platform was built to solve real-world challenges with AI &amp; full-stack engineering.
          </p>
        </motion.div>

        {/* Quick Project Switcher Bar */}
        <div className="mb-10 p-3 sm:p-4 rounded-xl bg-[#0c0a08] border border-[#2a221b]">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C6D4F]">
              PROJECT INDEX ({projects.length}) &bull; CLICK ANY TO JUMP
            </span>
            <span className="text-[10px] font-mono text-[#D4AF37]">
              ACTIVE: {projects[activeIdx]?.number} &bull; {projects[activeIdx]?.title}
            </span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1">
            {projects.map((p, idx) => (
              <button
                key={p.number}
                onClick={() => scrollToProject(idx)}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all duration-300 border flex items-center space-x-2 ${
                  activeIdx === idx
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#14100c] text-[#A8988B] hover:text-[#D4AF37] hover:bg-[#1f1912] border-[#2c221a] hover:border-[#D4AF37]/40'
                }`}
              >
                <span className={activeIdx === idx ? 'text-black font-bold' : 'text-[#D4AF37]'}>
                  {p.number}
                </span>
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={35}
          itemScale={0.02}
          itemStackDistance={12}
          stackPosition="12%"
          baseScale={0.93}
          maxStackDepth={3}
          useWindowScroll={true}
          onActiveCardChange={setActiveIdx}
        >
          {projects.map((project, index) => (
            <ScrollStackItem
              key={project.title}
              onClick={() => scrollToProject(index)}
            >
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-all duration-300 hover:border-[#D4AF37]">
                
                {/* Clickable Header Strip for the Stack */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToProject(index);
                  }}
                  className="w-full flex items-center justify-between py-2.5 px-6 bg-[#14100c] hover:bg-[#1f1912] border-b border-[#D4AF37]/25 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <span className="text-[11px] font-mono font-bold text-[#D4AF37] shrink-0">
                      {project.number} //
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-white group-hover:text-[#F7E7C4] transition-colors truncate">
                      {project.title}
                    </span>
                    <span className="hidden sm:inline-block text-[9.5px] font-mono tracking-wider text-[#8C6D4F] uppercase shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 shrink-0 text-[#D4AF37] text-[10px] font-mono">
                    <span className="hidden sm:inline text-[#D4AF37]/75">OPEN THIS CARD</span>
                    <span className="text-xs">&darr;</span>
                  </div>
                </div>

                <div className="p-8 sm:p-12 relative">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                        {/* Language Badge */}
                        <span className="ml-auto px-2.5 py-0.5 text-[9px] font-mono tracking-wider uppercase border border-[#D4AF37]/40 text-[#D4AF37] bg-[#D4AF37]/5 rounded-sm">
                          {project.language}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] group/btn"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <GitHubIcon className="w-4.5 h-4.5 transition-transform duration-300 group-hover/btn:scale-110" />
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>
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

export default ProjectsSection;