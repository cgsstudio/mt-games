import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import texture1 from '../image/texture-01.png';
import texture2 from '../image/texture-02.png';
import rightarrow from '../image/icons/reviewright.png';
import leftarrow from '../image/icons/reviewleft.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function PlayerReviewCarousel() {
  const [swiper, setSwiper] = useState(null);
  
  const reviews = [
    {
      quote: "Gameplay smooth like butter. Rebel Speedrun is my new favorite game no cap.",
      author: "CaptainZ"
    },
    {
      quote: "Best gaming experience of my life. The graphics are unreal and the story is mind-blowing.",
      author: "GamerX"
    },
    {
      quote: "Absolutely addictive. I've been playing for 48 hours straight. Send help.",
      author: "NightOwl"
    }
  ];

  // Handle navigation button clicks
  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  
  return (
    <div className="w-full bg-black text-white py-16 relative review-sec px-4">
      {/* Top divider image */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <img 
          src={texture1} 
          alt="Top divider" 
          className="w-full object-cover"
        />
      </div>
      
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4 pt-8">
        <h2 className="text-[32px] text-center md:text-left md:text-4xl uppercase tracking-widest cygun mb-8">Player Reviews</h2>
        
        <div className="flex flex-col items-center justify-center min-h-52 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={setSwiper}
            className="w-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className='flex items-center justify-center'>
                <div className="max-w-3xl pb-16">
                  <blockquote className="text-center mb-4">
                    <p className="text-xl md:text-3xl orbitron-medium leading-relaxed">
                      "{review.quote}"
                    </p>
                  </blockquote>
                  
                  <cite className="flex justify-end w-full pr-16">
                    <span className="text-[#00ade1] text-lg orbitron-medium not-italic">- {review.author}</span>
                  </cite>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation buttons positioned at the bottom */}
          <div className="flex justify-center w-full mt-4 absolute bottom-0 z-10">
            <button 
              onClick={goPrev}
              className="relative left-0 md:left-3"
              aria-label="Previous review"
            >
              <img 
                src={leftarrow} 
                alt="Previous" 
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
              />
            </button>
            <button 
              onClick={goNext}
              className="relative right-0 md:right-3"
              aria-label="Next review"
            >
              <img 
                src={rightarrow} 
                alt="Next" 
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom divider image */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img 
          src={texture2} 
          alt="Bottom divider" 
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}