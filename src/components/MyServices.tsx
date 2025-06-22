import React from "react";

const MyServices = () => {
  const services = [
    {
      title: "Creative Lesson Planning",
      description:
        "Designing engaging and interactive lessons to make learning fun and impactful.",
      icon: "🧠",
    },
    {
      title: "Bilingual Teaching",
      description:
        "Fluent in English and Hindi to teach diverse student groups effectively.",
      icon: "🗣️",
    },
    {
      title: "Child Development Activities",
      description:
        "Organizing field trips, storytelling, and hands-on events to boost learning.",
      icon: "🎨",
    },
    {
      title: "Tech-Integrated Teaching",
      description:
        "Using PPTs, online tools, and tests to deliver modern education efficiently.",
      icon: "💻",
    },
  ];

  return (
    <section className="bg-[#0f1115] text-white py-20 px-20 w-full">
      <div className="container mx-auto px-4 text-center space-y-6">
        <p className="uppercase tracking-wider text-sm flex items-center justify-center gap-2">
          <span className="w-10 h-[2px] bg-white" />
          <span className="text-yellow-400 text-base">•</span>
          My Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-green-500">
          What Can I Do Best ?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#11131a] p-6 rounded-lg shadow-md hover:shadow-green-600 transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl bg-green-500 text-black rounded-full">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
