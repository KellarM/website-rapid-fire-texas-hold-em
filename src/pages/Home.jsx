import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/OverviewSection';
import CascadeSection from '../components/CascadeSection';
import TechnologySection from '../components/TechnologySection';
import CompetitiveSection from '../components/CompetitiveSection';
import MarketSection from '../components/MarketSection';
import LicensingSection from '../components/LicensingSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// NOTE: GallerySection has been removed from this page intentionally.
// The GallerySection.jsx component file can be deleted from /src/components/

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A' }}>
      <NavBar />
      <HeroSection />
      <OverviewSection />
      <CascadeSection />
      <TechnologySection />
      <CompetitiveSection />
      <MarketSection />
      <LicensingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
