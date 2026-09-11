import { useAnalyticsTracker } from '../hooks/useAnalyticsTracker';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/OverviewSection';
import StadiumSection from '../components/StadiumSection';
import CascadeSection from '../components/CascadeSection';
import TechnologySection from '../components/TechnologySection';
import CompetitiveSection from '../components/CompetitiveSection';
import MarketSection from '../components/MarketSection';
import LicensingSection from '../components/LicensingSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import RouletteStrip from '../components/RouletteStrip';

export default function Home() {
  useAnalyticsTracker();
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A2419' }}>
      <NavBar />
      <HeroSection />
      <RouletteStrip />
      <OverviewSection />
      <StadiumSection />
      <CascadeSection />
      <RouletteStrip />
      <TechnologySection />
      <CompetitiveSection />
      <RouletteStrip />
      <MarketSection />
      <LicensingSection />
      <AboutSection />
      <RouletteStrip />
      <ContactSection />
      <Footer />
    </div>
  );
}