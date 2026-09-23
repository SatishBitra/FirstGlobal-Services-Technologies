import React from 'react';
import { motion } from 'framer-motion';

export const Introduction: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-t border-[#e6eaee] bg-white overflow-hidden"
      aria-label="About FirstGlobal Services"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline"
        >
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-5 sm:w-6 bg-[#1557c0] rounded-full inline-block" />
              <span className="text-[11px] sm:text-[13px] font-heading font-medium uppercase tracking-wider text-[#5f6b78]">
                FirstGlobal Services
              </span>
            </div>
          </div>

          {/* Large Editorial Statement */}
          <div className="lg:col-span-9">
            <p
              id="intro-text"
              className="text-[16px] sm:text-[19px] md:text-[22px] lg:text-[24px] font-normal leading-[1.65] sm:leading-[1.55] text-[#10243a]"
            >
              FirstGlobal Services is a technologyenabled social enterprise focused on transforming rural service delivery. We work to connect communities with trusted local services, strengthen local enterprise, and expand inclusive economic opportunities through scalable digital platforms and meaningful partnerships.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
