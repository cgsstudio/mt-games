import React from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import contestarrow from '../../image/icons/contest-arrow.svg';
import UserProfileMobile from '../../components/UserProfileMobile';
import icon1 from '../../image/icons/icon-1.png';

// Types
interface CreditDisplayProps {
  credits: number;
  amount: string;
}

// Sub-components
const CreditDisplay: React.FC<CreditDisplayProps> = ({ credits, amount }) => (
  <article className="grid grid-cols-[1fr_1.5fr] mb-12 md:mb-16 bg-[#161f29] p-[5px] rounded-[12px]">
    <div className="flex items-center pl-4">
      <img src={icon1} alt="Credits icon" className="w-8 h-8 mr-2" />
      <span className="text-[23px] md:text-[25px] leading-none orbitron-semibold">
        {credits.toLocaleString()}
      </span>
    </div>
    <div className="bg-[#283643] p-4 text-center rounded-[2px] md:rounded-[6px]">
      <span className="text-[#ff0000] text-[27px] md:text-[29px] leading-none orbitron-semibold">
        ${amount}
      </span>
    </div>
  </article>
);

const CheckoutCrypto: React.FC = () => {
  const handleContinue = () => {
    // Add Coinbase redirect logic here
  };

  return (
    <main className="w-full bg-[#000000] text-white py-10 md:py-16 mb-6 relative">
      <header className="absolute top-0 md:-top-10 left-0 w-full" role="banner">
        <img src={shapedivider} alt="Decorative shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="Decorative shape divider mobile" className="block md:hidden w-full h-auto" />
      </header>

      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto">
        <nav className="block md:hidden mt-4 px-6" aria-label="Mobile user profile">
          <UserProfileMobile />
        </nav>
        
        <header className="border-b-[2px] border-[#d540f3] md:px-0 pt-3 pb-2 md:pt-8 md:pb-4 mx-4 md:mx-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.history.back()}
              aria-label="Go back to previous page"
              className="cursor-pointer"
            >
              <img src={contestarrow} alt="" role="presentation" />
            </button>
            <h1 className="font-mono orbitron-medium uppercase tracking-wider text-[25px] md:text-[33px]">
              Crypto Checkout
            </h1>
          </div>
        </header>
      </div>

      <section className="max-w-2xl mx-auto py-6 md:py-20 px-4" aria-label="Checkout information">
        <CreditDisplay credits={1200} amount="100" />

        <div className="space-y-6 md:space-y-8">
          <div 
            className="border-[2px] border-[#161f29] px-3 py-5 rounded-[6px] text-center text-xl leading-[1.2] text-[#758695] barlow-condensed-regular" 
            role="alert"
            aria-live="polite"
          >
            <p>This transaction is non-refundable.</p>
            <p>All Credits must be assigned before they can be withdrawn.</p>
          </div>

          <div className="text-center">
            <h2 className="text-[#f4e6c1] barlow-bold uppercase text-xl leading-[25px]">
              TO CONTINUE WITH YOUR PURCHASE,
              <br />
              PLEASE CLICK THE LINK BELOW.
            </h2>
          </div>

          <button 
            onClick={handleContinue}
            className="w-full bg-[#194272] border-[2px] border-[#38638b] text-xl text-white py-5 rounded-[0px] md:rounded-[6px] uppercase barlow-bold"
            aria-label="Continue to Coinbase payment"
          >
            CONTINUE TO COINBASE
          </button>
        </div>
      </section>
    </main>
  );
};

export default CheckoutCrypto;