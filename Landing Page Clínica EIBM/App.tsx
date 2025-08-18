import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MedicalStaffSection } from './components/MedicalStaffSection';
import { MixedContentSection } from './components/MixedContentSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
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