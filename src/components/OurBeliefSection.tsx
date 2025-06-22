'use client'

import React, { useEffect, useState } from 'react'
import beliefs from '@/data/ourbeliefs.json'
import { Sparkles } from 'lucide-react'

const OurBeliefsSection = () => {
  const [current, setCurrent] = useState(0)
  const total = beliefs.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 6000)
    return () => clearInterval(interval)
  }, [total])

  const { quote, author } = beliefs[current]

  return (
    <section className="bg-[#0f1115] text-white py-28 md:py-36  px-4">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-center">
        {/* LEFT: Title + Description */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-yellow-400 text-base">•</span>
            <span className="text-white">Our Beliefs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Inspiring Thoughts that Shape Young Minds
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Timeless ideas and philosophies that reflect our deep-rooted commitment to education. These thoughts inspire curiosity, nurture compassion, and foster lifelong learning in young minds. We believe great teaching is grounded in timeless wisdom.
          </p>
        </div>

        {/* RIGHT: Quote Carousel */}
        <div className="md:w-1/2 w-full bg-[#1a1e23] p-8 rounded-xl shadow-lg border border-[#1f2a38] mt-6 md:mt-0">
          <Sparkles className="text-green-500 mb-4 w-6 h-6" />
          <p className="text-gray-200 italic text-lg leading-relaxed">
            “{quote}”
          </p>
          <p className="mt-4 text-right text-green-400 font-semibold text-sm">
            — {author}
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurBeliefsSection
