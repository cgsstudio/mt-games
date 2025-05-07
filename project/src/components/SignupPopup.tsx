import { X } from "lucide-react";
import popupbg from '../image/icons/graphic.svg';
import mobilepopupbg from '../image/icons/mobilegraphic.svg'
import signup01 from '../image/icons/sign-up-ar-1.svg';
import signup02 from '../image/icons/sign-up-ar-2.svg';
import MainLogo from '../image/Logos/main-logo.png';
import glowingline from "../image/icons/glowing-line.svg";
import buyRight from "../image/icons/glowchavron.svg";

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupPopup({ isOpen, onClose }: SignupPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative w-full h-[400px] md:h-auto max-w-4xl rounded-lg overflow-hidden p-[1px] mx-4 md:mx-0"
        style={{
          background: 'linear-gradient(to bottom, #0560fa, #d93ef9)'
        }}
      >
        {/* Close button moved to main container */}
        <button
          onClick={onClose}
          className="absolute orbitron-medium right-2 top-2 text-[#758695] hover:text-white text-[20px] z-30"
        >
          X
        </button>
        
        <div
          className="w-full h-full rounded-lg relative z-20 overflow-y-auto md:overflow-visible"
          style={{
            background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)'
          }}
        >
          {/* Background image overlay */}
          <div 
            className="absolute z-10 inset-0 "
            style={{
              backgroundImage: `url(${window.innerWidth < 768 ? mobilepopupbg : popupbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Content container */}
          <div className="relative z-10 px-4 md:px-6 py-3 md:py-10 flex flex-col justify-between h-full">
            <div className="text-white flex flex-col justify-between h-full md:flex-row">
              {/* Left side with logo and tagline */}
              <div className="md:w-1/2 flex flex-col items-start  space-y-2 py-0 px-0 md:py-4 md:px-4 -mt-0 md:-mt-[45px] ">
               <div>
               <div className="flex items-center  justify-center">
                  <img src={MainLogo} alt="MT Games" className="w-48 md:w-80  " />
                </div>
                <div className="text-xl md:text-2xl text-center barlow-black text-[#ffefc9] mb-2">
                  LET THE GAMING BEGIN.
                </div>
                <div className="flex justify-center ">
                  <img src={glowingline} alt="glowing line" className="w-48 md:w-64 -mt-3" />
                </div>

               </div>
             
              </div>

              {/* Right side with character image and offer */}
              <div className="md:w-1/2 relative flex flex-col">
                {/* Game characters image container */}
                <div className="relative h-30 md:h-64 flex items-center justify-end">
                  {/* Offer text */}
                  <div className="text-center p-2 md:p-4 w-3/4">
                    <p className="text-xl leading-tight md:text-2xl orbitron-semibold">Sign up now to claim XX <span className="text-purple-500">FREE</span> credits when you purchase 10,000 Credits.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action button */}
            <div className="p-4 flex justify-center">
              <div className="w-[300px] p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9] mt-4">
                <button 
                  onClick={() => setShowEnterNow(true)}
                  className="w-full bg-gradient-to-b py-3 px-6 from-[#0d0917] to-[#3f1261] hover:from-[#0f0b1d] hover:to-[#4f167b] rounded-[10px] text-center barlow-black text-xl md:text-2xl uppercase flex items-center justify-between"
                >
                  <img src={buyRight} alt="Right Icon" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] " />
                  SIGN UP NOW
                  <img src={buyRight} alt="Left Icon" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}