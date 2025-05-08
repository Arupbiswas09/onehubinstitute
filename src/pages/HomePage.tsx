import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ToppersSection from '../components/home/ToppersSection';
import FacultySection from '../components/home/FacultySection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import MapSection from '../components/home/MapSection';
import ContactSection from '../components/home/ContactSection';
import FloatingContact from '../components/shared/FloatingContact';

const HomePage: React.FC = () => {
  // Update the document title
  React.useEffect(() => {
    document.title = 'OneHub Institute - One Destination Infinite Possibilities';
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ToppersSection />
      <FacultySection />
      <StatsSection />
      <TestimonialsSection />
      <GallerySection />
      <MapSection />
      <ContactSection />
      <FloatingContact />
    </main>
  );
};

export default HomePage;