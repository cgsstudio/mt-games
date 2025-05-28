import React from 'react';
import { useLocation } from 'react-router-dom';

import footerlogo from '../image/Logos/footer-logo.svg';
import twitterIcon from '../image/Logos/X.svg';
import instagramIcon from '../image/Logos/INSTAGRAM.svg';
import discordIcon from '../image/Logos/DISCORD.svg';
import shapedivider from '../image/icons/BG-55.svg';
import mobilesdivider from '../image/mobile-footer.svg';
import contestdivider from '../image/icons/BG-57.svg';
import contestmobiedivider from '../image/icons/contestmobiledivider.svg';

export default function Footer() {
  const location = useLocation();

  // Modified logic to handle both game-detail and dynamic game URLs
  const isContestOrProfilePage = 
    location.pathname.includes('contest') || 
    location.pathname.includes('profile') || 
    location.pathname.includes('checkout-card') || 
    location.pathname.includes('confirmation') || 
    location.pathname.includes('checkout-crypto') || 
    location.pathname.includes('buy-credits') || 
    location.pathname.includes('update-profile') || 
    location.pathname.includes('edit-wallet') || 
    location.pathname.includes('withdraw-funds') || 
    location.pathname.includes('transaction-history') || 
    location.pathname.includes('game-detail') ||
    location.pathname.match(/^\/game\/\d+$/); // This will match any /game/{number} URL

  // Divider images based on screen size and page
  const topDividerDesktop = isContestOrProfilePage ? contestdivider : shapedivider;
  const topDividerMobile = isContestOrProfilePage ? contestmobiedivider : mobilesdivider;
  

  return (
    <div className="relative">
      <footer className="py-8 lg:py-12 relative bg-[#112037]">
        {/* Top Dividers */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img 
            src={topDividerMobile}
            alt="Shape Divider"
            className="w-full block lg:hidden"
          />
          <img 
            src={topDividerDesktop}
            alt="Shape Divider"
            className="w-full hidden lg:block"
          />
        </div>
        
        {/* Footer Content Container */}
        <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4 pt-10 lg:pt-20 flex flex-col lg:flex-row justify-between relative z-10 items-center gap-8">
          {/* Newsletter Section */}
          <section className="w-full lg:max-w-[300px]">
            <h2 className="text-white barlow-condensed-bold text-xl lg:text-2xl mb-3 text-center lg:text-left">
              SUBSCRIBE
            </h2>
            <p className="text-[#888888] barlow-medium text-base mb-4 text-center lg:text-left">
              Be the first to get the latest news and updates from MetaTope and MTgames.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="w-full bg-[#273036]/50 border-none rounded-sm px-4 py-3 text-[#a3a2a2] placeholder-gray-400 focus:outline-none poppins-medium text-sm"
                aria-label="Email subscription"
              />
              <div className="flex justify-center lg:justify-start">
                <button type="submit" className="linear-button-2 py-[15px] px-10 text-[15px] leading-none relative orbitron-semibold flex items-center justify-center">
                  SIGN UP
                </button>
              </div>
            </form>
          </section>

          {/* Logo Section */}
          <section className="flex flex-col items-center order-first lg:order-none mb-6 lg:mb-0">
            <img src={footerlogo} alt="MetaTope Logo" className="mb-2" />
          </section>

          {/* Company Info Section */}
          <section className="w-full lg:w-auto text-center lg:text-right flex flex-col items-center lg:items-end gap-4">
            <div className="mb-2">
              <h3 className="text-white text-lg leading-snug barlow-medium">
                Powered by MetaTope
              </h3>
              <a href="https://www.MetaTope.com" className="text-[#888888] text-lg leading-snug barlow-medium block hover:text-white transition-colors">
                www.MetaTope.com
              </a>
            </div>

            <p className="text-white text-lg leading-snug barlow-medium mb-4 text-center lg:text-right">
              Copyright ©2025 MetaTope.
              <br />
              All Rights reserved.
            </p>

            <div className="mb-4">
              <h3 className="text-white text-lg leading-snug barlow-medium">
                For Investment Opportunities:
              </h3>
              <a href="#contact" className="text-[#888888] text-lg barlow-condensed-medium block hover:text-white transition-colors">
                Contact us.
              </a>
            </div>

            <nav className="flex gap-3" aria-label="Social Media Links">
              <a href="#twitter" className="transition-transform duration-300 hover:scale-110" aria-label="Twitter">
                <img src={twitterIcon} alt="" className="w-8 h-8" />
              </a>
              <a href="#instagram" className="transition-transform duration-300 hover:scale-110" aria-label="Instagram">
                <img src={instagramIcon} alt="" className="w-8 h-8" />
              </a>
              <a href="#discord" className="transition-transform duration-300 hover:scale-110" aria-label="Discord">
                <img src={discordIcon} alt="" className="w-8 h-8" />
              </a>
            </nav>
          </section>
        </div>
      </footer>
    </div>
  );
}
