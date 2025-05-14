import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import rightarrow from '../image/Right-arrow.png';
import leftarrow from '../image/arrow-left.png';
import card1 from '../image/icons/BRAWLERSLOGONEW.svg';
import buttonimg from '../image/icons/ENTER-NOW.svg';
import cardBottomImg from '../image/bottomlayer.png';
// Import your custom icons here
import timerIcon from '../image/icons/time.svg';
import trophyIcon from '../image/icons/coin.svg';
import coinsIcon from '../image/icons/icon-1.png';
import mtbit from '../image/icons/icon-2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

// Add this helper function after the imports
const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Original contests data - now with startTime and endTime as Date objects
const initialContests = [
  {
    id: 1,
    title: 'Rebel Brawlers',
    image: card1,
    entryFee: "10,000",
    prizePool: 100000,
    // For demo purposes: contest starts in 10 seconds and ends 2 hours later
    startTime: new Date(Date.now() + 10*1000),
    endTime: new Date(Date.now() + 10*1000 + 2*60*60*1000),
    spacesRemaining: "Open Call",
    icon: coinsIcon
  },
  {
    id: 2,
    title: 'Cyber Warriors',
    image: card1,
    entryFee: 5,
    prizePool: 20000,
    // This one has already started (start time is in the past)
    startTime: new Date(Date.now() - 30*60*1000), // Started 30 minutes ago
    endTime: new Date(Date.now() + 1*60*60*1000), // Ends in 1 hour
    spacesRemaining: "Open Call",
    icon: mtbit
  },
  {
    id: 3,
    title: 'Neon Racers',
    image: card1,
    entryFee: 1500,
    prizePool: 15000,
    startTime: new Date(Date.now() + 45*60*1000), // Starts in 45 minutes
    endTime: new Date(Date.now() + 45*60*1000 + 3*60*60*1000), // Ends 3 hours after start
    spacesRemaining: "Open Call",
    icon: mtbit
  },
  {
    id: 4,
    title: 'Neon Racers',
    image: card1,
    entryFee: 1500,
    prizePool: 15000,
    startTime: new Date(Date.now() + 2*60*60*1000), // Starts in 2 hours
    endTime: new Date(Date.now() + 2*60*60*1000 + 1*60*60*1000), // Ends 1 hour after start
    spacesRemaining: "Open Call",
    icon: coinsIcon
  },
  {
    id: 5,
    title: 'Neon Racers',
    image: card1,
    entryFee: 1500,
    prizePool: 15000,
    startTime: new Date(Date.now() - 2*60*60*1000), // Started 2 hours ago
    endTime: new Date(Date.now() + 30*60*1000), // Ends in 30 minutes
    spacesRemaining: "Open Call",
    icon: coinsIcon
  },
];

// Timer component to display and update countdown with dynamic heading and background color
const CountdownTimer = ({ startTime, endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      
      if (now >= startTime) {
        setHasStarted(true);
        const diff = endTime - now;
        
        if (diff <= 0) {
          setTimeRemaining('00:00:00:00');
          setIsCompleted(true);
          return;
        }
        
        // Calculate hours, minutes, seconds, and milliseconds
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((diff % 1000) / 10); // Get only 2 digits of milliseconds
        
        // Format time as HH:MM:SS:mm
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).padStart(2, '0');
        
        setTimeRemaining(`${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`);
      } else {
        const diff = startTime - now;
        
        // Same calculation for countdown to start
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((diff % 1000) / 10);
        
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).padStart(2, '0');
        
        setTimeRemaining(`${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`);
      }
    };
    
    // Update timer every 10ms for smoother milliseconds display
    updateTimer();
    const intervalId = setInterval(updateTimer, 10);
    
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);
  
  return (
    <div className="">
      <div className="text-[#f4e6c1] text-[16px] md:text-[16px] digital-7-mono leading-none ">
        {isCompleted ? "ENDED:" : hasStarted ? "END IN:" : "START IN:"}
      </div>
      <span className="text-white text-[18px] md:text-[24px] leading-none digital-7-mono">{timeRemaining}</span>
    </div>
  );
};

