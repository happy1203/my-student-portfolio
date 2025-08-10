
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/components/ProjectsSection";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 h-full"
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="space-y-4 flex-grow">
          {/* Header with title, role, year, and tech stack */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              {project.role} · {project.year} · {project.techStack}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Summary</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Contributions</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.keyContributions.map((contribution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1.5 text-xs">•</span>
                  <span className="leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Impact</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Skills & Tools */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills & Tools</h4>
            <p className="text-sm text-gray-600">
              {project.skillsTools}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
