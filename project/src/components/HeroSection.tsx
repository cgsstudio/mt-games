import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroimg from '../image/hero-img.png';
import banner from '../image/SIGN-UP-BANNER.png';
import banner2 from '../image/newbrawwler.svg';
import banner3 from '../image/TECHNO-TUNNEL-RACER LOGO.png';
import rightarrow from "../image/icons/swiperrightnew.png"
import leftarrow from '../image/icons/swiperleftnew.png';
import doublearrow from '../image/icons/sign-up-ar-2.svg';
import shapetop from '../image/icons/BG-55.svg'
import shapebottom from '../image/icons/BG-56.svg';
import signup01 from '../image/icons/sign-up-ar-1.svg';
import signup02 from '../image/icons/sign-up-ar-2.svg';
import videoIcon from '../image/icons/video-icon.svg';
import infoIcon from '../image/icons/info-icon.svg';
import mobilebg from '../image/BANNERmobileCONTAINER.png'
import paraimg from '../image/parabg.svg'
import downarrow from '../image/icons/downarrow.svg'
import brawllerlogo from '../image/icons/REBEL-BRAWLERS-LOGO.png'
import speedrunlogo from  '../image/icons/speedrunlogo.svg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import activepagination from '../image/icons/activepagi.svg';
import inactivepagination from '../image/icons/normalpagi.svg';

// Import the GameSignupPopup component
import GameSignupPopup from './GameSignupPopup';
import VideoPopup from './VideoPopup';
import SignupPopup from './SignUppopup';

const games = [
  {
    title: 'sign up now',
    image: banner,
    logo:brawllerlogo
  },
  {
    title: 'rebel brawlers',
    image: banner2,
    logo:brawllerlogo
  },
  {
    title: 'Rebel speed runner',
    image: banner3,
    logo:speedrunlogo
  }
];

