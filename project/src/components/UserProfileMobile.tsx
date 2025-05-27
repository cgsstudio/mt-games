import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import custom icons
import userIcon from "../image/icons/update-profile.svg";
import walletIcon from "../image/icons/edit-wallet.svg";
import gamepadIcon from "../image/icons/active-contest.svg";
import moneyIcon from "../image/icons/withdrawfunds.svg";
import historyIcon from "../image/icons/transation-history.svg";
import searchIcon from "../image/icons/findgame.svg";
import downchevron from "../image/icons/chevrondown.svg";
import chevronRight from "../image/icons/swiper-left.svg";  // Add this import

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  link: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'update', label: 'Update Profile', icon: userIcon, link: '/update-profile' },
  { id: 'wallets', label: 'Edit Wallets', icon: walletIcon, link: '/edit-wallet' },
  { id: 'contests', label: 'Active Contests', icon: gamepadIcon, link: '/active-contest' },
  { id: 'withdraw', label: 'Withdraw Funds', icon: moneyIcon, link: '/withdraw-funds' },
  { id: 'history', label: 'Transaction History', icon: historyIcon, link: '/transaction-history' },
  { id: 'game', label: 'Find a Game', icon: searchIcon, link: '/games/search' },
];

const MenuButton: React.FC<{ 
  selectedItem: MenuItem | undefined; 
  isOpen: boolean; 
  onClick: () => void;
}> = ({ selectedItem, isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="grid grid-cols-[1fr_auto_1fr] items-center w-full p-4 rounded-[16px] text-amber-100 bg-[linear-gradient(180deg,_#080e17_0%,_#262048_100%)] relative z-40"
  >
    <div></div>
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 flex items-center justify-center">
        <img src={selectedItem?.icon} alt={selectedItem?.label} className="w-full h-full" />
      </div>
      <span className="text-lg century-gothic-bold">{selectedItem?.label}</span>
    </div>
    <div className="flex justify-end">
      <img 
        src={downchevron} 
        alt="chevron" 
        className={`drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
      />
    </div>
  </button>
);

const MenuItemComponent: React.FC<{ 
  item: MenuItem; 
  isActive: boolean; 
  onClick: () => void;
}> = ({ item, isActive, onClick }) => (
  <div className="relative">
    {isActive && (
      <img 
        src={chevronRight} 
        alt="active" 
        className="absolute left-[-35px] top-1/2 -translate-y-1/2 w-10 h-10 rotate-180" 
      />
    )}
    <Link to={item.link} className="block" onClick={onClick}>
      <div className={`flex items-center rounded-[16px] p-4 cursor-pointer transition-all relative ${
        isActive 
          ? 'bg-[#45406f]/40 text-amber-100 drop-shadow-[0_0_10px_rgba(213,64,243,0.25)]' 
          : 'bg-[#000000]/40 text-amber-100'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={item.icon} alt={item.label} className="w-full h-full" />
          </div>
          <span className="text-base font-medium">{item.label}</span>
        </div>
      </div>
    </Link>
    {isActive && (
      <img 
        src={chevronRight} 
        alt="active" 
        className="absolute right-[-35px] top-1/2 -translate-y-1/2 w-10 h-10" 
      />
    )}
  </div>
);

export default function UserProfileMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('withdraw');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Update selectedItem based on current path
  useEffect(() => {
    const currentItem = MENU_ITEMS.find(item => item.link === location.pathname);
    if (currentItem) {
      setSelectedItem(currentItem.id);
    }
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Find the currently selected item
  const selectedItemData = MENU_ITEMS.find(item => item.id === selectedItem);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[400px]" ref={dropdownRef}>
        <MenuButton 
          selectedItem={selectedItemData} 
          isOpen={isOpen} 
          onClick={() => setIsOpen(!isOpen)} 
        />
        {isOpen && (
          <div className="absolute z-30 w-[90%] left-1/2 -translate-x-1/2 rounded-xl shadow-lg overflow-hidden bg-[linear-gradient(180deg,_#080e17_0%,_#262048_100%)] border border-purple-900/30 pt-8 pb-4 px-8 space-y-2 drop-shadow-[0_4px_20px_rgba(213,64,243,0.15)] -mt-5">
            {MENU_ITEMS.map((item) => (
              <MenuItemComponent
                key={item.id}
                item={item}
                isActive={item.link === location.pathname}
                onClick={() => {
                  setSelectedItem(item.id);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}