import { useState } from 'react';
import logo1 from '../image/Logos/XPUNKS-LOGO.svg';
import logo2 from '../image/Logos/yoots-LOGO.svg';
import logo3 from '../image/Logos/AKCB-LOGO.svg';
import logo4 from '../image/Logos/LOCKED-ILLUSTRATION.svg';

export default function NftSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const nftCommunities = [
    { name: ".KID BEAST", status: "active", logo: logo3 },
    { name: "yoots", status: "active", logo: logo2 },
    { name: "XPUNKS", status: "active", logo: logo1 },
    { name: "Unlocking Soon", status: "locked", logo: logo4 },
    { name: "Unlocking Soon", status: "locked", logo: logo4 },
    { name: "Unlocking Soon", status: "locked", logo: logo4 }
  ];

  return (
    <div className="relative w-full py-12 text-white">
      {/* Main title */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl cygun uppercase tracking-widest text-center mb-12 md:mb-16">
          GAME AS YOUR NFT.
        </h2>
        
        {/* Content layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left column - Description text */}
          <div className="md:w-1/3">
            <h3 className="text-xl md:text-2xl orbitron-bold mb-6 leading-none">
              Holders of these communities can play as their NFT in EVERY game on MTgames, with more on the way.
            </h3>
            
            <div className="mt-4">
              <p className="text-white orbitron-bold">Don't see your community?</p>
              <a href="#" className="text-[#00ade1] hover:text-blue-300 transition-colors duration-300 orbitron-bold">Contact us.</a>
            </div>
          </div>
          
          {/* Right column - NFT community cards in a grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Active NFT cards - first row */}
              <div 
                className="aspect-[3/2] rounded-[25px] border-2 border-blue-900 bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] overflow-hidden flex items-center justify-center p-5 transform transition-transform duration-300 hover:scale-105 z-10"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={logo3} alt=".KID BEAST" className="object-contain" />
              </div>
              <div 
                className="aspect-[3/2] rounded-[25px] border-2 border-blue-900 bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] overflow-hidden flex items-center justify-center p-5 transform transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={logo2} alt="yoots" className="object-contain" />
              </div>
              <div 
                className="aspect-[3/2] rounded-[25px] border-2 border-blue-900 bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] overflow-hidden flex items-center justify-center p-5 transform transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={logo1} alt="XPUNKS" className="object-contain" />
              </div>
              
              {/* Locked NFT cards - second row */}
              {[0, 1, 2].map((index) => (
                <div 
                  key={index} 
                  className="aspect-[3/2] rounded-[25px] border-2 border-[#ef077e] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredCard(index + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 opacity-60">
                      <img 
                        src={logo4} 
                        alt="Locked" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-white text-lg mt-2 orbitron-bold [text-shadow:_-1px_-1px_0_#ef077e,1px_-1px_0_#ef077e,-1px_1px_0_#ef077e,1px_1px_0_#ef077e]">
  Unlocking Soon
</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}