// Organize imports by type
// UI Components
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';
import SpecialOfferPopup from './SpecialOfferPopup';

// Contexts
import { useAuth } from '../context/AuthContext';

// Assets - Logos
import MainLogo from '../image/Logos/main-logo.png';
import Metatop from '../image/Logos/METATOPE-LOGO.png';

// Assets - Icons
import { icons } from './headerIcons'; // Create a separate file for icons


// Types
interface UserBalanceProps {
  credits: number;
  bits: number;
  availableForWithdrawal: number;
  username: string;
}

// Reusable components
const UserBalance: React.FC<UserBalanceProps> = ({ credits, bits, availableForWithdrawal, username }) => (
  <div className="w-full grid grid-cols-2 items-center gap-2">
    <div className="text-right flex flex-col ">
      <span className="text-white century-gothic-normal text-xl leading-[35px]">Credit Balance:</span>
      <span className="text-white century-gothic-normal text-xl leading-[35px]">Bits Balance:</span>
      <span className="text-white century-gothic-normal text-xl leading-[1.2]">Available for Withdrawal:</span>
    </div>
    <div className="flex flex-col space-y-2">
      <span className="text-xl leading-[35px] century-gothic-bold  flex items-center ">
        <img src={icons.icon1} alt="Credits" className="w-5 h-5 mr-1" />
        {credits.toLocaleString()}
      </span>
      <span className="text-xl leading-[35px] century-gothic-bold  flex items-center ">
        <img src={icons.icon2} alt="Bits" className="w-5 h-5 mr-1" />
        {bits.toLocaleString()}
      </span>
      <span className="text-xl leading-[35px] century-gothic-bold  flex items-center ">
        <img src={icons.icon1} alt="Credits" className="w-5 h-5 mr-1" />
        {availableForWithdrawal.toLocaleString()}
      </span>
    </div>
  </div>
);

