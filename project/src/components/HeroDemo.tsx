import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const slides = [
  {
    id: 1,
    title: (
      <>
        <span className="text-yellow-300">EARN</span>{" "}
        <span className="text-white">CREDITS</span>{" "}
        <span className="text-white">FOR</span>{" "}
        <span className="text-orange-500">REFERRING</span>{" "}
        <span className="text-white">YOUR</span>{" "}
        <span className="text-yellow-300">FRIENDS</span>
      </>
    ),
    subtitle: "JOIN OUR REFERRAL PROGRAM NOW & EARN CREDITS FOR EVERY SIGN UP."
  },
  // Add more slides here with different content
  {
    id: 2,
    title: (
      <>
        <span className="text-yellow-300">COMPETE</span>{" "}
        <span className="text-white">FOR</span>{" "}
        <span className="text-orange-500">PRIZES</span>{" "}
        <span className="text-white">AND</span>{" "}
        <span className="text-yellow-300">GLORY</span>
      </>
    ),
    subtitle: "TEST YOUR SKILLS IN DAILY TOURNAMENTS WITH AMAZING REWARDS."
  }
];

// Custom navigation arrow components
const LeftArrow = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 8L11 16L19 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrow = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8L21 16L13 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeroDemo() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto p-4">
        {/* Main heading */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          PLAY TO WIN. PLAY FOR KEEPS.
        </h1>

        {/* Description text */}
        <p className="text-sm text-blue-100 mb-4">
          MTgames is your hub for the newest games and most lucrative prizes. Play for FREE or test your skills 
          by adding your entry fee to a contest prize pool and competing for your chance at cash, prizes, and 
          glory. All games available on iOS, Android, PC, Mac, and in Browser.
        </p>

        {/* Content layout with slider and navigation */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left content area with slider */}
          <div className="w-full md:w-2/3">
            <div className="relative bg-black/40 rounded-lg overflow-hidden border border-blue-500/30">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: '.custom-swiper-next',
                  prevEl: '.custom-swiper-prev',
                }}
                pagination={{ 
                  clickable: true,
                  el: '.custom-pagination',
                  bulletClass: 'swiper-pagination-bullet bg-gray-400 inline-block w-2 h-2 rounded-full mx-1',
                  bulletActiveClass: 'swiper-pagination-bullet-active bg-white'
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="aspect-video"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-8 text-center">
                          <h2 className="text-xl md:text-3xl font-bold">
                            {slide.title}
                          </h2>
                          <p className="text-xs md:text-sm text-white mt-2">
                            {slide.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Avatar images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-2">
                          <div className="flex items-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden"></div>
                            <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden -ml-4"></div>
                            <div className="w-20 h-20 bg-blue-800 rounded-full overflow-hidden -ml-4 z-10"></div>
                            <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden -ml-4"></div>
                            <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden -ml-4"></div>
                          </div>
                        </div>
                      </div>

                      {/* Refer button */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md flex items-center">
                          <ChevronRight className="h-6 w-6" />
                          <span className="px-2">REFER A FRIEND</span>
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation arrows */}
              <div className="custom-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <LeftArrow />
              </div>
              <div className="custom-swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <RightArrow />
              </div>
              
              {/* Custom pagination dots */}
              <div className="custom-pagination absolute bottom-1 left-1/2 transform -translate-x-1/2 flex justify-center z-10"></div>
            </div>
          </div>

          {/* Right sidebar navigation - Perfectly aligned with slider */}
          <div className="w-full md:w-1/3 flex flex-col justify-between h-full">
            {["Sign up", "Contests", "Winners", "About"].map((item, index) => (
              <div 
                key={index}
                className="bg-black/40 h-1/4 rounded-lg border border-blue-500/30 flex items-center hover:bg-black/60 transition-all cursor-pointer mb-4"
              >
                <div className="flex justify-between items-center w-full px-4">
                  <span className="text-lg text-white font-medium">{item}</span>
                  <div className="flex text-pink-500">
                    <ChevronRight className="h-6 w-6" />
                    <ChevronRight className="h-6 w-6 -ml-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}