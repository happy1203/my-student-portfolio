import { useEffect } from "react";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    document.title = "happy's portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WorkExperience />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
