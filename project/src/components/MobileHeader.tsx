import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// Asset imports
import icon1 from '../image/icons/icon-1.png';
import icon2 from '../image/icons/icon-2.png';
import icon3 from '../image/icons/user.svg';
import lines from '../image/icons/LINES.svg';

// Component imports
import MobileDropdown from './MobileDropdown';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';
import SpecialOfferPopup from './SpecialOfferPopup';

type UserInfoProps = {
  credits: number;
  bits: number;
  username: string;
  onToggleDropdown: () => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ credits, bits, username, onToggleDropdown }) => (
  <div className="flex items-center space-x-2" onClick={onToggleDropdown}>
    <div className="flex items-center space-x-1">
      <img src={icon1} alt="Gold icon" className="w-4 h-4" />
      <span className="cygun-bold text-xl text-white">{credits}</span>
    </div>
    <div className="flex items-center space-x-1">
      <img src={icon2} alt="Blue icon" className="w-4 h-4" />
      <span className="cygun-bold text-xl text-white">{bits}</span>
    </div>
    <div className="flex items-center space-x-1">
      <img src={icon3} alt="User icon" className="w-4 h-4" />
      <div className="font-medium text-xl cygun-bold text-gray-300">
        {username.slice(0, 4).toUpperCase()}
      </div>
    </div>
  </div>
);

const AuthButtons: React.FC<{
  onLoginClick: () => void;
  onRegisterClick: () => void;
}> = ({ onLoginClick, onRegisterClick }) => (
  <div className="flex items-center justify-center w-full gap-4 px-4">
    <button
      onClick={onLoginClick}
      className="bg-[#112037] text-white px-6 py-2 uppercase rounded-[12px] cygun-bold text-[25px]"
    >
      sign in
    </button>
    <button
      onClick={onRegisterClick}
      className="bg-[#112037] text-white px-6 py-2 uppercase rounded-[12px] cygun-bold text-[25px]"
    >
      Sign Up
    </button>
  </div>
);

const MobileHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);
  
  const { isAuthenticated, userData, logout } = useAuth();

  const handleLoginSuccess = () => {
    setShowLoginForm(false);
    setShowSpecialOffer(true);
  };

  const handleRegisterSuccess = () => {
    setShowRegisterForm(false);
    setShowSpecialOffer(true);
  };

  return (
    <>
      <div className="fixed lg:hidden bottom-0 left-1/2 -translate-x-1/2 z-40 w-full">
        <div className="bg-[#050d19]/70 backdrop-blur-sm px-1 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            {isAuthenticated ? (
              <>
                <UserInfo
                  credits={userData.credits}
                  bits={userData.bits}
                  username={userData.username}
                  onToggleDropdown={() => setIsDropdownOpen(true)}
                />
                <div className='flex items-center space-x-2'>
                  <img src={lines} alt="divider" className="h-12" />
                  <button className="text-base leading-none buy-creadit-mobile px-3 py-4 rounded-[6px] relative orbitron-semibold">
                    BUY CREDITS
                  </button>
                </div>
              </>
            ) : (
              <AuthButtons
                onLoginClick={() => setShowLoginForm(true)}
                onRegisterClick={() => setShowRegisterForm(true)}
              />
            )}
          </div>
        </div>
      </div>

      {isDropdownOpen && isAuthenticated && (
        <MobileDropdown 
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          userData={userData}
        />
      )}

      {showLoginForm && (
        <LoginPopup
          onClose={() => setShowLoginForm(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showRegisterForm && (
        <RegisterPopup
          onClose={() => setShowRegisterForm(false)}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
      {showSpecialOffer && (
        <SpecialOfferPopup
          isOpen={showSpecialOffer}
          onClose={() => setShowSpecialOffer(false)}
        />
      )}
    </>
  );
};

export default MobileHeader;
