import React from 'react';
import usericon from '../image/icons/user-icon.svg';
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
import signup01 from "../image/icons/sign-up-ar-1.svg";
import signup02 from "../image/icons/sign-up-ar-2.svg";
import specialoffer from '../image/icons/special.svg';
import fullprofile from '../image/icons/020-player.svg';
import editwallet from '../image/icons/003-wallet.svg';
import transactionhistory from '../image/icons/transaction.svg';
import activecontest from '../image/icons/ac-contest.svg';
import earncredits from '../image/icons/earncreadit.svg';

interface MobileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    username: string;
    credits: number;
    bits: number;
    availableForWithdrawal: number;
  };
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen, onClose, userData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden">
      <div className="fixed  left-0 right-0 bg-[#0A1625] rounded-xl border border-[#852695] max-h-[90vh] overflow-y-auto mx-4 mt-6">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute right-2 top-0 text-[#758695] orbitron-medium text-[30px]"
          >
            ×
          </button>

          {/* User Info Section */}
          <div className="p-4">
            <div className="flex items-center gap-4  pb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={usericon} alt="User Icon" className="w-full h-full " />
              </div>
              <div className="text-xl text-white century-gothic-bold border-b-[2px] border-white pb-2 w-full">
                {userData.username}
              </div>
            </div>

            {/* Balance Info */}
            <div className="mt-4 space-y-3">
              <div className="w-full grid grid-cols-2 gap-2">
                <div className="text-right flex flex-col space-y-2">
                  <span className="text-gray-400 century-gothic-normal text-lg">Credit Balance:</span>
                  <span className="text-gray-400 century-gothic-normal text-lg">Bits Balance:</span>
                  <span className="text-gray-400 century-gothic-normal text-lg">Available for Withdrawal:</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-lg century-gothic-bold flex items-center">
                    <img src={icon1} alt="Credits" className="w-5 h-5 mr-2" />
                    {userData.credits.toLocaleString()}
                  </span>
                  <span className="text-lg century-gothic-bold flex items-center">
                    <img src={icon2} alt="Bits" className="w-5 h-5 mr-2" />
                    {userData.bits.toLocaleString()}
                  </span>
                  <span className="text-lg century-gothic-bold flex items-center">
                    <img src={icon1} alt="Credits" className="w-5 h-5 mr-2" />
                    {userData.availableForWithdrawal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-[#194272] shadow-[inset_0px_0px_31.68px_0.32px_rgba(0,0,0,0.61)]">
            {[
              { icon: specialoffer, title: "Special Offers" },
              { icon: fullprofile, title: "Full Profile" },
              { icon: editwallet, title: "Edit/Add/Remove Wallets" },
              { icon: transactionhistory, title: "Transaction History" },
              { icon: activecontest, title: "Active Contests" },
              { icon: earncredits, title: "Earn Credits for Referrals" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                </div>
                <div className="text-center text-[#ffeec9] text-sm century-gothic-bold">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* Buy Credits Button */}
          {/* <div className="mt-4 p-4">
            <div className="w-full p-[1px] rounded-full bg-gradient-to-r from-[#0560fa] to-[#d93ef9]">
              <button className="w-full py-2 text-white barlow-black rounded-full bg-gradient-to-b from-[#0d0917] to-[#3f1261] flex items-center justify-center">
                <img src={signup02} alt="Buy Icon Left" className="w-8 h-8 mr-2" />
                <span>BUY CREDITS NOW</span>
                <img src={signup01} alt="Buy Icon Right" className="w-8 h-8 ml-2" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
