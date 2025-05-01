import React, { useState } from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import contestarrow from '../../image/icons/contest-arrow.svg';
import UserProfileMobile from '../../components/UserProfileMobile';
import icon1 from '../../image/icons/icon-1.png';

const CheckoutCrypto: React.FC = () => {


 return (
  <div className="w-full bg-[#000000] text-white py-10 md:py-16 mb-6 relative">
   {/* Shape Divider */}
   <div className="absolute top-0 md:-top-10 left-0 w-full">
    <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
    <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
   </div>

   {/* Header */}
   <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
    <div className='block md:hidden'>
     <UserProfileMobile />
    </div>
    <div className="border-b-[2px] border-[#d540f3] md:px-0 py-4 md:py-8 mx-4">
     <div className="flex items-center gap-3">
      <img src={contestarrow} alt="checkout arrow" />
      <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">CHECKOUT</h1>
     </div>
    </div>
   </div>

   {/* Content */}
   <div className="max-w-xl mx-auto py-16 px-4">
    <div className="grid grid-cols-2 mb-6 bg-[#161f29] rounded-lg overflow-hidden">
     <div className="flex items-center pl-4 py-2">
      <div className="flex items-center">
       <div className="bg-yellow-500 rounded-full h-4 w-4 mr-2"><img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" /></div>
       
       <span className="text-2xl orbitron-semibold text-white">1,200</span>
      </div>
     </div>
     <div className="bg-[#283643] p-4 text-center">
      <span className="text-[#ff0000] text-2xl orbitron-semibold">$100</span>
     </div>
    </div>

   {/* Desktop Only */}
<div className="hidden md:block border border-[#161f29] p-3 rounded-md text-center mb-6 bg-[#050d19]">
  <p className="mb-1 text-[#758695] barlow-condensed-regular text-xl">This transaction is non-refundable.</p>
  <p className="text-[#758695] barlow-condensed-regular text-xl">All Credits must be assigned before they can be withdrawn.</p>
</div>

{/* Mobile Only */}
<div className="block md:hidden border border-[#161f29] p-3 rounded-md text-center mb-6 bg-[#050d19]">
  <p className="mb-1 text-[#758695] barlow-condensed-regular text-xl">
    This transaction is non-refundable. All Credits must be wagered before they can be withdrawn.
  </p>
</div>


    <div className="text-center mb-6">
     <p className="text-white text-[#ddcfaf] barlow-bold uppercase text-sm">
      TO CONTINUE WITH YOUR PURCHASE,
      <br />
      PLEASE CLICK THE LINK BELOW.
     </p>
    </div>
    <button className="w-full bg-[#194272] border border-[#38638b] text-white py-3 rounded uppercase barlow-bold tracking-wide">
     CONTINUE TO COINBASE
    </button>
   </div>
  </div>
 );
};

export default CheckoutCrypto;