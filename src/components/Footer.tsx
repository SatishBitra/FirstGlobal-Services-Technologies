import React from 'react';
import { Logo } from './Logo.tsx';
import { Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onOpenEnquiry: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEnquiry,
  onNavigateToSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#10243a] text-white pt-16 pb-12 border-t border-[#1e3a5a] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#224060]"
        >
          {/* Brand & Entity Details */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* White-surface wrapper for clean brand presentation */}
              <div className="inline-block bg-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-[14px] mb-6 shadow-sm">
                <Logo variant="compact" size="lg" />
              </div>

              <h3 className="font-heading font-medium text-[16px] text-white/90 mb-2">
                FirstGlobal Services &amp; Technologies Private Limited
              </h3>
              <p className="text-[14px] text-white/60 max-w-[420px] leading-relaxed">
                AI Enabled Service Delivery Marketplace for Rural India. Charting Rural India’s Digital Services Future.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2.5 text-[14px] text-white/80">
              <Mail size={16} className="text-[#20b9df]" />
              <a
                href="mailto:contact@first-global.in"
                className="hover:text-[#20b9df] transition-colors focus:outline-none focus:underline"
              >
                contact@first-global.in
              </a>
            </div>
          </div>

          {/* Navigation Items (strictly matching supplied content) */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between">
            <div className="flex flex-col md:items-end space-y-3">
              <span className="text-[12px] font-heading font-medium uppercase tracking-wider text-white/40 mb-1">
                Navigation
              </span>

              <button
                type="button"
                id="footer-nav-home"
                onClick={() => onNavigateToSection('home')}
                className="text-[15px] font-heading font-normal text-white/80 hover:text-white transition-colors text-left md:text-right"
              >
                HOME
              </button>

              <button
                type="button"
                id="footer-nav-marketplace"
                onClick={() => onNavigateToSection('marketplace')}
                className="text-[15px] font-heading font-normal text-white/80 hover:text-white transition-colors text-left md:text-right"
              >
                JOIN THE MARKETPLACE
              </button>

              <button
                type="button"
                id="footer-nav-team"
                onClick={() => onNavigateToSection('team')}
                className="text-[15px] font-heading font-normal text-white/80 hover:text-white transition-colors text-left md:text-right"
              >
                JOIN OUR TEAM
              </button>

              <button
                type="button"
                id="footer-nav-touch"
                onClick={onOpenEnquiry}
                className="text-[15px] font-heading font-medium text-[#20b9df] hover:text-white transition-colors text-left md:text-right mt-1"
              >
                GET IN TOUCH →
              </button>
            </div>

            {/* Back to top button */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                id="back-to-top-btn"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[13px] font-heading font-normal text-white/50 hover:text-white transition-colors p-1"
                aria-label="Back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-white/50 gap-4">
          <p>© {new Date().getFullYear()} FirstGlobal Services &amp; Technologies Private Limited. All rights reserved.</p>
          <p className="text-white/40 text-center sm:text-right">
            Official communications: contact@first-global.in
          </p>
        </div>
      </div>
    </footer>
  );
};
