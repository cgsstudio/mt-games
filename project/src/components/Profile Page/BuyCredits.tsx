import React, { useState } from 'react';

import 'swiper/css';

import icon1 from '../../image/icons/icon-1.png';

import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';
import UserProfileMobile from '../UserProfileMobile'



export default function BuyCredits() {
 
  


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
        <UserProfileMobile  />
        </div>
        

        <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 py-3 md:py-8 ">
          <div className="flex items-center gap-3">
            {/* <img src={contestarrow} alt="contestarrow"  /> */}
            <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">BUY CREDITS</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto p-4">
     

        {/* Main Content - 2 Column Grid with Custom Widths */}
        <div className="grid grid-cols-1  lg:grid-cols-5 gap-6 mt-12 ">
          {/* Left Column - Wider (3/5) */}
          <div className="md:col-span-3 space-y-6 w-full lg:w-[95%]">
          
            <div className="grid grid-cols-7 p-[5px] bg-[#161f29] overflow-hidden rounded-[12px]">
              <div className="col-span-3   flex items-center justify-center">
                <span className="uppercase text-[#f4e6c1] text-xl barlow-condensed-semibold">Current Balance:</span>
              </div>
              <div className="col-span-4 bg-[#283643] p-3 md:p-5 flex items-center rounded-[2px] md:rounded-[6px] justify-center ">
                <div className="flex items-center">
                    <img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" />
                  {/* <span className="text-yellow-500 mr-2">●</span> */}
                  <span className="text-[27px] lg:text-[30px] orbitron-semibold leading-none ">10,000</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-3 md:p-6 rounded-[12px] md:rounded-[15px] border-[2px] border-[#161f29] text-base md:text-xl text-[#758695] mt-6 bg-[#000000]"  >
              <ul className="space-y-1 barlow-condensed-regular">
                <li>• $1 buys you 1,000 Credits.</li>
                <li>• Earn 200 Bonus Credits for every 1,000 Credits purchased.</li>
                <li>• Bonus credits can be used for entries but cannot be redeemed for cash.</li>
                <li>• Only winnings may be withdrawn.</li>
            
              </ul>
            </div>

       
          </div>

          {/* Right Column - Narrower (2/5) */}
          <div className="md:col-span-2 space-y-4 ">
            {/* Contest Status - EXACTLY MATCHING THE IMAGE */}
                 <div className="col-span-1 space-y-6 hidden lg:block">
                            {['See Special Offers', 'Subscriptions Plans'].map((item) => (
                              <div key={item} className="relative group cursor-pointer orbitron-medium">
                                <div className="absolute -inset-0.5 bg-[#d540f3] 
                                  rounded-[25px] opacity-75 group-hover:opacity-100 
                                  transition duration-300 blur-sm group-hover:blur-md animate-pulse"
                                />
                                <div className="relative flex items-center justify-between bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] 
                                  text-white pl-6 py-3 rounded-[25px] 
                                  group-hover:bg-[#172A3A] transition-colors
                                  border border-[#d540f3] group-hover:border-pink-500 text-lg md:text-xl  xl:text-[25px]">
                                  {item}
                                  <div className="flex items-center">
                                    <img src={doublearrow} alt="arrow" className="w-14 h-14 lg:w-20 lg:h-20 block" />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          
          


          </div>

          
        </div>
        {/* Another Section with the Same 2-Column Layout */}
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-0 lg:mt-12">
  {/* Left Column (3/5) */}
  <div className="md:col-span-3 space-y-6 w-full lg:w-[95%]">
  <div className="bg-[#161f29] rounded-[12px] px-4 md:px-8 py-6 md:py-12 w-full ">
        <h2 className="text-white text-center barlow-bold text-lg  md:text-xl mb-2">HOW MANY CREDITS WOULD YOU LIKE TO PURCHASE?</h2>
        <p className="text-[#fff0c9] barlow-semibold text-base text-center mb-6">Minimum purchase: 1,000 Credits</p>
        
        <div className="flex items-center justify-between">
        <div className="flex items-center bg-[#050d19] py-2 px-4 md:py-4 md:px-4 rounded-[3px]  md:w-[70%]">
  <span className="text-yellow-500 mr-2">
    <img src={icon1} alt="Blue icon" className="w-4 h-4 lg:w-5 lg:h-5" />
  </span>
  <input
    type="text"
    placeholder="1,000"
    className="bg-transparent text-[#9d9a9a] text-lg md:text-[25px] orbitron-semibold focus:outline-none w-full placeholder-[#9d9a9a]"
  />
</div>

            
            <button className="bg-[#194272] border border-[#38638b]  text-base md:text-lg text-white barlow-black py-2 px-4 md:py-4 md:px-4 rounded-[7px]  md:w-[30%] ml-3">
                CALCULATE
            </button>
        </div>
    </div>
  </div>

  {/* Right Column (2/5) */}
  <div className="md:col-span-2 space-y-6">
  <div className="flex flex-col gap-6">
      {/* Main credit display */}
      <div className="bg-[#161f29] rounded-[12px] py-2 px-4 md:py-6 px-6 text-white">
        <div className="text-center text-[35px] md:text-[42px] orbitron-semibold leading-none mb-2 md:mb-8">$1.00</div>
        
        <div className="flex justify-between text-[#fff0c9] text-xl mb-1">
          <span className="barlow-condensed-semibold">CREDITS:</span>
          <div className="flex items-center">
            <img src={icon1} alt="Diamond" className="w-4 h-4 mr-1" />
            <span className="orbitron-semibold">1,000</span>
          </div>
        </div>
        
        <div className="flex justify-between text-[#fff0c9] text-lg leading-none md:text-xl mb-2">
          <span className="barlow-condensed-semibold">BONUS CREDITS:</span>
          <div className="flex items-center">
            <img src={icon1} alt="Diamond" className="w-4 h-4 mr-1" />
            <span className="orbitron-semibold">200</span>
          </div>
        </div>
        
        <hr className="border-[#194272] mb-2" />
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-white barlow-condensed-semibold text-[25px] md:text-[32px]">TOTAL CREDITS:</span>
          <div className="flex items-center">
            <img src={icon1} alt="Diamond" className="w-6 h-6 mr-1" />
            <span className="text-[#e102e3] text-[25px] md:text-[32px]  orbitron-semibold">1200</span>
          </div>
        </div>
      </div>
      
      {/* Checkout buttons */}
      <div className="flex gap-8 mx-4 md:mx-0">
        <button className="bg-[#194272] border border-[#38638b]  text-white barlow-black py-4 px-4 rounded-[2px] md:rounded-[7px] text-center flex-1">
          <div className='text-[14px] md:text-lg leading-none'>CHECKOUT WITH</div>
          <div className='text-[18px] md:text-[23px] leading-none' >CREDIT CARD</div>
        </button>
        
        <button className="bg-[#194272] border border-[#38638b]  text-white barlow-black py-4 px-4 rounded-[2px] md:rounded-[7px] text-center flex-1">
          <div className='text-[14px] md:text-lg leading-none'>CHECKOUT WITH</div>
          <div className='text-[18px] md:text-[23px] leading-none'>CRYPTO</div>
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}