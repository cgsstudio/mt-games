import React from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';
import UserProfileMobile from '../UserProfileMobile'
import tableimg from '../../image/table-image.png'
import icon1 from '../../image/icons/icon-1.png';

export default function ActiveContest() {
    // Sample active contests data
    const activeContests = [
      { id: 1, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "1 Day" },
      { id: 2, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "12 Hours" },
      { id: 3, profileImg: tableimg, entryFee: 10000, attempts: { current:"X", total: "N" }, timeRaimining: "5 Hours" },
      { id: 4, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "30 Minutes" },
      { id: 4, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "12 Days" },
      { id: 4, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "5 Minutes" },
    ];

    return (
        <div className="w-full bg-[#000000] text-white py-10 md:py-16 relative">
            {/* Shape Divider */}
            <div className="absolute top-0 md:-top-10 left-0 w-full">
                <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
                <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
            </div>

            {/* Header */}
            <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
                <div className='block md:hidden mt-4'>
                    <UserProfileMobile />
                </div>

                <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 py-3 md:py-8">
                    <div className="flex items-center gap-3">
                        <h1 className="uppercase font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">Active Contests</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-4">
                <div className="bg-black text-white min-h-screen">
                    {/* Contest Table */}
                    <div className="rounded overflow-hidden space-y-4 px-4 md:px-0">
                        {/* Table Header */}
                        <div className="bg-[#161f29] barlow-condensed-bold text-lg md:text-xl grid grid-cols-4 py-4 px-6 text-[#adb0bc] rounded-[6px] my-6 md:my-8">
                            <div className="flex items-center">GAME</div>
                            <div className="flex items-center">ENTRY FEE</div>
                            <div className="flex items-center justify-center">ATTEMPTS</div>
                            <div className="flex items-center text-center md:text-left justify-center">TIME REMAINING</div>
                        </div>

                        {/* Table Body */}
                        <div className="space-y-4">
                            {activeContests.map((contest) => (
                                <div key={contest.id} className="grid grid-cols-4 items-center py-4 px-6 rounded-[6px]" 
                                     style={{ background: 'linear-gradient(180deg, rgb(3, 8, 16) 0%, rgb(7, 18, 33) 100%)' }}>
                                    <div className="flex items-center">
                                        <img
                                            src={contest.profileImg}
                                            alt="game"
                                            className="w-5 h-5 rounded-lg bg-purple-500/20"
                                            style={{ transform: "scale(2.0)" }}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={icon1} alt="coin" className="w-4 h-4 md:w-6 md:h-6" />
                                        <span className="text-[#ff8000] barlow-bold text-base md:text-xl">
                                            {contest.entryFee.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center text-base md:text-xl">
                                        <span className="text-[#2a8fbc] barlow-bold">{contest.attempts.current}</span>
                                        <span className="text-[#ffeccd] barlow-bold">/{contest.attempts.total}</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start pl-0 md:pl-20 text-base md:text-xl">
                                        <span className={
                                            contest.timeRaimining.includes('Minutes') 
                                                ? 'text-[#ff0000] barlow-bold' 
                                                : 'text-[#ffeccd] barlow-bold'
                                        }>
                                            {contest.timeRaimining}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}