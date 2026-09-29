import React from 'react';
import { ArrowUpRight, Cpu, Layers, BarChart3, Briefcase, ArrowRight } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface TeamSectionProps {
  onOpenApply: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenApply }) => {
  const departments = [
    {
      id: 'operations',
      title: 'OPERATIONS',
      subtitle: 'Field Operations & VLE Growth',
      description:
        'Lead rural partner onboarding, community service delivery networks, district coordinators, and grassroots entrepreneur enablement.',
      icon: Layers,
      visualType: 'community',
      accentColor: 'text-[#00A88A]',
      cardBg: 'bg-[#F8F4E8]',
      cardBorder: 'border-[#EBE2CF]',
      ctaHoverColor: 'group-hover:text-[#00A88A]',
    },
    {
      id: 'technology',
      title: 'TECHNOLOGY',
      subtitle: 'Speech AI & Open Protocols',
      description:
        'Engineer sovereign vernacular voice models, ONDC Beckn protocol interfaces, mobile service dispatch engines, and DPI pipelines.',
      icon: Cpu,
      visualType: 'digital',
      accentColor: 'text-[#1769C2]',
      cardBg: 'bg-[#EAF3FF]',
      cardBorder: 'border-[#CFE2FE]',
      ctaHoverColor: 'group-hover:text-[#1769C2]',
    },
    {
      id: 'finance',
      title: 'FINANCE',
      subtitle: 'Enterprise Finance & Governance',
      description:
        'Structure rural micro-credit frameworks, institutional partnerships, treasury operations, and sustainable social impact finance.',
      icon: BarChart3,
      visualType: 'geometric',
      accentColor: 'text-[#39C85A]',
      cardBg: 'bg-[#E8F7F1]',
      cardBorder: 'border-[#C9ECDF]',
      ctaHoverColor: 'group-hover:text-[#39C85A]',
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] relative overflow-hidden" aria-label="Join Our Team">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header with Text Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A88A]/10 text-[#00A88A] text-[12px] font-heading font-medium tracking-wide mb-4">
                <Briefcase size={14} className="text-[#00A88A]" />
                <span>Career Opportunities</span>
              </div>
            </ScrollReveal>

            <TextReveal
              as="h2"
              text="Join Our Team"
              className="text-[32px] sm:text-[44px] md:text-[50px] font-heading font-normal text-[#123E9B] tracking-tight leading-[1.12] mb-4"
            />

            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-[15.5px] sm:text-[17px] text-[#667085] leading-relaxed font-sans">
                Help us chart the future of rural services in India. We are looking for mission-driven leaders across operations, technology, and finance.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <button
                type="button"
                id="team-cta-apply-main"
                onClick={onOpenApply}
                className="btn-gradient-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] font-heading font-medium shadow-sm"
              >
                <span>Explore All Open Roles</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Three Large Department Cards with specified light backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {departments.map((dept, index) => {
            const Icon = dept.icon;

            return (
              <ScrollReveal key={dept.id} direction="up" delay={0.1 * (index + 1)}>
                <div
                  onClick={onOpenApply}
                  className={`h-full relative rounded-[24px] sm:rounded-[28px] ${dept.cardBg} border ${dept.cardBorder} p-7 sm:p-9 flex flex-col justify-between cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5`}
                >
                  <div>
                    {/* Top Bar with Number & Arrow Button */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[12px] font-mono text-[#667085]">
                        0{index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white border border-[#DDE5E1] text-[#123E9B] flex items-center justify-center transition-all duration-200 group-hover:bg-[#123E9B] group-hover:text-white group-hover:scale-105 shadow-xs">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#DDE5E1] flex items-center justify-center mb-6 shadow-xs">
                      <Icon size={22} className={dept.accentColor} />
                    </div>

                    <h3 className="text-[22px] sm:text-[24px] font-heading font-semibold text-[#123E9B] tracking-tight mb-2">
                      {dept.title}
                    </h3>

                    <p className="text-[13.5px] font-heading font-medium text-[#667085] mb-4">
                      {dept.subtitle}
                    </p>

                    <p className="text-[13.5px] sm:text-[14px] text-[#667085] leading-relaxed font-sans mb-8">
                      {dept.description}
                    </p>
                  </div>

                  {/* Bottom CTA text */}
                  <div className={`pt-4 border-t border-black/5 flex items-center justify-between text-[13px] font-heading font-semibold text-[#123E9B] ${dept.ctaHoverColor} transition-colors`}>
                    <span>Apply for {dept.title}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
