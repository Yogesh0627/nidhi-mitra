import React from "react";
import { BookOpen, Languages, Paintbrush, Laptop } from "lucide-react";

const MyServices = () => {
  const services = [
    {
      title: "Creative Lesson Planning",
      description: "Designing engaging, interactive lessons tailored to different learning styles using activity-based methodologies.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Bilingual Instruction",
      description: "Delivering lessons fluently in both English and Hindi to accommodate diverse classroom needs.",
      icon: <Languages className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      title: "Holistic Development",
      description: "Organizing field trips, storytelling sessions, and creative workshops to foster all-round growth.",
      icon: <Paintbrush className="w-6 h-6" />,
      color: "text-yellow-500"
    },
    {
      title: "Digital Education",
      description: "Incorporating PowerPoint, smart classes, and online assessments for modern, tech-enabled learning.",
      icon: <Laptop className="w-6 h-6" />,
      color: "text-purple-500"
    },
  ];

  return (
    <section className="bg-[#0f1115] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-400">
              Teaching Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-green-500">Specialized </span>
            <span className="text-white">Educational </span>
            <span className="text-yellow-400">Approaches</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            Comprehensive teaching methodologies designed to engage young minds and foster lifelong learning
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#11131a] hover:bg-[#1a1f2b] rounded-xl p-8 border border-[#1e222d] hover:border-green-500/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${service.color} bg-opacity-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic max-w-3xl mx-auto">
            &quot;All services are tailored to CBSE and state board curricula, with customized lesson plans for different age groups and learning abilities.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyServices;