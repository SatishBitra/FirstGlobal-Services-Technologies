import React from 'react';
import { ArrowRight, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

interface PartnerSectionProps {
  onOpenEnquiry: () => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <section
      id="partner"
      className="py-20 md:py-28 bg-white border-b border-[#e6eaee] overflow-hidden"
      aria-label="Partner With FirstGlobal"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#f8fafc] rounded-[20px] border border-[#e6eaee] p-8 sm:p-12 lg:p-16 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-[11px] sm:text-[12px] font-heading font-medium tracking-widest uppercase text-[#1557c0]">
                  Ecosystem Collaboration
                </span>
              </div>

              <h2
                id="partner-heading"
                className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[42px] leading-[1.15] text-[#10243a] mb-4 sm:mb-6"
              >
                Partner With Us
              </h2>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.65] text-[#10243a] mb-3 sm:mb-4">
                FirstGlobal welcomes expressions of interest from institutions, organizations, technology providers, ecosystem partners, community networks, and emerging startups aligned with the vision of strengthening rural service delivery.
              </p>

              <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-[1.65] text-[#5f6b78]">
                Interested institutions and enterprises may share a brief note outlining their area of interest, capabilities, and potential collaboration approach.
              </p>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full lg:w-auto flex flex-col items-stretch lg:items-end gap-2.5 sm:gap-3">
                <button
                  type="button"
                  id="partner-get-in-touch-btn"
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#1557c0] hover:bg-[#10243a] text-white text-[13px] sm:text-[15px] font-heading font-medium px-6 py-3.5 sm:px-8 sm:py-4 rounded-[10px] sm:rounded-[12px] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] focus-visible:ring-offset-2"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={17} />
                </button>
                <span className="text-[11px] sm:text-[13px] text-[#5f6b78] text-center lg:text-right">
                  Official routing: contact@first-global.in
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
