import React from 'react';
import { ArrowRight, Handshake, Building, Users2, ShieldCheck } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface PartnerSectionProps {
  onOpenEnquiry: () => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="partner"
      className="py-20 sm:py-28 lg:py-32 bg-[#fcf9f2] border-t border-[#e6eaee] relative overflow-hidden"
      aria-label="Partner With Us"
    >
      {/* Background jali pattern */}
      <div className="absolute inset-0 bg-jali-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#e6eaee] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Supplied Partner With Us Copy & CTA (PRD Section 23) with Text Reveal */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <ScrollReveal direction="up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102a56]/5 text-[#102a56] text-[12px] font-heading font-semibold uppercase tracking-wider mb-5">
                  <Handshake size={14} className="text-[#e97824]" />
                  <span>Collaborative Ecosystem</span>
                </div>
              </ScrollReveal>

              <TextReveal
                as="h2"
                text="Partner With Us"
                className="text-[32px] sm:text-[44px] md:text-[50px] font-heading font-normal text-[#102a56] tracking-tight leading-[1.12] mb-6"
              />

              <ScrollReveal direction="up" delay={0.15}>
                <p className="text-[16px] sm:text-[17.5px] text-[#6f6a61] leading-relaxed mb-6 font-sans">
                  FirstGlobal collaborates with institutions, corporate partners, development agencies, and social enterprises committed to transforming rural livelihoods.
                </p>

                <p className="text-[14.5px] sm:text-[15.5px] text-[#6f6a61] leading-relaxed mb-8 font-sans">
                  Together, we deploy scalable digital infrastructure, empower grassroots Village Level Entrepreneurs (VLEs), and bring structured household services to 800+ million citizens across 600,000+ villages.
                </p>
              </ScrollReveal>

              {/* Partnership Types Grid with Scroll Reveal */}
              <ScrollReveal direction="up" delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-[13.5px] font-heading font-medium text-[#102a56]">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fcf9f2] border border-[#e6eaee]">
                    <Building size={16} className="text-[#1557c0]" />
                    <span>Institutional &amp; Banking Partners</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fcf9f2] border border-[#e6eaee]">
                    <Users2 size={16} className="text-[#e97824]" />
                    <span>Service Provider Networks</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fcf9f2] border border-[#e6eaee]">
                    <ShieldCheck size={16} className="text-[#078f83]" />
                    <span>DPI &amp; Open Protocol Adopters</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fcf9f2] border border-[#e6eaee]">
                    <Handshake size={16} className="text-[#4e9f45]" />
                    <span>Social Impact Collaborators</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* CTA Button: Fully rounded pill per PRD */}
            <ScrollReveal direction="up" delay={0.35}>
              <div>
                <button
                  type="button"
                  id="partner-cta-contact"
                  onClick={onOpenEnquiry}
                  className="group inline-flex items-center gap-2.5 bg-[#102a56] hover:bg-[#17202b] text-white font-heading font-medium text-[14.5px] sm:text-[15.5px] px-8 py-3.5 sm:px-9 sm:py-4 rounded-full transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span>Get in Touch to Partner</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Partner With Us Visual (badges & overlays removed per user request) */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-[#102a56] overflow-hidden">
            <img
              src="/pwu.png"
              onError={(e) => {
                e.currentTarget.src = '/d805682b-eecb-467d-9106-827f2ddf743a.png';
              }}
              alt="FirstGlobal institutional partnerships and collaborative rural delivery"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center brightness-[0.9] contrast-[1.05]"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
