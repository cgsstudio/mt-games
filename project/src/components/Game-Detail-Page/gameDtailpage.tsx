import React, { useState } from 'react';
import { VideoPlayer } from '../Contest Page/components/VideoPlayer';
import { ChevronLeft, ChevronDoubleLeft, ChevronDoubleRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import play from '../../image/icons/videoplay.svg';
import videobanner from '../../image/icons/newbanner.png';
import videobanner2 from '../../image/secondthumb.png';
import videobanner3 from '../../image/videobanner3.png';
import contestarrow from '../../image/icons/contest-arrow.svg';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import UserProfileMobile from '../UserProfileMobile';
import video from "../../image/video/Welcome to the MetaTope!.mp4";
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import EnterNow from '../Contest Page/EnterNow';
import ContestCard, { Contest } from '../ContestCard';
import coinsIcon from '../../image/icons/icon-1.png';
import card1 from '../../image/icons/BRAWLERSLOGONEW.svg';
import contestlogo from '../../image/contest-LOGO.svg';
import CoinsIcon from '../../image/icons/icon-1.png';
import turnamentIcon from '../../image/icons/tournament.svg';

// Add mock contest data
const mockContest: Contest = {
  id: 1,
  title: 'Rebel Brawlers',
  image: card1,
  entryFee: 2400,
  prizePool: 10000,
  startTime: new Date(Date.now() + 10 * 1000),
  endTime: new Date(Date.now() + 10 * 1000 + 2 * 60 * 60 * 1000),
  spacesRemaining: "Open Call",
  icon: coinsIcon,
  players: 0,
  buttonText: 'Daily\nMain Event',
};

const formatNumber = (num: number): string => {
  if (num < 10) {
    return '00';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function GameDetailPage() {
  const [showEnterNow, setShowEnterNow] = useState(false);
  const [userCredits] = useState(5000);
  const [activeTab, setActiveTab] = useState('featured');

  const slides = [
    { type: 'video' as const, url: video, thumbnail: videobanner },
    { type: 'image' as const, url: videobanner2 },
    { type: 'image' as const, url: videobanner3 },
  ];

  const tabData = {
    featured: [
      { prizePool: 8, coins: 200000, players: 20, entry: 1000, icon: CoinsIcon },
      { prizePool: 50, coins: 200000, players: 20, entry: 6000,icon: CoinsIcon },
      { prizePool: 100, coins: 200000, players: 20, entry: 12000,icon: CoinsIcon },
      { prizePool: 200, coins: 200000, players: 20, entry: 14000,icon: CoinsIcon },
    ],
    duels: [
      { prizePool: 10, coins: 150000, players: 2, entry: 2000,icon: CoinsIcon },
      { prizePool: 20, coins: 300000, players: 2, entry: 4000,icon: CoinsIcon },
      { prizePool: 30, coins: 450000, players: 2, entry: 6000,icon: CoinsIcon },
      { prizePool: 40, coins: 600000, players: 2, entry: 8000,icon: CoinsIcon },
    ],
    tournaments: [
      { prizePool: 500, coins: 1000000, players: 100, entry: 20000, icon: CoinsIcon },
      { prizePool: 1000, coins: 2000000, players: 200, entry: 40000, icon: CoinsIcon },
      { prizePool: 1500, coins: 3000000, players: 300, entry: 60000, icon: CoinsIcon },
      { prizePool: 2000, coins: 4000000, players: 400, entry: 80000, icon: CoinsIcon },
    ],
  };

  const renderCards = (cards) => {
    return cards.map((card, index) => (
      <div key={index} className="bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] rounded-[2px] md:rounded-[21px] p-4">
        <div className="col-span-4 bg-[#2f3157] p-2  flex items-center rounded-[2px] md:rounded-[15px] justify-center ">
          <div className='space-y-2' >
            <div className='flex items-center justify-between'>
              <span className="uppercase text-[#1da2cf] text-lg md:text-[27px] leading-[16px] cygun-bold ">Prize<br></br> Pool:</span>
              <span className="text-[27px] lg:text-[37px] orbitron-black leading-none text-stroke2">${card.prizePool}</span>

            </div>



            
            <div className='flex items-center gap-1 orbitron-semibold text-[32px]'>

              (<img src={card.icon} alt="Coin Icon" className="w-8 h-8" />
              <span className="text-[27px] lg:text-[30px] orbitron-semibold leading-none text-[#00ff18]">{formatNumber(card.coins)}</span>)

            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
         <div className="bg-[#000000] w-full h-[60px]  flex items-center rounded-[2px] md:rounded-[15px] justify-center ">
            <div className="flex items-center gap-4">
              <img src={turnamentIcon} alt="Gold icon" className=' drop-shadow-[0_0_8px_#ff00cc]' />
              {/* <span className="text-yellow-500 mr-2">●</span> */}
              <p className="text-[27px] lg:text-[25px] barlow-condensed-semibold leading-[13px] text-[#f4e6c1] uppercase "><span className='text-[#00ff18]'>{formatNumber(card.players)}</span> Players</p>
            </div>
          </div>
        </div>
         <div className="bg-[#000000]  flex items-center rounded-[2px] md:rounded-[15px] justify-center w-full h-[60px] mt-4">
            <div className="flex items-center">
              <img src={card.icon} alt="Gold icon" className="w-6 h-6 mr-2" />
              {/* <span className="text-yellow-500 mr-2">●</span> */}
              <p className="text-[#f4e6c1] text-[27px] lg:text-[25px] barlow-condensed-semibold leading-[13px] uppercase "><span className='text-[#00ff18]'>{formatNumber(card.entry)}</span> Entry</p>
            </div>
          </div>
        
        
      </div>
    ));
  };

  return (
    <main className="w-full contest-container text-white py-10 md:py-16 relative">
      {/* Shape Divider */}
      <figure className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="" aria-hidden="true" className="hidden md:block w-full" />
        <img src={mobileshapedivider} alt="" aria-hidden="true" className="block md:hidden w-full" />
      </figure>

      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto">
        <section className="block md:hidden mt-4">
          <UserProfileMobile />
        </section>

        {/* Header */}
        <header className="contest-header-border md:px-0 pt-3 pb-2 md:pt-8 md:pb-4 mx-4 md:mx-0">
          <nav>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3"
              aria-label="Go back"
            >
              <img src={contestarrow} alt="" aria-hidden="true" />
              <h1 className="orbitron-semibold tracking-wider text-2xl md:text-[33px]">
                GAME DETAILS
              </h1>
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <article className="py-6 px-4 md:px-0">



          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
            {/* Left Column */}

            <section className="md:col-span-3 space-y-6">
              <figure className="flex items-center justify-center">
                <img
                  src={contestlogo}
                  alt="Rebel Brawlers"
                  className="h-16 md:h-20"
                />
              </figure>
              <VideoPlayer slides={slides} />

              <article className="barlow-medium text-[#fcfcfc] text-lg leading-normal px-0 md:px-6">
                <h2 className="sr-only">Game Description</h2>
                <p className="mb-4">
                  Nobody walks away from the Spartan Arena! The only way to enter the MetaTope
                  is to race through an underground tunnel on a stolen hoverbike.
                </p>
                <p>
                  Crash and burn or escape to freedom? The choice is up to you and your skills
                  behind the wheel. The battle has just begun!
                </p>
              </article>
            </section>

            {/* Right Column */}
            <aside className="md:col-span-2 w-full lg:w-[80%] xl:w-full mx-auto px-4 mt-6">
              {/* Game Info Section */}
              <ContestCard contest={mockContest} />


            </aside>
          </div>
        </article>

        {/* Main Events Section */}
        <section className="px-4 md:px-0 mt-12">

          <h2 className="text-center text-[#f4e6c1] text-[33px] md:text-3xl barlow-bold mb-8">
            14 WAYS TO PLAY. ENDLESS CHANCES TO WIN.
          </h2>
          <h3 className="text-center text-3xl md:text-[50px] cygun-bold uppercase mb-4 text-white">
            Main Events
          </h3>

          <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-between flex-col md:flex-row mb-6 bg-[#182539] rounded-[15px] p-[3px]">
              <button
                className={`px-4 md:px-10 py-3 md:py-2 rounded-[15px] cygun-bold uppercase text-[22px] md:text-[39px] leading-[30px] ${
                  activeTab === 'featured'
                    ? 'bg-[#050d19] text-[#1da2cf]'
                    : 'text-white hover:text-[#1da2cf] transition-colors'
                }`}
                onClick={() => setActiveTab('featured')}
              >
                Featured
              </button>
              <button
                className={`px-4 md:px-10 py-3 md:py-2 rounded-[15px] cygun-bold uppercase text-[22px] md:text-[39px] leading-[30px] ${
                  activeTab === 'duels'
                    ? 'bg-[#050d19] text-[#1da2cf]'
                    : 'text-white hover:text-[#1da2cf] transition-colors'
                }`}
                onClick={() => setActiveTab('duels')}
              >
                Duels
              </button>
              <button
                className={`px-4 md:px-10 py-3 md:py-2 rounded-[15px] cygun-bold uppercase text-[22px] md:text-[39px] leading-[30px] ${
                  activeTab === 'tournaments'
                    ? 'bg-[#050d19] text-[#1da2cf]'
                    : 'text-white hover:text-[#1da2cf] transition-colors'
                }`}
                onClick={() => setActiveTab('tournaments')}
              >
                Tournaments
              </button>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {renderCards(tabData[activeTab])}
            </div>

            {/* Play Now Button */}
            <footer className="contest-enter-wrapper p-[1px] mt-4 max-w-md mx-auto">
              <button
                className="contest-enter-button w-full text-center barlow-black text-2xl md:text-[29px] leading-[60px] uppercase flex items-center justify-center gap-8"
                aria-label="Enter contest"
              >
                <img src={signup02} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                <span>Play Now</span>
                <img src={signup01} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
              </button>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
