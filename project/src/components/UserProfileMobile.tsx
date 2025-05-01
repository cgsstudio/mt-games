import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wallet, User, Globe, Clock, Users, GamepadIcon, ChevronDown } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('withdraw');
  const dropdownRef = useRef(null);
  
  const menuItems = [
    { id: 'update', label: 'Update Profile', icon: <User size={20} /> },
    { id: 'wallets', label: 'Edit Wallets', icon: <Wallet size={20} /> },
    { id: 'contests', label: 'Active Contests', icon: <Globe size={20} /> },
    { id: 'withdraw', label: 'Withdraw Funds', icon: <Wallet size={20} /> },
    { id: 'history', label: 'Transaction History', icon: <Clock size={20} /> },
    { id: 'game', label: 'Find a Game', icon: <GamepadIcon size={20} /> },
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
       <div className="relative w-80" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <button
  onClick={() => setIsOpen(!isOpen)}
  className=" flex items-center justify-between w-full p-4 rounded-lg   text-[#fff0c9] bg-[linear-gradient(180deg,_rgb(5,12,17)_0%,_rgb(42,35,78)_100%)]"
>
  <div className="flex items-center space-x-3">
    <div className="p-1 rounded-full text-white">
      {selectedItemData?.icon}
    </div>
    <span className="text-lg century-gothic-bold">{selectedItemData?.label}</span>
  </div>
  <ChevronDown size={20} className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
</button>


      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-gray-900 rounded-lg border border-purple-900/30 shadow-lg overflow-hidden">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className={`flex items-center p-4 cursor-pointer transition-all relative ${
                item.id === selectedItem 
                  ? 'bg-indigo-900/60 text-white' 
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.id === selectedItem && item.id === 'withdraw' && (
                <ChevronRight className="absolute left-0 text-pink-500" size={24} />
              )}
              
              <div className="flex items-center space-x-3">
                <div className={`p-1 rounded-full ${
                  item.id === selectedItem ? 'text-white' : 'text-gray-400'
                }`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
              
              {item.id === selectedItem && item.id === 'withdraw' && (
                <ChevronLeft className="absolute right-0 text-pink-500" size={24} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    
  );
}