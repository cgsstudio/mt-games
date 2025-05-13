import React, { useState, useRef, useEffect } from 'react';
import play from '../image/icons/videoplay.svg';
import videobanner from '../image/icons/newbanner.png';
import signup01 from '../image/icons/doublechevron.svg';
import signup02 from '../image/icons/doublechevron.svg';
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
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Popup Container */}
      <div ref={popupRef} className="relative w-full max-w-4xl mx-4 rounded-lg overflow-hidden box-shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute orbitron-light text-[37px]  top-0 right-0  z-10 w-8 h-8 flex items-center justify-center text-[#758695] hover:text-white rotate-45"
        >
          +
        </button>

        {/* Video Container */}
        <div className="relative bg-[#161f29] px-6 pt-6">
          {/* Video Thumbnail */}
          <img src={videobanner} alt="video thumbnail" className="w-full h-auto rounded-[7px] border-[2px] border-[#283643]" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="w-20 h-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ">
              <img src={play} alt="" className='w-full h-full ' />
            </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="flex items-center justify-between bg-[#161f29] px-6 pt-2 pb-6">
          <div className="p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9]">
            <button
              className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] text-white py-2 px-5 text-xl barlow-black tracking-wide uppercase flex items-center gap-6 rounded-[10px]"
              onClick={() => setSignupPopupOpen(true)}
            >
              <img src={signup02} alt="icon" className="w-8 h-8 drop-shadow-[0_0_5px_#ff00cc]" />
              Play Now
              <img src={signup01} alt="icon" className="w-8 h-8 drop-shadow-[0_0_5px_#ff00cc] rotate-180" />
            </button>
          </div>

          <a href="#" className="text-[#fff0c9] text-xl barlow-bold hover:text-yellow-200 flex gap-2 items-center mt-3">
            See Contest Info
            <img src={rightchevron} alt="" />
          </a>
        </div>
      </div>

      {/* Game Signup Popup */}
      <GameSignupPopup 
        isOpen={signupPopupOpen}
        onClose={() => setSignupPopupOpen(false)}
        game={null}
      />
    </div>
  );
};

export default VideoPopup;