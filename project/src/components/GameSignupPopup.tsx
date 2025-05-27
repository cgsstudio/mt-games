import React, { useEffect, useRef } from 'react';
import robotimg from '../image/SPARTAN-COMMANDER.png';
import glowingline from "../image/icons/glowing-line.svg";
import buyLeft from "../image/icons/ios.svg";
import buyRight from "../image/icons/sign-up-ar-2.svg";
import androidIcon from "../image/icons/android.svg";
import macIcon from "../image/icons/mac.svg";
import pcIcon from "../image/icons/window.svg";
import browserIcon from "../image/icons/browser.svg";

// Typography Constants
const TYPOGRAPHY = {
  HEADING: "text-2xl md:text-[37px] leading-none text-[#ffefc9] barlow-black",
  SUBHEADING: "text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide",
  BUTTON_TEXT: "uppercase barlow-bold text-base md:text-xl text-[#fff0ca]"
};

// Button Component
const DownloadButton = ({ icon, text }) => (
  <button className="w-[260px] relative flex items-center justify-between px-2 md:px-4 py-2 rounded-[4px] md:rounded-[8px] border-[0.5px] border-[#d540f3] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">
    <img src={icon} alt={text} className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
    <div className="text-center z-10">
      <p className={TYPOGRAPHY.BUTTON_TEXT}>{text}</p>
    </div>
    <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />
  </button>
);

const GameSignupPopup = ({ isOpen, onClose, game }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const downloadButtons = [
    { section: "DOWNLOAD ON MOBILE:", buttons: [
      { icon: buyLeft, text: "ios" },
      { icon: androidIcon, text: "Android" }
    ]},
    { section: "DOWNLOAD FOR DESKTOP:", buttons: [
      { icon: macIcon, text: "Mac" },
      { icon: pcIcon, text: "PC" }
    ]},
    { section: "PLAY IN BROWSER:", buttons: [
      { icon: browserIcon, text: "Browser" }
    ]}
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-y-auto p-4">
      <div ref={popupRef} className="relative w-full max-w-4xl mx-4 overflow-hidden rounded-lg max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="orbitron-light text-[37px] absolute right-2 -top-3 z-10 text-[#758695] hover:text-white rotate-45">+</button>

        <div className="p-[2px] rounded-lg game-signup-gradient">
          <div className="w-full h-full flex flex-col lg:flex-row bg-no-repeat bg-cover bg-center rounded-lg game-signup-bg">
            <div className="w-full lg:w-2/5 relative" />

            <div className="w-full lg:w-3/5 px-3 pb-3 pt-4 flex flex-col">
              <div className="mb-6 text-center">
                <img src={game?.logo} alt={game?.title} className="h-16 md:h-32 w-auto mx-auto object-contain" />
              </div>

              <div className="flex flex-col space-y-6 bg-[#050d19] p-4 rounded-lg">
                <div className="text-center">
                  <h3 className={TYPOGRAPHY.HEADING}>PLAY NOW</h3>
                  <img src={glowingline} alt="glowing line" className="w-full h-auto -mt-1 md:-mt-3" />
                </div>

                {downloadButtons.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className={TYPOGRAPHY.SUBHEADING}>{section.section}</p>
                    <div className="flex justify-center space-x-4">
                      {section.buttons.map((btn, btnIdx) => (
                        <DownloadButton key={btnIdx} {...btn} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSignupPopup;