import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenEnquiry,
  onNavigateToSection,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#ffffff] relative overflow-hidden">
      {/* Background Indian weave texture */}
      <div className="absolute inset-0 bg-weave-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Editorial Two-Column Section (PRD Section 12) with Text Reveal Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 sm:mb-18">
          {/* Left Column: Subtle Section Marker */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#e97824]" />
                <span className="text-[12.5px] sm:text-[13px] font-heading font-semibold uppercase tracking-wider text-[#6f6a61]">
                  Who We Are at FirstGlobal
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Large Statement with Text Reveal & Supporting Explanation */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <TextReveal
              as="h2"
              text="FirstGlobal Services is a technology-enabled social enterprise focused on transforming rural service delivery."
              className="text-[26px] sm:text-[34px] md:text-[40px] font-heading font-normal leading-[1.22] text-[#102a56] tracking-tight mb-5 text-balance"
              highlightWords={['social', 'enterprise', 'transforming']}
              highlightClass="text-[#102a56]"
            />

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[15.5px] sm:text-[17px] text-[#6f6a61] leading-relaxed mb-6 font-sans text-balance">
                We work to connect communities with trusted local services, strengthen local enterprise, and expand inclusive economic opportunities through scalable digital platforms and meaningful partnerships.
              </p>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-transparent hover:bg-black/5 text-[#102a56] border border-[#102a56]/40 text-[13.5px] font-heading font-medium transition-all active:scale-[0.98]"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Modular Content 4-Card Row with Scroll Reveal effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Rural Indian Community & Households Concept Image */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-sm group bg-[#102a56]">
              <img
                src="/rc.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80';
                }}
                alt="Rural Indian village households and community receiving trusted essential services"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.05] transition-transform duration-700 ease-out brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-heading uppercase tracking-wider text-amber-300 font-semibold">
                  Rural Communities
                </span>
                <p className="text-[15px] sm:text-[16px] font-heading font-medium leading-snug mt-0.5">
                  Empowering Village Households &amp; Families
                </p>
                <p className="text-[12px] text-white/80 line-clamp-1 mt-1">
                  Connecting 800M+ citizens across 600K+ villages.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Feature / Stat Card (White surface with circular arrow) */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="h-full min-h-[220px] relative rounded-[20px] bg-[#fcf9f2] border border-[#e6eaee] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[34px] sm:text-[40px] font-heading font-normal text-[#102a56] leading-none mb-1 tabular-nums">
                    800M+
                  </p>
                  <p className="text-[14px] font-heading font-medium text-[#102a56]">
                    Target Citizen Population
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('marketplace')}
                  className="w-9 h-9 rounded-full bg-[#102a56] text-white flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 shadow-xs"
                  aria-label="View target population detail"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#6f6a61] leading-relaxed mt-4">
                Building speech-first, multilingual digital access across 22 official languages to ensure inclusive, last-mile reach.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Local Services Delivery & Village Level Entrepreneur (VLE) Concept Image */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-sm group bg-[#102a56]">
              <img
                src="/ll.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80';
                }}
                alt="Rural technician and Village Level Entrepreneur delivering solar and household services"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.05] transition-transform duration-700 ease-out brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-heading uppercase tracking-wider text-emerald-300 font-semibold">
                  Local Livelihoods
                </span>
                <p className="text-[15px] sm:text-[16px] font-heading font-medium leading-snug mt-0.5">
                  Verified Village Level Entrepreneurs (VLEs)
                </p>
                <p className="text-[12px] text-white/80 line-clamp-1 mt-1">
                  Local technicians providing solar, water &amp; home care.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Strong Brand Color Card (PRD Section 3-G: Saffron / Turmeric brand accent) */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="h-full min-h-[220px] relative rounded-[20px] bg-gradient-to-br from-[#e97824] via-[#ea8335] to-[#d66d1e] text-white p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[34px] sm:text-[40px] font-heading font-normal text-white leading-none mb-1 tabular-nums">
                    600K+
                  </p>
                  <p className="text-[14px] font-heading font-medium text-white/95">
                    Villages Connected Ecosystem
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('rise')}
                  className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/35 text-white flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 shadow-xs"
                  aria-label="View ecosystem detail"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-white/90 leading-relaxed mt-4">
                Uniting households, service providers, and institutions through the RISE® initiative for reliable rural service delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
