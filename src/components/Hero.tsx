
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, GraduationCap, Briefcase, FileText } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Profile Section */}
        <div className="space-y-8 animate-fade-in">
          <div className="relative mx-auto w-64 h-64 lg:w-72 lg:h-72">
            <img
              src="/lovable-uploads/e4b2fa6a-595d-4d81-82da-71020fdadd32.png"
              alt="Happy Patel Profile"
              className="w-full h-full object-cover rounded-full shadow-xl ring-2 ring-white"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Hey! My name is Happy Patel
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Product Manager building innovative solutions across tech & consulting
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
                BCS at University of Waterloo & BBA at Wilfrid Laurier University
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center space-y-3">
              <Briefcase className="h-8 w-8 text-purple-600 mx-auto" />
              <h3 className="font-semibold text-gray-900">Recent Experience</h3>
              <p className="text-sm text-gray-600">
                Product Manager Intern at Interac Corporation
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg" 
            className="px-8 py-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            <a href="/lovable-uploads/df800c04-0c7e-4ca6-8545-64c148aa7648.png" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
