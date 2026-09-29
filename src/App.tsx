import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { VisionMission } from './components/VisionMission.tsx';
import { MarketplaceSection } from './components/MarketplaceSection.tsx';
import { RiseSection } from './components/RiseSection.tsx';
import { PartnerSection } from './components/PartnerSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-white text-[#17202b] flex flex-col font-sans selection:bg-[#e97824]/20 selection:text-[#102a56]">
        {/* 1. Navigation — Minimal Floating Nav over Hero (PRD Section 6) */}
        <Header
          onOpenEnquiry={() => setActiveModal('enquiry')}
          onNavigateToSection={handleNavigateToSection}
        />

        <main className="flex-1">
          {/* 2. Hero — Immersive Photographic Hero with Floating Card & CTA (PRD Section 7-11) */}
          <Hero
            onOpenEnquiry={() => setActiveModal('enquiry')}
            onNavigateToMarketplace={() => handleNavigateToSection('marketplace')}
            onNavigateToRise={() => handleNavigateToSection('rise')}
          />

          {/* 3. About / Introduction — Editorial 2-Col + 4-Card Modular Row (PRD Section 12-14) */}
          <AboutSection
            onOpenEnquiry={() => setActiveModal('enquiry')}
            onNavigateToSection={handleNavigateToSection}
          />

          {/* 4. Vision + Mission — Side by Side with No Images (User Request) */}
          <VisionMission onNavigateToSection={handleNavigateToSection} />

          {/* 5. Join the Marketplace — Visual Transition Section (PRD Section 18 & 52) */}
          <MarketplaceSection
            onOpenEnquiry={() => setActiveModal('enquiry')}
            onNavigateToRise={() => handleNavigateToSection('rise')}
          />

          {/* 6. RISE® — 4-Card Modular Ecosystem Grid (PRD Section 19-22) */}
          <RiseSection
            onOpenEnquiry={() => setActiveModal('enquiry')}
          />

          {/* 7. Partner With Us — Heritage Architecture Visual + DPI Overlay (PRD Section 23-24) */}
          <PartnerSection
            onOpenEnquiry={() => setActiveModal('enquiry')}
          />

          {/* 8. Join Our Team — Operations, Technology, Finance Cards (PRD Section 25-26) */}
          <TeamSection
            onOpenApply={() => setActiveModal('apply')}
          />

          {/* 9. Contact Experience — Split-screen In-Page Form (PRD Section 27) */}
          <ContactSection />
        </main>

        {/* 10. Footer — Deep Indigo with Subtle Indian Pattern Texture (PRD Section 28) */}
        <Footer
          onOpenEnquiry={() => setActiveModal('enquiry')}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Interactive Overlays */}
        <ContactModal
          isOpen={activeModal === 'enquiry'}
          onClose={() => setActiveModal('none')}
        />

        <ApplicationModal
          isOpen={activeModal === 'apply'}
          onClose={() => setActiveModal('none')}
        />
      </div>
    </ReactLenis>
  );
}
