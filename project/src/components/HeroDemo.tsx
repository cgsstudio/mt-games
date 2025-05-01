import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import your images
const games = [
  {
    id: 1,
    title: "REBEL SPEEDRUN",
    image: "/src/image/TTR-BANNER.png",
    description: "Play for FREE or test your skills in pay to enter contests"
  },
  // Add more games as needed
];

const HeroDemo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#0f1033] to-[#0a0a1f] overflow-hidden">
      {/* Top shape divider */}
      <div className="absolute top-0 left-0 w-full">
        <img src="/src/image/texture-01.png" alt="Top Shape" className="w-full object-cover" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wider">
            PLAY TO WIN. PLAY FOR KEEPS.
          </h1>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">
            MTgames is your hub for the newest games and most lucrative prizes. Play for FREE or
            test your skills in pay to enter (?) contests for your chance at cash, prizes, and glory.
          </p>
          <p className="text-gray-400 mt-2">
            All games available on iOS, Android, PC, Mac, and in Browser.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-8 items-center">
          {/* Game Carousel Column - 75% width */}
          <div className="w-[75%]">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/9]"
                >
                  <img
                    src={games[currentSlide].image}
                    alt={games[currentSlide].title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-8 left-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full 
                      transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      PLAY NOW
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                  <div className="absolute bottom-8 right-8">
                    <button className="bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm text-white 
                      p-2 rounded-full transition-all duration-300">
                      <span className="text-2xl">ℹ</span>
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 
                  text-white p-4 rounded-full transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 
                  text-white p-4 rounded-full transition-all duration-300"
              >
                →
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {games.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${currentSlide === index ? 'bg-blue-500 w-4' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons Column - 25% width */}
          <div className="w-[25%] space-y-4">
            {['Games', 'Contests', 'Shop', 'Winners'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                className="w-full bg-[#1a1a3a] hover:bg-[#2a2a4a] text-white px-6 py-4 rounded-lg 
                  flex items-center justify-between gap-4 transition-all duration-300"
              >
                <span className="text-lg font-medium">{item}</span>
                <span className="text-purple-400 text-2xl">»</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom shape divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/src/image/texture-02.png" alt="Bottom Shape" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default HeroDemo;
