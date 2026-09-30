import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  organization?: string;
  fileUrl: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  organization,
  fileUrl,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isImage = fileUrl.match(/\.(jpeg|jpg|png|webp)$/i);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-[88vh] bg-[#0c0a09] border border-[#D4AF37]/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2d251e] bg-[#14100c]/80 backdrop-blur-md">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase block">
                VERIFIED CREDENTIAL
              </span>
              <h3
                className="text-xl sm:text-2xl text-white font-medium tracking-wide mt-0.5"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {title}
              </h3>
              {organization && (
                <p className="text-xs text-[#8C6D4F] font-mono tracking-wider">
                  {organization}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono tracking-wider text-[#D4AF37] hover:text-black bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/40 rounded-lg transition-all duration-300"
                title="Open in new tab"
              >
                <span>OPEN FULL</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={fileUrl}
                download
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono tracking-wider text-[#E8DFD8] hover:text-[#D4AF37] bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
                title="Download certificate"
              >
                <span>DOWNLOAD</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-neutral-400 hover:text-red-400 flex items-center justify-center transition-all duration-200"
                title="Close modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Certificate Content Viewer */}
          <div className="flex-1 w-full bg-[#080706] relative overflow-hidden flex items-center justify-center">
            {isImage ? (
              <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
                <img
                  src={fileUrl}
                  alt={title}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/5"
                />
              </div>
            ) : (
              <iframe
                src={`${fileUrl}#toolbar=1&navpanes=0`}
                title={title}
                className="w-full h-full border-0"
              />
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
