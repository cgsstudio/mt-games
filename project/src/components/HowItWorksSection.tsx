import { useState } from 'react';
import GameAsYourNFT from './GameAsYourNFT';
import nft from '../image/icons/NFT.svg';
import step1 from '../image/icons/step1.png';
import step2 from '../image/icons/step2.png';
import step3 from '../image/icons/step3.png';

interface Step {
  number: number;
  title: string;
  description: string;
  image: string;
}

const StepCard = ({ step, isHovered, onHover, onLeave }: { 
  step: Step;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => (
  <div
    className={`how-it-works-card ${isHovered ? 'transform -translate-y-2.5' : ''}`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="how-it-works-card-inner">
      <h3 className="text-center text-xl md:text-[22px] orbitron-bold mb-4">
        Step {step.number}: {step.title}
      </h3>
      
      <div className="flex justify-center my-4">
        <div className={`${isHovered ? 'scale-120' : 'scale-100'} transition-all duration-300`}>
          <img 
            src={step.image} 
            alt={step.title}
            className="how-it-works-card-icon"
          />
        </div>
      </div>
      
      <p className="text-white barlow-condensed-semibold text-lg leading-tight mt-2 text-center">
        {step.description}
      </p>
    </div>
  </div>
);

const STEPS: Step[] = [
  {
    number: 1,
    title: "Sign Up",
    description: "Create a profile and connect your wallet (optional) to play as your favorite NFT and earn real cash prizes! All games available for mobile, desktop, and browser.",
    image: step1
  },
  {
    number: 2,
    title: "Play a Game",
    description: "Choose a game and enter a contest with easy to purchase Credits or play in a FREE sponsored tournament with Bits you earn just for signing in! ",
    image: step2
  },
  {
    number: 3,
    title: "Get Paid",
    description: "Come out on top and instantly receive credits in your account which you can cash out via PayPal. It's that easy.",
    image: step3
  }
];

export default function HowItWorks() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="how-it-works-section" id="about">
      <div className="relative z-10 2xl:max-w-7xl xl:max-w-5xl mx-auto px-4">
        <header className="mb-12">
          <div className="flex justify-center mb-12">
            <div className="relative w-full h-full md:w-[150px] md:h-[142px] lg:w-[200px] md:h-[192px]">
              <img 
                src={nft}
                alt="NFT Icon" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-[32px] md:text-[36px] cygun tracking-wider uppercase">
            HOW IT WORKS
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {STEPS.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
        
        <GameAsYourNFT />
      </div>
    </section>
  );
}