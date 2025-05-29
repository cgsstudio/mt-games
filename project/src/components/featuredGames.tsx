import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import rightarrow from '../image/Right-arrow.png';
import leftarrow from '../image/arrow-left.png';
import banner1 from '../image/feature1.png';
import banner2 from '../image/feature2.png';
import banner3 from '../image/feature3.png';
import brawllerlogo from '../image/icons/REBEL-BRAWLERS-LOGO.png';
import speedrunlogo from '../image/icons/speedrunlogo.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface GameImage {
  id: number;
  image: string;
  alt: string;
  locked?: boolean;
  logo: string;
  slug: string;
}

const gameImages: GameImage[] = [
  {
    id: 1,
    image: banner1,
    alt: 'Rebel Speed Runner',
    logo: brawllerlogo,
    slug: 'Rebel Speed Runner'
  },
  {
    id: 2,
    image: banner2,
    alt: 'Rebel Brawlers',
    logo: speedrunlogo,
    slug: 'rebel-brawlers'
  },
  {
    id: 3,
    image: banner3,
    alt: 'Coming Soon',
    locked: true,
    logo: '',
    slug: ''
  },
  {
    id: 4,
    image: banner1,
    alt: 'Rebel Brawlers',
    logo: brawllerlogo,
    slug: 'rebel-brawlers'
  },
];

const FeaturedGames: React.FC = () => {
  const navigate = useNavigate();

  const handleGameClick = (game: GameImage) => {
    if (!game.locked && game.slug) {
      navigate('/game-detail', { 
        state: { 
          game: {
            title: game.alt,
            image: game.image,
            logo: game.logo,
            slug: game.slug
          }
        } 
      });
    }
  };

  const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: '.featured-swiper-next',
      prevEl: '.featured-swiper-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 30 },
      1280: { slidesPerView: 2, spaceBetween: 30 },
      1536: { slidesPerView: 3, spaceBetween: 30 }
    }
  };

  const renderNavigationArrow = (direction: 'prev' | 'next') => (
    <div className={`featured-swiper-${direction} featured-${direction}`}>
      <img 
        src={direction === 'prev' ? leftarrow : rightarrow} 
        alt={direction === 'prev' ? 'Previous' : 'Next'} 
        className="w-full h-full" 
      />
    </div>
  );

  const renderGameSlide = (game: GameImage) => (
    <SwiperSlide 
      key={game.id} 
      className={`pt-4 pb-8 ${!game.locked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      onClick={() => handleGameClick(game)}
    >
      <figure className="relative">
        <img
          src={game.image}
          alt={game.alt}
          className={`w-full object-cover ${!game.locked ? 'hover:opacity-100' : 'opacity-100'} transition-opacity`}
        />
        {game.locked && (
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        )}
      </figure>
    </SwiperSlide>
  );

  return (
    <section className="bg-[#050d19] overflow-hidden py-10" id="featured-games">
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto relative px-4">
        <div className="relative">
          {renderNavigationArrow('prev')}
          
          <div>
            <h2 className="text-[32px] leading-none relative z-10 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 cygun mb-4">
              FEATURED GAMES
            </h2>
            
            <Swiper {...swiperConfig} className="featured-games-swiper">
              {gameImages.map(renderGameSlide)}
            </Swiper>
          </div>
          
          {renderNavigationArrow('next')}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
