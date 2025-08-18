import { Header } from './clinica/Header';
import { HeroSection } from './clinica/HeroSection';
import { AboutSection } from './clinica/AboutSection';
import { MedicalStaffSection } from './clinica/MedicalStaffSection';
import { MixedContentSection } from './clinica/MixedContentSection';
import { Footer } from './clinica/Footer';
import '../styles/clinica.css';
import { HighlightsSection } from './clinica/HighlightsSection';

export default function ClinicaEIBM() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <MedicalStaffSection />
        <MixedContentSection />
      </main>
      <Footer />
    </div>
  );
}