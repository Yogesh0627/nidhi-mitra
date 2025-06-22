import React from "react";

const SkillsSection = () => {
  const linearSkills = [
    { name: "Lesson Planning", level: 95, color: "#06b6d4" },
    { name: "Bilingual Teaching", level: 90, color: "#f97316" },
    { name: "Modern Teaching Tools", level: 85, color: "#e879f9" },
  ];

  const circularSkills = [
    { name: "MS Office", level: 90, color: "#8b5cf6" },
    { name: "Activity-Based Learning", level: 75, color: "#22c55e" },
    { name: "Communication", level: 88, color: "#f59e0b" },
    { name: "Classroom Mgmt", level: 80, color: "#0ea5e9" },
  ];

  return (
    <section className="bg-[#0f1115] text-white py-20 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT: Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-sm uppercase">
              <span className="w-10 h-[2px] bg-white" />
              <span className="text-yellow-400">•</span> Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-500">
              My Skills & Tools
            </h2>
            <p className="text-lg font-semibold">
              Every Day is a New Challenge
            </p>
            <p className="text-gray-400 text-sm">
              With a passion for engaging students, I apply interactive tools,
              tech-based teaching, and holistic learning methods in classrooms.
            </p>
            <button className="mt-4 border px-6 py-2 rounded-md border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all">
              Rate Me
            </button>
          </div>

          {/* RIGHT: Skills Section */}
          <div className="w-full md:w-1/2 space-y-10">
            {/* Linear Skills */}
            <div className="space-y-6">
              {linearSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span>{skill.name}</span>
                    <span style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Circular Skills (Flex Wrap Instead of Grid) */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {circularSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center w-[100px]"
                >
                  <svg className="w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#1f2937"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke={skill.color}
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (skill.level / 100) * 251.2}
                      strokeLinecap="round"
                      transform="rotate(-90 48 48)"
                    />
                  </svg>
                  <p className="text-lg font-bold mt-2">{skill.level}%</p>
                  <p className="text-sm text-gray-300 text-center break-words">
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
