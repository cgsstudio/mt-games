import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your assets
import mobilebg from '../image/BANNERmobileCONTAINER.png';
import leftarrow from '../image/icons/swiper-left.svg';
import rightarrow from '../image/icons/swiper-right.svg';
import doublearrow from '../image/icons/sign-up-ar-2.svg';

// Sample data (replace with actual images/titles)
const games = [
  {
    image: '/images/game1.jpg',
    title: 'Compete Like a Champion.',
    description: 'Win Real Cash Prizes.'
  },
  {
    image: '/images/game2.jpg',
    title: 'Test Your Skills.',
    description: 'Play For Glory and Rewards.'
  }
];

const MobileHeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="lg:hidden w-full bg-[#050d19] relative"
      style={{
        backgroundImage: `url(${mobilebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex items-center flex-col justify-center py-16 px-4">
        {/* Header */}
        <h1 className="text-white text-[30px] leading-tight text-center cygun-bold">
          PLAY TO WIN.<br />PLAY FOR KEEPS.
        </h1>
        <p className="text-white text-sm text-center leading-tight mt-4 bg-black/60 rounded-xl px-6 py-3 barlow-condensed-medium">
          MTgames is your hub for the newest games and most lucrative prizes. Play for FREE or test your skills by adding your entry fee to a contest prize pool and competing for your chance at cash, prizes, and glory. All games available on iOS, Android, PC, Mac, and in Browser.
        </p>

        {/* Slider */}
        <div className="relative w-full mt-6 [&_.swiper-pagination]:!bottom-4 [&_.swiper-pagination]:!flex [&_.swiper-pagination]:!justify-center [&_.swiper-pagination]:!items-center [&_.swiper-pagination]:!gap-2 [&_.swiper-pagination]:!left-0 [&_.swiper-pagination]:!right-0 [&_.swiper-pagination]:!mx-auto [&_.swiper-pagination-bullet]:!w-3 [&_.swiper-pagination-bullet]:!h-3 [&_.swiper-pagination-bullet]:!bg-white/50 [&_.swiper-pagination-bullet-active]:!bg-white">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="w-full relative rounded-lg overflow-hidden"
          >
            <button type="button" className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
              <img src={leftarrow} alt="Previous" className="w-full h-full" />
            </button>
            <button type="button" className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
              <img src={rightarrow} alt="Next" className="w-full h-full" />
            </button>

            {games.map((game, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px]">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
                    <h2 className="text-pink-500 text-xl font-bold barlow-condensed-medium mb-2">
                      {game.title}
                    </h2>
                    <p className="text-white text-sm">{game.description}</p>
                    <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full text-sm font-bold">
                      SIGN UP NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dropdown Menu */}
        <div className="relative w-full mt-6">
          {isDropdownOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-2 rounded-[15px] overflow-hidden z-20" style={{ background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)' }}>
              {['Sign up', 'Contests', 'Winners', 'About'].map((item) => (
                <button
                  key={item}
                  className="w-full text-center text-white py-4 hover:bg-[#172A3A]/30 transition-colors border-b border-[#1A1033]/30 last:border-none"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full rounded-[15px] py-4 px-6 flex items-center justify-between relative z-10 hover:brightness-110 transition"
            style={{ background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)' }}
          >
            <div className="flex-1" />
            <span className="text-white text-xl font-semibold flex-1 text-center">Sign up</span>
            <div className="flex-1 flex justify-end">
              <img
                src={doublearrow}
                alt="arrow"
                className={`w-6 h-6 transition-transform duration-300 ${isDropdownOpen ? '-rotate-90' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
