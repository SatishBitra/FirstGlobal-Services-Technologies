import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenEnquiry: () => void;
  onNavigateToMarketplace: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onNavigateToMarketplace,
}) => {
  return (
    <section
      id="home"
      className="relative pt-[110px] md:pt-[140px] pb-16 md:pb-24 overflow-hidden bg-white"
      aria-label="FirstGlobal Overview and Positioning"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Editorial Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-3 sm:mb-5"
            >
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#1557c0]" />
              <span className="text-[11px] sm:text-[13px] font-heading font-medium tracking-wide uppercase text-[#5f6b78]">
                FirstGlobal Services &amp; Technologies
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              id="hero-primary-headline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-medium text-[26px] sm:text-[38px] md:text-[48px] lg:text-[54px] leading-[1.15] sm:leading-[1.1] tracking-tight text-[#10243a] mb-4 sm:mb-6"
            >
              AI Enabled Service Delivery Marketplace for Rural India
            </motion.h1>

            {/* Supporting Headline */}
            <motion.h2
              id="hero-supporting-headline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-medium text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[1.3] text-[#1557c0] mb-6 sm:mb-8"
            >
              Charting Rural India’s Digital Services Future
            </motion.h2>

            {/* Direct CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <button
                type="button"
                id="hero-cta-marketplace"
                onClick={onNavigateToMarketplace}
                className="inline-flex items-center gap-2 bg-[#1557c0] hover:bg-[#10243a] text-white text-[13px] sm:text-[15px] font-heading font-medium px-5 py-3 sm:px-6 sm:py-3.5 rounded-[10px] sm:rounded-[12px] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] focus-visible:ring-offset-2"
              >
                <span>JOIN THE MARKETPLACE</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                id="hero-cta-touch"
                onClick={onOpenEnquiry}
                className="inline-flex items-center bg-white hover:bg-[#f8fafc] text-[#10243a] hover:text-[#1557c0] text-[13px] sm:text-[15px] font-heading font-medium px-5 py-3 sm:px-6 sm:py-3.5 rounded-[10px] sm:rounded-[12px] border border-[#e6eaee] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0]"
              >
                GET IN TOUCH
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual with Clean, Framed High-Fidelity Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[480px] rounded-[18px] sm:rounded-[24px] bg-white border border-[#e6eaee] p-2 sm:p-3 shadow-lg shadow-[#10243a]/5 overflow-hidden group"
              id="hero-visual-card"
            >
              {/* Clean Image Frame - pure visual without any overlapping text, badges, or icons */}
              <div className="relative w-full aspect-[4/3] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#f1f5f9]">
                <img
                  id="hero-feature-image"
                  src="/hero-rural-services.jpg"
                  onError={(e) => {
                    // Fallback to CDN if relative path fails in any context
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80';
                  }}
                  alt="Rural India digital technology and service delivery empowering local enterprise and households"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
