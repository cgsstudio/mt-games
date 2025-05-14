import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../image/Logos/main-logo.png';
import Metatop from '../image/Logos/METATOPE-LOGO.png';
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
import icon3 from '../image/icons/user.svg';
import shapedivider from '../image/icons/BG-55.svg'
import lines from '../image/icons/LINES.svg'
import blackuser from '../image/icons/blackuser.svg'
import { Globe, Users, Wallet, History, Award, UserCircle } from 'lucide-react';
import signup01 from "../image/icons/sign-up-ar-1.svg";
import signup02 from "../image/icons/sign-up-ar-2.svg";
import specialoffer from '../image/icons/special.svg';
import fullprofile from '../image/icons/020-player.svg';
import editwallet from '../image/icons/003-wallet.svg';
import transactionhistory from '../image/icons/transaction.svg';
import activecontest from '../image/icons/ac-contest.svg';
import earncredits from '../image/icons/earncreadit.svg';
import MobileHeader from './MobileHeader';
import usericon from '../image/icons/newusericon.svg';


const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [userData, setUserData] = useState({
    username: "User Name",
    credits: 10000,
    bits: 10000,
    availableForWithdrawal: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(currentScrollY > 100 ? false : true);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      <div
        className={`sticky top-0 left-0 right-0 z-50 bg-[#050d19] backdrop-blur-sm text-white transition-transform duration-300 w-full ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="px-6 md:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between lg:justify-between pt-3 pb-2">
            {/* Mobile Logo Section (Centered) */}
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

            {/* Desktop Navigation - Now only visible on large screens */}
            <div className="hidden lg:flex items-center  gap-1 ">
              {/* Credits and Username Container */}
              <div className="relative" ref={dropdownRef}>
                <div
                  className={`relative z-20 flex items-center gap-6 px-4 py-3 transition-colors cursor-pointer ${isDropdownOpen ? 'bg-[#add9ff] text-[#000000] rounded-tl-md rounded-tr-md' : 'hover:bg-[#112037] rounded-md'
                    }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {/* <div className="flex items-center space-x-2 gap-6 lg:space-x-3">
                 
                  </div> */}
                  <div className="flex items-center space-x-1">
                    <img src={icon1} alt="Gold icon" className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span className={`cygun-bold text-[25px] leading-none ${isDropdownOpen ? 'text-[#000000]' : ''}`}>10,000</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={icon2} alt="Blue icon" className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span className={`cygun-bold text-[25px] leading-none ${isDropdownOpen ? 'text-[#000000]' : ''}`}>10,000</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <img
                      src={isDropdownOpen ? blackuser : icon3}
                      alt="User icon"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    />
                    <div className={`text-[25px] leading-none cygun-bold ${isDropdownOpen ? 'text-[#000000]' : 'text-white'}`}>USER NAME</div>
                  </div>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 -mt-2 w-full bg-gradient-to-r from-[#1c1a38] to-[#2a234e] border border-[#d540f3] rounded-br-[21px] rounded-bl-[21px] shadow-lg z-10">
                    <div className="flex flex-col w-full text-white rounded-lg overflow-hidden shadow-xl max-h-[585px] overflow-y-auto">
                      {/* User info section */}
                      <div className="flex flex-col items-center space-y-1 rounded-md text-white overflow-y-auto">

                        <div className='p-3'>
                          <div className="flex items-center gap-3 w-full pb-2">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <img src={usericon} alt="User Icon" className="w-full h-full " />
                            </div>
                            <div className="text-lg century-gothic-bold border-b-[2px] border-white w-full pb-2">
                              {userData.username}
                            </div>
                          </div>
                          <div className="w-full grid grid-cols-2 gap-2 ">
                            <div className="text-right flex flex-col ">
                              <span className="text-white century-gothic-normal text-xl leading-[35px]">Credit Balance:</span>
                              <span className="text-white century-gothic-normal text-xl leading-[35px]">Bits Balance:</span>
                              <span className="text-white century-gothic-normal text-xl leading-[1.2]">Available for Withdrawal:</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <span className="text-xl century-gothic-bold  flex items-center ">
                                <img src={icon1} alt="Credits" className="w-6 h-6 mr-2" />
                                {userData.credits.toLocaleString()}
                              </span>
                              <span className="text-xl century-gothic-bold  flex items-center ">
                                <img src={icon2} alt="Bits" className="w-6 h-6 mr-2" />
                                {userData.bits.toLocaleString()}
                              </span>
                              <span className="text-xl century-gothic-bold  flex items-center ">
                                <img src={icon1} alt="Credits" className="w-6 h-6 mr-2" />
                                {userData.availableForWithdrawal.toLocaleString()}
                              </span>
                            </div>


                          </div>
                          <div className='flex justify-end w-full'>
                            <button className="bg-[#194272] border-[2px] border-[#38638b] text-white text-[14px] leading-[36px] uppercase barlow-bold  px-5 rounded-[7px] ">
                              Sign Out
                            </button>
                          </div>

                        </div>





                        {/* Menu grid */}
                        <div className="grid grid-cols-2 gap-3 py-3 px-12 bg-[#194272] shadow-[inset_0px_0px_31.68px_0.32px_rgba(0,0,0,0.61)]">
                          {/* Special Offers */}
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                              <img src={specialoffer} alt="Special Offers" className="w-20 h-20" />
                            </div>
                            <div className="text-center text-[#ffeec9] text-lg century-gothic-bold">Special Offers</div>
                          </div>

                          {/* Full Profile */}
                          <Link to={"/profile"}>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                <img src={fullprofile} alt="Full Profile" className="w-20 h-20" />
                              </div>
                              <div className="text-center text-[#ffeec9] text-lg century-gothic-bold">Full Profile</div>
                            </div>
                          </Link>


                          {/* Edit/Add/Remove Wallets */}
                          <Link to={"/edit-wallet"}>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                <img src={editwallet} alt="Edit Wallet" className="w-20 h-20" />
                              </div>
                              <div className="text-center text-[#ffeec9] text-lg leading-[23px] century-gothic-bold">Edit/Add/Remove Wallets</div>
                            </div>

                          </Link>


                          {/* Transaction History */}
                          <Link to={"/transaction-history"}>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                <img src={transactionhistory} alt="Transaction History" className="w-20 h-20" />
                              </div>
                              <div className="text-center text-[#ffeec9] text-lg leading-[23px] century-gothic-bold">Transaction <br/> History</div>
                            </div>
                          </Link>


                          {/* Active Contests */}
                          <Link to={"/active-contest"}>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                                <img src={activecontest} alt="Active Contests" className="w-20 h-20" />
                              </div>
                              <div className="text-center text-[#ffeec9] text-lg leading-[23px]  century-gothic-bold">Active<br/>Contests</div>
                            </div>

                          </Link>


                          {/* Earn Credits for Referrals */}
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#050b36] flex items-center justify-center">
                              <img src={earncredits} alt="Earn Credits" className="w-20 h-20" />
                            </div>
                            <div className="text-center text-[#ffeec9] text-lg leading-[23px]  century-gothic-bold">Earn Credits<br/> for Referrals</div>
                          </div>
                        </div>

                        {/* Bottom buy credits button */}
                        <div className="py-3 px-2 flex justify-center">
                          <button
                            className="flex items-center justify-between linear-button relative"
                          >
                            <img
                              src={signup02}
                              alt="Buy Icon Left"
                              className="w-10 h-10 mr-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
                            />
                            <span className="text-[24px] text-white barlow-black">BUY CREDITS NOW</span>
                            <img
                              src={signup01}
                              alt="Buy Icon Right"
                              className="w-10 h-10 ml-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
                            />
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center gap-3'>
                {/* Line divider */}
                <img src={lines} alt="divider" className="h-10" />

                {/* Buy Credits Button */}
                <button className=" linear-button relative orbitron-semibold">
                  BUY CREDITS
                </button>

              </div>


            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;