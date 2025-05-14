import React, { useEffect } from 'react';
import speedrunlogo from '../../image/icons/speedrunlogo.svg';
import buyLeft from "../../image/icons/ios.svg";
import buyRight from "../../image/icons/sign-up-ar-2.svg";
import adnroidicon from "../../image/icons/android.svg";
import macicon from "../../image/icons/mac.svg";
import pcicon from "../../image/icons/window.svg";
import browsericon from "../../image/icons/browser.svg"
import glowingline from "../../image/icons/glowing-line.svg";

interface CongratulationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CongratulationsPopup: React.FC<CongratulationsPopupProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 flex items-center justify-center z-50 px-2 overflow-y-auto ">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

    <div
  className="relative p-4 md:p-6 rounded-lg w-full max-w-xl mx-auto max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#758695]/50 scrollbar-track-transparent"
  style={{ background: 'linear-gradient(-41deg, rgb(42,35,78) 0%, rgb(5,12,17) 100%)' }}
>


        <button
          onClick={onClose}
          className="absolute orbitron-light text-[37px] right-2 -top-3 text-[#758695] hover:text-white text-[30px] rotate-45"
        >
          +
        </button>

        <div className="text-center mb-4">
          <h2 className="text-[31px] md:text-[37px] leading-none barlow-black text-white mb-2">CONGRATULATIONS!</h2>
          <img src={glowingline} alt="glowing line" className="w-auto mx-auto h-auto -mt-1 md:-mt-3 " />
          <p className="text-[#758695] orbitron-semibold">You have successfully entered the contest Good luck!</p>
        </div>

        <div className="flex justify-center mb-4">
          <img src={speedrunlogo} alt="Rebel Speedrun" className="w-64 md:w-96" />
        </div>
        {/* Download options */}
        <div className="flex flex-col space-y-6 bg-[#050d19] p-4 rounded-lg">
          {/* Play Now Heading */}
          <div className="text-center">
            <h3 className="text-2xl md:text-[37px] leading-none text-[#ffefc9] barlow-black">PLAY NOW</h3>

          </div>

          {/* Mobile downloads */}
          <div className="space-y-2">
            <p className="text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide">
              DOWNLOAD ON MOBILE:
            </p>
            <div className="flex justify-center space-x-4">
              {/* iOS */}

              <button className="w-[220px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[2px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">


                {/* <span className="absolute inset-0 bg-gradient-to-r from-[#080e16]/50 to-[#9929ea]/50 rounded-[2px] md:rounded-[8px] pointer-events-none z-0"></span> */}

                {/* Content */}
                <img src={buyLeft} alt="left arrow" className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
                <div className="text-center z-10">
                  <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">ios</p>
                </div>
                <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

              </button>



              {/* Android */}
              <button className="w-[220px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[2px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">



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
              <button className="w-[220px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[2px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">



                {/* Content */}
                <img src={macicon} alt="left arrow" className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
                <div className="text-center z-10">
                  <p className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">Mac</p>
                </div>
                <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />

              </button>

              {/* PC */}
              <button className="w-[220px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[2px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">



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
              <button className="w-[220px] relative flex items-center justify-between  px-2 md:px-4 py-2 rounded-[2px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">



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
  );
};

export default CongratulationsPopup;
