"use client";

import { useState } from 'react';
import { JapaneseYen, ChevronDown, ChevronUp, Sparkles, Heart, Sword, Brain, BookOpen } from 'lucide-react';

interface Anime {
  title: string;
  studio: string;
  description: string;
  link: string;
  ageGroup: string;
  category: string;
  keyLearning: string;
  episodes: number;
  languageOptions: string[];
}

const AnimeRecommendations = () => {
  const [showAll, setShowAll] = useState(false);
  
  const allAnime: Anime[] = [
    {
      title: "Cells at Work!",
      studio: "David Production",
      episodes: 13,
      description: "Educational series depicting human body cells as characters fighting off viruses and bacteria.",
      link: "https://example.com/cells-at-work",
      ageGroup: "12+",
      category: "Biology",
      keyLearning: "Human anatomy through personification",
      languageOptions: ["Japanese", "English", "Hindi"]
    },
    {
      title: "Silver Spoon",
      studio: "A-1 Pictures",
      episodes: 22,
      description: "City boy attends agricultural school, learning about farming, food production, and rural life.",
      link: "https://example.com/silver-spoon",
      ageGroup: "13+",
      category: "Agriculture",
      keyLearning: "Sustainable farming practices",
      languageOptions: ["Japanese", "English"]
    },
    {
      title: "Dr. Stone",
      studio: "TMS Entertainment",
      episodes: 35,
      description: "Scientific genius rebuilds civilization from scratch after humanity is petrified for millennia.",
      link: "https://example.com/dr-stone",
      ageGroup: "14+",
      category: "Science",
      keyLearning: "Practical applications of scientific principles",
      languageOptions: ["Japanese", "English", "Spanish"]
    },
    {
      title: "March Comes In Like a Lion",
      studio: "SHAFT",
      episodes: 44,
      description: "Young shogi player navigates professional competitions while forming meaningful relationships.",
      link: "https://example.com/march-lion",
      ageGroup: "15+",
      category: "Psychology",
      keyLearning: "Emotional intelligence & resilience",
      languageOptions: ["Japanese", "English"]
    },
    {
      title: "Keep Your Hands Off Eizouken!",
      studio: "Science SARU",
      episodes: 12,
      description: "High school girls start an animation club, detailing the creative process behind anime production.",
      link: "https://example.com/eizouken",
      ageGroup: "12+",
      category: "Art Education",
      keyLearning: "Animation principles & creative collaboration",
      languageOptions: ["Japanese", "English"]
    },
    {
      title: "Barakamon",
      studio: "Kinema Citrus",
      episodes: 12,
      description: "Calligrapher rediscovers his passion while living on a rural island with quirky locals.",
      link: "https://example.com/barakamon",
      ageGroup: "13+",
      category: "Arts",
      keyLearning: "Cultural appreciation & creative expression",
      languageOptions: ["Japanese", "English"]
    }
  ];

  const displayedAnime = showAll ? allAnime : allAnime.slice(0, 3);

  return (
    <div className="bg-[#0f1115] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Summary Panel with Anime-Specific Criteria */}
        <div className="bg-gradient-to-br from-[#1a1e23] to-[#2a1e38] border border-[#3a2748] rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <JapaneseYen className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl font-bold">
                  Why These <span className="text-pink-400">Anime?</span>
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                These anime are selected for their unique ability to educate through engaging storytelling and visual metaphors. 
                Unlike Western animation, they often explore complex themes through cultural lenses while teaching valuable skills.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <BookOpen className="w-5 h-5 text-blue-400" />, text: "Subject Mastery" },
                  { icon: <Heart className="w-5 h-5 text-red-400" />, text: "Emotional Depth" },
                  { icon: <Brain className="w-5 h-5 text-green-400" />, text: "Critical Thinking" },
                  { icon: <Sword className="w-5 h-5 text-yellow-400" />, text: "Cultural Context" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-pink-500/20 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/3 bg-[#0f1115]/50 border border-[#3a2748] rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Anime Selection Criteria
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Educational content woven into narrative",
                  "Accurate cultural representation",
                  "Minimal fan service/ecchi content",
                  "Dubbed/subtitled options available",
                  "Positive character development",
                  "Relevant to academic subjects",
                  "Appropriate for Western classrooms"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Anime Grid */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-pink-500/20 p-3 rounded-full">
              <JapaneseYen className="w-6 h-6 text-pink-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Curated <span className="text-pink-400">Anime List</span>
            </h2>
          </div>
          
          {allAnime.length > 3 && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 text-sm text-pink-400 hover:text-pink-300 transition-colors"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All ({allAnime.length})</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedAnime.map((anime, index) => (
            <div 
              key={index}
              className="bg-[#1a1e23] border border-[#3a2748] rounded-xl p-6 hover:border-pink-500/30 transition-all h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{anime.title}</h3>
                  <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">
                    {anime.episodes} eps
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-1">By {anime.studio}</p>
                <p className="text-gray-300 mb-4">{anime.description}</p>
                
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Educational Value:</p>
                  <p className="text-sm text-pink-400">{anime.keyLearning}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">
                    {anime.category}
                  </span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {anime.ageGroup}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {anime.languageOptions.map((lang, i) => (
                    <span key={i} className="text-xs bg-[#2a2748] text-gray-300 px-2 py-1 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              {/* <a
                href={anime.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-pink-400 hover:text-pink-300 hover:underline transition-colors"
              >
                Watch Options →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeRecommendations;