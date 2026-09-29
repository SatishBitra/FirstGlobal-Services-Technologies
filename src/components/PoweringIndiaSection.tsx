import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, HeartHandshake } from 'lucide-react';

// Custom 8-pointed star rosette icon matching the reference design
const EightPointStarIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L14.2 7.8L20 8.2L15.6 12.3L17.2 18.2L12 15L6.8 18.2L8.4 12.3L4 8.2L9.8 7.8L12 2Z" />
    <circle cx="12" cy="12" r="2.2" fill="white" fillOpacity="0.85" />
  </svg>
);

export const PoweringIndiaSection: React.FC = () => {
  const handleScrollToMarketplace = () => {
    const el = document.getElementById('marketplace');
    if (el) {
      const offset = 85;
      const elPos = el.getBoundingClientRect().top;
      const targetPos = elPos + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="powering-india"
      className="py-16 sm:py-24 lg:py-28 bg-[#fafbfa] border-t border-[#e8ecef] relative overflow-hidden"
      aria-label="Powering India's AI-first future"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Eyebrow, Heading, Manifesto, and 3 Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Subtle Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#e8f5e9] text-[#1b5e20]">
                <EightPointStarIcon className="w-3.5 h-3.5" />
              </span>
              <span className="text-[12px] sm:text-[13px] font-heading font-medium uppercase tracking-wider text-[#4a5568]">
                Foundational Intelligence &amp; Infrastructure
              </span>
            </div>

            {/* Main Section Headline matching the exact title from reference */}
            <h2 className="font-heading font-medium text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.14] tracking-tight text-[#10243a] mb-5 text-balance">
              Powering India&apos;s AI-first future
            </h2>

            {/* Narrative paragraph tailored to FirstGlobal */}
            <p className="text-[15px] sm:text-[16.5px] lg:text-[17.5px] text-[#475569] leading-relaxed mb-8 text-balance">
              Building India&apos;s full-stack sovereign AI platform—bringing voice-first intelligence, verified local providers, and digital public infrastructure to 800+ million citizens across 600,000+ villages.
            </p>

            {/* 3 Key Feature Points matching the exact 3 pillars */}
            <div className="space-y-6 sm:space-y-7">
              {/* Point 1: Sovereign by design */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 text-amber-400 flex items-center justify-center mt-0.5 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-[17px] sm:text-[19px] text-[#10243a] mb-1">
                    Sovereign by design
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#556982] leading-relaxed">
                    Developed and operated entirely in India, ensuring data sovereignty, strategic independence, and full integration with India&apos;s digital public infrastructure.
                  </p>
                </div>
              </motion.div>

              {/* Point 2: State-of-the-art models */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 text-cyan-400 flex items-center justify-center mt-0.5 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-[17px] sm:text-[19px] text-[#10243a] mb-1">
                    State-of-the-art models
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#556982] leading-relaxed">
                    Purpose-built for India&apos;s linguistic and cultural diversity, natively fluent across 22 official languages and diverse dialects at population scale.
                  </p>
                </div>
              </motion.div>

              {/* Point 3: Human at the core */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center mt-0.5 shadow-sm">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-[17px] sm:text-[19px] text-[#10243a] mb-1">
                    Human at the core
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#556982] leading-relaxed">
                    Forward-deployed teams and AI co-pilots working alongside grassroots village entrepreneurs (VLEs) and local providers to deliver real-world impact.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Fully Rounded Black Button CTA */}
            <div className="mt-8 pt-4 border-t border-neutral-200/70">
              <button
                type="button"
                onClick={handleScrollToMarketplace}
                className="group inline-flex items-center gap-2.5 bg-black hover:bg-neutral-800 text-white text-[13.5px] sm:text-[14.5px] font-heading font-medium px-7 py-3.5 rounded-full transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-[0.98]"
              >
                <span>EXPLORE PLATFORM ARCHITECTURE</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Architectural Silhouette & Glowing Sacred Geometric Mandala Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[540px] rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#0b1528] via-[#0e1d38] to-[#070d18] border border-[#1f3054] p-6 sm:p-10 shadow-2xl shadow-[#0c1527]/25 overflow-hidden flex flex-col items-center justify-between min-h-[480px] sm:min-h-[540px]">
              {/* Ambient radial halo behind mandala */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tr from-amber-500/20 via-cyan-400/25 to-blue-600/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Card Badge */}
              <div className="relative z-10 w-full flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] font-heading font-medium text-cyan-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  BHARAT AI INFRASTRUCTURE
                </span>
                <span className="text-[11px] sm:text-[12px] font-mono text-slate-400">
                  DPI · ONDC · VERNACULAR
                </span>
              </div>

              {/* Central Art: Architectural Silhouette + Blooming AI Geometric Mandala */}
              <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-4 sm:my-6">
                <div className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] flex items-center justify-center">
                  {/* Rotating outer neural mandala ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <svg viewBox="0 0 340 340" className="w-full h-full text-cyan-400/25">
                      {/* Outer concentric dotted coordinate ring */}
                      <circle cx="170" cy="170" r="162" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
                      <circle cx="170" cy="170" r="148" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
                      {/* Outer 16-point geometric nodes */}
                      {Array.from({ length: 16 }).map((_, i) => {
                        const angle = (i * 360) / 16;
                        const rad = (angle * Math.PI) / 180;
                        const x = 170 + 155 * Math.cos(rad);
                        const y = 170 + 155 * Math.sin(rad);
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r={i % 2 === 0 ? 2.5 : 1.5}
                            fill={i % 2 === 0 ? '#38bdf8' : '#fbbf24'}
                            fillOpacity="0.8"
                          />
                        );
                      })}
                    </svg>
                  </motion.div>

                  {/* Counter-rotating inner sacred geometry star rosette */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-4 sm:inset-6 flex items-center justify-center pointer-events-none"
                  >
                    <svg viewBox="0 0 280 280" className="w-full h-full">
                      {/* 8-pointed interlaced geometric star */}
                      <polygon
                        points="140,25 174,106 255,140 174,174 140,255 106,174 25,140 106,106"
                        fill="none"
                        stroke="url(#mandalaCyanGold)"
                        strokeWidth="1.5"
                        strokeOpacity="0.8"
                      />
                      <polygon
                        points="140,50 165,115 230,140 165,165 140,230 115,165 50,140 115,115"
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="1.2"
                        strokeOpacity="0.6"
                        transform="rotate(45 140 140)"
                      />

                      {/* 8 Petal Neural Rosette */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <g key={i} transform={`rotate(${i * 45} 140 140)`}>
                          <path
                            d="M 140 140 C 120 90, 160 90, 140 45 C 120 90, 160 90, 140 140"
                            fill="url(#mandalaPetalGrad)"
                            fillOpacity="0.25"
                            stroke="#38bdf8"
                            strokeWidth="1"
                            strokeOpacity="0.7"
                          />
                          <circle cx="140" cy="45" r="2" fill="#fbbf24" />
                        </g>
                      ))}

                      <defs>
                        <linearGradient id="mandalaCyanGold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#818cf8" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                        <linearGradient id="mandalaPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Pulsing Central Seed / AI Core */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-cyan-400 blur-md opacity-75" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a1426] border-2 border-amber-300/80 flex items-center justify-center shadow-lg">
                      <EightPointStarIcon className="w-7 h-7 text-amber-300" />
                    </div>
                  </motion.div>

                  {/* Stylized Indian Monumental Gateway Silhouette at Base */}
                  <div className="absolute bottom-0 inset-x-0 h-[130px] flex items-end justify-center pointer-events-none">
                    <svg
                      viewBox="0 0 340 140"
                      className="w-full h-full text-slate-800"
                      preserveAspectRatio="none"
                    >
                      {/* Back arch glow */}
                      <path
                        d="M 60 140 L 60 90 Q 60 40 110 30 Q 170 0 230 30 Q 280 40 280 90 L 280 140 Z"
                        fill="#0c1830"
                        stroke="#1e3256"
                        strokeWidth="1.5"
                      />
                      {/* Outer Arch Contour */}
                      <path
                        d="M 90 140 L 90 95 C 90 60, 120 40, 170 24 C 220 40, 250 60, 250 95 L 250 140 Z"
                        fill="#081020"
                        stroke="#2a436e"
                        strokeWidth="1.5"
                      />
                      {/* Inner Ornate Pointed Arch */}
                      <path
                        d="M 115 140 L 115 100 C 115 72, 135 56, 170 42 C 205 56, 225 72, 225 100 L 225 140 Z"
                        fill="#050a14"
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        strokeOpacity="0.85"
                      />
                      {/* Gateway Pillar Details & Balustrade lines */}
                      <line x1="60" y1="90" x2="280" y2="90" stroke="#1f365d" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="90" y1="120" x2="250" y2="120" stroke="#1f365d" strokeWidth="1" />
                      <circle cx="170" cy="38" r="3" fill="#fbbf24" />
                      {/* Left and Right Minaret/Pillar Caps */}
                      <path d="M 52 90 L 68 90 L 60 76 Z" fill="#243d6a" />
                      <path d="M 272 90 L 288 90 L 280 76 Z" fill="#243d6a" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary Pill */}
              <div className="relative z-10 w-full pt-3 border-t border-white/10 flex items-center justify-between text-[12px] sm:text-[13px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Sovereign Multimodal Models
                </span>
                <span className="font-heading font-medium text-amber-300">
                  Rural India First
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
