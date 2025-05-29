// React and third-party imports
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginPopup from "./LoginPopup";

// Icon imports
import glowingline from "../image/icons/glowing-line.svg";
import signup01 from "../image/icons/sign-up-ar-1.svg";
import signup02 from "../image/icons/sign-up-ar-2.svg";
import customHamburgerIcon from "../image/icons/HAMBURGER.svg";
import yourCustomCloseIcon from "../image/icons/COLLAPSE-NAV.svg";
import userIcon from "../image/icons/update-profile.svg";
import walletIcon from "../image/icons/edit-wallet.svg";
import gamepadIcon from "../image/icons/active-contest.svg";
import moneyIcon from "../image/icons/withdrawfunds.svg";
import historyIcon from "../image/icons/transation-history.svg";
import giftIcon from "../image/icons/spacial-offer.svg";
import searchIcon from "../image/icons/findgame.svg";
import profileIcon from "../image/icons/user-icon.svg";
import icon1 from '../image/icons/icon-1.png';

// Style constants
const SIDEBAR_STYLES = {
  base: "hidden md:block fixed top-1/2 left-0 transform -translate-y-1/2 z-50",
  container: "h-[670px] rounded-tr-[20px] rounded-br-[20px] bg-[linear-gradient(180deg,_#15162d_0%,_#29224c_100%)] shadow-lg pt-3 pb-6 flex flex-col",
  menuItem: "flex items-center justify-start px-4 rounded-[10px] text-amber-100 py-3 mb-1 bg-[#000000]/30 hover:bg-opacity-20 hover:bg-white cursor-pointer transition-all shadow-md",
  menuItemCollapsed: "flex items-center justify-center rounded-tr-[10px] rounded-br-[10px] text-amber-100 py-3 mb-1 bg-[#000000]/25 hover:bg-opacity-20 hover:bg-white cursor-pointer transition-all"
};

const MENU_ITEMS = [
  { label: "Update Profile", icon: userIcon, path: "/update-profile" },
  { label: "Edit Wallets", icon: walletIcon, path: "/edit-wallet" },
  { label: "Active Contests", icon: gamepadIcon, path: "/active-contest" },
  { label: "Withdraw Funds", icon: moneyIcon, path: "/withdraw-funds" },
  { label: "Transaction History", icon: historyIcon, path: "/transaction-history" },
  { label: "Special Offers", icon: giftIcon, path: "/profile/offers" },
  { label: "Refer a friend", icon: searchIcon, path: "/profile/offers" },
];

const UserProfileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const location = useLocation();
  const { isAuthenticated, userData } = useAuth();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleMenuClick = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLoginPopup(true);
    }
  };

  const renderMenuItem = (item, index) => {
    const { icon, label, path } = item;
    return isOpen ? (
      <Link to={path} key={index} onClick={(e) => handleMenuClick(e, path)} className={SIDEBAR_STYLES.menuItem}>
        <div className="w-8 h-8 flex items-center justify-center">
          <img src={icon} alt={label} className="w-full h-full" />
        </div>
        <span className="text-[16px] century-gothic-bold text-amber-100 ml-3">{label}</span>
      </Link>
    ) : (
      <Link to={path} key={index} onClick={(e) => handleMenuClick(e, path)} className={SIDEBAR_STYLES.menuItemCollapsed}>
        <div className="w-8 h-8 flex items-center justify-center">
          <img src={icon} alt={label} className="w-full h-full" />
        </div>
      </Link>
    );
  };

  return (
    <>
      {isAuthenticated && (
        <div className={`${SIDEBAR_STYLES.base} ${isOpen ? "w-80" : "w-20"}`}>
          <div className={SIDEBAR_STYLES.container}>
            <div className={`${isOpen ? "flex justify-end px-3" : "flex justify-center mr-2"}`}>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white text-xl hover:text-purple-400">
                <img src={isOpen ? yourCustomCloseIcon : customHamburgerIcon} alt={isOpen ? "Close Menu" : "Menu"} className="w-10 h-10" />
              </button>
            </div>

            <div className={isOpen ? "pl-10 pr-10" : "pl-0 pr-3"}>
              <div className={`flex flex-col items-center justify-center ${isOpen ? "-mt-6" : "mt-3"}`}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={profileIcon} alt="Profile" className="w-6 h-6" />
                </div>
                {isOpen && (
                  <>
                    <h2 className="text-white text-[27px] leading-none text-center cygun">
                      {isAuthenticated ? userData.username : "GUEST"}
                    </h2>
                    <img src={glowingline} alt="" className="w-full h-full" />
                  </>
                )}
              </div>

              <div className={`${isOpen ? "mx-2 mt-5" : "mx-0 mt-5"}`}>
                <div className="flex-1 flex flex-col">
                  {MENU_ITEMS.map(renderMenuItem)}
                </div>
              </div>

              <div className={`${isOpen ? "mt-5 flex items-center justify-center" : "mt-8"}`}>
                {isOpen ? (
                  <Link to="/profile">
                    <button className="flex items-center justify-center linear-button-2 relative w-[260px]">
                      <img src={signup02} alt="Buy Icon Left" className="w-8 h-8 mr-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                      <span className="text-[16px] leading-[55px] tracking-wide text-white barlow-black">BUY CREDITS NOW</span>
                      <img src={signup01} alt="Buy Icon Right" className="w-8 h-8 ml-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                    </button>
                  </Link>
                ) : (
                  <div className="pt-[2px] pb-[2px] pr-[2px] rounded-tr-full rounded-br-full bg-gradient-to-b from-[#0560fa] to-[#d93ef9]">
                    <div className="bg-gradient-to-b from-[#0d0917] to-[#3f1261] rounded-tr-full rounded-br-full flex items-center justify-end px-3 py-2">
                      <img src={icon1} alt="Buy Credits" className="w-8 h-8" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onLoginSuccess={() => setShowLoginPopup(false)}
        />
      )}
    </>
  );
};

export default UserProfileSidebar;