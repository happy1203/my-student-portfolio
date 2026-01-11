import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import profileBitmoji from "@/assets/profile-bitmoji.png";
import { ArrowDown, GraduationCap, Briefcase, FileText } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight lowercase">
                hey! my name is{" "}
                <span className="text-blue-600">
                  happy patel.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-500 max-w-lg lowercase">
                welcome to my corner of the internet!
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border border-blue-100 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center space-x-4">
                  <GraduationCap className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm lowercase">education</h3>
                    <p className="text-xs text-slate-500 lowercase">
                      bcs at university of waterloo & bba at wilfrid laurier university
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-blue-100 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center space-x-4">
                  <Briefcase className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm lowercase">recent experience</h3>
                    <p className="text-xs text-slate-500 lowercase">
                      technical advisor intern at dayforce
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={scrollToExperience}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 lowercase"
              >
                view my work experience
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button 
                onClick={scrollToProjects}
                variant="outline"
                size="lg" 
                className="px-8 py-3 rounded-full border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 lowercase"
              >
                view my projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="px-8 py-3 rounded-full border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 lowercase"
              >
                <a href="https://drive.google.com/file/d/1m_iVHiFcvwguSEJ0OS-N9o8Z0QzwcLtl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  view resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Large profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-6 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
              
              {/* Main profile image - significantly larger */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                <img
                  src={profileBitmoji}
                  alt="Happy Patel Bitmoji"
                  className="w-full h-full object-contain rounded-full bg-white shadow-xl ring-4 ring-blue-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
