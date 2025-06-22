"use client";

import { useState } from "react";
import {
  Clapperboard,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Film,
  Heart,
  Brain,
} from "lucide-react";

interface Movie {
  title: string;
  director: string;
  description: string;
  link: string;
  ageGroup: string;
  category: string;
  keyLearning: string;
  year: number;
}

const MovieRecommendations = () => {
  const [showAll, setShowAll] = useState(false);

  const allMovies: Movie[] = [
    {
      title: "The Pursuit of Happyness",
      director: "Gabriele Muccino",
      year: 2006,
      description:
        "Based on a true story, this film showcases perseverance through homelessness to achieve career success.",
      link: "https://example.com/pursuit-happyness",
      ageGroup: "12+",
      category: "Biography",
      keyLearning: "Resilience and never giving up on dreams",
    },
    {
      title: "Akeelah and the Bee",
      director: "Doug Atchison",
      year: 2006,
      description:
        "A young girl from South Los Angeles strives to compete in the National Spelling Bee despite challenges.",
      link: "https://example.com/akeelah-bee",
      ageGroup: "10+",
      category: "Drama",
      keyLearning: "Overcoming socioeconomic barriers through education",
    },
    {
      title: "Inside Out",
      director: "Pete Docter",
      year: 2015,
      description:
        "Animated adventure through a young girl's mind as she processes a big life change.",
      link: "https://example.com/inside-out",
      ageGroup: "8+",
      category: "Animation",
      keyLearning: "Understanding and managing emotions",
    },
    {
      title: "Hidden Figures",
      director: "Theodore Melfi",
      year: 2016,
      description:
        "The untold story of Black women mathematicians who played vital roles at NASA during the space race.",
      link: "https://example.com/hidden-figures",
      ageGroup: "12+",
      category: "Historical",
      keyLearning: "Breaking barriers in STEM fields",
    },
    {
      title: "The Boy Who Harnessed the Wind",
      director: "Chiwetel Ejiofor",
      year: 2019,
      description:
        "A Malawian boy builds a wind turbine to save his village from famine.",
      link: "https://example.com/harnessed-wind",
      ageGroup: "10+",
      category: "Drama",
      keyLearning: "Innovation through adversity",
    },
    {
      title: "Soul",
      director: "Pete Docter",
      year: 2020,
      description:
        "A jazz musician loses his passion and explores the meaning of life before his big break.",
      link: "https://example.com/soul-pixar",
      ageGroup: "8+",
      category: "Animation",
      keyLearning: "Finding purpose beyond success",
    },
  ];

  const displayedMovies = showAll ? allMovies : allMovies.slice(0, 3);

  return (
    <div className="bg-[#0f1115] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Summary Panel */}
        <div className="bg-gradient-to-br from-[#1a1e23] to-[#1f2a38] border border-[#2a3748] rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Clapperboard className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">
                  Why These <span className="text-blue-400">Movies?</span>
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                These carefully selected films combine entertainment with
                powerful life lessons. Each movie has been chosen for its
                ability to inspire, teach resilience, and spark meaningful
                conversations about values and personal growth.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Heart className="w-5 h-5 text-red-400" />,
                    text: "Emotional Intelligence",
                  },
                  {
                    icon: <Brain className="w-5 h-5 text-yellow-400" />,
                    text: "Critical Thinking",
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 text-green-400" />,
                    text: "Inspiration",
                  },
                  {
                    icon: <Film className="w-5 h-5 text-purple-400" />,
                    text: "Quality Storytelling",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-[#0f1115]/50 border border-[#2a3748] rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
               Movies Selection Criteria
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Bite-sized learning arcs", // Episodic structure with clear takeaways
                  "High production quality", // Visuals/sound enhance engagement
                  "Interactive elements", // Quizzes, pauses for reflection, etc.
                  "Real-world applications", // Shows skills in action (e.g., science experiments)
                  "Platform analytics", // Track progress (Netflix/YouTube learning paths)
                  "Community engagement",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <Clapperboard className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Curated <span className="text-blue-400">Movie List</span>
            </h2>
          </div>

          {allMovies.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All ({allMovies.length})</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedMovies.map((movie, index) => (
            <div
              key={index}
              className="bg-[#1a1e23] border border-[#2a3748] rounded-xl p-6 hover:border-blue-500/30 transition-all h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {movie.title}
                  </h3>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    {movie.year}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Directed by {movie.director}
                </p>
                <p className="text-gray-300 mb-4">{movie.description}</p>

                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Key Learning:</p>
                  <p className="text-sm text-blue-400">{movie.keyLearning}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    {movie.category}
                  </span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {movie.ageGroup}
                  </span>
                </div>
              </div>
              {/* <a
                href={movie.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                Learn more →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRecommendations;
