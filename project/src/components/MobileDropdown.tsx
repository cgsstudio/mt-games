import React from 'react';
import { UserCircle } from 'lucide-react';
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
      <div className="fixed  left-0 right-0 bg-[#0A1625] rounded-t-xl max-h-[90vh] overflow-y-auto">
        <div className="relative p-4">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white text-2xl"
          >
            ×
          </button>

          {/* User Info Section */}
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <UserCircle size={40} className="text-gray-400" />
              </div>
              <div className="text-xl text-white century-gothic-bold">
                {userData.username}
              </div>
            </div>

            {/* Balance Info */}
            <div className="mt-4 space-y-3">
              {/* ...Your balance info code here... */}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-[#194272] rounded-lg">
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
          <div className="mt-4 p-4">
            <div className="w-full p-[1px] rounded-full bg-gradient-to-r from-[#0560fa] to-[#d93ef9]">
              <button className="w-full py-2 text-white barlow-black rounded-full bg-gradient-to-b from-[#0d0917] to-[#3f1261] flex items-center justify-center">
                <img src={signup02} alt="Buy Icon Left" className="w-8 h-8 mr-2" />
                <span>BUY CREDITS NOW</span>
                <img src={signup01} alt="Buy Icon Right" className="w-8 h-8 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
