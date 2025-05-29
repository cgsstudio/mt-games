// React and third-party imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Image imports
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import turnamentIcon from '../../image/icons/tournament.svg';
import icon1 from '../../image/icons/icon-1.png';
import cardBottomImg from '../../image/bottomlayer.png';

// Timer component
import { TimerContainer } from '../ContestsSection';

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
  buttonText: string;
  showSpots?: boolean;
  spotsLeft?: number;
  players: number;
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
    return '∞';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// ContestCard component
const ContestCard: React.FC<{ contest: Contest, onEnterClick: () => void }> = ({ contest, onEnterClick }) => {
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
            <div className="trapezoid-button-wrapper w-full h-[70px] flex items-center justify-center relative">
              <div className="trapezoid-button w-full h-full flex items-center justify-center">
                <span className='text-[#fff0c9] text-center text-[29px] leading-[25px] uppercase barlow-condensed-bold whitespace-pre-line'>
                  {contest.buttonText}
                </span>
              </div>
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
          <div className="rounded-t-[16px] rounded-b-none overflow-hidden relative">
            <img
              src={contest.image}
              alt={contest.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <button
              className="absolute bottom-2 right-2 w-10 h-10 rounded-full linear-circle flex items-center justify-center cursor-pointer "

            >
              <span className="text-[#00ade1] text-[24px] century-gothic-bold ">?</span>
            </button>
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
                <div className='flex items-center gap-1 orbitron-semibold text-[32px]'>

                  (<img src={contest.icon} alt="Coin Icon" className="w-8 h-8" />
                  <span className="text-[27px] lg:text-[30px] orbitron-semibold leading-none text-[#00ff18]">{formatNumber(contest.prizePool)}</span>)

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center px-4 gap-2 mt-4'>

          <div className="bg-[#000000] w-[180px] h-[50px] flex items-center rounded-[2px] md:rounded-[9px] justify-center ">
            <div className="flex items-center">
              <img src={turnamentIcon} alt="Gold icon" className='mr-4 drop-shadow-[0_0_8px_#ff00cc]' />
              {/* <span className="text-yellow-500 mr-2">●</span> */}
              <p className="text-[27px] lg:text-[25px] barlow-condensed-semibold leading-[13px] text-[#f4e6c1] uppercase "><span className='text-[#00ff18]'>{formatNumber(contest.players)}</span> Players</p>
            </div>
          </div>
          <div className="bg-[#000000]  flex items-center rounded-[2px] md:rounded-[9px] justify-center w-[180px] h-[50px]">
            <div className="flex items-center">
              <img src={icon1} alt="Gold icon" className="w-8 h-8 mr-2" />
              {/* <span className="text-yellow-500 mr-2">●</span> */}
              <p className="text-[#f4e6c1] text-[27px] lg:text-[25px] barlow-condensed-semibold leading-[13px] uppercase "><span className='text-[#00ff18]'>{formatNumber(contest.entryFee)}</span> Entry</p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <footer className="contest-enter-wrapper p-[1px] mt-4">
            <button
              onClick={onEnterClick}
              className="contest-enter-button w-full text-center barlow-black text-2xl md:text-[29px] leading-[60px] uppercase flex items-center justify-around gap-3 "
              aria-label="Enter contest"
            >
              <img src={signup02} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
              <span>ENTER NOW</span>
              <img src={signup01} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
            </button>
          </footer>
        </div>
      </div>

      <div className="absolute -bottom-[22px] left-1/2 transform -translate-x-1/2 translate-y-[40%] w-full z-0">
        <img
          src={cardBottomImg}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContestCard;
export type { Contest };