import React from 'react';
import { ArrowRight, Compass, Target } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface VisionMissionProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ onNavigateToSection }) => {
  const handleScrollTo = (id: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const elPos = el.getBoundingClientRect().top;
      const targetPos = elPos + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="vision-mission"
      className="py-20 sm:py-24 lg:py-32 bg-[#FAF9F5] border-t border-[#DDE5E1] relative overflow-hidden"
      aria-label="Vision and Mission"
    >
      {/* Background Indian geometric dot texture */}
      <div className="absolute inset-0 bg-indian-texture opacity-35 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header with Scroll Text Reveal */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00A88A]" />
              <span className="text-[12.5px] font-heading font-semibold uppercase tracking-wider text-[#00A88A]">
                Purpose &amp; Foundations
              </span>
            </div>
          </ScrollReveal>

          <TextReveal
            as="h2"
            text="Guided by Purpose. Rooted in Trust."
            className="text-[32px] sm:text-[42px] md:text-[48px] font-heading font-normal text-[#123E9B] tracking-tight leading-[1.12]"
            highlightWords={['Trust.', 'Purpose.']}
            highlightClass="text-[#1769C2]"
          />
        </div>

        {/* Vision & Mission Cards Stacked Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* 1. Vision Card (Light Editorial Canvas) */}
          <ScrollReveal direction="up" delay={0.1} className="h-full">
            <div className="h-full rounded-[28px] sm:rounded-[32px] bg-white border border-[#DDE5E1] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123E9B]/5 text-[#123E9B] text-[12px] font-heading font-semibold uppercase tracking-wider">
                    <Compass size={14} className="text-[#00A88A]" />
                    <span>Our Vision</span>
                  </div>
                  <span className="text-[12px] font-mono text-[#667085] uppercase tracking-widest">
                    01 / Foundations
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[26px] sm:text-[32px] font-heading font-normal text-[#123E9B] leading-[1.18] mb-5 tracking-tight">
                  Trusted Rural Services Ecosystem
                </h3>

                {/* Primary Statement */}
                <p className="text-[16.5px] sm:text-[18px] text-[#12233F] font-heading font-medium leading-relaxed mb-6 font-sans">
                  To be the most trusted ecosystem transforming rural service delivery across India.
                </p>

                <p className="text-[14px] sm:text-[15px] text-[#667085] leading-relaxed mb-8 font-sans">
                  Bridging the last-mile divide by combining community empathy with sovereign intelligence, ensuring dignified services reach every doorstep.
                </p>

              </div>

              {/* Bottom CTA */}
              <div>
                <button
                  type="button"
                  onClick={() => handleScrollTo('marketplace')}
                  className="btn-gradient-primary group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13.5px] font-heading font-medium"
                >
                  <span>Explore the Marketplace</span>
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Mission Card (Dark Canvas #071B3A with radial teal glow & Green CTA) */}
          <ScrollReveal direction="up" delay={0.2} className="h-full">
            <div
              style={{
                background: 'radial-gradient(circle at 90% 10%, rgba(0,175,199,0.22), transparent 38%), #071B3A',
              }}
              className="h-full rounded-[28px] sm:rounded-[32px] text-white border border-[#0B2B5C] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FAF9F5] text-[12px] font-heading font-semibold uppercase tracking-wider border border-white/15">
                    <Target size={14} className="text-[#00AFC7]" />
                    <span>Our Mission</span>
                  </div>
                  <span className="text-[12px] font-mono text-white/50 uppercase tracking-widest">
                    02 / Delivery
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[26px] sm:text-[32px] font-heading font-normal text-white leading-[1.18] mb-5 tracking-tight">
                  Connecting Services &amp; Opportunities Digitally
                </h3>

                {/* Primary Statement */}
                <p className="text-[16.5px] sm:text-[18px] text-white font-heading font-medium leading-relaxed mb-6 font-sans">
                  To build technology-enabled, partnership-driven platforms that connect households with reliable local service providers.
                </p>

                <p className="text-[14px] sm:text-[15px] text-white/80 leading-relaxed mb-8 font-sans">
                  Improving service access, certifying local technicians, and expanding inclusive economic opportunities across 600,000+ villages.
                </p>

              </div>

              {/* Bottom CTA with Green #39C85A */}
              <div>
                <button
                  type="button"
                  onClick={() => handleScrollTo('rise')}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#39C85A] hover:bg-[#32b551] text-[#071B3A] text-[13.5px] font-heading font-semibold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Discover RISE® Platform</span>
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
