import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';

// Images
import icon1 from '../../image/icons/icon-1.png';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';
import buttontext from "../../image/icons/check-c-text.svg";
import cryptobutton from '../../image/icons/check-c-crypto.svg';

// Components
import UserProfileMobile from '../UserProfileMobile';

// Types
interface SpecialOfferButtonProps {
  text: string;
}

// Sub-components
const SpecialOfferButton: React.FC<SpecialOfferButtonProps> = ({ text }) => (
  <div className="relative group cursor-pointer orbitron-bold">
    <div className="absolute -inset-0 bg-[#d540f3] rounded-[25px] opacity-75 group-hover:opacity-100 transition duration-300 group-hover:shadow-[0_0_20px_#d540f3]" />
    <div className="relative flex items-center justify-between bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] text-white px-6 py-8 rounded-[25px] group-hover:bg-[#172A3A] transition-colors border border-[#d540f3] group-hover:border-[#d540f3] text-lg md:text-xl xl:text-[22px] 2xl:text-[29px]">
      {text}
      <div className="flex items-center">
        <img src={doublearrow} alt="arrow" className="scale-[1.4] w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] block" />
      </div>
    </div>
  </div>
);

const BuyCredits: React.FC = () => {
  const [credits, setCredits] = useState<string>('1,000');
  const handleCalculate = () => {
    // Add calculation logic here
  };

  return (
    <main className="w-full bg-[#000000] text-white py-10 md:py-16 relative">
      <header className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
      </header>

      <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
        <nav className='block md:hidden mt-4 px-6'>
          <UserProfileMobile />
        </nav>

        <header className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
          <h1 className="flex items-center gap-3 font-mono orbitron-medium tracking-wider text-[25px] md:text-[33px]">
            BUY CREDITS
          </h1>
        </header>
      </div>

      <section className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-4 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          <section className="md:col-span-3 w-full lg:w-[95%]">
            <article className="grid grid-cols-7 p-[5px] bg-[#161f29] overflow-hidden rounded-[12px]">
              <h2 className="col-span-3 flex items-center justify-center uppercase text-[#f4e6c1] text-xl barlow-condensed-semibold">
                Current Balance:
              </h2>
              <div className="col-span-4 bg-[#283643] p-3 md:p-5 flex items-center rounded-[2px] md:rounded-[6px] justify-center">
                <div className="flex items-center">
                  <img src={icon1} alt="Gold icon" className="w-6 h-6 mr-2" />
                  {/* <span className="text-yellow-500 mr-2">●</span> */}
                  <span className="text-[27px] lg:text-[30px] orbitron-semibold leading-none ">10,000</span>
                </div>
              </div>
            </article>

            <article className="p-3 md:p-6 rounded-[12px] md:rounded-[15px] border-[2px] border-[#161f29] text-base md:text-xl text-[#758695] mt-6 md:mt-10 bg-[#000000]">
              <h2 className="sr-only">Credit Purchase Information</h2>
              <ul className="space-y-1 barlow-condensed-regular">
                <li>• $1 buys you 1,000 Credits.</li>
                <li>• Earn 200 Bonus Credits for every 1,000 Credits purchased.</li>
                <li>• Bonus credits can be used for entries but cannot be redeemed for cash.</li>
                <li>• Only winnings may be withdrawn.</li>

              </ul>
            </article>
          </section>

          <aside className="md:col-span-2 space-y-4">
            <nav className="col-span-1 space-y-6 hidden lg:block">
              {['See Special Offers', 'Subscriptions Plans'].map((item) => (
                <SpecialOfferButton key={item} text={item} />
                
              ))}
              
            </nav>
          </aside>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-0 lg:mt-10">
          <section className="md:col-span-3 space-y-6 w-full lg:w-[95%]">
            <article className="bg-[#161f29] rounded-[12px] px-4 md:px-8 py-6 md:py-12 w-full">
              <h2 className="text-white text-center barlow-bold text-lg md:text-xl mb-2">
                HOW MANY CREDITS WOULD YOU LIKE TO PURCHASE?
              </h2>
              <p className="text-[#fff0c9] barlow-semibold text-base text-center mb-6">Minimum purchase: 1,000 Credits</p>

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
                    value={credits}
                    onChange={(e) => setCredits(e.target.value)}
                  />
                </div>

                <button onClick={handleCalculate} className="bg-[#194272] border-[2px] border-[#38638b] text-base md:text-lg text-white barlow-black py-3 md:py-4 px-4 rounded-[7px] md:w-[30%] ml-3">
                  CALCULATE
                </button>
              </div>
            </article>
          </section>

          <aside className="md:col-span-2 space-y-6">
            <article className="flex flex-col gap-6">
              <div className="bg-[#161f29] rounded-[12px] py-2 px-4 md:py-6 px-6 text-white">
                <h3 className="text-center text-[35px] md:text-[42px] orbitron-medium leading-none mb-2 md:mb-8">
                  $1.00
                </h3>

                <div className="flex justify-between text-[#fff0c9] text-xl mb-1">
                  <span className="barlow-condensed-medium">CREDITS:</span>
                  <div className="flex items-center">
                    <img src={icon1} alt="Diamond" className="w-4 h-4 mr-1" />
                    <span className="orbitron-medium">1,000</span>
                  </div>
                </div>

                <div className="flex justify-between text-[#fff0c9] text-lg leading-none md:text-xl mb-2">
                  <span className="barlow-condensed-medium">BONUS CREDITS:</span>
                  <div className="flex items-center">
                    <img src={icon1} alt="Diamond" className="w-4 h-4 mr-1" />
                    <span className="orbitron-medium">200</span>
                  </div>
                </div>

                <hr className="border-[#194272] mb-2" />

                <div className="flex justify-between items-center mt-2">
                  <span className="text-white barlow-condensed-medium text-[25px] md:text-[32px]">TOTAL CREDITS:</span>
                  <div className="flex items-center">
                    <img src={icon1} alt="Diamond" className="w-6 h-6 mr-1" />
                    <span className="text-[#e102e3] text-[25px] md:text-[32px]  orbitron-medium">1200</span>
                  </div>
                </div>
              </div>

              <footer className="flex justify-between gap-6 w-full">
                <Link to={"/checkout-card"} className="w-1/2">
                  <button className="bg-[#194272] border-[2px] border-[#38638b] text-white barlow-bold py-2 px-6 rounded-[2px] md:rounded-[7px] w-full">
                    <img src={buttontext} alt="" className='w-full h-full object-contain' />
                  </button>
                </Link>
                
                <Link to={"/checkout-crypto"} className="w-1/2">
                  <button className="bg-[#194272] border-[2px] border-[#38638b] text-white barlow-bold py-2 px-6 rounded-[2px] md:rounded-[7px] w-full">
                    <img src={cryptobutton} alt="" className='w-full h-full object-contain' />
                  </button>
                </Link>
              </footer>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BuyCredits;