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
      className="group cursor-pointer overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white h-full"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-slate-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-5 flex flex-col">
        <div className="space-y-3 flex-grow">
          {/* Project Title - Short version */}
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 lowercase line-clamp-1">
            {project.shortTitle || project.title.split('–')[0].trim()}
          </h3>
          
          {/* Short Description */}
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 lowercase">
            {project.description}
          </p>

          {/* Skills & Tools Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200 text-xs font-normal lowercase"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="pt-4 mt-auto">
          <span className="text-blue-500 font-medium group-hover:text-blue-600 transition-colors duration-200 text-sm lowercase">
            learn more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
