import React, { useState } from 'react';
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
import icon3 from '../image/icons/user.svg';
import MobileDropdown from './MobileDropdown';
import lines from '../image/icons/LINES.svg'

const MobileHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = {
    username: "User Name",
    credits: 10000,
    bits: 10000,
    availableForWithdrawal: 0
  };

  return (
    <>
      <div className="fixed lg:hidden top-1/2 left-1/2 -translate-x-1/2 z-40 w-full">
        <div 
          className="bg-[#050d19]/70 backdrop-blur-sm  px-1 py-4  shadow-lg"
          
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2"
            onClick={() => setIsDropdownOpen(true)}
            >
              <div className="flex items-center space-x-1">
                <img src={icon1} alt="Gold icon" className="w-4 h-4" />
                <span className="cygun-bold text-xl text-white">10k</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src={icon2} alt="Blue icon" className="w-4 h-4" />
                <span className="cygun-bold text-xl text-white">10k</span>
              </div>
              <div className="flex items-center space-x-1">
              <img src={icon3} alt="User icon" className="w-4 h-4" />
              <div className="font-medium text-xl cygun-bold text-gray-300">USER NAME</div>
            </div>
              
            </div>
            <div className='flex items-center space-x-2'>
            
            <img src={lines} alt="divider" className="h-12" />
            <button className="text-base linear-button relative orbitron-semibold">
                BUY CREDITS
              </button>

            </div>
         
           
          </div>
        </div>
      </div>

      <MobileDropdown 
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        userData={userData}
      />
    </>
  );
};

export default MobileHeader;
