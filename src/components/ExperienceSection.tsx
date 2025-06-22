'use client'

import React from 'react'
import experienceData from '@/data/experience.json'

const ExperienceSection = () => {
  return (
    <section className="bg-[#0f1115] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider mb-2">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-yellow-400 text-base">•</span>
            <span className="text-white">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Teaching Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative pl-10 pb-16 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-xl text-white font-bold z-10 transition-all duration-300 group-hover:scale-110">
                {exp.icon}
              </div>

              {/* Vertical Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-5 top-10 w-[2px] h-[calc(100%-2.5rem)] bg-green-600/50 z-0" />
              )}

              {/* Experience Card */}
              <div className="ml-5 p-6 bg-[#1a1d25] rounded-lg border-l-4 border-green-500 shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-green-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-yellow-400 text-sm font-semibold bg-blue-900/30 px-3 py-1 rounded-full">
                    {exp.duration}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">▹</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Skills Demonstrated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-blue-900/40 text-green-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection