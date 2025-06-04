
import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  useEffect(() => {
    document.title = "Happy's Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <ProjectsSection />
    </div>
  );
};

export default Index;