const Header: React.FC = () => {
  // State management
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);

  const { isAuthenticated, userData, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Event handlers
  const handleLoginSuccess = () => {
    setShowLoginForm(false);
    setShowSpecialOffer(true);
  };

  const handleRegisterSuccess = () => {
    setShowRegisterForm(false);
    setShowSpecialOffer(true);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 100 || currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className={`sticky top-0 left-0 right-0 z-50 bg-[#050d19] backdrop-blur-sm text-white transition-transform duration-300 w-full ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-6 md:px-8 lg:px-12 w-full">
          {/* Logo Section */}
          <div className="flex items-center justify-between lg:justify-between pt-3 pb-2">
            <div className="flex-1 flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-2 lg:space-y-0 lg:space-x-2">
              <Link to="/">
                <img
                  src={MainLogo}
                  alt="MTGames Logo"
                  className="h-6 sm:h-8 md:h-10 w-auto object-contain"
                />
              </Link>
              <div className="orbitron-bold flex items-center gap-2 text-xs text-white-400">
                powered by
                <img
                  src={Metatop}
                  alt="METATOPE Logo"
                  className="h-3 md:h-4 w-auto object-contain"
                />
              </div>
            </div>

            {/* Navigation Section */}
            <nav className="hidden lg:flex items-center gap-1">
              {isAuthenticated ? (
                <>
                  <div className="relative" ref={dropdownRef}>
                    <div
                      className={`relative z-20 flex items-center gap-6 px-4 py-3 transition-colors cursor-pointer ${isDropdownOpen ? 'bg-[#add9ff] text-[#000000] rounded-tl-md rounded-tr-md' : 'hover:bg-[#112037] rounded-md'
                        }`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <div className="flex items-center space-x-1">
                        <img src={icons.icon1} alt="Gold icon" className="w-4 h-4 lg:w-6 lg:h-6" />
                        <span className={`cygun-bold text-[27px] leading-none ${isDropdownOpen ? 'text-[#000000]' : ''}`}>10,000</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img src={icons.icon2} alt="Blue icon" className="w-4 h-4 lg:w-6 lg:h-6" />
                        <span className={`cygun-bold text-[27px] leading-none ${isDropdownOpen ? 'text-[#000000]' : ''}`}>10,000</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <img
                          src={isDropdownOpen ? icons.blackuser : icons.icon3}
                          alt="User icon"
                          className="w-4 h-4 lg:w-6 lg:h-6"
                        />
                        <div className={`text-[27px] leading-none cygun-bold ${isDropdownOpen ? 'text-[#000000]' : 'text-white'}`}>{userData.username}</div>
                      </div>
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute top-full right-0 -mt-2 w-full bg-gradient-to-r from-[#1c1a38] to-[#2a234e] border border-[#d540f3] rounded-br-[21px] rounded-bl-[21px] shadow-lg z-10">
                        <div className="flex flex-col w-full text-white rounded-lg overflow-hidden shadow-xl max-h-[90vh] overflow-y-auto">
                          <div className="flex flex-col items-center space-y-1 rounded-md text-white overflow-y-auto">
                            <div className='p-3'>
                              <div className="flex items-center gap-3 w-full pb-2">
                                <div className="w-16 h-16 flex items-center justify-center">
                                  <img src={icons.usericon} alt="User Icon" className="w-full h-full " />
                                </div>
                                <div className="text-lg century-gothic-bold border-b-[2px] border-white w-full pb-2">
                                  {userData.username}
                                </div>
                              </div>
                              <UserBalance
                                credits={userData.credits}
                                bits={userData.bits}
                                availableForWithdrawal={userData.availableForWithdrawal}
                                username={userData.username}
                              />
                              <div className='flex justify-end'>
                                <button
                                  onClick={handleLogout}
                                  className="bg-[#194272] uppercase border-[2px] border-[#38638b] text-white text-lg py-2  barlow-bold  px-6 rounded-[7px]  "
                                >
                                  Sign Out
                                </button>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 py-3 px-12 bg-[#194272] shadow-[inset_0px_0px_31.68px_0.32px_rgba(0,0,0,0.61)]">
                              <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                  <img src={icons.specialoffer} alt="Special Offers" className="w-20 h-20" />
                                </div>
                                <div className="text-center text-[#ffeec9] text-lg century-gothic-bold">Special Offers</div>
                              </div>

                              <Link to={"/profile"}>
                                <div className="flex flex-col items-center">
                                  <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                    <img src={icons.fullprofile} alt="Full Profile" className="w-20 h-20" />
                                  </div>
                                  <div className="text-center text-[#ffeec9] text-lg century-gothic-bold">Full Profile</div>
                                </div>
                              </Link>

                              <Link to={"/edit-wallet"}>
                                <div className="flex flex-col items-center">
                                  <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                    <img src={icons.editwallet} alt="Edit Wallet" className="w-20 h-20" />
                                  </div>
                                  <div className="text-center text-[#ffeec9] text-lg leading-[23px] century-gothic-bold">Edit/Add/Remove Wallets</div>
                                </div>
                              </Link>

                              <Link to={"/transaction-history"}>
                                <div className="flex flex-col items-center">
                                  <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                    <img src={icons.transactionhistory} alt="Transaction History" className="w-20 h-20" />
                                  </div>
                                  <div className="text-center text-[#ffeec9] text-lg leading-[23px] century-gothic-bold">Transaction <br /> History</div>
                                </div>
                              </Link>

                              <Link to={"/active-contest"}>
                                <div className="flex flex-col items-center">
                                  <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                    <img src={icons.activecontest} alt="Active Contests" className="w-20 h-20" />
                                  </div>
                                  <div className="text-center text-[#ffeec9] text-lg leading-[23px]  century-gothic-bold">Active<br />Contests</div>
                                </div>
                              </Link>

                              <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                  <img src={icons.earncredits} alt="Earn Credits" className="w-20 h-20" />
                                </div>
                                <div className="text-center text-[#ffeec9] text-lg leading-[23px]  century-gothic-bold">Earn Credits<br /> for Referrals</div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-3 py-3 px-2">
                              <Link to={'/profile'}>
                                <button
                                  className="flex items-center justify-between linear-button relative"
                                >
                                  <img
                                    src={icons.signup02}
                                    alt="Buy Icon Left"
                                    className="w-10 h-10 mr-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
                                  />
                                  <span className="text-[24px] text-white barlow-black">BUY CREDITS NOW</span>
                                  <img
                                    src={icons.signup01}
                                    alt="Buy Icon Right"
                                    className="w-10 h-10 ml-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
                                  />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='flex items-center gap-3'>
                    <img src={icons.lines} alt="divider" className="h-10" />
                    <Link to={'/profile'}>
                      <button className=" linear-button leading-none relative orbitron-semibold ">
                        BUY CREDITS
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowLoginForm(true)}
                    className="bg-[#112037] text-white w-[119px] h-[57px] uppercase  rounded-[12px] cygun-bold text-[27px] leading-none"
                  >
                    sign in
                  </button>
                  <img src={icons.lines} alt="divider" className="h-10" />
                  <button
                    onClick={() => setShowRegisterForm(true)}
                    className="bg-[#112037] text-white w-[119px] h-[57px] uppercase  rounded-[12px] cygun-bold text-[27px] leading-none"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Modals */}
      {showLoginForm && (
        <LoginPopup
          onClose={() => setShowLoginForm(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showRegisterForm && (
        <RegisterPopup
          onClose={() => setShowRegisterForm(false)}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
      {showSpecialOffer && (
        <SpecialOfferPopup
          isOpen={showSpecialOffer}
          onClose={() => setShowSpecialOffer(false)}
        />
      )}

      <MobileHeader />
    </>
  );
};

export default Header;