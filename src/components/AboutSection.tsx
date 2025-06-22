import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Smile, Clock } from "lucide-react";

interface StatItem {
  id: number;
  label: string;
  value: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { id: 1, label: "Happy Students", value: "10+", icon: <Smile className="w-6 h-6" /> },
  { id: 2, label: "Teaching Hours", value: "1000+", icon: <Clock className="w-6 h-6" /> },
  { id: 3, label: "Schools Worked", value: "4+", icon: <BookOpen className="w-6 h-6" /> },
  // { id: 4, label: "Workshops", value: "15+", icon: <Users className="w-6 h-6" /> },
];

const AboutSection = () => {
  return (
    <section className="w-full bg-[#0f1115] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Stats Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#11131a] hover:bg-[#1a1f2b] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-green-500/10 transition-all duration-300 group border border-[#1e222d]"
            >
              <div className="w-14 h-14 bg-green-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-500/30 transition-all">
                {stat.icon}
              </div>
              <p className="text-green-400 text-2xl md:text-3xl font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-400">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-green-500">Inspiring </span>
            <span className="text-white">Young Minds Through</span>
            <span className="text-yellow-400"> Innovative Teaching</span>
          </h2>

          <p className="text-lg font-medium text-gray-300">
            B.El.Ed graduate from Delhi University with hands-on experience in 
            diverse educational settings including MCD schools and public institutions.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">▸</span>
              <p className="text-gray-400">
                Specialized in <span className="text-white">activity-based learning</span> and 
                <span className="text-white"> modern teaching tools</span> including smart classes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">▸</span>
              <p className="text-gray-400">
                Fluent in <span className="text-white">English & Hindi</span> instruction with 
                <span className="text-white"> classroom management</span> expertise
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">▸</span>
              <p className="text-gray-400">
                Passionate about creating <span className="text-white">safe, inclusive spaces</span> 
                where every child can thrive
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 transition-all"
              asChild
            >
              <a href="/cv/nidhi-cv.pdf" download>
                Download CV
              </a>
            </Button>
            {/* <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 transition-all"
              asChild
            >
              <a href="#contact">
                Teaching Philosophy
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;