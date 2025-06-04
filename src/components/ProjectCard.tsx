
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
      className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {project.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {project.description}
          </p>
          
          <div className="pt-4">
            <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
              Learn more →
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
