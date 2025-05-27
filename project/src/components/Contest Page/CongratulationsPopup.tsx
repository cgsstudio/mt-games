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

interface DownloadButtonProps {
  icon: string;
  platform: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ icon, platform }) => (
  <button className="congratulations-button relative flex items-center justify-between px-2 md:px-4 py-2 rounded-[2px] md:rounded-[8px] text-white text-center overflow-hidden shadow-md hover:scale-105 transition-transform">
    <img src={icon} alt={platform} className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] z-10" />
    <span className="text-center z-10">
      <span className="uppercase barlow-bold text-base md:text-xl text-[#fff0ca]">{platform}</span>
    </span>
    <img src={buyRight} alt="right arrow" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] z-10" />
  </button>
);

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

  const downloadSections = [
    {
      title: "DOWNLOAD ON MOBILE:",
      buttons: [
        { icon: buyLeft, platform: "ios" },
        { icon: adnroidicon, platform: "Android" }
      ]
    },
    {
      title: "DOWNLOAD FOR DESKTOP:",
      buttons: [
        { icon: macicon, platform: "Mac" },
        { icon: pcicon, platform: "PC" }
      ]
    },
    {
      title: "PLAY IN BROWSER:",
      buttons: [
        { icon: browsericon, platform: "Browser" }
      ]
    }
  ];

  return (
    <article className="fixed inset-0 flex items-center justify-center z-50 px-2 overflow-y-auto">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative p-4 md:p-6 rounded-lg w-full max-w-xl mx-auto max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#758695]/50 scrollbar-track-transparent congratulations-popup-container">
        <button onClick={onClose} className="absolute orbitron-light right-2 -top-3 text-[#758695] hover:text-white congratulations-close-button" aria-label="Close popup">+</button>

        <header className="text-center mb-4">
          <h1 className="text-[31px] md:text-[37px] leading-none barlow-black text-white mb-2">CONGRATULATIONS!</h1>
          <img src={glowingline} alt="" aria-hidden="true" className="w-auto mx-auto h-auto -mt-1 md:-mt-3" />
          <p className="text-[#758695] orbitron-semibold w-4/5 mx-auto">You have successfully entered the contest Good luck!</p>
        </header>

        <figure className="flex justify-center mb-4">
          <img src={speedrunlogo} alt="Rebel Speedrun" className="w-64 md:w-96" />
        </figure>

        <section className="flex flex-col space-y-6 bg-[#050d19] p-4 rounded-lg">
          <header className="text-center">
            <h2 className="text-2xl md:text-[37px] leading-none text-[#ffefc9] barlow-black">PLAY NOW</h2>
          </header>

          {downloadSections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-center text-[#758695] text-base orbitron-semibold uppercase tracking-wide">
                {section.title}
              </h3>
              <div className="flex justify-center space-x-4">
                {section.buttons.map((btn, btnIndex) => (
                  <DownloadButton key={btnIndex} icon={btn.icon} platform={btn.platform} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </article>
  );
};

export default CongratulationsPopup;
