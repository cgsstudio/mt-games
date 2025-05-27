import React from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import contestarrow from '../../image/icons/contest-arrow.svg';
import UserProfileMobile from '../../components/UserProfileMobile';
import icon1 from '../../image/icons/icon-1.png';


interface PurchaseSummaryProps {
  purchasedCredits: number;
  bonusCredits: number;
  totalPrice: string;
}

// Sub-components
const CreditRow: React.FC<{ label: string; amount: number }> = ({ label, amount }) => (
  <div className="flex justify-between text-[#fff0c9] text-lg">
    <span className="barlow-condensed-semibold leading-none">{label}:</span>
    <div className="flex items-center">
      <img src={icon1} alt="" className="w-4 h-4 mr-1" role="presentation" />
      <span className="orbitron-semibold leading-none">{amount}</span>
    </div>
  </div>
);

const PurchaseSummary: React.FC<PurchaseSummaryProps> = ({ purchasedCredits, bonusCredits, totalPrice }) => {
  const totalCredits = purchasedCredits + bonusCredits;

  return (
    <article className="bg-[#161f29] rounded-[12px] py-6 px-6 h-full text-white">
      <h2 className="sr-only">Purchase Summary</h2>
      <CreditRow label="CREDITS PURCHASED" amount={purchasedCredits} />
      <CreditRow label="BONUS CREDITS EARNED" amount={bonusCredits} />

      <hr className="border-[#194272] my-4" role="presentation" />

      <div className="flex justify-between items-center">
        <span className="text-white barlow-condensed-semibold text-[25px] md:text-[28px]">TOTAL CREDITS:</span>
        <div className="flex items-center">
          <img src={icon1} alt="" className="w-6 h-6 mr-1" role="presentation" />
          <span className="text-[#e102e3] text-[25px] md:text-[28px] orbitron-semibold">{totalCredits}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-white barlow-condensed-semibold text-[25px] md:text-[28px]">TOTAL PRICE:</span>
        <span className="text-[#e102e3] text-[25px] md:text-[28px] orbitron-semibold">${totalPrice}</span>
      </div>
    </article>
  );
};

const FindContestButton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <button 
    className={`w-full bg-[#194272] border border-[#38638b] text-white text-lg md:text-xl py-4 rounded-[2px] md:rounded-[7px] uppercase barlow-black ${className}`}
    onClick={() => window.location.href = '/contests'}
    aria-label="Browse available contests"
  >
    Find a Contest
  </button>
);

const Confirmation: React.FC = () => {
  return (
    <main className="w-full bg-[#000000] h-screen text-white py-10 md:py-16 relative">
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
            CONFIRMATION
          </h1>
        </header>
      </div>

      <section className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-0 md:py-4 px-6 md:px-0" aria-label="Purchase confirmation">
        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-1 md:gap-6 w-full mt-6 md:mt-12">
          <div className="flex flex-col order-2 md:order-1">
            <div 
              className="border border-[#161f29] rounded-[4px] md:rounded-[6px] text-center py-4 md:py-8 px-4 mb-6 mt-6 md:mt-0"
              role="alert"
              aria-live="polite"
            >
              <h2 className="text-[#758695] text-[25px] leading-none barlow-condensed-regular leading-tight">
                Payment Confirmed
              </h2>
              <p className="text-[#758695] text-[25px] leading-none barlow-condensed-regular leading-tight">
                Thank you for your purchase.
              </p>
            </div>
            <div className="hidden md:block">
              <FindContestButton />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <PurchaseSummary 
              purchasedCredits={1000}
              bonusCredits={200}
              totalPrice="1.00"
            />
          </div>

          <div className="order-3 md:hidden">
            <FindContestButton />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Confirmation;
