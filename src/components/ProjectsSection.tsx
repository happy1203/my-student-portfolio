
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  techStack: string;
  summary: string;
  keyContributions: string[];
  impact: string;
  skillsTools: string;
  description: string;
  image: string;
  tags: string[];
  links: { label: string; url: string }[];
  details: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Oakville & Milton Humane Society – Volunteer & Pet Management System",
      role: "Product Manager",
      year: "2023",
      techStack: "Figma, React, Node.js, MySQL",
      summary: "Led the design and development of a role-based volunteer and pet management system to improve task assignment, progress tracking, and care quality for animals at OMHS.",
      keyContributions: [
        "Directed a cross-functional team of 8 developers and 4 designers from discovery to delivery.",
        "Defined MVP scope, created PRDs, and facilitated agile sprints and stand-ups.",
        "Designed mobile-friendly workflows for volunteers to manage tasks on the go."
      ],
      impact: "Increased volunteer task visibility and reduced coordination time for staff. Recognized as a featured UW Blueprint project.",
      skillsTools: "Product Management · Agile · Figma · React · Node.js · MySQL",
      description: "Spearheaded team of 8 developers and 4 designers to develop a volunteer and pet management system for OMHS.",
      image: "/lovable-uploads/13012312-d5d0-4780-b023-35f07961c4d8.png",
      tags: ["Product Management", "Figma", "Mobile Design"],
      links: [
        { label: "View Figma Designs", url: "https://www.figma.com/design/Z04gFPGFCo41q4pqMQdqp1/Platform-Design?node-id=429-764&p=f" },
        { label: "Product Documentation", url: "https://drive.google.com/file/d/1oshENU4IQbqJP35nemSTfH4bjg9e43wq/view?usp=sharing" },
        { label: "User Journeys", url: "https://drive.google.com/file/d/1Z5CiX-f4CjcxL5JDj6PdXpe-p0F_mkKM/view?usp=sharing" },
        { label: "OMHS Website", url: "https://omhs.ca/" }
      ],
      details: "Led end-to-end delivery of mobile and tablet designs in Figma, achieving 100% of roadmap milestones in 8 months. Defined PRDs for all features, incorporating client input and technical feasibility to reduce developer rework by 80%. Managed cross-functional team to deliver a comprehensive volunteer and pet management system."
    },
    {
      id: 2,
      title: "World of Opportunities Conference – Fintech in Japan",
      role: "Presenter",
      year: "2024",
      techStack: "Market Entry Strategy, Public Speaking",
      summary: "Presented a market expansion strategy for launching a fintech company into the Japanese market, winning the People's Choice Award at the World of Opportunities Conference.",
      keyContributions: [
        "Researched Japanese fintech regulatory environment and consumer behavior.",
        "Created a go-to-market plan including competitive positioning and localization.",
        "Delivered an engaging presentation tailored to both expert and non-expert audiences."
      ],
      impact: "Voted top presentation out of 20+ participants.",
      skillsTools: "Market Research · Go-to-Market Strategy · Public Speaking · Pitch Design",
      description: "Won People's Choice Award at the World of Opportunities Conference for innovative project presentation.",
      image: "/lovable-uploads/df800c04-0c7e-4ca6-8545-64c148aa7648.png",
      tags: ["Award Winner", "Conference", "Innovation"],
      links: [
        { label: "View Report", url: "https://drive.google.com/file/d/1thRd1nC361Tr02hEGFIVzW4ZCdAe_Mdy/view?usp=sharing" },
        { label: "View Poster Board", url: "/lovable-uploads/d3e8e273-c5b4-4fa7-8711-d43046b02ee3.png" }
      ],
      details: "Led a team to victory at the World of Opportunities Conference, earning the prestigious People's Choice Award. The project showcased innovative thinking and practical solutions that resonated with both judges and audience members. Demonstrated strong presentation skills and collaborative leadership."
    },
    {
      id: 3,
      title: "CityView – Travel Discovery & Planning App",
      role: "Full-Stack Developer",
      year: "2023",
      techStack: "React, Node.js, MySQL",
      summary: "Built a comprehensive travel planning platform to help users discover destinations, favorite locations, leave reviews, and plan trips through an intuitive web interface.",
      keyContributions: [
        "Developed full-stack architecture with a React frontend, Node.js backend, and MySQL database.",
        "Implemented features including city search, user authentication, favorites, and reviews.",
        "Integrated city images, pagination, and responsive design for optimal usability."
      ],
      impact: "Created a scalable platform architecture supporting dynamic city data and user-generated content.",
      skillsTools: "React · Node.js · MySQL · Next.js · SQL Schema Design",
      description: "Developed full-stack app with React, Node.js, and MySQL to help users discover and plan new travel destinations.",
      image: "/lovable-uploads/816a76a8-4aea-45d2-92cb-16d622c99ba2.png",
      tags: ["Full-Stack", "React", "Node.js", "MySQL"],
      links: [
        { label: "View Presentation", url: "https://docs.google.com/presentation/d/16TUWWjzO2dEHUmCQKQAespMlKH_rXQQPzgtv2K9c6DQ/edit?usp=sharing" },
        { label: "ER Diagram", url: "https://drive.google.com/file/d/1QUBF3n9SAwA4og0AO-j7OPLhV6AnjuWk/view?usp=sharing" },
        { label: "GitHub Repository", url: "https://github.com/happy1203/city-seeker" }
      ],
      details: "Built a comprehensive travel planning platform using modern web technologies. The application helps users discover new destinations and plan their trips with an intuitive interface. Implemented full-stack architecture with React frontend, Node.js backend, and MySQL database for optimal performance and user experience."
    },
    {
      id: 4,
      title: "TripTok – TikTok Travel Content Organizer",
      role: "Product Designer",
      year: "2024",
      techStack: "Figma, Mobile UX Design",
      summary: "Designed a mobile app to help travelers organize and categorize saved TikTok content for easy reference and trip planning.",
      keyContributions: [
        "Conducted user research on how travelers use TikTok for trip inspiration.",
        "Created interactive prototypes with seamless navigation between saved videos and travel plans.",
        "Applied mobile-first design principles for an intuitive, visually engaging experience."
      ],
      impact: "Provided a clear organizational workflow for travel content discovery and planning.",
      skillsTools: "Product Design · Figma · Mobile UX",
      description: "Designing mobile app in Figma to organize saved TikTok content for easy reference and sharing, focused on traveling.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tags: ["Product Design", "Mobile App", "Figma"],
      links: [
        { label: "Prototype", url: "https://www.figma.com/proto/dBQINUm8mOEK2pRGNua5KF/Travelly?node-id=2-538&starting-point-node-id=2%3A538&t=7OIjOIaBudWzbxF5-1" }
      ],
      details: "Currently developing a mobile application that helps users organize and reference their saved TikTok content specifically for travel planning. The app focuses on creating an intuitive user experience for content curation and sharing among travel enthusiasts."
    },
    {
      id: 5,
      title: "ICE Case Competition – Blendtek Inc.",
      role: "Team Strategist",
      year: "2023",
      techStack: "Innovation, Market Analysis",
      summary: "Developed an innovative product and market strategy for Blendtek Inc. as part of the Innovation, Creativity & Entrepreneurship competition.",
      keyContributions: [
        "Conducted competitor benchmarking and trend analysis in the food industry.",
        "Proposed a differentiated market positioning and promotional strategy.",
        "Delivered a clear, actionable plan to judges in a competitive pitch format."
      ],
      impact: "Praised for creativity and feasibility of the solution.",
      skillsTools: "Market Research · Business Strategy · Pitching",
      description: "Developed innovative solution for Blendtek Inc as part of the Innovation, Creativity & Entrepreneurship competition.",
      image: "/lovable-uploads/8f14e05c-7d75-4ba2-b02d-6e6640f17001.png",
      tags: ["Innovation", "Entrepreneurship", "Strategy"],
      links: [
        { label: "View Presentation", url: "https://docs.google.com/presentation/d/1JtHoFsQQbyjdWb1gvoxuMIbSslqTggfSU5zYBjlLsVI/edit?usp=sharing" },
        { label: "Business Report", url: "https://docs.google.com/document/d/1Yx0ZgBUAYF3W3CDJAcuPd_Hw0uV0_ewip4gwb8YA5Ww/edit?usp=sharing" },
        { label: "Blendtek Website", url: "https://www.blendtek.com/" }
      ],
      details: "Participated in the Innovation, Creativity & Entrepreneurship competition, developing a comprehensive solution for Blendtek Inc. The project involved analyzing market opportunities, developing innovative strategies, and presenting actionable recommendations to industry professionals."
    },
    {
      id: 6,
      title: "Peloton Case Competition – Go-to-Market Strategy",
      role: "Team Lead",
      year: "2023",
      techStack: "Strategy, Consulting",
      summary: "Led the development of a winning go-to-market strategy for Peloton's bikes, securing first place in the class competition.",
      keyContributions: [
        "Designed a market penetration plan targeting new customer segments.",
        "Conducted financial modeling and ROI analysis to support recommendations.",
        "Coordinated team efforts and structured the final pitch."
      ],
      impact: "First-place finish out of multiple competing teams.",
      skillsTools: "Go-to-Market Strategy · Competitive Analysis · Presentation Design",
      description: "Developed winning go-to-market strategy for Peloton bikes, securing first place in class competition.",
      image: "/lovable-uploads/fc2782f2-6cc5-449b-98ac-e0c51e875533.png",
      tags: ["Go-to-Market", "Strategy", "Consulting"],
      links: [
        { label: "View Presentation", url: "https://docs.google.com/presentation/d/16OYOaRAg8thz18kFe4hMrEhiOWyHEtnk9bgTC07V65A/edit?usp=sharing" },
        { label: "Business Report", url: "https://docs.google.com/document/d/1H06Z8Ym7XRXmRlV9G9VtAEki9Lpxf1zNKu02qBnVS2A/edit?usp=sharing" },
        { label: "Peloton Website", url: "https://www.onepeloton.com/en-CA" }
      ],
      details: "Led team to first place in a competitive case study focused on Peloton bikes. Developed comprehensive go-to-market strategy, conducted market analysis, and presented strategic recommendations. Demonstrated expertise in business strategy, market research, and consulting methodologies."
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
            A showcase of my work in product management, development, and strategic consulting 
            across various industries and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