const TimerContainer = ({ startTime, endTime }) => {
  const [containerBgColor, setContainerBgColor] = useState('#050d19');

  useEffect(() => {
    const updateBgColor = () => {
      const now = new Date();
      if (now >= endTime) {
        setContainerBgColor('#702121'); // Red for ended
      } else if (now >= startTime) {
        const timeUntilEnd = endTime - now;
        if (timeUntilEnd <= 15 * 60 * 1000) {
          setContainerBgColor('#702121'); // Red for ending soon
        } else {
          setContainerBgColor('#015953'); // Teal for running
        }
      } else {
        setContainerBgColor('#000000'); // Black for not started
      }
    };

    updateBgColor();
    const intervalId = setInterval(updateBgColor, 1000);
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  return (
    <div className="flex items-center gap-3 rounded-[16px] pl-2 pr-6 py-1 mt-2" 
         style={{ backgroundColor: containerBgColor, transition: 'background-color 0.3s' }}>
      <img src={timerIcon} alt="Timer" className="w-6 h-6" />
      <CountdownTimer startTime={startTime} endTime={endTime} />
    </div>
  );
};

export default function ContestsSection() {
  const [contests, setContests] = useState(initialContests);
  
  return (
    <section className="bg-[#050d19] overflow-hidden " id='contests'>
       <h2 className="text-[32px] leading-none relative z-10 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 cygun absolute bottom-[-10px] left-1/2 translate-x-[-50%] translate-y-[-50%] lg:hidden">
          FEATURED CONTESTS
        </h2>
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto relative px-4">
        {/* Arrow navigation container with improved positioning */}
        <div className="relative">
          {/* Left arrow with improved sizing and positioning */}
          <div className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer" 
               style={{ left: '-20px' }}>
            <img 
              src={leftarrow} 
              alt="Previous" 
              className="w-full h-full "
              
            />
          </div>
          
          <div className="md:px-12 lg:px-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: '.custom-swiper-next',
                prevEl: '.custom-swiper-prev',
              }}
             
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              grabCursor={true}
              className="contest-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1280: {
                  slidesPerView: 2,  // Changed from 3 to 2
                  spaceBetween: 30
                },
                1536: {
                  slidesPerView: 3,  // Added new breakpoint for 3 slides
                  spaceBetween: 30
                }
              }}
            >
              {contests.map((contest) => (
                <SwiperSlide key={contest.id} className="pt-10 pb-20 md:pt-8 md:pb-16">
                  <div className="bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] rounded-[20px] border border-[rgb(213,64,243)] border-solid backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 relative">
                    <div
                      className="absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4"
                    >
                      <Link to={`/contest`}>
                        <div 
                          className="w-full h-[60px] md:h-[70px] text-white text-lg md:text-2xl cygun-bold flex items-center justify-center"
                          style={{ 
                            backgroundImage: `url(${buttonimg})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            
                          }}
                        >
                          
                        </div>
                      </Link>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="relative p-3 pb-0 pt-4">
                        <div className="rounded-t-[16px] rounded-b-none overflow-hidden">
                          <img
                            src={contest.image}
                            alt={contest.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex justify-between gap-2 items-center p-3 bg-black rounded-t-none rounded-b-[16px] ">
                          <span className="text-[#f4e6c1] text-[20px] uppercase md:text-xl barlow-condensed-semibold">Entry Fee: </span>
                          <div className="flex items-center gap-2">
                            <img src={contest.icon} alt="Coins" className="w-6 h-6" />
                            <span className="text-[#e4e4e4] text-[24px] md:text-[24px] orbitron-semibold">{contest.entryFee}</span>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 pb-4">
                        <div className="">
                          <div className="text-center text-white text-[28px] md:text-3xl barlow-condensed-regular p-2">
                            Top 10 Payout
                          </div>
                          
                          <div className="flex justify-between items-center px-2 ">
                            <span className="text-[#888888] barlow-condensed-regular text-[25px] md:text-2xl">Current Pot Size: </span>
                            <div className="flex items-center gap-2">
                              <img src={coinsIcon} alt="Trophy" className="w-6 h-6" />
                              <span className="text-[#0cff00] orbitron-semibold text-[25px] md:text-2xl">{formatNumber(contest.prizePool)}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-1 px-2">
                            <span className="text-[#888888] barlow-condensed-regular text-[25px] md:text-2xl">Spaces Remaining:</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[#0cff00] orbitron-semibold text-[25px] leading-[1.2] md:text-2xl">{contest.spacesRemaining}</span>
                            </div>
                          </div>
                          
                          <div className='flex justify-between items-center pt-3'>
                            <TimerContainer startTime={contest.startTime} endTime={contest.endTime} />
                            
                            <div className="flex justify-end mt-2">
                              <button className="px-7 py-[10px] linear-button-2 relative barlow-black text-base">
                                INFO
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 translate-y-[40%] w-full z-0">
                      <img
                        src={cardBottomImg}
                        alt=""
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="flex justify-center mt-4 md:hidden">
              <div className="swiper-pagination"></div>
            </div>
          </div>
          
          {/* Right arrow with improved sizing and positioning */}
          <div className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
               style={{ right: '-20px' }}>
            <img 
              src={rightarrow} 
              alt="Next" 
              className="w-full h-full  "
              
            />
          </div>
        </div>
      </div>
      
      {/* Add custom styles for container spacing */}
      <style jsx>{`
        @media (max-width: 768px) {
          .custom-swiper-prev {
            left: -10px !important;
            top: 40% !important;
          }
          .custom-swiper-next {
            right: -10px !important;
            top: 40% !important;
          }
        }
        
        @media (min-width: 1400px) {
          .custom-swiper-prev {
            left: -80px !important;
          }
          .custom-swiper-next {
            right: -80px !important;
          }
        }
        
        @media (min-width: 1600px) {
          .custom-swiper-prev {
            left: -100px !important;
          }
          .custom-swiper-next {
            right: -100px !important;
          }
        }
      `}</style>
    </section>
  );
}