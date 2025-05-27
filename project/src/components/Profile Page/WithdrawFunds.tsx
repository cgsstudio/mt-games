import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Direct image imports
import eth1 from '../../image/icons/ETH.svg';
import eth2 from '../../image/icons/POLYGON.svg';
import eth3 from '../../image/icons/BASE.svg';
import solanaIcon from '../../image/icons/ARBITRUM.svg';
import icon1 from '../../image/icons/icon-1.png';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';

// Components
import UserProfileMobile from '../UserProfileMobile';

// Additional Types
interface WithdrawFundsState {
  isDropdownOpen: boolean;
  selectedChain: string | null;
  walletAddress: string;
}

interface WithdrawMethodProps {
  isOpen: boolean;
  selected: string | null;
  onToggle: () => void;
  onSelect: (method: string) => void;
}

// Sub-components
const Header: React.FC = () => (
  <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
    <div className='block md:hidden mt-4 px-6'>
      <UserProfileMobile />
    </div>
    <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
      <div className="flex items-center gap-3">
        <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">
          WITHDRAW FUNDS
        </h1>
      </div>
    </div>
  </div>
);

const WithdrawDescription: React.FC = () => (
  <div className="p-3 md:p-6 rounded-[12px] md:rounded-[15px] border-[2px] border-[#161f29] text-base md:text-xl text-[#758695] mt-3 md:mt-6 bg-[#000000]">
    <ul className="space-y-1 barlow-condensed-regular">
      <li>• Only Credits that have been wagered are eligible for withdrawal.</li>
      <li>• A $1.50 fee is charged for any withdrawal under $10.00.</li>
    </ul>
  </div>
);

