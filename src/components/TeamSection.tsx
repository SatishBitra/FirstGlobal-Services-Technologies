import React from 'react';
import { ArrowRight, Layers, Cpu, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  onOpenApply: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenApply }) => {
  const focusAreas = [
    {
      title: 'OPERATIONS',
      description: 'Platform delivery, local network development & rural field execution',
      icon: Layers,
      color: '#1557c0',
      tagline: 'Field Operations & Network Scale',
    },
    {
      title: 'TECHNOLOGY',
      description: 'Scalable digital marketplace architecture, product & engineering',
      icon: Cpu,
      color: '#20b9df',
      tagline: 'Platform Architecture & Engineering',
    },
    {
      title: 'FINANCE',
      description: 'Enterprise sustainability, institutional models & financial governance',
      icon: Landmark,
      color: '#159b8b',
      tagline: 'Enterprise Governance & Models',
    },
  ];

  return (
    <section
      id="team"
      className="py-20 md:py-28 bg-[#f8fafc] border-b border-[#e6eaee] overflow-hidden"
      aria-label="Join Our Team at FirstGlobal"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[880px] mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-1.5 w-5 sm:w-6 bg-[#159b8b] rounded-full inline-block" />
            <span className="text-[11px] sm:text-[13px] font-heading font-medium tracking-widest uppercase text-[#5f6b78]">
              CAREERS &amp; LEADERSHIP
            </span>
          </div>

          <h2
            id="team-heading"
            className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[44px] text-[#10243a] tracking-tight mb-4 sm:mb-6"
          >
            JOIN OUR TEAM
          </h2>

          <p className="text-[15px] sm:text-[18px] md:text-[20px] leading-[1.6] text-[#10243a] mb-4 sm:mb-6">
            FirstGlobal is building a multidisciplinary team to advance the RISE® initiative and support the development of organised, reliable rural service delivery.
          </p>

          <p className="text-[13px] sm:text-[15px] md:text-[16px] font-heading font-medium text-[#5f6b78] uppercase tracking-wider mb-4 sm:mb-5">
            At this stage, we are exploring leadership and strategic roles in areas such as:
          </p>
        </motion.div>

        {/* Focus Areas Badges/Grid: OPERATIONS | TECHNOLOGY | FINANCE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                id={`role-${area.title.toLowerCase()}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-[14px] p-5 sm:p-7 border border-[#e6eaee] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] flex items-center justify-center mb-3.5 sm:mb-4 bg-[#f8fafc] border border-[#e6eaee]"
                    style={{ color: area.color }}
                  >
                    <Icon size={19} strokeWidth={1.8} className="sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-[17px] sm:text-[20px] tracking-wide text-[#10243a] mb-1.5 sm:mb-2">
                    {area.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#5f6b78] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] sm:text-[12px] font-heading text-[#1557c0]">
                  <span className="font-medium">{area.tagline}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1557c0]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Invitation & Apply Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[16px] sm:rounded-[18px] p-6 sm:p-8 md:p-10 border border-[#e6eaee] flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 shadow-sm"
        >
          <div className="max-w-[760px]">
            <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-[1.65] text-[#10243a]">
              Experienced professionals and missiondriven individuals who can contribute to building scalable platforms, partnerships, and rural service networks may share their profile or résumé along with a brief note outlining their area of interest, relevant experience, and potential contribution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0">
            <button
              type="button"
              id="team-apply-now-btn"
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#10243a] hover:bg-[#1557c0] text-white text-[13px] sm:text-[15px] font-heading font-medium px-6 py-3.5 sm:px-8 sm:py-4 rounded-[10px] sm:rounded-[12px] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              <span>APPLY NOW</span>
              <ArrowRight size={17} />
            </button>
            <span className="text-[11px] sm:text-[12px] text-[#5f6b78] text-left lg:text-right">
              Upload résumé/profile (PDF, DOC, DOCX)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
