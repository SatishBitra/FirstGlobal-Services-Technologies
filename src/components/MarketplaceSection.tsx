import React from 'react';
import { ArrowRight, Store, CheckCircle } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface MarketplaceSectionProps {
  onOpenEnquiry: () => void;
  onNavigateToRise?: () => void;
}

export const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({
  onOpenEnquiry,
  onNavigateToRise,
}) => {
  return (
    <section
      id="marketplace"
      className="py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#e97824] via-[#b9573d] to-[#6e2635] text-white relative overflow-hidden"
      aria-label="Join the Marketplace"
    >
      {/* Visual transformation: Traditional pattern transforming into digital nodes (PRD Section 18 & 52) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heritage-nodes" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#ffffff" />
              <path d="M 0 30 Q 15 15, 30 30 T 60 30" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.6" />
              <path d="M 30 0 Q 45 15, 30 30 T 30 60" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heritage-nodes)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[12.5px] font-heading font-semibold uppercase tracking-wider mb-6">
              <Store size={14} className="text-amber-200" />
              <span>Digital Services Marketplace</span>
            </div>
          </ScrollReveal>

          {/* Large Headline with Text Reveal */}
          <TextReveal
            as="h2"
            text="Join the Marketplace"
            className="text-[34px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-heading font-normal tracking-tight text-white leading-[1.08] mb-6"
          />

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[16px] sm:text-[18px] md:text-[19px] text-white/90 leading-relaxed font-sans max-w-2xl mb-10 text-balance">
              Connecting rural households with verified local service providers, fostering village entrepreneurship, and bringing structured service delivery to every Indian district.
            </p>
          </ScrollReveal>

          {/* Key Value Badges with Scroll Reveal */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-[13px] sm:text-[14px] font-heading font-medium">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 backdrop-blur-xs">
                <CheckCircle size={15} className="text-amber-300" />
                Direct Fair Pricing
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 backdrop-blur-xs">
                <CheckCircle size={15} className="text-amber-300" />
                Verified Local VLEs
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 backdrop-blur-xs">
                <CheckCircle size={15} className="text-amber-300" />
                Speech-First Vernacular
              </span>
            </div>
          </ScrollReveal>

          {/* Primary Action Button */}
          <ScrollReveal direction="up" delay={0.35}>
            <button
              type="button"
              id="marketplace-participate-cta"
              onClick={onOpenEnquiry}
              className="group inline-flex items-center gap-2.5 bg-white hover:bg-[#fcf9f2] text-[#102a56] font-heading font-medium text-[15px] sm:text-[16px] px-9 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              <span>Participate in the Marketplace</span>
              <div className="w-6 h-6 rounded-full bg-[#102a56] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={13} />
              </div>
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
