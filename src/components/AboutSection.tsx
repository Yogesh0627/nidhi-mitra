import React from "react";
import { Button } from "@/components/ui/button";

interface StatItem {
  id: number;
  label: string;
  value: string;
}

const stats: StatItem[] = [
  { id: 1, label: "Happy Students", value: "10+" },
  { id: 4, label: "Teaching Hours", value: "1000+" },
];

const AboutSection = () => {
  return (
    <section className="w-full bg-[#0f1115] text-white py-20 px-4 md:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 flex-1 justify-items-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#11131a] rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col justify-center items-center text-center shadow-lg relative"
            >
              <p className="text-green-400 text-xl font-bold">{stat.value}</p>
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <p className="uppercase tracking-wider text-sm flex items-center justify-center lg:justify-start gap-2">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-yellow-400 text-base">•</span>
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Inspire Young Minds Through Teaching
          </h2>

          <p className="text-lg font-semibold">
            A passionate and dedicated Elementary Education graduate, shaping
            young learners through innovative teaching.
          </p>

          <p className="text-gray-400 text-base">
            With experience across MCD schools and public institutions, I strive
            to create a nurturing and engaging classroom environment. Skilled in
            lesson planning, activity-based learning, and using modern teaching
            tools to foster growth in every child.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white"
              asChild
            >
              <a href="/cv/nidhi-cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
