import React, { useState, useEffect } from 'react';
import RebelLogo from '../../image/icons/REBEL-BRAWLERS-LOGO.png';
import icon1 from '../../image/icons/icon-1.png';

interface EnterNowProps {
  isOpen: boolean;
  onClose: () => void;
  entryFee: number;
  contestEndTime: Date;
}

const EnterNow: React.FC<EnterNowProps> = ({ isOpen, onClose, entryFee, contestEndTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-gradient-to-b from-[#141432] to-[#1a1a42] p-6 rounded-lg w-full max-w-md mx-4">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white text-xl"
        >
          ×
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={RebelLogo} alt="Rebel Speedrun" className="w-64" />
        </div>

        {/* Entry Fee */}
        <div className="mb-6">
          <div className="text-gray-300 text-sm mb-2">ENTRY FEE:</div>
          <div className="flex items-center gap-2 bg-[#1d1d48] p-3 rounded">
            <img src={icon1} alt="Credits" className="w-5 h-5" />
            <span className="text-white text-2xl font-bold">{entryFee.toLocaleString()}</span>
          </div>
        </div>

        {/* Contest Ends Timer */}
        <div className="mb-6">
          <div className="text-gray-300 text-sm mb-2">CONTEST ENDS:</div>
          <div className="bg-[#331c1c] p-3 rounded flex justify-center">
            <div className="grid grid-cols-4 gap-1 text-center">
              <div>
                <div className="text-[#ff4949] text-xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[#ff4949] text-xs">DAYS</div>
              </div>
              <div>
                <div className="text-[#ff4949] text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[#ff4949] text-xs">HRS</div>
              </div>
              <div>
                <div className="text-[#ff4949] text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[#ff4949] text-xs">MIN</div>
              </div>
              <div>
                <div className="text-[#ff4949] text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[#ff4949] text-xs">SEC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-400 mb-6 space-y-2">
          <p>• Once you hit CONFIRM ENTRY, credits will be deducted from your account. This action is non-refundable.</p>
          <p>• The CONTEST END time above is the time limit to compete in the contest, if you do not compete in that time limit, your funds will be forfeited.</p>
        </div>

        {/* Confirm Button */}
        <button 
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold rounded-lg 
                     hover:brightness-110 transition-all duration-200 relative overflow-hidden"
        >
          <div className="relative z-10 flex items-center justify-center gap-2">
            <span className="text-2xl">»</span>
            CONFIRM ENTRY
            <span className="text-2xl">«</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default EnterNow;
