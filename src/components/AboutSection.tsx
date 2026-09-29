import React from 'react';
import { ArrowUpRight, ArrowRight, Globe } from 'lucide-react';
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
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background subtle Indian weave texture */}
      <div className="absolute inset-0 bg-indian-weave opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Editorial Two-Column Section with Text Reveal Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 sm:mb-18">
          {/* Left Column: Subtle Section Marker in Teal */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00A88A]" />
                <span className="text-[12.5px] sm:text-[13px] font-heading font-semibold uppercase tracking-wider text-[#00A88A]">
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
              className="text-[26px] sm:text-[34px] md:text-[40px] font-heading font-normal leading-[1.22] text-[#123E9B] tracking-tight mb-5 text-balance"
              highlightWords={['social', 'enterprise', 'transforming']}
              highlightClass="text-[#1769C2]"
            />

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[15.5px] sm:text-[17px] text-[#667085] leading-relaxed mb-6 font-sans text-balance">
                We work to connect communities with trusted local services, strengthen local enterprise, and expand inclusive economic opportunities through scalable digital platforms and meaningful partnerships.
              </p>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn-gradient-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-[13.5px] font-heading font-medium"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Modular Content 4-Card Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Rural Indian Community & Households Concept Image */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="group relative isolate overflow-hidden rounded-[20px] aspect-[4/3] min-h-[270px] sm:aspect-auto sm:min-h-[300px] lg:min-h-[360px] shadow-sm bg-[#071B3A]">
              <div className="absolute inset-0 bg-[#071B3A]/20" />
              <img
                src="/rc.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80';
                }}
                alt="Rural Indian village households and community receiving trusted essential services"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.05] brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 lg:p-5">
                <div className="text-white">
                  <span className="block text-[10.5px] sm:text-[11px] font-heading uppercase tracking-[0.18em] text-[#00AFC7] font-semibold">
                    Rural Communities
                  </span>
                  <p className="mt-2 text-[15px] sm:text-[16px] font-heading font-medium leading-snug tracking-tight">
                    Empowering Village Households &amp; Families
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/75 line-clamp-1 font-sans">
                    Connecting 800M+ citizens across 600K+ villages.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Feature / Stat Card (Warm white surface with circular arrow) */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="h-full relative rounded-[20px] bg-[#FAF9F5] border border-[#DDE5E1] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[34px] sm:text-[40px] font-heading font-normal text-[#123E9B] leading-none mb-1 tabular-nums">
                    800M+
                  </p>
                  <p className="text-[14px] font-heading font-medium text-[#123E9B]">
                    Target Citizen Population
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('marketplace')}
                  className="btn-gradient-primary w-9 h-9 rounded-full text-white flex items-center justify-center shadow-xs"
                  aria-label="View target population detail"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#667085] leading-relaxed mt-4 font-sans">
                Building speech-first, multilingual digital access across 22 official languages to ensure inclusive, last-mile reach.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Local Services Delivery & Village Level Entrepreneur (VLE) Concept Image */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="group relative isolate overflow-hidden rounded-[20px] aspect-[4/3] min-h-[270px] sm:aspect-auto sm:min-h-[300px] lg:min-h-[360px] shadow-sm bg-[#071B3A]">
              <div className="absolute inset-0 bg-[#071B3A]/20" />
              <img
                src="/ll.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80';
                }}
                alt="Rural technician and Village Level Entrepreneur delivering solar and household services"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.05] brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 lg:p-5">
                <div className="text-white">
                  <span className="block text-[10.5px] sm:text-[11px] font-heading uppercase tracking-[0.18em] text-[#39C85A] font-semibold">
                    Local Livelihoods
                  </span>
                  <p className="mt-2 text-[15px] sm:text-[16px] font-heading font-medium leading-snug tracking-tight">
                    Verified Village Level Entrepreneurs (VLEs)
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/75 line-clamp-1 font-sans">
                    Local technicians providing solar, water &amp; home care.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: New Green/Teal Statistic Card */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="h-full relative overflow-hidden rounded-[20px] stat-card-highlight p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow group">
              {/* Background Globe Outline Overlay in Light Blue */}
              <div
                className="absolute -bottom-6 -right-6 pointer-events-none select-none z-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 opacity-35"
                aria-hidden="true"
              >
                <Globe
                  size={124}
                  strokeWidth={1.25}
                  className="text-[#BAE6FD]"
                />
              </div>

              <div className="relative z-10 flex items-start justify-between">
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
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 shadow-xs"
                  aria-label="View ecosystem detail"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <p className="relative z-10 text-[13px] sm:text-[13.5px] text-white/95 leading-relaxed mt-4 font-sans">
                Uniting households, service providers, and institutions through the RISE® initiative for reliable rural service delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
