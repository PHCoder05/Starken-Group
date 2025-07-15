import Navbar from '@/components/navigation/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import AboutPreview from '@/components/sections/about-preview';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import StatsSection from '@/components/sections/stats-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar siteType="starken-group" />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* About Preview */}
        <AboutPreview />
        
        {/* Portfolio Showcase */}
        <PortfolioShowcase />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>
      <Footer siteType="starken-group" />
    </div>
  );
}
