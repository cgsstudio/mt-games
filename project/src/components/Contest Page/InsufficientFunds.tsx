import React, { useEffect } from 'react';
import icon1 from '../../image/icons/icon-1.png';
import mark from '../../image/icons/mark.svg'
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';

interface InsufficientFundsProps {
  isOpen: boolean;
  onClose: () => void;
  entryFee: number;
}

const InsufficientFunds: React.FC<InsufficientFundsProps> = ({ isOpen, onClose, entryFee }) => {
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

        {/* Warning Icon */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <img src={mark} alt="Warning" className="w-10 h-10" />
          <div className="text-[#ffeeca] text-center barlow-black text-[31px] md:text-[37px] leading-none">INSUFFICIENT FUNDS</div>
          <img src={mark} alt="Warning" className="w-10 h-10" />
        </div>

        {/* Entry Fee Display */}
        <div className="mt-6">
        <div className="grid grid-cols-7 p-[4px] bg-[#050d19] overflow-hidden rounded-[5px]">
              <div className="col-span-3 flex items-center">
                <span className="uppercase pl-4 text-[#f4e6c1] text-lg barlow-condensed-semibold">ENTRY FEE:</span>
              </div>
              <div className="col-span-4 bg-[#283643] p-2 flex items-center rounded-[4px] justify-center">
                <div className="flex items-center">
                  <img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" />
                  <span className="text-xl text-[#f30000] md:text-[25px] lg:text-[30px] orbitron-medium leading-none">{entryFee}</span>
                </div>
              </div>
            </div>
        </div>

        {/* Message */}
        
          <div className="p-4 rounded-[9px] border-[2px] border-[#161f29] text-lg text-[#758695] leading-tight mt-6 bg-[#000000]"  >
                <ul className="space-y-3 text-center barlow-condensed-regular">
                  <li> You do not have enough credits to enter this contest.</li>
                  <li> This contest requires more credits than your current balance.</li>
                  <li> Would you like to purchase credits now?</li>
               
                </ul>
              </div>

        {/* Buy Credits Button */}
           
            <div className="p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9] mt-6">
                <button 
                  
                  className="w-full uppercase bg-gradient-to-b from-[#0d0917] to-[#3f1261] hover:from-[#0f0b1d] hover:to-[#4f167b] rounded-[10px] text-center barlow-black text-xl uppercase flex items-center justify-center gap-3"
                >
                  <img src={signup02} alt="Right Icon" className="w-12 h-12 md:w-16 md:h-16" />
                  Buy Creadits Now
                  <img src={signup01} alt="Left Icon" className="w-12 h-12 md:w-16 md:h-16" />
                </button>
              </div>
      </div>
    </div>
  );
};

export default InsufficientFunds;
