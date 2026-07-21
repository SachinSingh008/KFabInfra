import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo.config";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO {...PAGE_SEO.home} />
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <IndustriesSection />
      <WhyChooseUs />
      <ClientsMarquee />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
