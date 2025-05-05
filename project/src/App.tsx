// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './components/HeroSection';
import ContestsSection from './components/ContestsSection';
import WinnersSection from './components/WinnersSection';
import ReviewsSection from './components/ReviewsSection';
import HowItWorksSection from './components/HowItWorksSection';

import Contest from './components/Contest Page/Contest';
import Profile from './components/Profile Page/BuyCredits.js';
import CheckoutCard from'./components/Profile Page/CheckoutCard.js';
import UserProfileSidebar from './components/UserProfileSidebar';
import Confirmation from './components/Profile Page/CONFIRMATION.js';
import CheckoutCrypto from './components/Profile Page/CheckoutCrypto.js'
import UpdateProfile from './components/Profile Page/UpdateProfile.js';
import EditWallet from './components/Profile Page/EditWallet.js';
import WithdrawFunds from './components/Profile Page/WithdrawFunds.js';
import GameSignupPopup from './components/GameSignupPopup';
import ScrollToTop from './components/ScrollToTop';
import TransactionHistory from './components/Profile Page/TransactionHistory.js';
import ActiveContest from './components/Profile Page/ActiveContest.js';
import WithdrawConfirmation from './components/Profile Page/WithdrawConfirmation.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
      
        <Header />
        <UserProfileSidebar />
        <main>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ContestsSection />
                  <WinnersSection />
                  <ReviewsSection />
                  <HowItWorksSection />
                </>
              }
            />

            {/* Contest Page */}
            <Route path="/contest" element={<Contest />} />
             {/* Profile Page */}
             <Route path="/profile" element={<Profile />} />
             {/* checkout-card Page */}
             <Route path="/checkout-card" element={<CheckoutCard />} />
              {/* confirmation Page */}
              <Route path="/confirmation" element={<Confirmation />} />
              {/* checkout-crypto Page */}
              <Route path="/checkout-crypto" element={<CheckoutCrypto />} />
                {/* update-profile Page */}
                <Route path="/update-profile" element={<UpdateProfile />} />
                  {/* edit-wallet Page */}
                  <Route path="/edit-wallet" element={<EditWallet />} />
                    {/* withdraw-funds Page */}
                    <Route path="/withdraw-funds" element={<WithdrawFunds />} />
                      {/* gaming-signup-popup Page */}
                      <Route path="/gaming-signup-popup" element={<GameSignupPopup />} />
                      {/* transaction-history Page */}
                      <Route path="/transaction-history" element={<TransactionHistory />} />
                      {/* active-contest Page */}
                      <Route path="/active-contest" element={<ActiveContest />} />
                      {/* withdraw-confirmation Page */}
                      <Route path="/withdraw-confirmation" element={<WithdrawConfirmation />} />
                  
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
