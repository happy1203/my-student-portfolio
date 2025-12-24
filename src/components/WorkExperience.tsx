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
  { year: "2023", company: "Magnet Forensics", role: "Software Development Intern", logo: magnetLogo },
  { year: "2024", company: "Interac", role: "Product Management Intern", logo: interacLogo },
  { year: "2024", company: "OMHS", role: "Product Manager", logo: omhsLogo },
  { year: "2025", company: "Interac", role: "Technical Product Management Intern", logo: interacLogo },
  { year: "2026", company: "Dayforce", role: "Technical Analyst Intern", logo: dayforceLogo },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey across product management, software engineering, and technical strategy.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full" />

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Logo Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-100 mb-4 overflow-hidden z-10">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white shadow-md mb-4" />

                {/* Content Card */}
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center w-full">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                    {exp.year}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{exp.company}</h3>
                  <p className="text-xs text-gray-600 font-medium">{exp.role}</p>
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
