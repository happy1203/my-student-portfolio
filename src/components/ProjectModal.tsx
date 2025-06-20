
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
                  className="bg-blue-100 text-blue-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {project.title}
            </DialogTitle>
            
            <DialogDescription className="text-lg text-gray-600">
              {project.description}
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
            <p className="text-gray-700 leading-relaxed">{project.details}</p>
          </div>
          
          {project.links.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">Links</h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <Button 
                    key={index}
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
