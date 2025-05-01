import React, { useState, useEffect } from 'react';
import MainLogo from '../image/Logos/main-logo.png';
import Metatop from '../image/Logos/METATOPE-LOGO.png';
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
import icon3 from '../image/icons/user.svg';
import shapedivider from '../image/icons/BG-55.svg'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(currentScrollY > 100 ? false : true);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`sticky top-0 left-0 right-0 z-50 bg-[#050d19] backdrop-blur-sm text-white transition-transform duration-300 w-full ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-6 md:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between lg:justify-between py-2 sm:py-3">
          {/* Mobile Logo Section (Centered) */}
          <div className="flex-1 flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-2 lg:space-y-0 lg:space-x-2">
            <img 
              src={MainLogo} 
              alt="MTGames Logo" 
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
            />
            <div className="orbitron-bold flex items-center gap-2 text-xs text-white-400">
              powered by
              <img 
                src={Metatop} 
                alt="METATOPE Logo" 
                className="h-3 md:h-4 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Now only visible on large screens */}
          <div className="hidden lg:flex items-center gap-6 space-x-3 lg:space-x-4">
            {/* Credits */}
            <div className="flex items-center space-x-2 gap-6 lg:space-x-3">
              <div className="flex items-center space-x-1">
                <img src={icon1} alt="Gold icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="cygun-bold text-2xl">10,000</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src={icon2} alt="Blue icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="cygun-bold text-2xl">10,000</span>
              </div>
            </div>

            {/* User Name */}
            <div className="flex items-center space-x-1">
              <img src={icon3} alt="Blue icon" className="w-4 h-4 lg:w-5 lg:h-5" />
              <div className="font-medium text-gray-300 text-2xl cygun">USER NAME</div>
            </div>
            
            {/* Divider between username and buy button */}
            <div className="h-8 w-px bg-gray-700"></div>

            {/* Buy Credits Button */}
            <button className="text-base linear-button relative orbitron-semibold">
              BUY CREDITS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;