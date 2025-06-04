
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  details: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "Led product strategy for a mobile-first shopping experience with 40% increase in conversion rates.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      tags: ["Mobile", "UX Strategy", "Analytics"],
      link: "https://example.com",
      details: "Spearheaded the development of a mobile e-commerce platform focusing on user experience optimization. Conducted extensive user research, A/B testing, and data analysis to identify pain points in the customer journey. Implemented a streamlined checkout process that reduced cart abandonment by 35% and increased mobile conversion rates by 40%. Collaborated with cross-functional teams including design, engineering, and marketing to deliver a product that exceeded KPI targets."
    },
    {
      id: 2,
      title: "SaaS Dashboard Redesign",
      description: "Reimagined analytics dashboard resulting in 60% improvement in user engagement metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["SaaS", "Data Visualization", "B2B"],
      details: "Led a comprehensive redesign of a B2B analytics dashboard used by over 10,000 daily active users. Conducted stakeholder interviews, user journey mapping, and competitive analysis to identify opportunities for improvement. Prioritized features based on user feedback and business impact, resulting in a 60% increase in user engagement and 25% reduction in support tickets. Implemented progressive disclosure principles and improved information architecture to enhance usability."
    },
    {
      id: 3,
      title: "AI-Powered Recommendation Engine",
      description: "Launched ML-driven product recommendations increasing revenue per user by 25%.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["AI/ML", "Personalization", "Growth"],
      details: "Managed the end-to-end development of an AI-powered recommendation system that personalizes content for users based on their behavior patterns. Worked closely with data science teams to define algorithms and success metrics. Conducted extensive A/B testing to optimize recommendation accuracy and implemented feedback loops for continuous improvement. The feature resulted in a 25% increase in revenue per user and 45% improvement in session duration."
    },
    {
      id: 4,
      title: "Cross-Platform Integration",
      description: "Orchestrated seamless integration across web, mobile, and desktop platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Integration", "API Design", "Platform Strategy"],
      details: "Led a complex integration project to unify user experiences across web, mobile, and desktop platforms. Defined API specifications and data synchronization strategies while ensuring consistent functionality across all touchpoints. Managed technical dependencies and coordinated with multiple engineering teams to deliver on tight deadlines. The integration improved user retention by 30% and reduced development time for new features by 50%."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of product management projects showcasing strategic thinking, 
            user-centered design, and measurable business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
