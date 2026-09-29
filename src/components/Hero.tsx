import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenEnquiry: () => void;
  onNavigateToMarketplace: () => void;
  onNavigateToRise?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onNavigateToMarketplace,
  onNavigateToRise,
}) => {
  // Interactive floating card slider as seen in Farmora reference
  const [activeSlide, setActiveSlide] = useState(0);

  const floatingCards = [
    {
      kicker: 'RISE® Initiative',
      dotColor: 'bg-[#39C85A]',
      title: 'Organised Rural Service Delivery',
      description:
        'First-Global’s innovation-led initiative supporting organised, reliable rural service delivery across 600,000+ Indian villages.',
      ctaText: 'Explore RISE®',
      targetId: 'rise',
    },
    {
      kicker: 'Our Vision',
      dotColor: 'bg-[#00AFC7]',
      title: 'Trusted Rural Ecosystem',
      description:
        'To be the most trusted ecosystem transforming rural service delivery, bridging the last-mile gap through accessible intelligence.',
      ctaText: 'Discover Vision',
      targetId: 'vision-mission',
    },
    {
      kicker: 'Village Network',
      dotColor: 'bg-[#00A88A]',
      title: 'Grassroots Entrepreneurship',
      description:
        'Empowering Village Level Entrepreneurs (VLEs) and local providers with speech-first digital tools and direct market access.',
      ctaText: 'Join Marketplace',
      targetId: 'marketplace',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % floatingCards.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + floatingCards.length) % floatingCards.length);
  };

  const currentCard = floatingCards[activeSlide];

  const handleCardCta = (targetId: string) => {
    if (targetId === 'marketplace') {
      onNavigateToMarketplace();
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 85;
      const elPos = el.getBoundingClientRect().top;
      const targetPos = elPos + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] lg:min-h-screen flex flex-col justify-end pt-32 sm:pt-36 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-[#071B3A]"
      aria-label="First-Global Homepage Hero"
    >
      {/* 1. Immersive Photographic Background with complete visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/fg-hero.png"
          onError={(e) => {
            e.currentTarget.src = '/hero-rural-services.jpg';
          }}
          alt="Rural India landscape with village communities and technology-enabled service ecosystem"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.01] brightness-[0.92] contrast-[1.02]"
        />

        {/* Compact bottom overlay with reduced height and softer intensity */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 lg:h-64 bg-gradient-to-t from-[#071B3A]/80 via-[#071B3A]/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Subtle Indian Heritage Jali Texture (4-6% opacity) */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#FAF9F5 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Subtle Ambient Digital Network Lines & Glowing Nodes in Blue -> Teal -> Green */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12%" y1="65%" x2="28%" y2="52%" stroke="#00AFC7" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="28%" y1="52%" x2="45%" y2="70%" stroke="#1769C2" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="45%" y1="70%" x2="65%" y2="58%" stroke="#00A88A" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="12%" cy="65%" r="3.5" fill="#39C85A" />
          <circle cx="28%" cy="52%" r="4" fill="#00AFC7" />
          <circle cx="45%" cy="70%" r="3.5" fill="#39C85A" />
          <circle cx="65%" cy="58%" r="4" fill="#78D83E" />
        </svg>
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Typography-led messaging & Primary CTA, grounded to baseline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Hierarchy Level 1: Category Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/18 backdrop-blur-md border border-white/25 text-white mb-4 sm:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#39C85A] animate-pulse" />
              <span className="text-[11.5px] sm:text-[12.5px] font-heading font-medium tracking-wider uppercase">
                AI-Enabled Service Delivery
              </span>
            </div>

            {/* Hierarchy Level 2: Display Headline */}
            <h1
              id="hero-primary-headline"
              className="text-[34px] sm:text-[46px] md:text-[52px] lg:text-[52px] xl:text-[58px] font-heading font-normal tracking-tight text-white leading-[1.08] mb-4 sm:mb-5 text-balance drop-shadow-sm"
            >
              AI-Enabled Service Delivery Marketplace for Rural India.
            </h1>

            {/* Hierarchy Level 3: Supporting Headline & Narrative Paragraph */}
            <div className="max-w-2xl mb-7 sm:mb-8">
              <h2 className="text-[17px] sm:text-[19px] lg:text-[20px] font-heading font-medium text-[#FAF9F5] mb-2 tracking-normal drop-shadow-xs">
                Charting Rural India’s Digital Services Future
              </h2>
              <p className="text-[14.5px] sm:text-[16px] text-white/88 leading-relaxed font-sans text-balance drop-shadow-xs">
                Connecting rural communities with trusted local services, empowering village entrepreneurs, and driving inclusive economic growth through intelligent, voice-first digital infrastructure.
              </p>
            </div>

            {/* Hierarchy Level 4: Action Buttons with Bottom Baseline */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                id="hero-cta-marketplace"
                onClick={onNavigateToMarketplace}
                className="btn-gradient-primary group inline-flex items-center gap-2.5 font-heading font-medium text-[14.5px] sm:text-[15.5px] px-8 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-xl hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFC7]"
              >
                <span>Join the Marketplace</span>
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={13} />
                </div>
              </button>

              <button
                type="button"
                id="hero-cta-enquiry"
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-white/92 hover:bg-white text-[#123E9B] font-heading font-medium text-[14.5px] sm:text-[15.5px] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border border-white/60 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Partner With Us</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Information Card, shared bottom alignment */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-start lg:justify-end self-end"
          >
            <div
              id="hero-floating-card"
              className="relative w-full max-w-sm rounded-[22px] bg-[#FAF9F5]/94 backdrop-blur-md border border-white/75 p-6 sm:p-7 shadow-2xl text-[#12233F] transition-all hover:bg-[#FAF9F5]/98 group"
            >
              {/* Card Header with Category Kicker & Slider Controls */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${currentCard.dotColor}`} />
                  <span className="text-[12.5px] font-heading font-semibold uppercase tracking-wider text-[#667085]">
                    {currentCard.kicker}
                  </span>
                </div>

                {/* Subtle Interactive Carousel Arrows */}
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="p-1 rounded-full hover:bg-black/5 hover:text-black transition-colors"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="p-1 rounded-full hover:bg-black/5 hover:text-black transition-colors"
                    aria-label="Next card"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Dynamic Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard.kicker}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-[17px] sm:text-[18px] font-heading font-semibold text-[#123E9B] leading-snug mb-2">
                    {currentCard.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#667085] leading-relaxed mb-4 font-sans">
                    {currentCard.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCardCta(currentCard.targetId)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-heading font-semibold text-[#123E9B] hover:text-[#1769C2] transition-colors group/link"
                  >
                    <span>{currentCard.ctaText}</span>
                    <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
