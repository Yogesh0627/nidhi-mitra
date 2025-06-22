'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button' // Adjust import based on your UI library

const ExperienceSummary = () => {
  return (
    <section className=" text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-500">
            Teaching Philosophy
          </h1>

          <p className="text-lg font-semibold text-white">
            Dedicated educator with 2+ years of hands-on experience across 
            primary and upper-primary levels in diverse school environments.
          </p>

          <div className="space-y-4">
            <p className="text-gray-400 text-base">
              My teaching journey includes internships at <span className="text-green-400">Sarvodya Kanya Vidyalaya</span>, 
              <span className="text-green-400"> Bal Bharti Public School</span>, and <span className="text-green-400">MCD schools</span>, 
              where I&apos;ve developed expertise in activity-based learning, classroom management, 
              and integrating technology through PowerPoint and online tools.
            </p>

            <p className="text-gray-400 text-base">
              I specialize in creating <span className="text-yellow-400">interactive lesson plans</span> that cater to diverse 
              learning styles, maintaining <span className="text-yellow-400">comprehensive student records</span>, and fostering 
              <span className="text-yellow-400"> safe, inclusive environments</span> where every child can thrive.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">B.El.Ed graduate from Delhi University</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">Fluent in English & Hindi instruction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">Specialized in primary education</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">Tech-integrated teaching methods</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              asChild
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition"
            >
              <a href="/cv/nidhi-cv.pdf" download>
                Download CV
              </a>
            </Button>
            {/* <Button
              variant="outline"
              asChild
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition"
            >
              <a href="#contact">
                Contact for Opportunities
              </a>
            </Button> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-[300px] h-[350px] border-2 border-green-500/30">
            <Image
              src="/assets/nidhi.jpg" // Consider using an action shot of you teaching
              alt="Nidhi Mitra teaching"
              width={350}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-green-500/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">Nidhi Mitra</p>
              <p className="text-green-300 text-sm">Elementary Education Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSummary