"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import testimonials from "@/data/testimonial.json";

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { name, relation, message, rating, avatar } = testimonials[current];

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="bg-[#0f1115] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-400">
              Genuine Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-green-500">Trusted </span>
            <span className="text-white">By </span>
            <span className="text-yellow-400">Students & Parents</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real experiences from my teaching journey
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className={`bg-[#1a1e23] border border-[#2a3748] rounded-xl p-8 sm:p-10 shadow-2xl transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Quote className="absolute top-6 right-6 text-green-500/20 w-12 h-12" />
            
            <div className="flex flex-col items-center text-center">
              {/* Avatar with verification badge */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white uppercase">
                  {avatar ? (
                    <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    name[0]
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  Verified
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="relative">
                <p className="text-lg sm:text-xl text-gray-200 italic leading-relaxed mb-6">
                  “{message}”
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-2">
                <p className="text-green-400 font-semibold text-lg">{name}</p>
                <p className="text-sm text-gray-400">{relation}</p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  {testimonials[current].date || "Former Student"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 p-2 rounded-full bg-[#1a1e23] border border-[#2a3748] hover:bg-green-500 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 p-2 rounded-full bg-[#1a1e23] border border-[#2a3748] hover:bg-green-500 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Dots - More subtle */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrent(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? 'bg-green-500 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;