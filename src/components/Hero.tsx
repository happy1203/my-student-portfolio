
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, GraduationCap, Briefcase } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Profile Section */}
        <div className="space-y-8 animate-fade-in">
          <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-xl ring-2 ring-white"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Hi, I'm Happy
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Student & aspiring professional crafting digital solutions
            </p>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center space-y-3">
              <GraduationCap className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="font-semibold text-gray-900">Education</h3>
              <p className="text-sm text-gray-600">
                BCS & BBA across two universities
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center space-y-3">
              <Briefcase className="h-8 w-8 text-purple-600 mx-auto" />
              <h3 className="font-semibold text-gray-900">Recent Work</h3>
              <p className="text-sm text-gray-600">
                Building innovative digital experiences
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
