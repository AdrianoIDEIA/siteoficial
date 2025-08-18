import React from 'react';
import { Header } from './clinica/Header';
import { HeroSection } from './clinica/HeroSection';
import { AboutSection } from './clinica/AboutSection';
import { MedicalStaffSection } from './clinica/MedicalStaffSection';
import { MixedContentSection } from './clinica/MixedContentSection';
import { Footer } from './clinica/Footer';

export default function ClinicaEIBM() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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