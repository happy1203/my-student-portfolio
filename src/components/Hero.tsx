
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, GraduationCap, Briefcase, FileText } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hey! My name is{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Happy Patel.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                Welcome to my corner of the internet!
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
                <CardContent className="p-4 flex items-center space-x-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Education</h3>
                    <p className="text-xs text-gray-600">
                      BCS at University of Waterloo & BBA at Wilfrid Laurier University
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-purple-100">
                <CardContent className="p-4 flex items-center space-x-4">
                  <Briefcase className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Recent Experience</h3>
                    <p className="text-xs text-gray-600">
                      Product Manager Intern at Interac Corporation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
                <a href="lovable-uploads/Happy-Patel-Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Large profile image */}
          <div className="lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              
              {/* Main profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src="/lovable-uploads/e4b2fa6a-595d-4d81-82da-71020fdadd32.png"
                  alt="Happy Patel Profile"
                  className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
