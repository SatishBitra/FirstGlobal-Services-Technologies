import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Introduction } from './components/Introduction.tsx';
import { VisionMission } from './components/VisionMission.tsx';
import { RiseSection } from './components/RiseSection.tsx';
import { PartnerSection } from './components/PartnerSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { ApplicationModal } from './components/ApplicationModal.tsx';
import { ModalType } from './types.ts';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>('none');

  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#10243a] flex flex-col font-sans">
      {/* Primary Sticky Header */}
      <Header
        onOpenEnquiry={() => setActiveModal('enquiry')}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. HOME — Hero */}
        <Hero
          onOpenEnquiry={() => setActiveModal('enquiry')}
          onNavigateToMarketplace={() => handleNavigateToSection('marketplace')}
        />

        {/* 02. Introduction Statement */}
        <Introduction />

        {/* 03. Vision & Mission Statement */}
        <VisionMission />

        {/* 04. JOIN THE MARKETPLACE — RISE® Initiative */}
        <RiseSection />

        {/* 05. Partner With Us & Get in Touch */}
        <PartnerSection
          onOpenEnquiry={() => setActiveModal('enquiry')}
        />

        {/* 06. JOIN OUR TEAM & Apply Now */}
        <TeamSection
          onOpenApply={() => setActiveModal('apply')}
        />
      </main>

      {/* Primary Footer */}
      <Footer
        onOpenEnquiry={() => setActiveModal('enquiry')}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Interactive Overlays */}
      {/* Get in Touch → Enquiry Form Modal */}
      <ContactModal
        isOpen={activeModal === 'enquiry'}
        onClose={() => setActiveModal('none')}
      />

      {/* Apply Now → Join Our Team Application Modal */}
      <ApplicationModal
        isOpen={activeModal === 'apply'}
        onClose={() => setActiveModal('none')}
      />
    </div>
  );
}
