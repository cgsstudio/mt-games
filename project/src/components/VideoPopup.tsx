import React, { useState, useRef, useEffect } from 'react';
// Asset imports
import play from '../image/icons/videoplay.svg';
import videobanner from '../image/icons/newbanner.png';
import signup01 from '../image/icons/sign-up-ar-1.svg';
import signup02 from '../image/icons/sign-up-ar-2.svg';
import rightchevron from '../image/icons/seecontetsarrow.svg';
import GameSignupPopup from './GameSignupPopup';

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ isOpen, onClose, videoUrl }) => {
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  
  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div ref={popupRef} className="relative w-full max-w-4xl mx-4 rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close video popup"
          className="absolute orbitron-light text-[37px] -top-1 md:top-0 right-0 z-10 w-8 h-8 flex items-center justify-center text-[#758695] hover:text-white rotate-45"
        >
          +
        </button>

        {/* Video Section */}
        <div className="relative bg-[#161f29] px-3 md:px-6 pt-6">
          <img 
            src={videobanner} 
            alt="Video preview" 
            className="w-full h-auto rounded-none md:rounded-[7px] border-[2px] border-[#283643]" 
          />
          <button 
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-20 h-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <img src={play} alt="Play button" className="w-full h-full" />
            </span>
          </button>
        </div>

        {/* Controls Section */}
        <div className="flex items-center justify-between bg-[#161f29] px-3 md:px-6 pt-2 pb-6">
          <div className="p-[2px] rounded-none md:rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9]">
            <button
             
              className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] text-white py-2 px-2 text-[14px] md:text-xl barlow-black tracking-wide uppercase flex items-center gap-6 rounded-none md:rounded-[10px] w-[200px] md:w-[250px] justify-center"
            >
              <img src={signup02} alt="" className="w-8 h-8 drop-shadow-[0_0_5px_#ff00cc]" />
              Play Now
              <img src={signup01} alt="" className="w-8 h-8 drop-shadow-[0_0_5px_#ff00cc]" />
            </button>
          </div>

          <a 
            href="#"
            className="text-[#fff0c9] text-[16px] md:text-xl barlow-bold hover:text-yellow-200 flex gap-1 md:gap-2 items-center mt-0 md:mt-3"
          >
            See Contest Info
            <img src={rightchevron} alt="Right arrow" />
          </a>
        </div>
      </div>

   
    </div>
  );
};

export default VideoPopup;