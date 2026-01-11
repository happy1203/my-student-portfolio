import { Card } from "@/components/ui/card";
import { Project } from "@/components/ProjectsSection";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5 font-sans">
        {/* Project Title */}
        <h3 className="text-base font-medium text-slate-800 group-hover:text-slate-600 transition-colors duration-200 mb-2">
          {project.shortTitle || project.title.split('–')[0].trim()}
        </h3>
        
        {/* Short Description */}
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Tags as simple text */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
