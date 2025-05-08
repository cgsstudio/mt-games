import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

// Import your custom icons
import glowingline from "../image/icons/glowing-line.svg";
import signup01 from "../image/icons/sign-up-ar-1.svg";
import signup02 from "../image/icons/sign-up-ar-2.svg";
// Import your custom hamburger icon (update this path to your actual icon)
import customHamburgerIcon from "../image/icons/HAMBURGER.svg";
import yourCustomCloseIcon from "../image/icons/COLLAPSE-NAV.svg"; // Update this path to your actual close icon

// Import your menu icons (replace these paths with your actual icon paths)
import userIcon from "../image/icons/update-profile.svg";
import walletIcon from "../image/icons/edit-wallet.svg";
import gamepadIcon from "../image/icons/active-contest.svg";
import moneyIcon from "../image/icons/withdrawfunds.svg";
import historyIcon from "../image/icons/transation-history.svg";
import giftIcon from "../image/icons/spacial-offer.svg";
import searchIcon from "../image/icons/findgame.svg";
import profileIcon from "../image/icons/user-icon.svg";
import icon1 from '../image/icons/icon-1.png';

const UserProfileSidebar = () => {
  // Changed default state to false so sidebar is closed by default
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // This effect will run whenever the location (URL) changes
  useEffect(() => {
    // Close the sidebar when navigation happens
    setIsOpen(false);
  }, [location]);

  // Store icons in variables/constants
  const menuIcons = {
    profile: userIcon,
    wallet: walletIcon,
    contests: gamepadIcon,
    funds: moneyIcon,
    history: historyIcon,
    offers: giftIcon,
    search: searchIcon
  };
  
  // Use custom hamburger icon instead of FaBars
  const toggleIcon = isOpen 
  ? <img src={yourCustomCloseIcon} alt="Close Menu" className="w-10 h-10" /> 
  : <img src={customHamburgerIcon} alt="Menu" className="w-10 h-10" />;

  const buyLeft = signup02;
  const buyRight = signup01;
  const avatar = profileIcon;

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Create menu items array using the icon variables
  const menuItems = [
    { label: "Update Profile", icon: menuIcons.profile, path: "/update-profile" },
    { label: "Edit Wallets", icon: menuIcons.wallet, path: "/edit-wallet" },
    { label: "Active Contests", icon: menuIcons.contests, path: "/active-contest" },
    { label: "Withdraw Funds", icon: menuIcons.funds, path: "/withdraw-funds" },
    { label: "Transaction History", icon: menuIcons.history, path: "/transaction-history" },
    { label: "Special Offers", icon: menuIcons.offers, path: "/profile/offers" },
    { label: "Find a Game", icon: menuIcons.search, path: "/profile/offers" },
  ];

  return (
    <div
      className={`hidden md:block fixed top-1/2 left-0 transform -translate-y-1/2 z-50 transition-all duration-300 ${
        isOpen ? "w-80" : "w-20"
      }`}
    >
      <div className="h-full rounded-tr-[20px] rounded-br-[20px]  bg-[linear-gradient(180deg,_#080e17_0%,_#262048_100%)] shadow-lg py-3 flex flex-col">
        {/* Toggle Button */}
        <div className={`${isOpen ? "flex justify-end px-3" : "flex justify-center"} mb-2`}>
          <button
            onClick={toggleSidebar}
            className="text-white text-xl hover:text-purple-400"
          >
            {toggleIcon}
          </button>
        </div>

        {/* Profile Section */}
        <div className={isOpen ? "pl-10 pr-10" : "pl-0 pr-3"}>
          <div className="flex flex-col items-center mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img 
                src={avatar} 
                alt="Profile"
                className="w-full h-full"
              />
            </div>
            {isOpen && (
              <>
                <h2 className="text-white text-[32px] leading-none text-center cygun-bold mt-2">
                  USER NAME
                </h2>
                <img src={glowingline} alt="" className="w-full h-full mt-1" />
              </>
            )}
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 flex flex-col">
            {menuItems.map(({ icon, label, path }, index) => (
              isOpen ? (
                <Link 
                  to={path}
                  key={index}
                  className={`
                    flex items-center justify-start px-4 rounded-[16px]
                    text-amber-100 py-2 mb-1 bg-[#0f1020]
                    hover:bg-opacity-20 hover:bg-white 
                    cursor-pointer transition-all shadow-md
                  `}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-full h-full" />
                  </div>
                  <span className="text-base font-medium text-amber-100 ml-3">
                    {label}
                  </span>
                </Link>
              ) : (
                <Link 
                  to={path}
                  key={index}
                  className={`
                    flex items-center justify-center rounded-tr-[16px] rounded-br-[16px]
                    text-amber-100 py-2 mb-1 bg-[#0f1020] hover:bg-opacity-20 hover:bg-white 
                    cursor-pointer transition-all
                  `}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-full h-full" />
                  </div>
                </Link>
              )
            ))}
          </div>
          
          {/* Buy Credits Button */}
          <div className="mt-4">
            {isOpen ? (
              <div className="p-[1px] rounded-full bg-gradient-to-r from-[#0560fa] to-[#d93ef9]">
                <button
                  className="w-full py-1 text-base text-white barlow-black rounded-full shadow-md hover:brightness-110 transition bg-gradient-to-b from-[#0d0917] to-[#3f1261] flex items-center justify-center relative"
                >
                  <img
                    src={buyLeft}
                    alt="Buy Icon Left"
                    className="w-10 h-10 mr-2 scale-[1.3]"
                  />
                  <span className="scale-[1.1]">BUY CREDITS NOW</span>
                  <img
                    src={buyRight}
                    alt="Buy Icon Right"
                    className="w-10 h-10 ml-2 scale-[1.3]"
                  />
                </button>
              </div>
            ) : (
              <div className="p-[1px] rounded-tr-[16px] rounded-br-[16px] bg-gradient-to-r from-[#0560fa] to-[#d93ef9] flex justify-center items-center">
                <div className="w-full h-full bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-tr-[16px] rounded-br-[16px] flex items-center justify-end p-2 mx-auto">
                  <img
                    src={icon1}
                    alt="Buy Credits"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSidebar;