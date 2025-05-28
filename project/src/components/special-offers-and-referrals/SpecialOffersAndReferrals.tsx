import React from 'react';
import { Link } from 'react-router-dom';

// Images
import icon1 from '../../image/icons/icon-1.png';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';
import UserProfileMobile from '../UserProfileMobile';

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
            SPECIAL OFFERS & REFERRALS
          </h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          {specialOffers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </section>

        {/* Referral Section */}
        <section className="mt-12 px-4">
          <h2 className="text-2xl barlow-condensed-bold mb-6 text-[#fff0c9]">REFER & EARN</h2>
          <div className="bg-[#161f29] rounded-[12px] p-6">
            <p className="text-[#758695] barlow-condensed-regular mb-4">
              Invite your friends and earn bonus credits! For each friend that joins and makes their first purchase, you'll receive:
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl text-[#e102e3] orbitron-medium">
              <img src={icon1} alt="Bonus Credits" className="w-6 h-6" />
              <span>500 BONUS CREDITS</span>
            </div>
            <button className="w-full bg-[#194272] border-2 border-[#38638b] text-white barlow-bold py-3 rounded-[7px] mt-6">
              GET REFERRAL LINK
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SpecialOffersAndReferrals;