// Mobile Hero Section Component
const MobileHeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Sign up");
  
  // Add state for popups
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);
  const [videoPopupOpen, setVideoPopupOpen] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  // Navigation items with actions
  const navigationItems = [
    { 
      label: 'Sign up', 
      action: () => {
        setShowSignupPopup(true);
        setIsDropdownOpen(false);
      },
      isButton: true 
    },
    { label: 'Contests', path: '/#contests', isHash: true },
    { label: 'Winners', path: '/#winners', isHash: true },
    { label: 'About', path: '/#about', isHash: true }
  ];

  // Function to handle sign up button click - Update this in both Mobile and Desktop sections
  const handleSignUpClick = (game, index) => {
    if (index === 0) {
      setShowSignupPopup(true);
    } else {
      setCurrentGame(game);
      setPopupOpen(true);
    }
  };

  return (
    <div className="lg:hidden w-full bg-[#050d19] relative" style={{ backgroundImage: `url(${mobilebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex items-center flex-col justify-center py-8">
        <div className='w-full px-4 mt-8'>
          {/* Mobile Header */}
          <div className="mb-4">
            <h1 className="text-[39px] leading-[28px] text-[#050d19] cygun-bold">
              PLAY TO WIN.<br/> PLAY FOR KEEPS.
            </h1>
            
            <p className="text-white barlow-condensed-medium text-base leading-tight mt-2 bg-black/50 rounded-[24px] px-4 py-2">
              MTgames is your hub for the newest games and most lucrative prizes. Play for FREE or test your skills by adding your entry fee to a contest prize pool and competing for your chance at cash, prizes, and glory. All games available on iOS, Android, PC, Mac, and in Browser.
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="relative pb-6 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:!flex [&_.swiper-pagination]:!justify-center [&_.swiper-pagination]:!items-center [&_.swiper-pagination]:!gap-2 [&_.swiper-pagination]:!left-0 [&_.swiper-pagination]:!right-0 [&_.swiper-pagination]:!mx-auto [&_.swiper-pagination-bullet]:!w-3 [&_.swiper-pagination-bullet]:!h-3 [&_.swiper-pagination-bullet-active]:!bg-[#ffeec4]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev'
              }}
              pagination={{ 
                clickable: true
              }}
              autoplay={{ 
                delay: 5000, // Increased from 3000 to 5000
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
              }}
              speed={800} // Slower transition speed
              className="w-full relative rounded-lg overflow-hidden"
            >
              <button type="button" className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-12 h-14 flex items-center justify-center">
                <img src={leftarrow} alt="Previous" className="w-full h-full" />
              </button>
              <button type="button" className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-12 h-14 flex items-center justify-center">
                <img src={rightarrow} alt="Next" className="w-full h-full" />
              </button>
              
              {games.map((game, index) => (
                <SwiperSlide key={index} >
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                  {/* Mobile Sign Up Button */}
                  <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-10">
                    <div className="p-[1px] rounded-[8px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9]">
                      <button 
                        className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] text-white px-4 text-[16px] barlow-black tracking-wide uppercase flex items-center gap-2 rounded-[8px] w-[230px] h-[40px] lg:w-[400px] lg:h-[75px] justify-between"
                        onClick={() => handleSignUpClick(game, index)}
                      >
                        <img src={signup02} alt="icon" className="w-8 h-8 drop-shadow-[0_0_5px_#ff00cc]" />
                        {index === 0 ? 'sign up now' : 'play now'}
                        <img src={signup01} alt="icon" className="w-8 h-8 drop-shadow-[0_0_5px_#ff00cc]" />
                      </button>
                    </div>
                  </div>
                  {/* Video and Info Buttons - Only show for non-first slides */}
                  {index !== 0 && (
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
                      <button className="p-[1px] rounded-full bg-gradient-to-b from-[#0560fa] to-[#d93ef9] w-8 h-8">
                        <div 
                          className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-full w-full h-full flex items-center justify-center"
                          onClick={() => setVideoPopupOpen(true)}
                        >
                          <img src={videoIcon} alt="Video" className="w-3 h-3 drop-shadow-[0_0_5px_#ff00cc]" />
                        </div>
                      </button>
                      <button className="p-[1px] rounded-full bg-gradient-to-b from-[#0560fa] to-[#d93ef9] w-8 h-8">
                        <div className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-full w-full h-full flex items-center justify-center">
                          <img src={infoIcon} alt="Info" className="w-3 h-3 drop-shadow-[0_0_5px_#ff00cc]" />
                        </div>
                      </button>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Dropdown Menu */}
            <div className="flex justify-center w-full">
              <div className="relative mt-4 w-full max-w-[300px]">
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 mb-2 py-4 rounded-[15px] overflow-hidden z-20" 
                      style={{ background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)' }}>
                      {navigationItems.map((item) => (
                        item.isButton ? (
                          <button 
                            key={item.label}
                            className={`w-full text-center text-lg text-white orbitron-bold py-2 transition-colors border-b border-[#1A1033]/30 last:border-none ${activeItem === item.label ? 'bg-[#2a234e]' : 'hover:bg-[#2a234e]'}`}
                            onClick={() => {
                              setActiveItem(item.label);
                              item.action();
                            }}
                          >
                            {item.label}
                          </button>
                        ) : item.isHash ? (
                          <HashLink 
                            smooth 
                            to={item.path}
                            key={item.label}
                            className={`block w-full text-center text-lg text-white orbitron-bold py-2 transition-colors border-b border-[#1A1033]/30 last:border-none ${activeItem === item.label ? 'bg-[#2a234e]' : 'hover:bg-[#2a234e]'}`}
                            onClick={() => {
                              setActiveItem(item.label);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {item.label}
                          </HashLink>
                        ) : (
                          <Link 
                            to={item.path}
                            key={item.label}
                            className={`block w-full text-center text-lg text-white orbitron-bold py-2 transition-colors border-b border-[#1A1033]/30 last:border-none ${activeItem === item.label ? 'bg-[#2a234e]' : 'hover:bg-[#2a234e]'}`}
                            onClick={() => {
                              setActiveItem(item.label);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                )}
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full rounded-[15px] py-4 px-6 flex items-center justify-between relative z-30 border-[1px] border-pink-500"
                  style={{ 
                    background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)',
                    borderColor: '#d93ef9'
                  }}
                >
                  <div className="flex-1" />
                  <span className="text-white text-xl orbitron-bold flex-1 text-center">{activeItem}</span>
                  <div className="flex-1 flex justify-end">
                    <img 
                      src={downarrow} 
                      alt="arrow" 
                      className={`w-6 h-6 transition-transform duration-300 ${isDropdownOpen ? '-rotate-180' : ''}`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sign Up Popup */}
      <GameSignupPopup 
        isOpen={popupOpen} 
        onClose={() => setPopupOpen(false)} 
        game={currentGame}
      />

      {/* Video Popup */}
      <VideoPopup 
        isOpen={videoPopupOpen}
        onClose={() => setVideoPopupOpen(false)}
        videoUrl="https://www.youtube.com/embed/your-video-id"
      />

      {/* Signup Popup */}
      <SignupPopup isOpen={showSignupPopup} onClose={() => setShowSignupPopup(false)} />
    </div>
  );
};

// Desktop Hero Section Component
const DesktopHeroSection = () => {
  // Add state for popup
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);

  // Add state for video popup
  const [videoPopupOpen, setVideoPopupOpen] = useState(false);

  const [showSignupPopup, setShowSignupPopup] = useState(false);

  // Function to handle sign up button click - Update this in both Mobile and Desktop sections
  const handleSignUpClick = (game, index) => {
    if (index === 0) {
      setShowSignupPopup(true);
    } else {
      setCurrentGame(game);
      setPopupOpen(true);
    }
  };

  const navigationItems = [
    { 
      label: 'Sign up', 
      action: () => setShowSignupPopup(true), 
      isButton: true 
    },
    { label: 'Contests', path: '/#contests', isHash: true },
    { label: 'Winners', path: '/#winners', isHash: true },
    { label: 'About', path: '/#about', isHash: true }
  ];

  const NavigationButton = ({ item }) => (
    <div className="w-full block relative group cursor-pointer orbitron-bold">
      <div className="absolute -inset-0 bg-gradient-to-r from-pink-600 to-purple-600 
        rounded-[24px] opacity-75 group-hover:opacity-100 
        transition duration-300 group-hover:shadow-[0_0_20px_#d540f3]"
      />
      <div className="relative flex items-center justify-between bg-gradient-to-r from-[#050c11] to-[#2a234e]
        text-white pl-6 rounded-[24px] transition-colors
        border border-[#d540f3] group-hover:border-[#d540f3] text-[29px] leading-[90px] px-4"
      >
        {item.label}
        <div className="flex items-center">
          <img 
            src={doublearrow} 
            alt="arrow" 
            className=" scale-[1.3] w-10 h-10  block drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] " 
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="hidden lg:block w-full bg-[#050d19] relative">
      <div className="absolute -top-10 left-0 w-full overflow-hidden">
        <img src={shapetop} alt="Top Shape Divider" className="w-full h-auto" />
      </div>

      <div className="flex items-center hero-sec flex-col justify-center py-12">
        <div className='2xl:max-w-7xl xl:max-w-6xl w-full'>
          {/* Desktop Header */}
          <div className="grid grid-cols-1 lg:grid-cols-4 w-full px-8 lg:px-12 gap-8">
            <div className="px-4 col-span-3">
              <h1 className="2xl:text-[55px] lg:text-[49px] leading-none text-[#050d19] cygun-bold">
                PLAY TO WIN. PLAY FOR KEEPS.
              </h1>
              <div className='max-w-4xl'>
                <p className="text-[#0b101b] barlow-condensed-semibold text-xl mt-2">
                  MTgames is your hub for the newest games and most lucrative prizes. Play for FREE or test your skills by adding your entry fee to a contest prize pool and competing for your chance at cash, prizes, and glory. All games available on iOS, Android, PC, Mac, and in Browser.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="w-full px-5">
            <div className="grid grid-cols-4 items-center gap-4">
              {/* Game Showcase Section */}
              <div className="col-span-3">
                <div className="relative slider-container [&_.swiper-pagination]:!bottom-1 [&_.swiper-pagination]:!flex [&_.swiper-pagination]:!justify-start [&_.swiper-pagination]:!items-center  [&_.swiper-pagination]:!left-[70px] [&_.swiper-pagination]:!w-auto [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4  [&_.swiper-pagination-bullet-active]:!bg-[#ffeec4]">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ 
                      delay: 5000, // Increased from 3000 to 5000
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true 
                    }}
                    speed={800} // Slower transition speed
                    className="w-full relative rounded-lg overflow-hidden"
                  >
                    <div className="swiper-button-prev !flex !w-12 !h-12 !left-6 !top-1/2 !-translate-y-1/2 z-20">
                      <img src={leftarrow} alt="Previous" className="w-20 h-15" />
                    </div>
                    <div className="swiper-button-next !flex !w-12 !h-12 !right-6 !top-1/2 !-translate-y-1/2 z-20">
                      <img src={rightarrow} alt="Next" className="w-20 h-15" />
                    </div>
                    
                    {games.map((game, index) => (
                      <SwiperSlide key={index}>
                        <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                        {/* Desktop Play Now Button */}
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9]">
                            <button 
                              className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] text-white  text-[29px] barlow-black tracking-wide uppercase flex items-center justify-between px-8 rounded-[10px] w-[300px] h-[50px] lg:w-[400px] lg:h-[65px] justify-center"
                              onClick={() => handleSignUpClick(game, index)}
                            >
                              <img src={signup02} alt="icon" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]
 " />
                              {index === 0 ? 'sign up now' : 'play now'}
                              <img src={signup01} alt="icon" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]
" />
                            </button>
                          </div>
                        </div>
                        {/* Desktop Video and Info Buttons - Only show for non-first slides */}
                        {index !== 0 && (
                          <div className="absolute bottom-12 right-12 flex flex-col gap-4 z-10">
                            <button className="p-[1px] rounded-full bg-gradient-to-b from-[#0560fa] to-[#d93ef9] w-12 h-12">
                              <div 
                                className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-full w-full h-full flex items-center justify-center"
                                onClick={() => setVideoPopupOpen(true)}
                              >
                                <img src={videoIcon} alt="Video" className="w-5 h-5 " />
                              </div>
                            </button>
                            <button className="p-[1px] rounded-full bg-gradient-to-b from-[#0560fa] to-[#d93ef9] w-12 h-12">
                              <div className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-full w-full h-full flex items-center justify-center">
                                <img src={infoIcon} alt="Info" className="w-5 h-5 " />
                              </div>
                            </button>
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Side Navigation */}
              <div className="col-span-1 flex flex-col justify-between h-full py-6">
                {navigationItems.map((item) => (
                  item.isButton ? (
                    <button key={item.label} onClick={item.action}>
                      <NavigationButton item={item} />
                    </button>
                  ) : item.isHash ? (
                    <HashLink smooth to={item.path} key={item.label}>
                      <NavigationButton item={item} />
                    </HashLink>
                  ) : (
                    <Link to={item.path} key={item.label}>
                      <NavigationButton item={item} />
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Shape */}
      <div className='relative'>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src={shapebottom} alt="Bottom Shape Divider" className="w-full h-auto" />
        </div>
        <h2 className="text-5xl relative z-10 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 cygun absolute bottom-[-10px] left-1/2 translate-x-[-50%] translate-y-[-50%]">
          FEATURED CONTESTS
        </h2>
      </div>
      
      {/* Sign Up Popup */}
      <GameSignupPopup 
        isOpen={popupOpen} 
        onClose={() => setPopupOpen(false)} 
        game={currentGame}
      />

      {/* Video Popup */}
      <VideoPopup 
        isOpen={videoPopupOpen}
        onClose={() => setVideoPopupOpen(false)}
        videoUrl="https://www.youtube.com/embed/your-video-id"
      />

      <SignupPopup isOpen={showSignupPopup} onClose={() => setShowSignupPopup(false)} />
    </div>
  );
};

// Export the combined component
export default function HeroSection() {
  return (
    <>
      <MobileHeroSection />
      <DesktopHeroSection />
    </>
  );
}