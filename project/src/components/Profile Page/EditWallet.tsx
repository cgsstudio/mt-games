import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import UserProfileMobile from '../UserProfileMobile';
import buyLeft from "../../image/icons/sign-up-ar-1.svg";
import buyRight from "../../image/icons/sign-up-ar-2.svg";
import coin from "../../image/icons/icon-1.png";
import eth1 from '../../image/icons/ETH.svg';  // Add your Ethereum chain icons
import eth2 from '../../image/icons/POLYGON.svg';
import eth3 from '../../image/icons/BASE.svg';
import solanaIcon from '../../image/icons/ARBITRUM.svg';  // Add your Solana icon
import deleted from '../../image/icons/deleted.svg';
import Verified from '../../image/icons/check.svg';
import verify from '../../image/icons/check-2.svg';

import MobileVerified from '../../image/icons/Rectangle-verified.svg';
import MobileVerify from '../../image/icons/Rectangle-verify.svg';

// Types
interface Wallet {
  chain: string;
  address: string;
  verified: boolean;
}

interface ChainSelectorProps {
  selectedChain: string | null;
  onSelect: (chain: string) => void;
}

interface WalletCardProps {
  wallet: Wallet;
  onVerify: () => void;
  onRemove: () => void;
}

// Sub-components
const ChainSelector: React.FC<ChainSelectorProps> = ({ selectedChain, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mb-4 flex justify-center" ref={dropdownRef} role="combobox" aria-expanded={isOpen}>
      <button
        aria-label="Select blockchain"
        className={`bg-[#050d19] z-20 py-2 pl-6 pr-3 rounded-[5px] md:rounded-[21px] flex justify-between items-center w-80 transition-all ${isOpen ? 'transform -translate-y-1' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#f4e6c1] orbitron-semibold text-lg">
          {selectedChain || 'Select Chain'}
        </span>
        <ChevronDown className={`text-[#283643] transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu with Animation */}
      <div
        className={`pb-5 pt-8 absolute w-80 left-0 right-0 mx-auto bg-[#161f29] bg-[linear-gradient(0deg,_rgba(20,31,47,0.25)_0%,_rgba(255,255,255,0.25)_100%)] 
    bg-blend-overlay rounded-b-lg mt-6 overflow-hidden transition-all duration-300 border border-[#1a2634] z-10 ${isOpen
            ? 'max-h-48 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
      >
        <div
          className={`pl-3 flex items-center gap-2  hover:bg-[#0e1826] cursor-pointer transition-colors duration-200`}
          onClick={() => onSelect('ETH+')}
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <ChevronRight
            className={`text-white transition-opacity duration-200 ${hoverIndex === 0 || selectedChain === 'ETH+' ? 'opacity-100' : 'opacity-0'
              }`}
            size={18}
          />
          <div className="flex items-center">
            <span className="text-[#f4e6c1] orbitron-semibold text-lg mr-2">ETH+</span>
            <span className="flex">
              <img src={eth1} alt="ETH" className="h-5 w-5 -mr-1" />
              <img src={eth2} alt="ETH" className="h-5 w-5 -mr-1" />
              <img src={eth3} alt="ETH" className="h-5 w-5 -mr-1" />
              <img src={solanaIcon} alt="ETH" className="h-5 w-5" />
            </span>
          </div>

        </div>
        <div
          className={`pl-3 flex items-center gap-2 hover:bg-[#0e1826] cursor-pointer transition-colors duration-200`}
          onClick={() => onSelect('Solana')}
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <ChevronRight
            className={`text-white transition-opacity duration-200 ${hoverIndex === 1 || selectedChain === 'Solana' ? 'opacity-100' : 'opacity-0'
              }`}
            size={18}
          />
          <div className="flex items-center">
            <span className="text-[#fff0c9] orbitron-semibold text-lg">Solana</span>
          </div>

        </div>
      </div>
    </div>
  );
};

const WalletCard: React.FC<WalletCardProps> = ({ wallet, onVerify, onRemove }) => (
  <article className="mb-10">
    <div className="bg-[#050d19] rounded-none md:rounded-[12px] py-1 px-3 mb-3">
      <header className="flex items-center mb-1">
        {wallet.chain === 'Ethereum' ? (
          <div className="flex items-center">
            <img src={eth1} alt="Ethereum" className="h-5 w-5 mr-2" />
            <h3 className="mr-1 text-white text-base orbitron-semibold">{wallet.chain}</h3>
            <div className="flex">
              {[eth1, eth2, eth3, solanaIcon].map((icon, i) => (
                <img key={i} src={icon} alt="" className="h-5 w-5 -mr-1 last:mr-0" role="presentation" />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <img src={solanaIcon} alt="Solana" className="h-5 w-5 mr-2" />
            <h3 className="text-white text-base orbitron-semibold">{wallet.chain}</h3>
          </div>
        )}
      </header>
      <p className="text-[#fff0c9] text-right text-base barlow-medium mb-2">
        {wallet.address}
      </p>
    </div>

    <footer className="flex justify-end mb-2">
      {wallet.verified ? (
        <span className="bg-black border border-[#30f600] rounded-[2px] md:rounded-[7px] pl-2 px-1 py-1 mr-2 flex items-center gap-2">
          <span className="mr-1 text-sm barlow-semibold">VERIFIED</span>
          <span>
            <img src={Verified} alt="Verified" className="hidden md:block scale-[1.2] w-5 h-5" />
            <img src={MobileVerified} alt="Verified" className="md:hidden scale-[1.2] w-5 h-5" />
          </span>
        </span>
      ) : (
        <button
          onClick={onVerify}
          className="bg-[#194272] border border-[#000] rounded-[2px] md:rounded-[7px] pr-1 pl-3 py-1 mr-2 flex items-center text-black gap-2"
        >
          <span className="mr-1 text-base barlow-medium">VERIFY</span>
          <span>
            <img src={verify} alt="Verify" className="hidden md:block scale-[1.3] w-5 h-5" />
            <img src={MobileVerify} alt="Verify" className="md:hidden scale-[1.3] w-5 h-5" />
          </span>
        </button>
      )}

      <button
        onClick={onRemove}
        className="bg-[#194272] text-[#38638b] rounded-[2px] md:rounded-[7px] px-3 py-1 flex items-center border border-[#38638b]"
      >
        <span className="mr-1 text-base barlow-medium text-[#2781ae]">REMOVE</span>
        <img src={deleted} alt="Remove" className="w-4 h-4" />
      </button>
    </footer>
  </article>
);

const EditWallet: React.FC = () => {
  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [wallets, setWallets] = useState<Wallet[]>([
    { chain: 'Ethereum', address: '0x1234asdfasdfasdfasdfw34v...bnm', verified: true },
    { chain: 'Ethereum', address: '09nbvcxwret346q34adfasv8asdf...fffa', verified: false },
    { chain: 'Solana', address: 'vasdgwedbyku4fag3ailjh643...2234', verified: true },
    { chain: 'Solana', address: 'vasdgwedbyku4fag3ailjh643...2234', verified: true },
  ]);

  const toggleDropdown = () => {
    setSelectedChain(selectedChain ? null : 'Ethereum');
  };

  const selectChain = (chain: string) => {
    setSelectedChain(chain);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedChain && walletAddress) {
      setWallets([...wallets, { chain: selectedChain, address: walletAddress, verified: false }]);
      setWalletAddress('');
      setSelectedChain(null);
    }
  };

  const handleVerify = (index: number) => {
    const updatedWallets = [...wallets];
    updatedWallets[index].verified = true;
    setWallets(updatedWallets);
  };

  const handleRemove = (index: number) => {
    const updatedWallets = wallets.filter((_, i) => i !== index);
    setWallets(updatedWallets);
  };

  return (
    <main className="w-full bg-[#000000] text-white py-10 md:py-16 relative">
      <header className="absolute top-0 md:-top-10 left-0 w-full" role="banner">
        <img src={shapedivider} alt="Decorative shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="Decorative shape divider mobile" className="block md:hidden w-full h-auto" />
      </header>

      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto">
        <nav className="block md:hidden mt-4 px-6" aria-label="Mobile user profile">
          <UserProfileMobile />
        </nav>

        <header className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
          <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">
            EDIT WALLETS
          </h1>
        </header>
      </div>

      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto">
        <section className="bg-[#000000] text-white py-4">
          <p className="text-[20px] text-center md:text-left barlow-condensed-semibold leading-[30px] md:leading-[60px] text-[#8a8889] mb-3 px-6 md:px-0">
            Connect your wallet(s) to play with NFTs you hold from the collections in our ecosystem.
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-0">
            {/* Add New Wallet Section */}
            <section className="w-full md:w-1/2 bg-[#161f29] rounded-[11px] pt-1 px-1 pb-8 flex flex-col gap-y-4">
              <h2 className="text-[33px] barlow-condensed-semibold leading-[37px] text-center py-2 bg-[#283643] rounded-[7px] mb-4">
                ADD NEW WALLET
              </h2>
              
              <ChainSelector selectedChain={selectedChain} onSelect={selectChain} />
              
              {selectedChain ? (
                <div className="relative group cursor-pointer mb-4 flex justify-center ">
                  <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-[4px] md:rounded-[16px] border border-[#d540f3] bg-black text-white text-center relative overflow-hidden shadow-md hover:scale-105 transition-transform">

                    <img src={buyRight} alt="left arrow" className="scale-[1.2] w-25 h-25 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />


                    <div className="text-center">
                      <p className="uppercase barlow-black text-[20px] leading-[27px] text-center">CONNECT<br />AND SIGN</p>
                    </div>


                    <img src={buyLeft} alt="right arrow" className="scale-[1.2] w-25 h-25 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />


                    <span className="absolute inset-0 rounded-[4px] md:rounded-[16px] border border-[#d540f3] pointer-events-none"></span>
                  </button>
                </div>
              ) : null}

              <div className='px-8'>
                <div className="text-center text-base barlow-medium my-4 text-[#fff0c9]">— OR —</div>

                <div className="mb-3 text-center text-base barlow-medium text-white">Enter Wallet Address:</div>
                <input
                  type="text"
                  value={walletAddress}
                  onChange={handleAddressChange}
                  className="w-full bg-[#050d19] p-3 rounded-[3px] mb-4 text-[#9d9a9a] focus:outline-none orbitron-semibold text-xl placeholder-[#9d9a9a] text-center"
                  placeholder="0xb13gh5ss183zasdfbdka90"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-[#194272] border-[2px] border-[#38638b] text-white text-lg py-3  barlow-bold  px-8 rounded-[7px] mx-auto block "
                >
                  SUBMIT
                </button>

              </div>

            </section>

            {/* My Wallets Section */}
            <section className="w-full md:w-1/2 bg-[#161f29] rounded-[11px]">
              <h2 className="text-[33px] barlow-condensed-semibold leading-[37px] text-center py-2 bg-[#283643] rounded-[7px] m-1 mb-4">
                MY WALLETS
              </h2>

              <div className="max-h-[30rem] overflow-y-auto px-6 md:px-8 py-6 custom-scrollbar flex flex-col">
                {wallets.map((wallet, index) => (
                  <WalletCard
                    key={index}
                    wallet={wallet}
                    onVerify={() => handleVerify(index)}
                    onRemove={() => handleRemove(index)}
                  />
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EditWallet;