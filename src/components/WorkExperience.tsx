import { Briefcase } from "lucide-react";

interface Experience {
  year: string;
  company: string;
  role: string;
}

const experiences: Experience[] = [
  { year: "2026", company: "Dayforce", role: "Technical Analyst" },
  { year: "2025", company: "Interac", role: "Technical PM Intern" },
  { year: "2024", company: "Oakville & Milton Humane Society", role: "Product Manager" },
  { year: "2024", company: "Interac", role: "PM Intern" },
  { year: "2023", company: "Magnet Forensics", role: "SWE Intern" },
];

const WorkExperience = () => {
  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey across product management, software engineering, and technical strategy.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.company}</h3>
                    <p className="text-gray-600 font-medium">{exp.role}</p>
                  </div>
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
