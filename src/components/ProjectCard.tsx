
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
          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
          
          {/* Short Description */}
          <p className="text-gray-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Skills & Tools Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="pt-4 mt-auto">
          <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200 text-sm">
            Learn more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
