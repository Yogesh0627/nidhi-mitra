import ExperienceSection from '@/components/ExperienceSection'
import ExperienceSummary from '@/components/ExperienceSummary'
import TestimonialSection from '@/components/TestimonialSection'
import React from 'react'


const page = () => {
  return (
    <>
        <div className='mt-10'>
            <ExperienceSummary/>
        </div>
        <div className='mt-10'>
            <ExperienceSection/>
        </div>
        <div className='mt-10'>
            <TestimonialSection/>
        </div>
    </>
  )
}

export default page