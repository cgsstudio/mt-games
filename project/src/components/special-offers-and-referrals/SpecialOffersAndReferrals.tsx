import React from 'react';
import { Link } from 'react-router-dom';

// Images
import icon1 from '../../image/icons/icon-1.png';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';
import UserProfileMobile from '../UserProfileMobile';
import buttontext from "../../image/icons/check-c-text.svg";
import cryptobutton from '../../image/icons/check-c-crypto.svg';

interface OfferCardProps {
  title: string;
  description: string;
  credits: number;
  bonusCredits: number;
  price: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, credits, bonusCredits, price }) => (
  <article className="bg-[#161f29] rounded-[12px] p-6">
    <h3 className="text-[#fff0c9] text-2xl barlow-condensed-bold mb-2">{title}</h3>
    <p className="text-[#758695] barlow-condensed-regular mb-4">{description}</p>
    
    <div className="space-y-2">
      <div className="flex justify-between text-[#fff0c9] text-xl">
        <span className="barlow-condensed-medium">CREDITS:</span>
        <div className="flex items-center">
          <img src={icon1} alt="Credits" className="w-4 h-4 mr-1" />
          <span className="orbitron-medium">{credits.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="flex justify-between text-[#fff0c9] text-xl">
        <span className="barlow-condensed-medium">BONUS CREDITS:</span>
        <div className="flex items-center">
          <img src={icon1} alt="Bonus" className="w-4 h-4 mr-1" />
          <span className="orbitron-medium">{bonusCredits.toLocaleString()}</span>
        </div>
      </div>
      
      <hr className="border-[#194272]" />
      
      <div className="flex justify-between items-center">
        <span className="text-white barlow-condensed-medium text-3xl">PRICE:</span>
        <span className="text-[#e102e3] text-3xl orbitron-medium">{price}</span>
      </div>
    </div>
    
    <button className="w-full bg-[#194272] border-2 border-[#38638b] text-white barlow-bold py-3 rounded-[7px] mt-4">
      PURCHASE NOW
    </button>
  </article>
);

const OfferButton: React.FC<{ bonus: string; amount: string; credits: string }> = ({ bonus, amount, credits }) => (
  <button className="w-full bg-[linear-gradient(-41deg,#2a234e_0%,#050c11_100%)]  rounded-xl flex items-center justify-between p-2 border border-[#283643] mb-4">
    <div className="flex flex-col items-center bg-[#112037] rounded-lg p-2">
      <span className="text-[#fff0c9] text-[25px] barlow-bold leading-none">{bonus}</span>
      <span className="text-[#fff0c9] text-lg barlow-bold leading-none">Bonus</span>
    </div>
    <span className="text-[#e102e3] text-2xl font-bold">{amount}</span>
    <div className="flex items-center justify-center linear-button-2 gap-4 w-[300px] h-[70px]">
      <img src={icon1} alt="Credits icon" className="w-8 h-8 " />
      <span className="text-[#13ff00] text-2xl font-bold orbitron-medium">{credits}</span>
      <img src={doublearrow} alt="Arrow" className="scale-[1.4] w-10 h-10  drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
    </div>
  </button>
);

const SpecialOffersAndReferrals: React.FC = () => {
  const specialOffers = [
    {
      title: "STARTER PACK",
      description: "Perfect for beginners! Get started with a bundle of credits and bonus rewards.",
      credits: 1000,
      bonusCredits: 200,
      price: "$1.00"
    },
    {
      title: "PREMIUM BUNDLE",
      description: "Most popular choice! Get extra bonus credits with this value pack.",
      credits: 5000,
      bonusCredits: 1500,
      price: "$5.00"
    },
    {
      title: "ELITE PACKAGE",
      description: "Best value! Maximum credits with the highest bonus rewards.",
      credits: 10000,
      bonusCredits: 3000,
      price: "$10.00"
    }
  ];

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
            SPECIAL OFFERS
          </h1>
        </header>
      </div>

      <section className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-4 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          <section className="md:col-span-3 w-full lg:w-[95%]">
            {/* Quick Purchase Options */}
            <div className="mb-6">
              <OfferButton bonus="5% " amount="$10.00" credits="10,500" />
              <OfferButton bonus="10% " amount="$25.00" credits="27,500" />
              <OfferButton bonus="20% " amount="$50.00" credits="60,000" />
              <OfferButton bonus="30% " amount="$100.00" credits="130,000" />
            </div>


            
          </section>

          {/* Referral Section */}
          <aside className="md:col-span-2">
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

export default SpecialOffersAndReferrals;