const WithdrawMethod: React.FC<WithdrawMethodProps> = ({
  isOpen,
  selected,
  onToggle,
  onSelect,
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  return (
    <div className="relative mb-4 flex justify-center">
      <button
        className={`bg-[#050d19] z-20 py-2 pl-6 pr-3 rounded-[5px] md:rounded-[21px] flex justify-between items-center cursor-pointer w-80 transition-all ${
          isOpen ? 'transform -translate-y-1' : ''
        }`}
        onClick={onToggle}
      >
        <div className="text-[#f4e6c1] orbitron-semibold text-[25px] md:text-lg">
          {selected || 'Select'}
        </div>
        <ChevronDown className={`text-white transition-transform duration-200 ${
          isOpen ? 'transform rotate-180' : ''
        }`} />
      </button>

      <div className={`pb-5 pt-8 absolute w-80 left-0 right-0 mx-auto bg-[#161f29] bg-[linear-gradient(0deg,_rgba(20,31,47,0.25)_0%,_rgba(255,255,255,0.25)_100%)] 
        bg-blend-overlay rounded-b-lg mt-6 overflow-hidden transition-all duration-300 border border-[#1a2634] z-10 ${
          isOpen ? 'max-h-48 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}>
        {/* Dropdown items */}
        {['paypal'].map((method, index) => (
          <div
            key={method}
            className="pl-3 flex items-center gap-2 hover:bg-[#0e1826] cursor-pointer transition-colors duration-200"
            onClick={() => onSelect(method)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <ChevronRight
              className={`text-[#283643] transition-opacity duration-200 ${
                hoverIndex === index || selected === method ? 'opacity-100' : 'opacity-0'
              }`}
              size={18}
            />
            <span className="text-[#f4e6c1] orbitron-semibold text-lg mr-2">
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WithdrawFunds: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectChain = (chain: string) => {
    setSelectedChain(chain);
    setIsDropdownOpen(false);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedChain && walletAddress) {
      // Handle submit logic here
      setWalletAddress('');
      setSelectedChain(null);
    }
  };

  return (
    <div className="w-full h-screen bg-[#000000] text-white py-10 md:py-16 relative">
      <div className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
      </div>

      <Header />

      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto px-4 md:px-0">
        {/* Main Content - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-4 ">
          {/* Left Column - 1.5fr */}
          <div className="space-y-6">
            {/* Description */}
            <WithdrawDescription />

          </div>

          {/* Right Column - 1fr */}

        </div>

        {/* Second Section with Same Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-6">
          {/* Left Column - 1.5fr */}

          <div className="space-y-4 md:space-y-6">

            <div className="grid grid-cols-7 p-[5px] bg-[#161f29] overflow-hidden rounded-[12px]">
              <div className="col-span-3 flex items-center justify-center">
                <span className="uppercase text-[#f4e6c1] text-lg md:text-xl barlow-condensed-semibold">available to withdraw</span>
              </div>
             <div className="col-span-4 bg-[#283643] p-3 md:p-5 flex items-center rounded-[2px] md:rounded-[6px] justify-center ">
                <div className="flex items-center">
                  <img src={icon1} alt="Gold icon" className="w-6 h-6 mr-2" />
                  
                  <span className="text-[27px] lg:text-[30px] orbitron-semibold leading-none ">10,000</span>
                </div>
              </div>
            </div>
            <div className="bg-[#161f29] rounded-[12px] px-4 md:px-8 py-6 md:py-10 w-full flex flex-col gap-y-4">
              <div>
                <h2 className="text-white text-center barlow-bold text-lg md:text-xl ">HOW MANY CREDITS WOULD YOU LIKE TO WITHDRAW?</h2>
                <p className="text-[#fff0c9] barlow-semibold text-base text-center mb-2">Minimum purchase: 1,000 Credits</p>
              </div>

                 <div className="flex items-center justify-between">
                <div className="flex items-center bg-[#050d19] py-3 md:py-4 px-4 rounded-[3px] md:w-[70%]">
                  <div className="flex items-center justify-center mr-2 min-w-[28px] min-h-[28px] md:min-w-[32px] md:min-h-[32px]">
                    <img
                      src={icon1}
                      alt="Blue icon"
                      className="w-6 h-6  object-contain"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="1,000"
                    className="bg-transparent text-[#9d9a9a] text-lg md:text-[25px] orbitron-semibold focus:outline-none w-full placeholder-[#9d9a9a]"
                  />
                </div>

                <button className="bg-[#194272] border-[2px] border-[#38638b] text-base md:text-lg text-white barlow-black py-3 md:py-4 px-4 rounded-[7px] md:w-[30%] ml-3">
                  CALCULATE
                </button>
              </div>
              <div className="bg-[#283643] p-3 md:p-2 flex items-center rounded-[2px] md:rounded-[6px] justify-center">
                <div className="flex items-center">
                  <span className="text-[27px] lg:text-[41px] orbitron-semibold leading-none">$1.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 1fr */}
          <div className="space-y-4">
            <div className=" h-full bg-[#161f29] rounded-[11px] pt-1 px-1 pb-8 md:pb-0  flex flex-col gap-y-4">
             <div className="col-span-4 bg-[#283643] p-3 md:p-5 flex items-center rounded-[2px] md:rounded-[6px] justify-center mb-4">
                <div className="flex items-center">
                  
                  <span className="text-[27px] lg:text-[33px] barlow-condensed-semibold leading-none lg:leading-[37px] ">SELECT WITHDRAWAL METHOD</span>
                </div>
              </div>

              <WithdrawMethod
                isOpen={isDropdownOpen}
                selected={selectedChain}
                onToggle={toggleDropdown}
                onSelect={selectChain}
              />

              <div className='px-4 md:px-8'>

                <input
                  type="text"
                  value={walletAddress}
                  onChange={handleAddressChange}
                  className="w-full bg-[#050d19] p-2 rounded-[3px] mb-4 text-[#ffffff] focus:outline-none barlow-medium text-base leading-[36px] placeholder-white text-center text-base"
                  placeholder="Username/Email/Mobile Number"
                />
              
              </div>
                <button
                  onClick={handleSubmit}
                  className="bg-[#194272] border-[2px] border-[#38638b] text-white text-[25px] md:text-xl barlow-black rounded-none md:rounded-[7px] mx-auto block hover:bg-[#1c5591] transition mt-4 md:mt-0 w-[275px] h-[75px]"
                >
                  WITHDRAW
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawFunds;