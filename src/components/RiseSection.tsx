import React, { useState } from 'react';
import { ArrowUpRight, Home, Wrench, Building2, Network, ArrowRight } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface RiseSectionProps {
  onOpenEnquiry?: () => void;
}

export const RiseSection: React.FC<RiseSectionProps> = ({ onOpenEnquiry }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const risePillars = [
    {
      id: 1,
      title: 'Households',
      tagline: 'Care & Essential Services',
      description:
        'Bringing reliable home maintenance, solar micro-grid support, clean water, and farm equipment care directly to village households.',
      icon: Home,
      image: '/hh.jpg',
      badge: 'Direct Beneficiaries',
      borderColor: 'hover:border-[#F5A623]',
      accentBg: 'bg-[#F5A623]',
      accentColor: 'group-hover:text-[#F5A623]',
    },
    {
      id: 2,
      title: 'Local Service Providers',
      tagline: 'Livelihoods & Micro-Enterprise',
      description:
        'Empowering local Village Level Entrepreneurs (VLEs) and skilled rural youth with digital job dispatch, training, and steady income.',
      icon: Wrench,
      image: '/lsp.jpg',
      badge: 'Empowered VLEs',
      borderColor: 'hover:border-[#1769C2]',
      accentBg: 'bg-[#1769C2]',
      accentColor: 'group-hover:text-[#1769C2]',
    },
    {
      id: 3,
      title: 'Institutions',
      tagline: 'Panchayats & Cooperatives',
      description:
        'Partnering with Gram Panchayats, self-help groups (SHGs), rural banks, and cooperative societies for transparent governance.',
      icon: Building2,
      image: '/ri.jpg',
      badge: 'Institutional Trust',
      borderColor: 'hover:border-[#00A88A]',
      accentBg: 'bg-[#00A88A]',
      accentColor: 'group-hover:text-[#00A88A]',
    },
    {
      id: 4,
      title: 'Enabling Partners',
      tagline: 'Digital Public Infrastructure',
      description:
        'Integrating with India Stack, ONDC protocols, technology platforms, and social impact investors to scale across 600,000+ villages.',
      icon: Network,
      image: '/patnerships.jpg',
      badge: 'Open Ecosystem',
      borderColor: 'hover:border-[#39C85A]',
      accentBg: 'bg-[#39C85A]',
      accentColor: 'group-hover:text-[#39C85A]',
    },
  ];

  return (
    <section id="rise" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] relative overflow-hidden" aria-label="RISE Initiative">
      {/* Background Indian weave texture */}
      <div className="absolute inset-0 bg-indian-weave opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header with Green-Teal Tone */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A88A]/10 text-[#00A88A] text-[12px] font-heading font-medium tracking-wide mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00A88A]" />
              <span>FirstGlobal Innovation Initiative</span>
            </div>
          </ScrollReveal>

          <TextReveal
            as="h2"
            text="RISE®"
            className="text-[34px] sm:text-[46px] md:text-[54px] font-heading font-normal text-[#123E9B] tracking-tight leading-[1.1] mb-5"
          />

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[19px] sm:text-[22px] font-heading font-medium text-[#00A88A] leading-snug mb-4">
              Organised, reliable rural service delivery
            </p>

            <p className="text-[15.5px] sm:text-[17px] text-[#667085] leading-relaxed font-sans text-balance">
              RISE® is First-Global’s innovation-led initiative that supports the development of organised, reliable rural service delivery. It brings together households, local service providers, institutions, and enabling partners through practical, enterprise-focused models.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Modular Grid: Smooth Stacked Cards on Mobile, 4-Col Grid on Desktop */}
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:items-stretch">
          {risePillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.id}
                style={{ top: `calc(72px + ${idx * 14}px)` }}
                className="sticky sm:static z-[10] transition-all duration-300"
              >
                <ScrollReveal direction="up" delay={0.08 * (idx + 1)}>
                  <div
                    onMouseEnter={() => setActiveCard(pillar.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`h-full relative rounded-[22px] sm:rounded-[24px] bg-[#FAF9F5] border border-[#DDE5E1] overflow-hidden flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 shadow-[0_8px_24px_rgba(7,27,58,0.06)] sm:shadow-sm hover:shadow-xl hover:-translate-y-1 ${pillar.borderColor} group`}
                  >
                    {/* Top Image Thumbnail */}
                    <div className="relative rounded-[14px] sm:rounded-[16px] overflow-hidden aspect-[16/9] sm:aspect-[16/10] mb-4 sm:mb-5 bg-[#071B3A]/10 shadow-xs">
                      <img
                        src={pillar.image}
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80';
                        }}
                        alt={pillar.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Icon badge & Mobile Pillar Count */}
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-8 h-8 rounded-full ${pillar.accentBg} text-white flex items-center justify-center shadow-xs`}>
                            <Icon size={15} />
                          </div>
                          <span className="sm:hidden text-[11px] font-mono text-[#667085] bg-black/5 px-2.5 py-0.5 rounded-full font-medium">
                            Pillar 0{idx + 1}
                          </span>
                        </div>

                        <h3 className="text-[17px] sm:text-[20px] font-heading font-semibold text-[#123E9B] mb-1.5 leading-snug">
                          {pillar.title}
                        </h3>

                        <p className="text-[13px] sm:text-[14px] text-[#667085] leading-relaxed mb-4 sm:mb-6 font-sans">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Bottom Line Connection to RISE */}
                      <div className="pt-3 sm:pt-4 border-t border-[#DDE5E1] flex items-center justify-between text-[12px] font-heading font-medium text-[#123E9B]">
                        <span className={`${pillar.accentColor} transition-colors`}>{pillar.tagline}</span>
                        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* Central Ecosystem Synergy Bar */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 p-6 rounded-[20px] bg-[#FAF9F5] border border-[#DDE5E1] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#39C85A] animate-pulse" />
              <p className="text-[14px] sm:text-[15px] font-heading font-medium text-[#123E9B]">
                Four pillars connected into one unified sovereign rural platform.
              </p>
            </div>
            {onOpenEnquiry && (
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn-gradient-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-[13.5px] font-heading font-medium"
              >
                <span>Explore RISE® Collaboration</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
