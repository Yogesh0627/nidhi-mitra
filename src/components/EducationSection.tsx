'use client'

import React from 'react'
import educationData from '@/data/education.json'

const EducationSection = () => {
  return (
    <section className="bg-[#0f1115] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider mb-2">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-yellow-400 text-base">•</span>
            <span className="text-white">Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            My Academic Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="relative pl-10 pb-16">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-xl text-black font-bold z-10">
                {edu.icon}
              </div>

              {/* Vertical Line (only if not last item) */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-5 top-10 w-[2px] h-[calc(100%-2.5rem)] bg-green-600 z-0" />
              )}

              {/* Education Details */}
              <div className='ml-5'>
                <p className="text-yellow-400 text-sm font-semibold mb-1">
                  Passing Year: {edu.passingYear}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-green-400 font-medium">{edu.institute}</p>
                <p className="text-gray-400 text-sm mt-1">Grade: {edu.grade}</p>
                {edu.status && (
                  <p className="text-gray-500 text-xs italic">
                    Status: {edu.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
