import React, { useEffect, useRef } from 'react';
import robotimg from '../image/SPARTAN-COMMANDER.png'
import glowingline from "../image/icons/glowing-line.svg";
import buyLeft from "../image/icons/ios.svg";
import buyRight from "../image/icons/glowchavron.svg";
import adnroidicon from "../image/icons/android.svg";
import macicon from "../image/icons/mac.svg";
import pcicon from "../image/icons/window.svg";
import browsericon from "../image/icons/browser.svg"

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
          className="orbitron-medium absolute top-4 right-4 z-10 text- text-[#758695] hover:text-white"
        >
         x
        </button>

        {/* Popup content */}
        <div className={`p-[2px] rounded-lg`}
          style={{
            background: 'linear-gradient(to bottom, #0560fa, #d93ef9)',
          }}>
          <div className="w-full h-full flex flex-col lg:flex-row bg-no-repeat bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${robotimg})` }}>
            {/* Game character image - left side */}
            <div className="w-full lg:w-2/5 relative">

            </div>

            {/* Right side content */}
            <div className="w-full lg:w-3/5 px-3 pb-3 pt-4 flex flex-col">
              {/* Game title */}
              <div className="mb-6 text-center">
                {/* Add this line for debugging */}
                {console.log("Game object:", game)}
                <img
                  src={game?.logo}
                  alt={game?.title}
                  className="h-16 md:h-32 w-auto mx-auto object-contain"
                />
              </div>

              {/* Download options */}
              <div className="flex flex-col space-y-6 bg-[#050d19] p-4 rounded-lg">
                {/* Play Now Heading */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-[37px] leading-none text-[#ffefc9] barlow-black">PLAY NOW</h3>
                  <img src={glowingline} alt="glowing line" className="w-full h-auto -mt-1 md:-mt-3 " />
                </div>

                {/* Mobile downloads */}
                <div className="space-y-2">
                  <p className="text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide">
                    DOWNLOAD ON MOBILE:
                  </p>
                  <div className="flex justify-center space-x-4">
                    {/* iOS */}

                    <button className="w-[260px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      
                      {/* <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[4px] md:rounded-[8px] pointer-events-none z-0"></span> */}

                      {/* Content */}
                      <img src={buyLeft} alt="left arrow" className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">ios</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>



                    {/* Android */}
                    <button className="w-[260px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                     

                      {/* Content */}
                      <img src={adnroidicon} alt="left arrow" className="w-[25px] h-[25px ] md:w-[35px] md:h-[35px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">Android</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

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
                    <button className="w-[260px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                     

                      {/* Content */}
                      <img src={macicon} alt="left arrow" className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">Mac</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>

                    {/* PC */}
                    <button className="w-[260px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      

                      {/* Content */}
                      <img src={pcicon} alt="left arrow" className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">Pc</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

                    </button>
                  </div>
                </div>

                {/* Browser play option */}
                <div className="space-y-2">
                  <p className="text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide">
                    PLAY IN BROWSER:
                  </p>
                  <div className="flex justify-center">
                    <button className="w-[260px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">

                      

                      {/* Content */}
                      <img src={browsericon} alt="left arrow" className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
                      <div className="text-center z-10">
                        <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">Browser</p>
                      </div>
                      <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

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