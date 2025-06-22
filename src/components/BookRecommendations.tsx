"use client";

import { useState } from "react";
import {
  BookOpenText,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Bookmark,
  Award,
} from "lucide-react";

interface Book {
  title: string;
  author: string;
  description: string;
  link: string;
  ageGroup: string;
  category: string;
  keyLearning?: string;
}

const BookRecommendations = () => {
  const [showAll, setShowAll] = useState(false);

  const allBooks: Book[] = [
    {
      title: "The Growth Mindset",
      author: "Carol Dweck",
      description:
        "Teaches students about developing resilience and love for learning through scientific research and practical examples.",
      link: "https://example.com/growth-mindset",
      ageGroup: "10+",
      category: "Psychology",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      description:
        "Beautiful philosophical lessons about life, relationships, and what truly matters, told through a children's story.",
      link: "https://example.com/little-prince",
      ageGroup: "8+",
      category: "Philosophy",
    },
    {
      title: "Wonder",
      author: "R.J. Palacio",
      description:
        "A heartwarming story about kindness, empathy, and accepting differences, perfect for building emotional intelligence.",
      link: "https://example.com/wonder",
      ageGroup: "9+",
      category: "Fiction",
    },
    {
      title: "The Boy Who Harnessed the Wind",
      author: "William Kamkwamba",
      description:
        "True story of innovation and perseverance that inspires creative problem-solving.",
      link: "https://example.com/wind-harnessed",
      ageGroup: "12+",
      category: "Biography",
    },
    {
      title: "The Dot",
      author: "Peter H. Reynolds",
      description:
        "Encourages children to embrace their creativity and take the first step in expressing themselves.",
      link: "https://example.com/the-dot",
      ageGroup: "5+",
      category: "Creativity",
    },
    {
      title: "Matilda",
      author: "Roald Dahl",
      description:
        "Celebrates the power of reading and intelligence, with themes of standing up against injustice.",
      link: "https://example.com/matilda",
      ageGroup: "8+",
      category: "Fiction",
    },
  ];

  const displayedBooks = showAll ? allBooks : allBooks.slice(0, 3);

  return (
    <div className="bg-[#0f1115] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Summary Panel */}
        <div className="bg-gradient-to-br from-[#1a1e23] to-[#1f2a38] border border-[#2a3748] rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <BookOpenText className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">
                  Why These <span className="text-green-500">Books?</span>
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                These carefully selected books help students develop essential
                life skills beyond academics. Each title has been chosen for its
                ability to inspire curiosity, build emotional intelligence, and
                foster a lifelong love of learning.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Sparkles className="w-5 h-5" />,
                    text: "Builds Character",
                  },
                  {
                    icon: <Bookmark className="w-5 h-5" />,
                    text: "Enhances Creativity",
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    text: "Promotes Resilience",
                  },
                  {
                    icon: <BookOpenText className="w-5 h-5" />,
                    text: "Improves Literacy",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-full text-green-400">
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
                Books Selection Criteria
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Ignites curiosity & inquiry", // Sparks questions, not just answers
                  "Depth over breadth", // Explores topics thoroughly (e.g., "The Boy Who Harnessed the Wind")
                  "Multidisciplinary connections", // Links science/art/history (e.g., "The Phantom Tollbooth")
                  "Encourages independent exploration", // Guides readers to seek more (e.g., "What If?" by R. Munroe)
                  "Thought-provoking discourse", // Debates, open-ended questions (e.g., "The Giver")
                  "Cultivates critical analysis", // Teaches how to evaluate sources/claims
                  "Inspires real-world action",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/20 p-3 rounded-full">
              <BookOpenText className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Curated <span className="text-green-500">Book List</span>
            </h2>
          </div>

          {allBooks.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All ({allBooks.length})</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBooks.map((book, index) => (
            <div
              key={index}
              className="bg-[#1a1e23] border border-[#2a3748] rounded-xl p-6 hover:border-green-500/30 transition-all h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{book.title}</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {book.ageGroup}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">by {book.author}</p>
                <p className="text-gray-300 mb-4">{book.description}</p>

                {book.keyLearning && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">Key Learning:</p>
                    <p className="text-sm text-green-400">{book.keyLearning}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
              </div>
              {/* <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-green-400 hover:text-green-300 hover:underline transition-colors"
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

export default BookRecommendations;
