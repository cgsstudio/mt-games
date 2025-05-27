import { X } from "lucide-react";
import popupbg from '../image/icons/SIGNUPPOPUP.png';
import mobilepopupbg from '../image/icons/MOBILESIGNUPPOPUP.png'
import signup01 from '../image/icons/sign-up-ar-1.svg';
import signup02 from '../image/icons/sign-up-ar-2.svg';
import MainLogo from '../image/Logos/main-logo.png';
import glowingline from "../image/icons/glowing-line.svg";
import buyRight from '../image/icons/sign-up-ar-2.svg';

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupPopup = ({ isOpen, onClose }: SignupPopupProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
      onClick={onClose}
    >
      <div
        className="relative w-full h-[420px] max-w-4xl rounded-lg overflow-hidden p-[1px] mx-4 md:mx-0"
        style={{ background: 'linear-gradient(to bottom, #0560fa, #d93ef9)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute orbitron-light text-[37px] right-2 -top-3 text-[#758695] hover:text-white rotate-45 z-30"
          aria-label="Close popup"
        >
          +
        </button>
        
        {/* Main Content Container */}
        <div
          className="w-full h-full rounded-lg relative z-20 overflow-y-auto md:overflow-visible"
          style={{ background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)' }}
        >
          <div className="absolute z-10 inset-0 sign-up-popup" />
          
          {/* Content Wrapper */}
          <div className="relative z-10 px-4 md:px-6 pt-3 pb-3 md:pt-10 md:pb-6 flex flex-col justify-end h-full">
            <div className="p-4 flex justify-center">
              <div className="w-[300px] p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9] mt-4">
                <button 
                  className="w-full bg-gradient-to-b py-3 px-6 from-[#0d0917] to-[#3f1261] rounded-[10px] text-center barlow-black text-xl md:text-2xl uppercase flex items-center justify-between"
                >
                  <img 
                    src={buyRight} 
                    alt="Left Arrow" 
                    className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" 
                  />
                  <span>Sign Up Now</span>
                  <img 
                    src={buyRight} 
                    alt="Right Arrow" 
                    className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] rotate-180" 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;