import React from 'react';
import { motion } from 'framer-motion';

export const VisionMission: React.FC = () => {
  return (
    <section
      id="vision-mission"
      className="py-16 md:py-24 bg-[#f8fafc] border-y border-[#e6eaee] overflow-hidden"
      aria-label="Vision and Mission"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Block */}
          <motion.div
            id="vision-block"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between bg-white rounded-[16px] p-6 sm:p-10 border border-[#e6eaee] relative overflow-hidden shadow-sm"
          >
            {/* Top brand accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1557c0] to-[#20b9df]" />

            <div>
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-[11px] sm:text-[12px] font-heading font-medium uppercase tracking-widest text-[#1557c0]">
                  Vision
                </span>
              </div>

              <h3 className="font-heading font-medium text-[20px] sm:text-[26px] md:text-[30px] leading-[1.25] text-[#10243a] mb-3 sm:mb-5">
                Trusted Rural Services Ecosystem
              </h3>

              <p className="text-[14px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#5f6b78]">
                To be the most trusted ecosystem transforming rural service delivery.
              </p>
            </div>

            {/* Card Category Indicator */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-[12px] sm:text-[13px] font-heading font-medium text-[#10243a]/70">
                Foundational Ecosystem
              </span>
            </div>
          </motion.div>

          {/* Mission Statement Block */}
          <motion.div
            id="mission-block"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between bg-white rounded-[16px] p-6 sm:p-10 border border-[#e6eaee] relative overflow-hidden shadow-sm"
          >
            {/* Top brand accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#159b8b] to-[#57b957]" />

            <div>
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-[11px] sm:text-[12px] font-heading font-medium uppercase tracking-widest text-[#159b8b]">
                  Mission Statement
                </span>
              </div>

              <h3 className="font-heading font-medium text-[20px] sm:text-[26px] md:text-[30px] leading-[1.25] text-[#10243a] mb-3 sm:mb-5">
                Connecting Services &amp; Opportunities Digitally
              </h3>

              <p className="text-[14px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#5f6b78]">
                To build technologyenabled, partnership  driven platforms that connect households with reliable local service providers, improve service access, and expand inclusive economic opportunities.
              </p>
            </div>

            {/* Card Category Indicator */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-[12px] sm:text-[13px] font-heading font-medium text-[#10243a]/70">
                Digital &amp; Partnership Platforms
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
