import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Project } from "@/components/ProjectsSection";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto font-sans">
        <DialogHeader className="space-y-4">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain rounded-lg max-h-80"
            />
          </div>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <DialogTitle className="text-xl font-medium text-slate-800">
              {project.title.toLowerCase()}
            </DialogTitle>
            
            <p className="text-sm text-slate-500">
              {project.role.toLowerCase()} · {project.year} · {project.techStack.toLowerCase()}
            </p>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Summary */}
          <div>
            <h4 className="text-sm font-medium text-slate-800 mb-2">summary</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{project.summary}</p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-sm font-medium text-slate-800 mb-2">key contributions</h4>
            <ul className="space-y-2">
              {project.keyContributions.map((contribution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <span className="text-sm text-slate-600 leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h4 className="text-sm font-medium text-slate-800 mb-2">impact</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{project.impact}</p>
          </div>

          {/* Skills & Tools */}
          <div>
            <h4 className="text-sm font-medium text-slate-800 mb-2">skills & tools</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{project.skillsTools}</p>
          </div>
          
          {project.links.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-slate-800">links</h4>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, index) => (
                  <Button 
                    key={index}
                    asChild 
                    variant="outline"
                    size="sm"
                    className="text-xs border-slate-200 hover:border-slate-400 text-slate-600"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3 w-3" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
