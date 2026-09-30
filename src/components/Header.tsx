import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenEnquiry: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEnquiry,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  const handleEnquiryClick = () => {
    setMobileMenuOpen(false);
    onOpenEnquiry();
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#DDE5E1] shadow-[0_4px_20px_rgba(7,27,58,0.06)] py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 sm:py-6 text-white'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFC7] rounded-xl group py-1"
          id="header-logo-link"
        >
          {/* White Logo variant for default transparent hero */}
          <img
            src="/FIRST-global_white.png"
            onError={(e) => {
              e.currentTarget.src = '/image-84.png';
            }}
            alt="First-Global Services & Technologies"
            className={`h-6 sm:h-7 md:h-7.5 lg:h-8 xl:h-8.5 w-auto object-contain select-none transition-opacity duration-300 ${
              isScrolled ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'
            }`}
          />
          {/* Black Logo variant for scrolled light nav background */}
          <img
            src="/FIRST-global_black.png"
            onError={(e) => {
              e.currentTarget.src = '/image-85.png';
            }}
            alt="First-Global Services & Technologies"
            className={`h-6 sm:h-7 md:h-7.5 lg:h-8 xl:h-8.5 w-auto object-contain select-none transition-opacity duration-300 ${
              isScrolled ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute'
            }`}
          />
        </a>

        {/* Center: Nav items */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[14px] font-heading font-medium"
          aria-label="Primary Navigation"
        >
          <button
            type="button"
            id="nav-about"
            onClick={() => handleNavClick('about')}
            className={`transition-colors py-1 hover:text-[#00AFC7] ${
              isScrolled ? 'text-[#12233F] hover:text-[#1769C2]' : 'text-white/90 hover:text-white'
            }`}
          >
            About
          </button>
          <button
            type="button"
            id="nav-vision"
            onClick={() => handleNavClick('vision-mission')}
            className={`transition-colors py-1 hover:text-[#00AFC7] ${
              isScrolled ? 'text-[#12233F] hover:text-[#1769C2]' : 'text-white/90 hover:text-white'
            }`}
          >
            Vision &amp; Mission
          </button>
          <button
            type="button"
            id="nav-marketplace"
            onClick={() => handleNavClick('marketplace')}
            className={`transition-colors py-1 hover:text-[#00AFC7] ${
              isScrolled ? 'text-[#12233F] hover:text-[#1769C2]' : 'text-white/90 hover:text-white'
            }`}
          >
            Marketplace
          </button>
          <button
            type="button"
            id="nav-rise"
            onClick={() => handleNavClick('rise')}
            className={`transition-colors py-1 hover:text-[#00AFC7] ${
              isScrolled ? 'text-[#12233F] hover:text-[#1769C2]' : 'text-white/90 hover:text-white'
            }`}
          >
            RISE®
          </button>
          <button
            type="button"
            id="nav-partner"
            onClick={() => handleNavClick('partner')}
            className={`transition-colors py-1 hover:text-[#00AFC7] ${
              isScrolled ? 'text-[#12233F] hover:text-[#1769C2]' : 'text-white/90 hover:text-white'
            }`}
          >
            Partners
          </button>
          <button
            type="button"
            id="nav-team"
            onClick={() => handleNavClick('team')}
            className={`transition-colors py-1 hover:text-[#00AFC7] ${
              isScrolled ? 'text-[#12233F] hover:text-[#1769C2]' : 'text-white/90 hover:text-white'
            }`}
          >
            Careers
          </button>
        </nav>

        {/* Right: Primary Pill CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            id="nav-cta-contact"
            onClick={handleEnquiryClick}
            className={`group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13.5px] font-heading font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFC7] ${
              isScrolled
                ? 'btn-gradient-primary text-white'
                : 'bg-white hover:bg-neutral-100 text-[#123E9B] shadow-sm transition-all duration-200'
            }`}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00AFC7] transition-colors relative z-50 ${
            mobileMenuOpen
              ? 'text-[#12233F] bg-black/5 hover:bg-black/10'
              : isScrolled
              ? 'text-[#12233F] hover:bg-neutral-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <motion.div
            key={mobileMenuOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: mobileMenuOpen ? -90 : 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: mobileMenuOpen ? 90 : -90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
              style={{ top: '64px' }}
              aria-hidden="true"
            />

            {/* Slide Down Panel with overflow-hidden to prevent transition artifacts */}
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-[#FAF9F5]/98 backdrop-blur-xl border-b border-[#DDE5E1] shadow-2xl text-[#12233F] relative z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="px-6 pt-3 pb-6 flex flex-col space-y-1 font-heading font-medium text-[15px]">
                <button
                  type="button"
                  onClick={() => handleNavClick('home')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('about')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  About Us
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('vision-mission')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  Vision &amp; Mission
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('marketplace')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  Marketplace
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('rise')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  RISE® Initiative
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('partner')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  Partner With Us
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('team')}
                  className="text-left py-2.5 px-3 rounded-lg hover:bg-black/5 text-[#12233F] transition-colors"
                >
                  Careers
                </button>

                <div className="pt-3 border-t border-[#DDE5E1]/70 mt-2">
                  <button
                    type="button"
                    onClick={handleEnquiryClick}
                    className="w-full btn-gradient-primary text-white py-3.5 rounded-full text-center shadow-md font-medium text-[14.5px]"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
