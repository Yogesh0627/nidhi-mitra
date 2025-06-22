'use client'
import { Quote, Star } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import testimonials from "@/data/testimonial.json"
// const testimonials = [
//   {
//     id: 'testi-001',
//     name: 'Ritika Sharma',
//     relation: 'Parent of Class 4 Student',
//     message:
//       'Ms. Nidhi is an excellent teacher who truly cares about her students. My daughter has grown so much under her guidance!',
//     rating: 5,
//     date: '2023-12-15',
//   },
//   {
//     id: 'testi-002',
//     name: 'Aman Verma',
//     relation: 'Student, Class 5',
//     message:
//       'Mam makes learning fun with activities and stories. I really enjoy her classes!',
//     rating: 4,
//     date: '2024-02-10',
//   },
//   {
//     id: 'testi-003',
//     name: 'Pooja Mehra',
//     relation: 'Parent of Class 3 Student',
//     message:
//       'Her teaching style is very effective. She is patient and professional. Highly recommended!',
//     rating: 5,
//     date: '2024-03-28',
//   },
// ]

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const { name, relation, message, rating } = testimonials[current]

  return (
    <section className="bg-[#0f1115] text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-12 h-[2px] bg-white"></span>
            <span className="text-yellow-400 text-lg">•</span>
            <span className="text-white font-semibold">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Happy Students
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold text-white uppercase">
            {name[0]}
          </div>

          <Quote className="text-green-500 text-5xl absolute right-2 top-1 md:right-[-60px] md:top-0 opacity-80" />

          <p className="text-lg md:text-xl font-medium text-gray-200 italic">
            “{message}”
          </p>

          <p className="text-green-500 font-bold text-lg">{name}</p>
          <p className="text-sm text-gray-400">{relation}</p>

          {/* Rating */}
          <div className="flex gap-1 justify-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="text-yellow-400" />
            ))}
            {Array.from({ length: 5 - rating }).map((_, i) => (
              <Star key={i} className="text-gray-500" />
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
                current === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
