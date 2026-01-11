import interacLogo from "@/assets/interac-logo.png";
import dayforceLogo from "@/assets/dayforce-logo.png";
import magnetLogo from "@/assets/magnet-logo.png";
import omhsLogo from "@/assets/omhs-logo.png";

interface Experience {
  year: string;
  company: string;
  role: string;
  logo: string;
}

const experiences: Experience[] = [
  { year: "2023", company: "magnet forensics", role: "software development intern", logo: magnetLogo },
  { year: "2024", company: "interac", role: "product management intern", logo: interacLogo },
  { year: "2024", company: "omhs", role: "product manager", logo: omhsLogo },
  { year: "2025", company: "interac", role: "technical product management intern", logo: interacLogo },
  { year: "2026", company: "dayforce", role: "technical advisor intern", logo: dayforceLogo },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 lowercase">work experience</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto lowercase">
            my professional journey across product management, software engineering, and technical strategy.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full" />

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Logo Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md ring-4 ring-blue-50 mb-4 overflow-hidden z-10">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white shadow mb-4" />

                {/* Content Card */}
                <div className="bg-slate-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 text-center w-full">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-2">
                    {exp.year}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1 lowercase">{exp.company}</h3>
                  <p className="text-xs text-slate-500 lowercase">{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
