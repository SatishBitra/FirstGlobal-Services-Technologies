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
      style={{
        background: 'linear-gradient(115deg, #123E9B 0%, #1769C2 35%, #00AFC7 65%, #00A88A 100%)',
      }}
      className="py-20 sm:py-28 lg:py-32 text-white relative overflow-hidden"
      aria-label="Join the Marketplace"
    >
      {/* Subtle Indian Rangoli & Mandala Geometric Pattern (low opacity 0.05) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="indian-rangoli-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Concentric Rangoli Petals and Radial Nodes */}
              <circle cx="40" cy="40" r="2" fill="#FFFFFF" />
              <circle cx="40" cy="40" r="16" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="2 3" />
              <circle cx="40" cy="40" r="28" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              {/* Fine radial lines */}
              <path d="M 40 12 L 40 68 M 12 40 L 68 40" stroke="#FFFFFF" strokeWidth="0.5" />
              <path d="M 20 20 L 60 60 M 20 60 L 60 20" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="1 3" />
              {/* Corner connector nodes */}
              <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
              <circle cx="80" cy="0" r="1.5" fill="#FFFFFF" />
              <circle cx="0" cy="80" r="1.5" fill="#FFFFFF" />
              <circle cx="80" cy="80" r="1.5" fill="#FFFFFF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#indian-rangoli-grid)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[12.5px] font-heading font-medium tracking-wide mb-6">
              <Store size={14} className="text-[#78D83E]" />
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
            <p className="text-[16px] sm:text-[18px] md:text-[19px] text-white/95 leading-relaxed font-sans max-w-2xl mb-10 text-balance">
              Connecting rural households with verified local service providers, fostering village entrepreneurship, and bringing structured service delivery to every Indian district.
            </p>
          </ScrollReveal>

          {/* Key Value Badges with Green Checkmarks */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-[13px] sm:text-[14px] font-heading font-medium">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 border border-white/20 backdrop-blur-xs text-white">
                <CheckCircle size={15} className="text-[#78D83E]" />
                Direct Fair Pricing
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 border border-white/20 backdrop-blur-xs text-white">
                <CheckCircle size={15} className="text-[#78D83E]" />
                Verified Local VLEs
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 border border-white/20 backdrop-blur-xs text-white">
                <CheckCircle size={15} className="text-[#78D83E]" />
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
              className="group inline-flex items-center gap-2.5 bg-white hover:bg-[#FAF9F5] text-[#123E9B] font-heading font-medium text-[15px] sm:text-[16px] px-9 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              <span>Participate in the Marketplace</span>
              <div className="w-6 h-6 rounded-full btn-gradient-primary text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={13} />
              </div>
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
