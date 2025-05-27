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

  const renderTimerCell = (value: number, label: string) => (
    <div className="enter-now-timer-cell">
      <div className="enter-now-timer-value">
        {value.toString().padStart(2, '0')}:
      </div>
      <div className="enter-now-timer-label">{label}:</div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
        
        <main className="enter-now-container enter-now-modal">
          <header>
            <button 
              onClick={onClose}
              className="enter-now-close-btn orbitron-light text-[37px] rotate-45"
              aria-label="Close modal"
            >
              +
            </button>

            <div className="enter-now-logo">
              <h1 className="sr-only">Rebel Speedrun</h1>
              <img src={speedrunlogo} alt="Rebel Speedrun" className="w-64" />
            </div>
          </header>

          <section aria-label="Contest Details">
            <div className="mb-2">
              <div className="enter-now-info-grid">
                <h2 className="enter-now-info-label">
                  <span className="uppercase pl-4 text-[#f4e6c1] text-lg barlow-condensed-semibold">
                    ENTRY FEE:
                  </span>
                </h2>
                <div className="enter-now-entry-fee">
                  <div className="flex items-center">
                    <img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" />
                    <span className="text-xl md:text-[25px] lg:text-[30px] orbitron-medium leading-none">
                      {entryFee}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-2">
              <div className="enter-now-timer-grid">
                <h2 className="enter-now-info-label">
                  <span className="uppercase text-[#f4e6c1] pl-4 text-lg barlow-condensed-semibold">
                    CONTEST ENDS:
                  </span>
                </h2>
                <div className="enter-now-timer">
                  <div className="flex justify-center w-full text-center">
                    {renderTimerCell(timeLeft.days, "DAYS")}
                    {renderTimerCell(timeLeft.hours, "HRS")}
                    {renderTimerCell(timeLeft.minutes, "MIN")}
                    {renderTimerCell(timeLeft.seconds, "SEC")}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Disclaimer" className="p-4 rounded-[9px] border-[2px] border-[#161f29] text-lg text-[#758695] leading-[1.2] mt-6 bg-[#000000]">
            <h2 className="sr-only">Important Information</h2>
            <ul className="space-y-3 barlow-condensed-regular">
              <li>• Once you hit CONFIRM ENTRY, credits will be deducted from your account. This action is non-refundable.</li>
              <li>• The CONTEST END time above is the time limit to compete in the contest, if you do not compete in that time limit, your funds will be forfeited</li>
            </ul>
          </section>

          <footer className="p-[1px] rounded-none md:rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9] mt-6">
            <button 
              onClick={handleConfirmEntry}
              className="w-full uppercase bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-none md:rounded-[10px] p-2 text-center barlow-black text-[24px] md:text-[29px] uppercase flex items-center justify-center gap-3"
            >
              <img src={signup02} alt="" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
              <span>confirm entry</span>
              <img src={signup01} alt="" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
            </button>
          </footer>
        </main>
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
