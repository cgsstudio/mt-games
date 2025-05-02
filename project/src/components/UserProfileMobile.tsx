import React, { useState, useRef, useEffect } from 'react';
// Import custom icons
import userIcon from "../image/icons/update-profile.svg";
import walletIcon from "../image/icons/edit-wallet.svg";
import gamepadIcon from "../image/icons/active-contest.svg";
import moneyIcon from "../image/icons/withdrawfunds.svg";
import historyIcon from "../image/icons/transation-history.svg";
import searchIcon from "../image/icons/findgame.svg";
import { ChevronDown } from 'lucide-react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('withdraw');
  const dropdownRef = useRef(null);
  
  const menuItems = [
    { id: 'update', label: 'Update Profile', icon: userIcon },
    { id: 'wallets', label: 'Edit Wallets', icon: walletIcon },
    { id: 'contests', label: 'Active Contests', icon: gamepadIcon },
    { id: 'withdraw', label: 'Withdraw Funds', icon: moneyIcon },
    { id: 'history', label: 'Transaction History', icon: historyIcon },
    { id: 'game', label: 'Find a Game', icon: searchIcon },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
    setIsOpen(false);
  };

  // Find the currently selected item
  const selectedItemData = menuItems.find(item => item.id === selectedItem);

  return (
    <div className='flex items-center justify-center'>
      <div className="relative w-[400px]" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 rounded-[16px] text-amber-100 bg-[linear-gradient(180deg,_#080e17_0%,_#262048_100%)] relative z-20"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={selectedItemData?.icon} alt={selectedItemData?.label} className="w-full h-full" />
            </div>
            <span className="text-base font-medium">{selectedItemData?.label}</span>
          </div>
          <ChevronDown size={20} className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-[90%] left-1/2 -translate-x-1/2 mt-2 rounded-xl shadow-lg overflow-hidden bg-[linear-gradient(180deg,_#080e17_0%,_#262048_100%)] border border-purple-900/30 pt-8 pb-4 px-16 space-y-2 drop-shadow-[0_4px_20px_rgba(213,64,243,0.15)] -mt-5">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className={`flex items-center rounded-[16px] p-4 cursor-pointer transition-all relative ${
                  item.id === selectedItem 
                    ? 'bg-[#45406f]/40 text-amber-100 drop-shadow-[0_0_10px_rgba(213,64,243,0.25)]' 
                    : 'bg-[#000000]/40 text-amber-100'
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src={item.icon} alt={item.label} className="w-full h-full" />
                  </div>
                  <span className="text-base font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}