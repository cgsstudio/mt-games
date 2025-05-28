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
import timerIcon from '../../image/icons/time.svg';
import trophyIcon from '../../image/icons/coin.svg';
import coinsIcon from '../../image/icons/icon-1.png';
import mtbit from '../../image/icons/icon-2.png';
import doubleLeftArrow from '../../image/icons/double-left-arrow.svg';  // Add this import
import doubleRightArrow from '../../image/icons/double-right-arrow.svg'; // Add this import
import rightarrow from '../../image/Right-arrow.png';
import leftarrow from '../../image/arrow-left.png';
import card1 from '../../image/icons/BRAWLERSLOGONEW.svg';
import buttonimg from '../../image/icons/Daily-Main-Event.png';
import cardBottomImg from '../../image/bottomlayer.png';
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import icon1 from '../../image/icons/icon-1.png';
import turnamentIcon from '../../image/icons/tournament.svg';
import ContestCard, { Contest } from './ContestCard';

// Interfaces
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
  if (num < 10) {
    return '00';
  }
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
    players: 0,
    buttonText: 'Daily\nMain Event',
    
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
    icon: mtbit,
    players: 0,
    buttonText: 'Sponsored\nTournament',
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
    icon: mtbit,
    players: 0,
    buttonText: '$30\nTournament',
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
    icon: coinsIcon,
    players: 0,
    buttonText: '$30\nTournament',
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
    icon: coinsIcon,
    players: 0,
    buttonText: '$30\nTournament',
  }
];

const ContestsSection: React.FC = () => {
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
          <div className="contest-swiper-prev contest-arrow-left">
            <img src={leftarrow} alt="Previous" className="w-full h-full" />
          </div>

          <div >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: '.contest-swiper-next',
                prevEl: '.contest-swiper-prev',
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
          <div className="contest-swiper-next contest-arrow-right">
            <img src={rightarrow} alt="Next" className="w-full h-full" />
          </div>
        </div>
      </div>


    </section>
  );
};

export default ContestsSection;
export { TimerContainer };