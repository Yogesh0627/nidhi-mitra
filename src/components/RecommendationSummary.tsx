import { BookOpenText, Clapperboard, Tv2, Bookmark, Sparkles } from "lucide-react";

const RecommendationSummary = () => {
  return (
    <section className="bg-[#0f1115] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-[2px] bg-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-400">
              Curated Learning
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-green-500">Resources That </span>
            <span className="text-white">Inspire </span>
            <span className="text-yellow-400">Young Minds</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Carefully selected books, shows, and media that combine entertainment with valuable life lessons and educational content.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { icon: <BookOpenText className="w-5 h-5" />, text: "100+ Books" },
              { icon: <Clapperboard className="w-5 h-5" />, text: "25+ Movies" },
              { icon: <Tv2 className="w-5 h-5" />, text: "15+ Shows" },
              { icon: <Bookmark className="w-5 h-5" />, text: "10+ Anime" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                  {item.icon}
                </div>
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* <div className="pt-4">
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3"
            >
              View All Recommendations
            </Button>
          </div> */}
        </div>

        {/* Right: Visual Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-[#1a1e23] border border-[#2a3748] rounded-xl p-6 hover:border-green-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-lg">Why These Recommendations?</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Aligned with curriculum standards",
                "Promote critical thinking",
                "Encourage creativity",
                "Age-appropriate content",
                "Diverse perspectives"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#1a1e23] to-[#1f2a38] border border-[#2a3748] rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Recent Favorite</h3>
            <div className="flex items-start gap-4">
              <div className="bg-green-500/10 p-3 rounded-lg">
                <BookOpenText className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">The Boy Who Loved Math</h4>
                <p className="text-sm text-gray-400">By Deborah Heiligman</p>
                <p className="text-sm text-gray-300 mt-2">
                  Makes mathematics exciting through the story of Paul Erdős
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSummary;