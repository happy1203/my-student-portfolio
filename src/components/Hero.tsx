import { Button } from "@/components/ui/button";
import profileBitmoji from "@/assets/profile-bitmoji.png";
import { ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-slate-800 leading-tight font-sans font-light">
                hey! my name is{" "}
                <span className="font-serif italic text-slate-900">
                  happy patel.
                </span>
              </h1>
              
              <p className="text-lg text-slate-500 font-sans font-light">
                seeking summer 2026 internships
              </p>
              
              <p className="text-xl text-slate-600 max-w-lg font-sans">
                i build thoughtful products, used by real people at scale.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-3 font-sans">
              <div className="flex items-center gap-3 text-slate-600">
                <span className="text-sm text-slate-400">education</span>
                <span className="text-slate-300">·</span>
                <span className="text-sm">BCS @ Waterloo · BBA @ Laurier</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <span className="text-sm text-slate-400">recent</span>
                <span className="text-slate-300">·</span>
                <span className="text-sm">Technical Advisor Intern @ Dayforce</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 font-sans">
              <Button 
                onClick={scrollToExperience}
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg text-sm font-normal"
              >
                view experience
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button 
                onClick={scrollToProjects}
                variant="outline"
                size="lg" 
                className="px-6 py-3 rounded-lg border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm font-normal"
              >
                view projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="px-6 py-3 rounded-lg border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm font-normal"
              >
                <a href="https://drive.google.com/file/d/1m_iVHiFcvwguSEJ0OS-N9o8Z0QzwcLtl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Large engaging bitmoji */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={profileBitmoji}
              alt="Happy Patel"
              className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
