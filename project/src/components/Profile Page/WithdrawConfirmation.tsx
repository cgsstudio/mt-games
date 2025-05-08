import React from 'react';
import { useNavigate } from 'react-router-dom';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import UserProfileMobile from '../../components/UserProfileMobile';

const WithdrawConfirmation: React.FC = () => {
  const navigate = useNavigate();

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
            <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">WITHDRAWAL CONFIRMATION</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-0 md:py-4 px-4 md:px-0">
        <div className="flex flex-col w-full mt-0 md:mt-6 ">
          {/* Confirmation Message */}
          <div className="flex flex-col max-w-2xl mx-auto w-full">
            <div className="border border-[#161f29] rounded-[4px] md:rounded-[6px] text-center py-4 md:py-6 px-4 mb-6 mt-6 md:mt-0">
              <p className="text-[#758695] text-[25px] leading-none barlow-condensed-regular leading-tight">Withdrawal Submission Confirmed.</p>
              <p className="text-[#758695] text-[25px] leading-none barlow-condensed-regular leading-tight mt-2">Please allow up to 72 hours for deposit to appear in your account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawConfirmation;
