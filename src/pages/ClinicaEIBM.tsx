import React from 'react';
import { StandardHeader } from '../components/StandardHeader';
import { HeroSection } from './clinica/HeroSection';
import { AboutSection } from './clinica/AboutSection';
import { MedicalStaffSection } from './clinica/MedicalStaffSection';
import { MixedContentSection } from './clinica/MixedContentSection';
import { Footer } from './clinica/Footer';

interface ClinicaEIBMProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function ClinicaEIBM({ onNavigateHome, onNavigateToPage }: ClinicaEIBMProps = {}) {
  return (
    <div className="min-h-screen bg-white">
      <StandardHeader 
        onNavigateHome={onNavigateHome}
        onNavigateToPage={onNavigateToPage}
        currentPage="clinica"
      />
      <main>
        <HeroSection />
        <AboutSection />
        <MedicalStaffSection />
        <MixedContentSection />
      </main>
      <Footer />
    </div>
  );
}