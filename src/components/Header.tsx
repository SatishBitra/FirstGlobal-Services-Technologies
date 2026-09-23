import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white ${
        isScrolled
          ? 'border-b border-[#e6eaee] shadow-[0_2px_12px_rgba(16,36,58,0.04)] h-[76px] lg:h-[82px]'
          : 'border-b border-transparent h-[82px] lg:h-[90px]'
      }`}
    >
      {/* Scroll Progress Indicator Bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#1557c0] via-[#20b9df] to-[#159b8b] z-50 pointer-events-none"
      />

      <div className="max-w-[1240px] mx-auto h-full px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] rounded-md"
          id="header-logo-link"
        >
          <Logo variant="full" size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Primary Navigation"
        >
          <button
            type="button"
            id="nav-home"
            onClick={() => handleNavClick('home')}
            className="text-[14px] lg:text-[15px] font-heading font-medium text-[#10243a] hover:text-[#1557c0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] rounded px-1 py-1"
          >
            HOME
          </button>
          <button
            type="button"
            id="nav-marketplace"
            onClick={() => handleNavClick('marketplace')}
            className="text-[14px] lg:text-[15px] font-heading font-medium text-[#10243a] hover:text-[#1557c0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] rounded px-1 py-1"
          >
            JOIN THE MARKETPLACE
          </button>
          <button
            type="button"
            id="nav-team"
            onClick={() => handleNavClick('team')}
            className="text-[14px] lg:text-[15px] font-heading font-medium text-[#10243a] hover:text-[#1557c0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] rounded px-1 py-1"
          >
            JOIN OUR TEAM
          </button>
          <button
            type="button"
            id="nav-get-in-touch"
            onClick={handleEnquiryClick}
            className="bg-[#1557c0] hover:bg-[#10243a] text-white text-[14px] lg:text-[15px] font-heading font-medium px-5 py-2.5 rounded-[10px] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1557c0] focus-visible:ring-offset-2"
          >
            GET IN TOUCH
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#10243a] hover:bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1557c0]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-[#e6eaee] px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              <button
                type="button"
                id="mobile-nav-home"
                onClick={() => handleNavClick('home')}
                className="text-left text-[14px] sm:text-[15px] font-heading font-medium text-[#10243a] py-2 border-b border-[#f1f5f9]"
              >
                HOME
              </button>
              <button
                type="button"
                id="mobile-nav-marketplace"
                onClick={() => handleNavClick('marketplace')}
                className="text-left text-[14px] sm:text-[15px] font-heading font-medium text-[#10243a] py-2 border-b border-[#f1f5f9]"
              >
                JOIN THE MARKETPLACE
              </button>
              <button
                type="button"
                id="mobile-nav-team"
                onClick={() => handleNavClick('team')}
                className="text-left text-[14px] sm:text-[15px] font-heading font-medium text-[#10243a] py-2 border-b border-[#f1f5f9]"
              >
                JOIN OUR TEAM
              </button>
              <button
                type="button"
                id="mobile-nav-touch"
                onClick={handleEnquiryClick}
                className="w-full mt-2 bg-[#1557c0] text-white text-[14px] font-heading font-medium py-3 rounded-[10px] text-center"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
