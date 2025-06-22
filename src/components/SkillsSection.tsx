import React from "react";
import { BookOpen, Languages, Laptop, Users, Presentation, MessageSquare } from "lucide-react";

const SkillsSection = () => {

  const linearSkills = [
    { name: "Lesson Planning", level: 95, color: "#06b6d4", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Bilingual Instruction", level: 90, color: "#f97316", icon: <Languages className="w-5 h-5" /> },
    { name: "Digital Teaching Tools", level: 85, color: "#e879f9", icon: <Laptop className="w-5 h-5" /> },
  ];

  const circularSkills = [
    { name: "MS Office Suite", level: 90, color: "#8b5cf6", icon: <Presentation className="w-5 h-5" /> },
    { name: "Activity-Based Learning", level: 75, color: "#22c55e", icon: <Users className="w-5 h-5" /> },
    { name: "Student Communication", level: 88, color: "#f59e0b", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Classroom Management", level: 80, color: "#0ea5e9", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="bg-[#0f1115] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-[2px] bg-green-500" />
              <span className="text-sm uppercase tracking-wider text-green-400">
                Teaching Expertise
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-green-500">Skills That </span>
              <span className="text-white">Enhance </span>
              <span className="text-yellow-400">Learning</span>
            </h2>
            
            <p className="text-lg text-gray-300">
              Combining traditional teaching methods with modern educational technology to create engaging classroom experiences.
            </p>

            {/* <div className="pt-4">
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded-md transition-all flex items-center gap-2 group">
                View Teaching Methodology
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div> */}
          </div>

          {/* Right: Skills Visualization */}
          <div className="lg:w-1/2 space-y-12">
            {/* Linear Skill Bars */}
            <div className="space-y-8">
              {linearSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-md bg-[${skill.color}]/20`} style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Circular Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {circularSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-3">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#1f2937"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (skill.level / 100) * 283}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className={`text-${skill.color} mb-1`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-center text-gray-300 font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;