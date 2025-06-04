
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative mx-auto w-48 h-48 lg:w-56 lg:h-56 mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm a Product Manager
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Building Digital Experiences
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Currently pursuing BCS & BBA across two universities while crafting innovative product solutions. 
            I bridge the gap between business strategy and technical execution, turning complex problems into 
            elegant user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
