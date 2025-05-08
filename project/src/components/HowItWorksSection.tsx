import { useState } from 'react';
import GameAsYourNFT from './GameAsYourNFT';
import nft from '../image/icons/NFT.svg';
import step1 from '../image/icons/step1.png';
import step2 from '../image/icons/step2.png';
import step3 from '../image/icons/step3.png';
import secbg from '../image/GLOW.png'
export default function HowItWorks() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const steps = [
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
      description: "Come out on top and instantly receive credits in your account which you can cash out via PayPal. It’s that easy.",
      image:step3
    }
  ];

  return (
    <div 
      className="relative w-full  py-16 overflow-hidden text-white py-16"
      id="about" 
      style={{
        backgroundImage: `url(${secbg})`,
        backgroundPosition: 'center',
      
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#050d19', // Added this background color
        
      }}
      
    >
      {/* Background with dark overlay */}
      {/* <div className="absolute inset-0 z-0 backdrop-blur-lg">
        <div className="absolute inset-0   z-0"></div>
      </div> */}
      
      {/* Content container */}
      <div className="relative z-10 2xl:max-w-7xl xl:max-w-5xl mx-auto px-4">
        {/* Logo/Header */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 md:w-40 md:h-40  relative">
            <div className="relative flex items-center justify-center w-full h-full md:w-[150px] md:h-[142px] lg:w-[200px] md:h-[192px] ">
              <img 
                src={nft}
                alt="NFT Icon" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[32px] text-center md:text-left md:text-5xl cygun tracking-wider uppercase mb-12">
          HOW IT WORKS
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
  {steps.map((step, index) => (
    <div
      key={index}
      className="relative p-0.5 rounded-3xl transition-all duration-500"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
        background: 'linear-gradient(to bottom, #0560fa, #d93ef9)'
      }}
    >
      {/* Card content with gradient background */}
      <div className="relative h-full flex flex-col rounded-3xl p-6 bg-gradient-to-br from-[rgb(42,35,78)] to-[rgb(5,12,17)]">
        <h3 className="text-center text-xl md:text-[22px] orbitron-bold mb-4">Step {step.number}: {step.title}</h3>
        
        {/* Image/icon centered */}
        <div className="flex justify-center my-4">
          <div className="transition-all duration-300" 
            style={{
              transform: hoveredCard === index ? 'scale(1.2)' : 'scale(1)',
            }}>
            <img 
              src={step.image} 
              alt={step.title}
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        
        {/* Description */}
        
        <p className="text-white barlow-condensed-semibold text-lg leading-tight mt-2  text-center">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>
        <GameAsYourNFT/>
      </div>
    </div>
  );
}