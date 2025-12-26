import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Binatech | Enterprise Asset Tokenization & RWA Infrastructure</title>
        <meta
          name="description"
          content="Institutional-grade blockchain infrastructure for tokenizing real-world assets. Securities, commodities, and alternative investments on secure digital rails."
        />
        <meta
          name="keywords"
          content="asset tokenization, RWA, real world assets, blockchain infrastructure, digital securities, tokenized commodities, Binatech"
        />
        <link rel="canonical" href="https://binatech.co" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <SolutionsSection />
          <TechnologySection />
          <ProjectsSection />
          <AboutSection />
          <PartnersSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
