import React, { useEffect, useRef } from 'react';
import robotimg from '../image/icons/robot-bg.png'
import glowingline from "../image/icons/glowing-line.svg";
import buyLeft from "../image/icons/ios.svg";
import buyRight from "../image/icons/glowchavron.svg";

const GameSignupPopup = ({ isOpen, onClose, game }) => {
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        ref={popupRef}
        className="relative w-full max-w-4xl mx-4 overflow-hidden rounded-lg"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-200 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Popup content */}
        <div className={`p-[2px] rounded-lg`}
          style={{
            background: 'linear-gradient(to right, #0560fa, #d93ef9)',
          }}>
          <div className="w-full h-full flex flex-col lg:flex-row bg-no-repeat bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${robotimg})` }}>
            {/* Game character image - left side */}
            <div className="w-full lg:w-2/5 relative">

            </div>

            {/* Right side content */}
            <div className="w-full lg:w-3/5 p-3 flex flex-col">
              {/* Game title */}
              <div className="mb-6 text-center">
                <img
                  src={game?.logo || '/default-game-logo.png'}

                  className="h-24 md:h-32 w-auto mx-auto object-contain"
                />
              </div>

              {/* Download options */}
              <div className="flex flex-col space-y-6 bg-[#050d19] p-4 rounded-lg">
                {/* Play Now Heading */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-[37px] leading-none text-[#ffefc9] barlow-black">PLAY NOW</h3>
                  <img src={glowingline} alt="glowing line" className="w-full h-auto -mt-3 " />
                </div>

                {/* Mobile downloads */}
                <div className="space-y-2">
                  <p className="text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide">
                    DOWNLOAD ON MOBILE:
                  </p>
                  <div className="flex justify-center space-x-4">
                    {/* iOS */}

                    <button className="relative flex items-center justify-center gap-3 md:gap-6 px-3 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-black text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      {/* Gradient Overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[4px] md:rounded-[8px] pointer-events-none z-0"></span>

                      {/* Content */}
                      <img src={buyLeft} alt="left arrow" className="w-[30px] h-[30px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-xl text-[#fff0ca]">ios</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>



                    {/* Android */}
                    <button className="relative flex items-center justify-center gap-3 md:gap-6 px-3 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-black text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      {/* Gradient Overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[4px] md:rounded-[8px] pointer-events-none z-0"></span>

                      {/* Content */}
                      <img src={buyLeft} alt="left arrow" className="w-[30px] h-[30px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-xl text-[#fff0ca]">Android</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>
                  </div>
                </div>

                {/* Desktop downloads */}
                <div className="space-y-2">
                  <p className="text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide">
                    DOWNLOAD FOR DESKTOP:
                  </p>
                  <div className="flex justify-center space-x-4">
                    {/* Mac */}
                    <button className="relative flex items-center justify-center gap-3 md:gap-6 px-3 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-black text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      {/* Gradient Overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[4px] md:rounded-[8px] pointer-events-none z-0"></span>

                      {/* Content */}
                      <img src={buyLeft} alt="left arrow" className="w-[30px] h-[30px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-xl text-[#fff0ca]">Mac</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>

                    {/* PC */}
                    <button className="relative flex items-center justify-center gap-3 md:gap-6 px-3 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-black text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      {/* Gradient Overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[4px] md:rounded-[8px] pointer-events-none z-0"></span>

                      {/* Content */}
                      <img src={buyLeft} alt="left arrow" className="w-[30px] h-[30px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-xl text-[#fff0ca]">Pc</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>
                  </div>
                </div>

                {/* Browser play option */}
                <div className="space-y-2">
                  <p className="text-center text-gray-400 text-sm barlow-medium uppercase tracking-wide">
                    PLAY IN BROWSER:
                  </p>
                  <div className="flex justify-center">
                    <button className="relative flex items-center justify-center gap-3 md:gap-6 px-3 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-black text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      {/* Gradient Overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[4px] md:rounded-[8px] pointer-events-none z-0"></span>

                      {/* Content */}
                      <img src={buyLeft} alt="left arrow" className="w-[30px] h-[30px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-xl text-[#fff0ca]">Browser</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSignupPopup;