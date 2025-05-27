// React and third-party imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import your custom icons here
import timerIcon from '../image/icons/time.svg';
import trophyIcon from '../image/icons/coin.svg';
import coinsIcon from '../image/icons/icon-1.png';
import mtbit from '../image/icons/icon-2.png';
import doubleLeftArrow from '../image/icons/double-left-arrow.svg';  // Add this import
import doubleRightArrow from '../image/icons/double-right-arrow.svg'; // Add this import
import rightarrow from '../image/Right-arrow.png';
import leftarrow from '../image/arrow-left.png';
import card1 from '../image/icons/BRAWLERSLOGONEW.svg';
import buttonimg from '../image/icons/Daily-Main-Event.png';
import cardBottomImg from '../image/bottomlayer.png';
import signup01 from '../image/icons/sign-up-ar-1.svg';
import signup02 from '../image/icons/sign-up-ar-2.svg';
import icon1 from '../image/icons/icon-1.png';

// Interfaces
interface Contest {
  id: number;
  title: string;
  image: string;
  entryFee: number;
  prizePool: number;
  startTime: Date;
  endTime: Date;
  spacesRemaining: string;
  icon: string;
}

interface TimerProps {
  startTime: Date;
  endTime: Date;
}

// Constants and styles
const TYPOGRAPHY = {
  heading1: 'text-[32px] cygun text-transparent text-white',
  heading2: 'text-[28px] md:text-3xl barlow-condensed-regular',
  heading3: 'text-[29px] leading-[25px] uppercase barlow-condensed-bold',
  timer: 'text-[18px] md:text-[28px] leading-[25px] digital-7-mono',
  label: 'text-[#888888] barlow-condensed-regular text-[25px] md:text-2xl',
  value: 'text-[#0cff00] orbitron-semibold text-[25px] md:text-2xl'
};

// Helper functions
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Timer component to display and update countdown with dynamic heading and background color
const CountdownTimer: React.FC<TimerProps> = ({ startTime, endTime }) => {
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
          setTimeRemaining('00:00:00');
          setIsCompleted(true);
          return;
        }

        // Calculate days, hours, minutes
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        // Format time as DD:HH:MM
        const formattedDays = String(days).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        setTimeRemaining(`${formattedDays}:${formattedHours}:${formattedMinutes}`);
      } else {
        const diff = startTime - now;

        // Calculate days, hours, minutes for time until start
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const formattedDays = String(days).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        setTimeRemaining(`${formattedDays}:${formattedHours}:${formattedMinutes}`);
      }
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-white text-[18px] md:text-[28px] leading-[25px] digital-7-mono">
        {timeRemaining}
      </span>
      <div className="text-[#f4e6c1] digital-7-mono leading-[12px] tracking-wider text-[12px] md:text-[17px]  flex justify-between w-full">
        <span>DAYS:</span>
        <span>HRS:</span>
        <span>MIN</span>
      </div>
    </div>
  );
};

const TimerContainer: React.FC<TimerProps> = ({ startTime, endTime }) => {
  const [containerBgColor, setContainerBgColor] = useState('#015953');

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
        setContainerBgColor('#015953'); // Changed to teal instead of black for not started
      }
    };

    updateBgColor();
    const intervalId = setInterval(updateBgColor, 1000);
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  return (
    <div className="flex items-center rounded-[16px] w-[200px] h-[45px]"
      style={{ backgroundColor: containerBgColor, transition: 'background-color 0.3s' }}>

      <img src={timerIcon} alt="Timer" className=" ml-4" />
      <div className="flex-1 flex justify-center">
        <CountdownTimer startTime={startTime} endTime={endTime} />
      </div>
    </div>
  );
};

