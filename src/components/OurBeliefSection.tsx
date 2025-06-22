'use client'

import React, { useEffect, useState } from 'react'
import beliefs from '@/data/ourbeliefs.json'
import { Sparkles, Quote } from 'lucide-react'

const OurBeliefsSection = () => {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const total = beliefs.length

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total)
        setIsTransitioning(false)
      }, 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [total])

  const { quote, author } = beliefs[current]

  return (
    <section className="bg-[#0f1115] text-white py-28 md:py-36 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT: Title + Description */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-[2px] bg-green-500" />
              <span className="text-sm uppercase tracking-wider text-green-400">
                Our Educational Philosophy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-green-500">Ideas That </span>
              <span className="text-white">Shape </span>
              <span className="text-yellow-400">Young Minds</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              These guiding principles reflect our commitment to nurturing curious, compassionate learners through timeless educational wisdom.
            </p>
            
            {/* <div className="flex flex-wrap gap-4 pt-4">
              {beliefs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrent(index)
                      setIsTransitioning(false)
                    }, 200)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-green-500 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`View belief ${index + 1}`}
                />
              ))}
            </div> */}
          </div>

          {/* RIGHT: Quote Carousel */}
          <div className="lg:w-1/2 w-full relative">
            <div className={`relative bg-gradient-to-br from-[#1a1e23] to-[#1f2a38] p-8 rounded-xl shadow-2xl border border-[#2a3748] transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="absolute top-6 right-6 text-green-500/20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-full">
                  <Sparkles className="text-green-500 w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-green-400">Educational Principle</span>
              </div>
              
              <blockquote className="relative">
                <p className="text-xl md:text-2xl text-gray-100 italic leading-relaxed">
                  “{quote}”
                </p>
                <footer className="mt-6 text-right">
                  <p className="text-green-400 font-medium">
                    — {author}
                  </p>
                </footer>
              </blockquote>
              
              {/* <div className="absolute -bottom-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold rotate-3 shadow-md">
                {current + 1}/{total}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBeliefsSection