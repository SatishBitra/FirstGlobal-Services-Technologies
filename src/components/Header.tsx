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
          ? 'bg-[#fcf9f2]/95 backdrop-blur-md border-b border-[#e6eaee] shadow-[0_4px_20px_rgba(16,42,86,0.06)] py-3 sm:py-3.5'
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
          className="relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e97824] rounded-xl group py-1"
          id="header-logo-link"
        >
          {/* White Logo variant for default transparent hero */}
          <img
            src="/image 84.png"
            onError={(e) => {
              e.currentTarget.src = '/image-84.png';
            }}
            alt="First-Global Services & Technologies"
            className={`h-8 sm:h-9 md:h-10 w-auto object-contain select-none transition-opacity duration-300 ${
              isScrolled ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'
            }`}
          />
          {/* Black Logo variant for scrolled light nav background */}
          <img
            src="/image-85.png"
            onError={(e) => {
              e.currentTarget.src = '/image 85.png';
            }}
            alt="First-Global Services & Technologies"
            className={`h-8 sm:h-9 md:h-10 w-auto object-contain select-none transition-opacity duration-300 ${
              isScrolled ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute'
            }`}
          />
        </a>

        {/* Center: Contact micro-bar & Nav items inspired by Farmora reference */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[14px] font-heading font-medium"
          aria-label="Primary Navigation"
        >
          <button
            type="button"
            id="nav-about"
            onClick={() => handleNavClick('about')}
            className={`transition-colors py-1 hover:text-[#e97824] ${
              isScrolled ? 'text-[#17202b]' : 'text-white/90 hover:text-white'
            }`}
          >
            About
          </button>
          <button
            type="button"
            id="nav-vision"
            onClick={() => handleNavClick('vision-mission')}
            className={`transition-colors py-1 hover:text-[#e97824] ${
              isScrolled ? 'text-[#17202b]' : 'text-white/90 hover:text-white'
            }`}
          >
            Vision &amp; Mission
          </button>
          <button
            type="button"
            id="nav-marketplace"
            onClick={() => handleNavClick('marketplace')}
            className={`transition-colors py-1 hover:text-[#e97824] ${
              isScrolled ? 'text-[#17202b]' : 'text-white/90 hover:text-white'
            }`}
          >
            Marketplace
          </button>
          <button
            type="button"
            id="nav-rise"
            onClick={() => handleNavClick('rise')}
            className={`transition-colors py-1 hover:text-[#e97824] ${
              isScrolled ? 'text-[#17202b]' : 'text-white/90 hover:text-white'
            }`}
          >
            RISE®
          </button>
          <button
            type="button"
            id="nav-partner"
            onClick={() => handleNavClick('partner')}
            className={`transition-colors py-1 hover:text-[#e97824] ${
              isScrolled ? 'text-[#17202b]' : 'text-white/90 hover:text-white'
            }`}
          >
            Partners
          </button>
          <button
            type="button"
            id="nav-team"
            onClick={() => handleNavClick('team')}
            className={`transition-colors py-1 hover:text-[#e97824] ${
              isScrolled ? 'text-[#17202b]' : 'text-white/90 hover:text-white'
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
            className={`group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13.5px] font-heading font-medium transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e97824] active:scale-[0.98] ${
              isScrolled
                ? 'bg-[#102a56] hover:bg-[#17202b] text-white'
                : 'bg-white hover:bg-neutral-100 text-[#102a56]'
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
          className={`lg:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e97824] ${
            isScrolled ? 'text-[#17202b] hover:bg-neutral-100' : 'text-white hover:bg-white/10'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#fcf9f2] border-b border-[#e6eaee] px-6 py-6 shadow-xl text-[#17202b]"
          >
            <div className="flex flex-col space-y-3 font-heading font-medium text-[15px]">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('vision-mission')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                Vision &amp; Mission
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('marketplace')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                Marketplace
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('rise')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                RISE® Initiative
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('partner')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                Partner With Us
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('team')}
                className="text-left py-2 border-b border-neutral-200/60"
              >
                Careers
              </button>

              <button
                type="button"
                onClick={handleEnquiryClick}
                className="w-full mt-3 bg-[#102a56] hover:bg-[#17202b] text-white py-3.5 rounded-full text-center shadow-md font-medium"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
