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
      className={`hidden md:block fixed top-[60%] left-0 transform -translate-y-1/2 z-50  ${isOpen ? "w-80" : "w-20"
        }`}
    >
      <div className="h-full rounded-tr-[20px] rounded-br-[20px]  bg-[linear-gradient(180deg,_#15162d_0%,_#29224c_100%)] shadow-lg pt-3 pb-6 flex flex-col">
        {/* Toggle Button */}
        <div className={`${isOpen ? "flex justify-end px-3" : "flex justify-center mr-2"}`}>
          <button
            onClick={toggleSidebar}
            className="text-white text-xl hover:text-purple-400"
          >
            {toggleIcon}
          </button>
        </div>

        {/* Profile Section */}
        <div className={isOpen ? "pl-10 pr-10" : "pl-0 pr-3"}>
          <div className={`flex flex-col items-center justify-center ${isOpen ? "-mt-6" : "mt-3"}`}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img
                src={avatar}
                alt="Profile"
                className={`${isOpen ? "w-6 h-6" : "w-6 h-6"}`}
              />
            </div>
            {isOpen && (
              <>
                <h2 className="text-white text-[27px] leading-none text-center cygun ">
                  USER NAME
                </h2>
                <img src={glowingline} alt="" className="w-full h-full " />
              </>
            )}
          </div>

          {/* Navigation Items */}
          <div className={`${isOpen ? "mx-4 mt-5" : "mx-0 mt-5"}`}>
            <div className="flex-1 flex flex-col">
              {menuItems.map(({ icon, label, path }, index) => (
                isOpen ? (
                  <Link
                    to={path}
                    key={index}
                    className={`
                    flex items-center justify-start px-4 rounded-[10px]
                    text-amber-100 py-2 mb-1 bg-[#000000]/30
                    hover:bg-opacity-20 hover:bg-white 
                    cursor-pointer transition-all shadow-md
                  `}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img src={icon} alt={label} className="w-full h-full" />
                    </div>
                    <span className="text-[14px] century-gothic-bold text-amber-100 ml-3">
                      {label}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={path}
                    key={index}
                    className={`
                    flex items-center justify-center rounded-tr-[10px] rounded-br-[10px]
                    text-amber-100 py-2 mb-1 bg-[#000000]/25 hover:bg-opacity-20 hover:bg-white 
                    cursor-pointer transition-all
                  `}
                  >
                    <div className="w-7 h-7 flex items-center justify-center">
                      <img src={icon} alt={label} className="w-full h-full" />
                    </div>
                  </Link>
                )
              ))}
            </div>

          </div>


          {/* Buy Credits Button */}
          <div className={`${isOpen ? "mt-6 flex items-center justify-center" : "mt-4"}`}>
            {isOpen ? (
              <button
                className="flex items-center justify-between linear-button-2 relative px-2"
              >
                <img
                  src={signup02}
                  alt="Buy Icon Left"
                  className="w-8 h-8 mr-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
                />
                <span className="text-[16px] leading-[45px] text-white barlow-black">BUY CREDITS NOW</span>
                <img
                  src={signup01}
                  alt="Buy Icon Right"
                  className="w-8 h-8 ml-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
                />
              </button>
            ) : (
              <div className="pr-[1px] rounded-tr-full rounded-br-full bg-gradient-to-b from-[#0560fa] to-[#d93ef9] flex justify-center items-center">
                <div className="w-full h-full bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-tr-full rounded-br-full flex items-center justify-end py-2 pr-3 mx-auto">
                  <img
                    src={icon1}
                    alt="Buy Credits"
                    className="w-8 h-8"
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