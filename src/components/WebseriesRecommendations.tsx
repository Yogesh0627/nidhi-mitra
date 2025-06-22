"use client";

import { useState } from 'react';
import { Tv2, ChevronDown, ChevronUp, Sparkles, Clock, Users, Languages, BrainCircuit } from 'lucide-react';

interface WebSeries {
  title: string;
  creator: string;
  description: string;
  link: string;
  ageGroup: string;
  category: string;
  keyLearning: string;
  seasons: number;
  episodeLength: string;
}

const WebSeriesRecommendations = () => {
  const [showAll, setShowAll] = useState(false);
  
  const allSeries: WebSeries[] = [
    {
      title: "Brainchild",
      creator: "Pharrell Williams",
      seasons: 1,
      episodeLength: "25-30 mins",
      description: "Makes science relatable through fun experiments and real-world applications.",
      link: "https://example.com/brainchild",
      ageGroup: "9+",
      category: "Science",
      keyLearning: "Scientific concepts made accessible"
    },
    {
      title: "The Who Was? Show",
      creator: "Netflix",
      seasons: 2,
      episodeLength: "23 mins",
      description: "Historical figures come to life in this quirky, educational sketch comedy.",
      link: "https://example.com/who-was-show",
      ageGroup: "8+",
      category: "History",
      keyLearning: "Historical events through humor"
    },
    {
      title: "Ada Twist, Scientist",
      creator: "Chris Nee",
      seasons: 3,
      episodeLength: "24 mins",
      description: "Animated series following a curious young scientist solving problems through experimentation.",
      link: "https://example.com/ada-twist",
      ageGroup: "6+",
      category: "STEM",
      keyLearning: "Scientific method & curiosity"
    },
    {
      title: "Ask the StoryBots",
      creator: "Evan Spiridellis",
      seasons: 3,
      episodeLength: "20-25 mins",
      description: "Animated characters answer kids' big questions about how the world works.",
      link: "https://example.com/storybots",
      ageGroup: "5+",
      category: "General Knowledge",
      keyLearning: "Critical thinking fundamentals"
    },
    {
      title: "Odd Squad",
      creator: "Tim McKeon",
      seasons: 4,
      episodeLength: "22 mins",
      description: "Live-action series where kid agents use math to solve unusual cases.",
      link: "https://example.com/odd-squad",
      ageGroup: "7+",
      category: "Mathematics",
      keyLearning: "Practical math applications"
    },
    {
      title: "Xavier Riddle and the Secret Museum",
      creator: "Brad Meltzer",
      seasons: 2,
      episodeLength: "22 mins",
      description: "Kids travel through time to meet historical heroes when they were children.",
      link: "https://example.com/xavier-riddle",
      ageGroup: "6+",
      category: "Social Studies",
      keyLearning: "Character development through history"
    }
  ];

  const displayedSeries = showAll ? allSeries : allSeries.slice(0, 3);

  return (
    <div className="bg-[#0f1115] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Summary Panel with Unique Web Series Criteria */}
        <div className="bg-gradient-to-br from-[#1a1e23] to-[#232a38] border border-[#2a3748] rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Tv2 className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">
                  Why These <span className="text-purple-400">Web Series?</span>
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                These series are selected for their educational value in bite-sized episodes perfect for young attention spans. 
                Unlike movies, they provide recurring learning opportunities and build knowledge progressively across episodes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Clock className="w-5 h-5 text-yellow-400" />, text: "Encourages critical thinking & problem-solving" },
                  { icon: <Users className="w-5 h-5 text-green-400" />, text: "Child Protagonists" },
                  { icon: <Languages className="w-5 h-5 text-blue-400" />, text: "Multilingual Options" },
                  { icon: <BrainCircuit className="w-5 h-5 text-red-400" />, text: "Progressive Learning" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/3 bg-[#0f1115]/50 border border-[#2a3748] rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Web-Series Selection Criteria
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Encourages critical thinking & problem-solving",
                  "Recurring educational themes",
                  "Age-appropriate protagonists",
                  "Progressive skill building",
                  "Available on common platforms",
                  "Closed captioning available",
                  "Minimal advertisements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Series Grid */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Tv2 className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Curated <span className="text-purple-400">Web Series</span>
            </h2>
          </div>
          
          {allSeries.length > 3 && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All ({allSeries.length})</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSeries.map((series, index) => (
            <div 
              key={index}
              className="bg-[#1a1e23] border border-[#2a3748] rounded-xl p-6 hover:border-purple-500/30 transition-all h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{series.title}</h3>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    {series.seasons} season{series.seasons !== 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-1">By {series.creator}</p>
                <p className="text-xs text-gray-500 mb-3">{series.episodeLength} episodes</p>
                <p className="text-gray-300 mb-4">{series.description}</p>
                
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Educational Focus:</p>
                  <p className="text-sm text-purple-400">{series.keyLearning}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    {series.category}
                  </span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {series.ageGroup}
                  </span>
                </div>
              </div>
              {/* <a
                href={series.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-purple-400 hover:text-purple-300 hover:underline transition-colors"
              >
                Where to Watch →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebSeriesRecommendations;