import React, { useState, useEffect } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { ContestInfo } from './components/ContestInfo';
import { ChevronLeft, Play, ChevronDoubleLeft, ChevronDoubleRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import play from '../../image/icons/videoplay.svg';
import videobanner from '../../image/icons/newbanner.png';
import videobanner2 from '../../image/secondthumb.png';
import videobanner3 from '../../image/videobanner3.png';
import contestlogo from '../../image/contest-LOGO.svg';
import contestarrow from '../../image/icons/contest-arrow.svg';
import icon1 from '../../image/icons/icon-1.png';
import bgimage from '../../image/contest-bg.png';
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import UserProfileMobile from '../../components/UserProfileMobile';
import EnterNow from './EnterNow';
import video from "../../image/video/Welcome to the MetaTope!.mp4";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ContestDetails() {
  const [showEnterNow, setShowEnterNow] = useState(false);
  const [userCredits] = useState(5000);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const contestEndTime = new Date('2025-04-30T23:59:59');
    const timer = setInterval(() => {
      const now = new Date();
      const difference = contestEndTime.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    { type: 'video' as const, url: video, thumbnail: videobanner },
    { type: 'image' as const, url: videobanner2 },
    { type: 'image' as const, url: videobanner3 },
  ];

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
                CONTEST DETAILS
              </h1>
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <article className="py-6 px-4 md:px-0">
          {/* Logo Section */}
          <header className="grid md:grid-cols-[1.5fr_1fr] my-6">
            <figure className="flex items-center justify-center">
              <img
                src={contestlogo}
                alt="Rebel Speedrun"
                className="h-16 md:h-20"
              />
            </figure>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            {/* Left Column */}
            <section className="md:col-span-3 space-y-6">
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
            <aside className="md:col-span-2 w-[90%] lg:w-[80%] xl:w-full mx-auto">
              <ContestInfo timeLeft={timeLeft} />
              
              {/* Rules Section */}
              <section className="contest-rules-container p-6 rounded-xl text-lg text-[#758695] mt-6">
                <h2 className="sr-only">Contest Rules</h2>
                <ul className="space-y-1 barlow-condensed-regular" role="list">
                  <li>• Limit 1 entry per person.</li>
                  <li>• Each entry is worth 3 attempts.</li>
                  <li>• Pot size is based on the amount of players entered.</li>
                  <li>• Only your best attemp will be counted.</li>
                  <li>• Competition ends at 11:59:59 EST 04/30/25.</li>
                  <li>• Any attempts not played by close of competition will be forfeited.</li>
                  <li>• Top 10 players will be awarded upon close of competition.</li>
                </ul>
              </section>

              {/* Enter Button */}
              <footer className="contest-enter-wrapper p-[1px] mt-6">
                <button
                  onClick={() => setShowEnterNow(true)}
                  className="contest-enter-button w-full text-center barlow-black text-2xl md:text-3xl uppercase flex items-center justify-center gap-3 p-2"
                  aria-label="Enter contest"
                >
                  <img src={signup02} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                  <span>ENTER NOW!</span>
                  <img src={signup01} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                </button>
              </footer>

              <EnterNow
                isOpen={showEnterNow}
                onClose={() => setShowEnterNow(false)}
                entryFee={10000}
                contestEndTime={new Date('2025-04-30T23:59:59')}
                userCredits={userCredits}
              />
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}