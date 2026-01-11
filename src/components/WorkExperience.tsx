import interacLogo from "@/assets/interac-logo.png";
import dayforceLogo from "@/assets/dayforce-logo.png";
import magnetLogo from "@/assets/magnet-logo.png";
import omhsLogo from "@/assets/omhs-logo.png";

interface Experience {
  period: string;
  company: string;
  role: string;
  logo: string;
  location?: string;
  bullets?: string[];
}

const experiences: Experience[] = [
  { 
    period: "2026", 
    company: "dayforce", 
    role: "technical advisor intern", 
    logo: dayforceLogo,
    location: "toronto, on"
  },
  { 
    period: "2025", 
    company: "interac", 
    role: "technical product management intern", 
    logo: interacLogo,
    location: "toronto, on"
  },
  { 
    period: "2024", 
    company: "omhs", 
    role: "product manager", 
    logo: omhsLogo,
    location: "oakville, on"
  },
  { 
    period: "2024", 
    company: "interac", 
    role: "product management intern", 
    logo: interacLogo,
    location: "toronto, on"
  },
  { 
    period: "2023", 
    company: "magnet forensics", 
    role: "software development intern", 
    logo: magnetLogo,
    location: "waterloo, on"
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-slate-800 mb-12">experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-[100px_1fr] gap-6 items-start">
              {/* Date */}
              <div className="text-sm text-slate-400 font-sans pt-1">
                {exp.period}
              </div>

              {/* Content */}
              <div className="flex gap-4">
                {/* Logo */}
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="font-sans">
                  <h3 className="text-base font-medium text-slate-800">{exp.role}</h3>
                  <p className="text-sm text-slate-500">{exp.company}</p>
                  {exp.location && (
                    <p className="text-xs text-slate-400 mt-1">{exp.location}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
