import React, { useState, useEffect } from 'react';
import speedrunlogo from  '../../image/icons/speedrunlogo.svg'
import icon1 from '../../image/icons/icon-1.png';
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import CongratulationsPopup from './CongratulationsPopup';
import InsufficientFunds from './InsufficientFunds';

interface EnterNowProps {
  isOpen: boolean;
  onClose: () => void;
  entryFee: number;
  contestEndTime: Date;
  userCredits: number;
}

const EnterNow: React.FC<EnterNowProps> = ({ isOpen, onClose, entryFee, contestEndTime, userCredits }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showInsufficientFunds, setShowInsufficientFunds] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = contestEndTime.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [contestEndTime]);

  useEffect(() => {
    console.log("EnterNow mounted with credits:", userCredits);
  }, [userCredits]);

  // Updated scroll lock effect
  useEffect(() => {
    if (isOpen || showCongratulations || showInsufficientFunds) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, showCongratulations, showInsufficientFunds]);

  const handleConfirmEntry = () => {
    if (userCredits < entryFee) {
      setShowInsufficientFunds(true);
      setShowCongratulations(false);
    } else {
      setShowCongratulations(true);
      setShowInsufficientFunds(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
        
        <div className="relative p-6 rounded-lg w-full max-w-xl mx-4" style={{ background: 'linear-gradient(-41deg, rgb(42,35,78) 0%, rgb(5,12,17) 100%)' }}>
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute orbitron-medium right-2 top-0 text-[#758695] hover:text-white text-[30px]"
          >
            ×
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={speedrunlogo} alt="Rebel Speedrun" className="w-64" />
          </div>

          {/* Entry Fee */}
          <div className="mb-2">
            <div className="grid grid-cols-7 p-[4px] bg-[#050d19] overflow-hidden rounded-[5px]">
              <div className="col-span-3 flex items-center">
                <span className="uppercase pl-4 text-[#f4e6c1] text-lg barlow-condensed-semibold">ENTRY FEE:</span>
              </div>
              <div className="col-span-4 bg-[#283643] p-2 flex items-center rounded-[4px] justify-center">
                <div className="flex items-center">
                  <img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" />
                  <span className="text-xl md:text-[25px] lg:text-[30px] orbitron-medium leading-none">{entryFee}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contest Ends Timer */}
          <div className="mb-2">
          <div className="grid grid-cols-7 p-[4px] bg-[#050d19] overflow-hidden rounded-[5px]">
                <div className="col-span-3   flex items-center">
                  <span className="uppercase text-[#f4e6c1] pl-4 text-lg barlow-condensed-semibold">CONTEST ENDS:</span>
                </div>
                <div className="col-span-4 bg-[#702121] p-1 flex items-center justify-center rounded-[4px]">
                  <div className="flex justify-center w-full text-center">
                    <div className="px-1">
                      <div className="text-[25px] leading-none digital-7-mono">
                        {timeLeft.days.toString().padStart(2, '0')}:
                      </div>
                      <div className="text-base leading-none uppercase digital-7-mono">DAYS</div>
                    </div>
                    <div className="px-1">
                      <div className="text-[25px] leading-none digital-7-mono">
                        {timeLeft.hours.toString().padStart(2, '0')}:
                      </div>
                      <div className="text-base leading-none uppercase digital-7-mono">HRS</div>
                    </div>
                    <div className="px-1">
                      <div className="text-[25px] leading-none digital-7-mono">
                        {timeLeft.minutes.toString().padStart(2, '0')}:
                      </div>
                      <div className="text-base leading-none uppercase digital-7-mono">MIN</div>
                    </div>
                    <div className="px-1">
                      <div className="text-[25px] leading-none digital-7-mono">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                      <div className="text-base leading-none uppercase digital-7-mono">SEC</div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-[9px] border-[2px] border-[#161f29] text-lg text-[#758695] leading-tight mt-6 bg-[#000000]"  >
                <ul className="space-y-3 barlow-condensed-regular">
                  <li>• Once you hit CONFIRM ENTRY, credits will be deducted from your account. This action is non-refundable.</li>
                  <li>• The CONTEST END time above is the time limit to compete in the contest, if you do not compete in that time limit, your funds will be forfeited</li>
               
                </ul>
              </div>

          {/* Confirm Button */}
          <div className="p-[1px] rounded-none md:rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9] mt-6">
                <button 
                  onClick={handleConfirmEntry}
                  className="w-full uppercase bg-gradient-to-b from-[#0d0917] to-[#3f1261] hover:from-[#0f0b1d] hover:to-[#4f167b] rounded-none md:rounded-[10px] text-center barlow-black text-xl uppercase flex items-center justify-center gap-3"
                >
                  <img src={signup02} alt="Right Icon" className="w-12 h-12 md:w-16 md:h-16" />
                  confirm entry
                  <img src={signup01} alt="Left Icon" className="w-12 h-12 md:w-16 md:h-16" />
                </button>
              </div>
        </div>
      </div>

      <CongratulationsPopup 
        isOpen={showCongratulations} 
        onClose={() => setShowCongratulations(false)} 
      />

      <InsufficientFunds
        isOpen={showInsufficientFunds}
        onClose={() => setShowInsufficientFunds(false)}
        entryFee={entryFee}
      />
    </>
  );
};

export default EnterNow;