const ContestCard: React.FC<{ contest: Contest }> = ({ contest }) => {
  return (
    <div className="bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] rounded-[20px] border border-[rgb(213,64,243)] border-solid backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 relative">
      <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] px-4">
        <Link to={`/contest`} className="block w-full">
          <div className="relative">
            <img
              src={signup02}
              alt=""
              className="absolute -left-2 h-[40px] w-auto top-1/2 -translate-y-1/2 z-30 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
            />
            <div className="trapezoid-button w-full h-[70px] flex items-center justify-center">
              <span className='text-[#fff0c9] text-center text-[29px] leading-[25px] uppercase barlow-condensed-bold'>
                Daily <br /> main event
              </span>
            </div>
            <img
              src={signup01}
              alt=""
              className="absolute -right-2 h-[40px] w-auto top-1/2 -translate-y-1/2 z-30 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] "
            />
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
          <div className="flex justify-between gap-4 items-center p-1 bg-black rounded-t-none rounded-b-[16px] ">
            <span className="text-[#f4e6c1] text-[20px] uppercase md:text-xl barlow-condensed-medium ml-4">Time Remaining: </span>
            <div className="flex items-center gap-2">
              <TimerContainer startTime={contest.startTime} endTime={contest.endTime} />
            </div>
          </div>
          <div className="grid grid-cols-7 p-[5px] bg-[#000000] overflow-hidden rounded-[18px] mt-4">
            <div className="col-span-3 flex items-center justify-center">
              <span className="uppercase text-[#1da2cf] text-lg md:text-[38px] cygun-bold ml-4">Prize Pool:</span>
            </div>
            <div className="col-span-4 bg-[#2f3157] pb-2  flex items-center rounded-[2px] md:rounded-[18px] justify-center ">
              <div className='space-y-2' >



                <span className="text-[27px] lg:text-[78px] orbitron-black leading-none text-stroke">$15</span>
                <div className='flex items-center gap-1'>

                  <img src={contest.icon} alt="Coin Icon" className="w-8 h-8" />
                  <span className="text-[27px] lg:text-[30px] orbitron-semibold leading-none text-[#00ff18]">{formatNumber(contest.prizePool)}</span>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center px-4 gap-2 mt-4'>

          <div className="bg-[#000000] p-3 md:p-5 flex items-center rounded-[2px] md:rounded-[9px] justify-center ">
            <div className="flex items-center">
              <img src={icon1} alt="Gold icon" className="w-6 h-6 mr-2" />
              {/* <span className="text-yellow-500 mr-2">●</span> */}
              <span className="text-[27px] lg:text-[25px] orbitron-semibold leading-none ">{formatNumber(contest.entryFee)}</span>
            </div>
          </div>
            <div className="bg-[#000000] p-3 md:p-5 flex items-center rounded-[2px] md:rounded-[9px] justify-center ">
            <div className="flex items-center">
              <img src={icon1} alt="Gold icon" className="w-6 h-6 mr-2" />
              {/* <span className="text-yellow-500 mr-2">●</span> */}
              <p className="text-[27px] lg:text-[25px] orbitron-semibold leading-none "><span className='text-[#00ff18]'>{formatNumber(contest.entryFee)}</span>Entry Fee</p>
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
  );
};

// Original contests data - now with startTime and endTime as Date objects
const initialContests = [
  {
    id: 1,
    title: 'Rebel Brawlers',
    image: card1,
    entryFee: 2400,
    prizePool: 10000,
    // For demo purposes: contest starts in 10 seconds and ends 2 hours later
    startTime: new Date(Date.now() + 10 * 1000),
    endTime: new Date(Date.now() + 10 * 1000 + 2 * 60 * 60 * 1000),
    spacesRemaining: "Open Call",
    icon: coinsIcon,
    
  },
  {
    id: 2,
    title: 'Cyber Warriors',
    image: card1,
    entryFee: 2400,
    prizePool: 20000,
    // This one has already started (start time is in the past)
    startTime: new Date(Date.now() - 30 * 60 * 1000), // Started 30 minutes ago
    endTime: new Date(Date.now() + 1 * 60 * 60 * 1000), // Ends in 1 hour
    spacesRemaining: "Open Call",
    icon: mtbit
  },
  {
    id: 3,
    title: 'Neon Racers',
    image: card1,
    entryFee: 4800,
    prizePool: 15000,
    startTime: new Date(Date.now() + 45 * 60 * 1000), // Starts in 45 minutes
    endTime: new Date(Date.now() + 45 * 60 * 1000 + 3 * 60 * 60 * 1000), // Ends 3 hours after start
    spacesRemaining: "Open Call",
    icon: mtbit
  },
  {
    id: 4,
    title: 'Neon Racers',
    image: card1,
    entryFee: 2400,
    prizePool: 15000,
    startTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // Starts in 2 hours
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000), // Ends 1 hour after start
    spacesRemaining: "Open Call",
    icon: coinsIcon
  },
  {
    id: 5,
    title: 'Neon Racers',
    image: card1,
    entryFee: 2400,
    prizePool: 15000,
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // Started 2 hours ago
    endTime: new Date(Date.now() + 30 * 60 * 1000), // Ends in 30 minutes
    spacesRemaining: "Open Call",
    icon: coinsIcon
  },
];

export default function ContestsSection() {
  const [contests, setContests] = useState<Contest[]>(initialContests);

  return (
    <section className="bg-[#050d19] overflow-hidden" id="contests">
      <h1 className={`${TYPOGRAPHY.heading1} relative z-10 text-center lg:hidden absolute bottom-[-10px] left-1/2 translate-x-[-50%] translate-y-[-50%]`}>
        FEATURED CONTESTS
      </h1>
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto relative px-4">
        {/* Arrow navigation container with improved positioning */}
        <div className="relative">
          {/* Left arrow with improved sizing and positioning */}
          <div className="custom-swiper-prev contest-arrow-left">
            <img src={leftarrow} alt="Previous" className="w-full h-full" />
          </div>

          <div >
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
                  <ContestCard contest={contest} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center mt-4 md:hidden">
              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/* Right arrow with improved sizing and positioning */}
          <div className="custom-swiper-next contest-arrow-right">
            <img src={rightarrow} alt="Next" className="w-full h-full" />
          </div>
        </div>
      </div>


    </section>
  );
}