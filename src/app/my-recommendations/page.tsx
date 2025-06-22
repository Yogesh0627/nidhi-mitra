import AnimeRecommendations from '@/components/AnimeRecommendations'
import BookRecommendations from '@/components/BookRecommendations'
import MovieRecommendations from '@/components/MovieRecommendations'
import RecommendationSummary from '@/components/RecommendationSummary'
import WebSeriesRecommendations from '@/components/WebseriesRecommendations'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='mt-10'>
        <RecommendationSummary/>
    </div>
    <div className='mt-10'>
        <BookRecommendations/>
    </div>
    <div className='mt-10'>
        <MovieRecommendations/>
    </div>
    <div className='mt-10'>
        <WebSeriesRecommendations/>
    </div>
    <div className='mt-10'>
        <AnimeRecommendations/>
    </div>
    </>
  )
}

export default page