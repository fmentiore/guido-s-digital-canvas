import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AreasSection } from "@/components/AreasSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MethodologySection } from "@/components/MethodologySection";
import { TrainingSection } from "@/components/TrainingSection";
import { EducationSection } from "@/components/EducationSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AreasSection />
        <SkillsSection />
        <ServicesSection />
        <MethodologySection />
        <TrainingSection />
        <EducationSection />
        <ToolsSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
