import { useState } from 'react';
import secbg from '../image/GLOW.png';
import { nftCommunities } from '../constants/nftData';

export default function GameAsYourNFT() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const renderNFTCard = (community: any, index: number) => (
    <div
      key={community.id}
      className={`nft-card ${community.status === 'active' ? 'nft-card-active' : 'nft-card-locked'}`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="nft-card-inner">
        <img
          src={community.logo}
          alt={community.name}
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <section className="relative w-full text-white mb-10 md:mb-20">
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto">
        {/* Hero Section */}
        <header className='h-[10vh] md:h-[40vh] flex items-center justify-center relative'>
          <img
            src={secbg}
            alt="background glow"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px]"
          />
          <h1 className="text-[30px] text-center md:text-7xl cygun uppercase relative z-10">
            GAME AS YOUR NFT.
          </h1>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Description */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-xl md:text-[22px] orbitron-bold mb-10 md:mb-6 leading-tight">
              Holders of these communities can play as their NFT in EVERY game on MTgames, with more on the way.
            </h2>

            <div className="mt-4 flex flex-col items-center lg:items-start">
              <p className="text-white orbitron-bold">Don't see your community?</p>
              <a
                href="#contact"
                className="text-[#00ade1] hover:text-blue-300 transition-colors duration-300 orbitron-bold"
              >
                Contact us.
              </a>
            </div>
          </div>

          {/* NFT Cards Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {nftCommunities.map((community, index) => renderNFTCard(community, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}