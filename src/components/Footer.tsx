import React from 'react';
import { Logo } from './Logo.tsx';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

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
      style={{
        background: 'linear-gradient(110deg, #071B3A 0%, #0B2B5C 60%, #073F50 100%)',
      }}
      className="text-white pt-16 sm:pt-20 pb-12 border-t border-[#0B2B5C] relative overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Subtle Indian Glyph / Dot Texture (3-4% opacity) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FAF9F5 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/15">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <img
                  src="/FIRST-global_white.png"
                  onError={(e) => {
                    e.currentTarget.src = '/image-84.png';
                  }}
                  alt="First-Global Services & Technologies"
                  className="h-7 sm:h-8 md:h-8.5 lg:h-9 w-auto object-contain select-none"
                />
              </div>

              <p className="text-[14.5px] text-[rgba(255,255,255,0.75)] max-w-sm leading-relaxed mb-6 font-sans">
                A technology-enabled social enterprise focused on transforming rural service delivery across 600,000+ Indian villages.
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[12px] text-white">
                <span className="w-2 h-2 rounded-full bg-[#39C85A]" />
                <span>Rooted in India · Connected through Technology</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-[14px] font-heading">
            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#00AFC7] font-semibold mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5 text-[rgba(255,255,255,0.85)]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('home')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('about')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('vision-mission')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    Vision &amp; Mission
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('marketplace')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    Marketplace
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#00AFC7] font-semibold mb-4">
                Initiatives
              </p>
              <ul className="space-y-2.5 text-[rgba(255,255,255,0.85)]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('rise')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    RISE® Initiative
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('partner')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    Partner With Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('team')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('contact')}
                    className="hover:text-[#39C85A] transition-colors"
                  >
                    Contact Desk
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Action Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#00AFC7] font-semibold mb-4">
                Engagement
              </p>
              <p className="text-[13.5px] text-[rgba(255,255,255,0.75)] leading-relaxed mb-4 font-sans">
                Have questions or looking to bring the RISE® model to your district?
              </p>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn-gradient-primary w-full inline-flex items-center justify-center gap-2 font-heading font-medium text-[13.5px] py-3 rounded-full shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[12px] text-[rgba(255,255,255,0.62)] hover:text-[#39C85A] transition-colors"
              >
                <ArrowUp size={14} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[rgba(255,255,255,0.62)] gap-4">
          <p>
            © {new Date().getFullYear()} FirstGlobal Services &amp; Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>RISE® Registered Initiative</span>
            <span>·</span>
            <span>Digital Public Infrastructure Interoperable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
