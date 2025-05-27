import React from 'react';
import { useAuth } from '../context/AuthContext';

// Icon imports
import usericon from '../image/icons/user-icon.svg';
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
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

const menuItems = [
  { icon: specialoffer, title: "Special Offers" },
  { icon: fullprofile, title: "Full Profile" },
  { icon: editwallet, title: "Edit/Add/Remove Wallets" },
  { icon: transactionhistory, title: "Transaction History" },
  { icon: activecontest, title: "Active Contests" },
  { icon: earncredits, title: "Earn Credits for Referrals" },
];

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen, onClose, userData }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden">
      <div className="fixed left-0 right-0 bg-[#0A1625] rounded-xl border border-[#852695] max-h-[90vh] overflow-y-auto mx-4 mt-6">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-2 top-0 text-[#758695] orbitron-medium text-[30px] rotate-45"
          >
            +
          </button>

          <div className="p-4">
            <div className="flex items-center gap-4 pb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={usericon} alt="User Icon" className="w-full h-full" />
              </div>
              <h2 className="text-xl text-white century-gothic-bold border-b-[2px] border-white pb-2 w-full">
                {userData.username}
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              <div className="w-full grid grid-cols-2 gap-2">
                <div className="text-right flex flex-col space-y-2">
                  {['Credit Balance:', 'Bits Balance:', 'Available for Withdrawal:'].map((label) => (
                    <span key={label} className="text-gray-400 century-gothic-normal text-lg">{label}</span>
                  ))}
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
              <div className="flex justify-end">
                <button
                  onClick={handleLogout}
                  className="bg-[#194272] uppercase border-[2px] border-[#38638b] text-white text-lg py-2 barlow-bold px-6"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-[#194272] shadow-[inset_0px_0px_31.68px_0.32px_rgba(0,0,0,0.61)]">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                </div>
                <p className="text-center text-[#ffeec9] text-sm century-gothic-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
