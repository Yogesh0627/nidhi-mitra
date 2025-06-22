"use client";

import { Quote, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import testimonials from "@/data/testimonial.json";

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, relation, message, rating } = testimonials[current];

  return (
    <section className="bg-[#0f1115] text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-10 h-[2px] bg-white"></span>
            <span className="text-yellow-400 text-base">•</span>
            <span className="text-white font-semibold text-sm md:text-base">Testimonials</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-green-500">
            Happy Students
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative flex flex-col items-center text-center space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold text-white uppercase">
            {name[0]}
          </div>

          <Quote className="text-green-500 text-4xl md:text-5xl absolute right-4 top-0 md:right-[-50px] md:top-0 opacity-70" />

          <p className="text-base md:text-lg text-gray-200 font-medium italic px-2">
            “{message}”
          </p>

          <p className="text-green-500 font-semibold text-lg">{name}</p>
          <p className="text-sm text-gray-400">{relation}</p>

          {/* Rating */}
          <div className="flex gap-1 justify-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={`filled-${i}`} className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
            ))}
            {Array.from({ length: 5 - rating }).map((_, i) => (
              <Star key={`empty-${i}`} className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                current === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
