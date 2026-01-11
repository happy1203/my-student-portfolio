import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain rounded-lg max-h-96"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-blue-50 text-blue-600 lowercase"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <DialogTitle className="text-2xl font-bold text-slate-800 lowercase">
              {project.title}
            </DialogTitle>
            
            <p className="text-lg text-slate-500 font-medium lowercase">
              {project.role} · {project.year} · {project.techStack}
            </p>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Summary */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3 lowercase">summary</h4>
            <p className="text-slate-600 leading-relaxed">{project.summary}</p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3 lowercase">key contributions</h4>
            <ul className="space-y-2">
              {project.keyContributions.map((contribution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                  <span className="text-slate-600 leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3 lowercase">impact</h4>
            <p className="text-slate-600 leading-relaxed">{project.impact}</p>
          </div>

          {/* Skills & Tools */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3 lowercase">skills & tools</h4>
            <p className="text-slate-600 leading-relaxed">{project.skillsTools}</p>
          </div>
          
          {project.links.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-slate-800 lowercase">links</h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <Button 
                    key={index}
                    asChild 
                    className="bg-blue-600 hover:bg-blue-700 lowercase"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
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
