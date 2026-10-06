// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg(
        'EmailJS credentials are not configured yet. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject || `New Portfolio Message from ${formData.name}`,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS transmission error:', err);
      const details = err?.text || err?.message || 'Transmission failed';
      setErrorMsg(
        `Failed to send message via EmailJS (${details}). You can also dispatch directly via your email client:`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:dipanshuraj0708@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from ' + (formData.name || 'Visitor')
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#1a1612]"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#D4AF37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): Headline + Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
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
                  08 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Send a direct dispatch below — messages deliver straight to my inbox.
              </p>

              {/* Direct Channels Box */}
              <div className="p-6 rounded-xl bg-[#0c0a08] border border-[#2a221b] space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C6D4F] border-b border-[#2a221b] pb-2">
                  // VERIFIED DIRECT CHANNELS
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-[#D4AF37] font-mono text-sm">&#9993;</span>
                  <div>
                    <span className="text-[10px] font-mono text-[#8C6D4F] block">EMAIL INBOX</span>
                    <a
                      href="mailto:dipanshuraj0708@gmail.com"
                      className="text-white hover:text-[#D4AF37] transition-colors font-mono font-medium underline underline-offset-4 decoration-[#D4AF37]/50"
                    >
                      dipanshuraj0708@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-[#D4AF37] font-mono text-sm">&#9742;</span>
                  <div>
                    <span className="text-[10px] font-mono text-[#8C6D4F] block">TELEPHONE / WHATSAPP</span>
                    <a
                      href="tel:+918092870903"
                      className="text-[#E8DFD8] hover:text-[#D4AF37] transition-colors font-mono"
                    >
                      +91 8092870903
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-[#D4AF37] font-mono text-sm">&#9678;</span>
                  <div>
                    <span className="text-[10px] font-mono text-[#8C6D4F] block">LOCATION</span>
                    <span className="text-[#A8988B] font-mono">
                      Bengaluru, Karnataka &bull; Open to Remote & Relocation
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400">
                    STATUS: READY FOR OPPORTUNITIES &bull; &lt; 24H RESPONSE TIME
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-2xl border border-[#8C6D4F]/40 bg-[#0A0806] p-7 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-12 sm:py-16 text-center space-y-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] text-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <h3 className="text-3xl sm:text-4xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION CONFIRMED
                </h3>
                <p className="text-xs sm:text-sm text-[#A8988B] font-light max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your message has been delivered directly to <span className="text-[#D4AF37] font-mono">dipanshuraj0708@gmail.com</span>. Dipanshu will get back to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 border border-[#8C6D4F]/60 hover:border-[#D4AF37] text-xs font-mono tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded transition-all"
                  >
                    SEND ANOTHER DISPATCH &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2a221b]">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                    DIRECT DISPATCH PROTOCOL
                  </span>
                  <span className="text-[10px] font-mono text-[#8C6D4F]">
                    RECIPIENT: DIPANSHURAJ0708@GMAIL.COM
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // YOUR NAME *
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-lg transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // YOUR EMAIL *
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-lg transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                    // SUBJECT / TOPIC
                  </span>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack / AI Role Opportunity or Project Collaboration"
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-lg transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                    // TRANSMISSION PAYLOAD *
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share the details of your project, role, requirements, or inquiry..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-lg transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-200 space-y-2">
                    <p className="font-mono text-[11px]">{errorMsg}</p>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-[#D4AF37] text-black font-mono text-[11px] font-bold hover:bg-[#F7E7C4] transition-colors"
                    >
                      <span>LAUNCH DIRECT EMAIL CLIENT ↗</span>
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 border border-[#8C6D4F]/60 bg-[#16110D] hover:border-[#D4AF37] hover:bg-[#201812] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] disabled:opacity-60 flex items-center justify-center space-x-2 rounded-lg cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
                      <span>DISPATCHING ENCRYPTED PACKET...</span>
                    </>
                  ) : (
                    <span>EXECUTE DISPATCH TO INBOX ↗</span>
                  )}
                </button>

                <p className="text-[10px] text-center font-mono text-[#8C6D4F]/80">
                  Protected transmission. Direct notification sent to dipanshuraj0708@gmail.com upon dispatch.
                </p>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            DIPANSHU RAJ // PORTFOLIO EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            &copy; {new Date().getFullYear()} &bull; ENGINEERED WITH PRECISION &bull; ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;