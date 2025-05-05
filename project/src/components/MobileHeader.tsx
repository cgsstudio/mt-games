import React, { useState } from 'react';
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
import icon3 from '../image/icons/user.svg';
import MobileDropdown from './MobileDropdown';

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
      <div className="fixed lg:hidden top-1/2 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md">
        <div 
          className="bg-[#050d19]/70 backdrop-blur-sm rounded-lg p-4 border border-[#194272] shadow-lg"
          onClick={() => setIsDropdownOpen(true)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <img src={icon1} alt="Gold icon" className="w-4 h-4" />
                <span className="cygun-bold text-xl text-white">10,000</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src={icon2} alt="Blue icon" className="w-4 h-4" />
                <span className="cygun-bold text-xl text-white">10,000</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <img src={icon3} alt="User icon" className="w-4 h-4" />
              <div className="font-medium text-xl cygun text-gray-300">USER NAME</div>
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
