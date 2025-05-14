import { useState, useEffect } from 'react';
import logo1 from '../image/Logos/XPUNKS-LOGO.svg';
import logo2 from '../image/Logos/yoots-LOGO.svg';
import logo3 from '../image/Logos/AKCB-LOGO.svg';
import logo4 from '../image/lock_.png';
import secbg from '../image/GLOW.png'

export default function GameAsYourNFT() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const nftCommunities = [
    { name: ".KID BEAST", status: "active", logo: logo3 },
    { name: "yoots", status: "active", logo: logo2 },
    { name: "XPUNKS", status: "active", logo: logo1 },
    { name: "Unlocking Soon", status: "locked", logo: logo4 },
    { name: "Unlocking Soon", status: "locked", logo: logo4 },
    { name: "Unlocking Soon", status: "locked", logo: logo4 }
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <div className="relative w-full  text-white mb-10 md:mb-20" >
      {/* Main title */}
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto">
        <div className='h-[10vh] md:h-[40vh] flex items-center justify-center relative'>
          <img 
            src={secbg} 
            alt="background glow" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px]"
          />
          <h2 className="text-[30px] text-center md:text-7xl cygun uppercase relative z-10">
            GAME AS YOUR NFT.
          </h2>
        </div>
       
        
        {/* Content layout - Changed from md:flex-row to lg:flex-row so tablet is stacked */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left column - Description text - Full width on tablet */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h3 className="text-xl md:text-[22px] orbitron-bold mb-10 md:mb-6 leading-tight">
              Holders of these communities can play as their NFT in EVERY game on MTgames, with more on the way.
            </h3>
            
            <div className="mt-4 flex flex-col items-center lg:items-start">
              <p className="text-white orbitron-bold">Don't see your community?</p>
              <a href="#" className="text-[#00ade1] hover:text-blue-300 transition-colors duration-300 orbitron-bold">Contact us.</a>
            </div>
          </div>
          
          {/* Right column - NFT community cards in a grid - Full width on tablet */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Active NFT cards - first row */}
              <div 
                className="rounded-[20px] overflow-hidden flex items-center justify-center p-0.5 transform transition-transform duration-300 hover:scale-105 z-10 w-full max-w-md mx-auto"
                style={{
                  background: 'linear-gradient(to bottom, #0560fa, #d93ef9)',
                  minHeight: window.innerWidth < 768 ? '140px' : '180px'
                }}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="w-full h-full rounded-[18px] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] flex items-center justify-center py-10 px-6"
                >
                  <img src={logo3} alt="yoots" className="object-contain" />
                </div>
              </div>

              {/* Active NFT cards - first row */}
              <div 
                className="rounded-[20px] overflow-hidden flex items-center justify-center p-0.5 transform transition-transform duration-300 hover:scale-105 z-10 w-full max-w-md mx-auto"
                style={{
                  background: 'linear-gradient(to bottom, #0560fa, #d93ef9)',
                  minHeight: window.innerWidth < 768 ? '140px' : '180px'
                }}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="w-full h-full rounded-[18px] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] flex items-center justify-center py-10 px-6"
                >
                  <img src={logo2} alt="yoots" className="object-contain" />
                </div>
              </div>
      
              <div 
                className="rounded-[20px] overflow-hidden flex items-center justify-center p-0.5 transform transition-transform duration-300 hover:scale-105 z-10 w-full max-w-md mx-auto"
                style={{
                  background: 'linear-gradient(to bottom, #0560fa, #d93ef9)',
                  minHeight: window.innerWidth < 768 ? '140px' : '180px'
                }}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="w-full h-full rounded-[18px] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] flex items-center justify-center py-10 px-6"
                >
                  <img src={logo1} alt="yoots" className="object-contain" />
                </div>
              </div>

              {/* Locked NFT cards - second row */}
              {[0, 1, 2].map((index) => (
                <div 
                  key={index} 
                  className="rounded-[20px] overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full max-w-md mx-auto relative"
                  style={{
                    background: 'linear-gradient(to bottom, #ef077e, #8a0773)',
                    padding: '1px',
                    height: window.innerWidth < 768 ? '140px' : '180px'
                  }}
                  onMouseEnter={() => setHoveredCard(index + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="h-full w-full rounded-[20px] bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Lock Image - Mobile Only */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-20 md:hidden">
                      <img 
                        src={logo4} 
                        alt="Locked"
                        className="w-full h-full object-contain scale-150"
                      />
                    </div> */}
                    
                    {/* Desktop Lock Image */}
                    <div className="relative mb-4 ">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={logo4} 
                          alt="Locked" 
                          className="w-full h-full object-contain transform "
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    {/* <p className="text-white text-center text-base md:text-xl font-bold relative z-10" 
                      style={{ 
                        fontFamily: "'Orbitron', sans-serif",
                        textShadow: '-1px -1px 0 #ef077e, 1px -1px 0 #ef077e, -1px 1px 0 #ef077e, 1px 1px 0 #ef077e'
                      }}>
                      Unlocking Soon
                    </p> */}
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