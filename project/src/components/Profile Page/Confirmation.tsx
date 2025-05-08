import React, { useState } from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import contestarrow from '../../image/icons/contest-arrow.svg';
import UserProfileMobile from '../../components/UserProfileMobile';
import icon1 from '../../image/icons/icon-1.png';


const Confirmation: React.FC = () => {


  return (
    <div className="w-full bg-[#000000] h-screen text-white py-10 md:py-16 relative">
      {/* Shape Divider */}
      <div className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
      </div>
      {/* Header */}
      <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
        <div className='block md:hidden mt-4 px-6'>
          <UserProfileMobile />
        </div>
        <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
          <div className="flex items-center gap-3">
            <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">CONFIRMATION</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-0 md:py-4 px-6 md:px-0">
        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-1 md:gap-6 w-full mt-6 md:mt-12">
          {/* Left Column with Confirmation and Button */}
          <div className="flex flex-col order-2 md:order-1">
            <div className="border border-[#161f29] rounded-[4px] md:rounded-[6px] text-center py-4 md:py-8 px-4 mb-6 mt-6 md:mt-0">
              <p className="text-[#758695] text-[25px] leading-none barlow-condensed-regular leading-tight">Payment Confirmed</p>
              <p className="text-[#758695] text-[25px] leading-none barlow-condensed-regular leading-tight">Thank you for your purchase.</p>
            </div>
            {/* Button - Hidden on mobile, shown in desktop */}
            <div className="hidden md:block">
              <button className="w-full bg-[#194272] border border-[#38638b] text-white text-lg md:text-xl py-4 rounded-[2px] md:rounded-[7px] uppercase barlow-black">
                Find a Contest
              </button>
            </div>
          </div>

          {/* Right Column - Purchase Summary */}
          <div className="order-1 md:order-2">
            <div className="bg-[#161f29] rounded-[12px] py-6 px-6 h-full text-white">
              {/* Credits Purchased */}
              <div className="flex justify-between text-[#fff0c9] text-lg ">
                <span className="barlow-condensed-semibold leading-none">CREDITS PURCHASED:</span>
                <div className="flex items-center">
                  <img src={icon1} alt="coin" className="w-4 h-4 mr-1" />
                  <span className="orbitron-semibold leading-none">1,000</span>
                </div>
              </div>

              {/* Bonus Credits */}
              <div className="flex justify-between text-[#fff0c9] text-lg ">
                <span className="barlow-condensed-semibold">BONUS CREDITS EARNED:</span>
                <div className="flex items-center">
                  <img src={icon1} alt="coin" className="w-4 h-4 mr-1" />
                  <span className="orbitron-semibold">200</span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-[#194272] my-4" />

              {/* Total Credits */}
              <div className="flex justify-between items-center">
                <span className="text-white barlow-condensed-semibold text-[25px] md:text-[28px]">TOTAL CREDITS:</span>
                <div className="flex items-center">
                  <img src={icon1} alt="coin" className="w-6 h-6 mr-1" />
                  <span className="text-[#e102e3] text-[25px] md:text-[28px] orbitron-semibold">1,200</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-white barlow-condensed-semibold text-[25px] md:text-[28px]">TOTAL PRICE:</span>
                <span className="text-[#e102e3] text-[25px] md:text-[28px] orbitron-semibold">$1.00</span>
              </div>
            </div>
          </div>

          {/* Button - Shown only on mobile */}
          <div className="order-3 md:hidden">
            <button className="w-full bg-[#194272] border border-[#38638b] text-white text-lg md:text-xl py-4 rounded-[2px] md:rounded-[7px] uppercase barlow-black">
              Find a Contest
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Confirmation;
