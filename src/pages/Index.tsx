import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BenefitsSection from "@/components/BenefitsSection";
import CatalogSection from "@/components/CatalogSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <BenefitsSection />
        <CatalogSection />
        <WorkshopsSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
