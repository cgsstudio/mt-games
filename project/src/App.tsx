// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './utils/axiosConfig';
import { AuthProvider } from './context/AuthContext';
import { LoginPopupProvider } from './context/LoginPopupContext';
import { useLoginPopup } from './context/LoginPopupContext';

import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './components/HeroSection';
import ContestsSection from './components/ContestsSection';
import WinnersSection from './components/WinnersSection';
import ReviewsSection from './components/ReviewsSection';
import HowItWorksSection from './components/HowItWorksSection';

import Contest from './components/Contest Page/Contest';
import Profile from './components/Profile Page/BuyCredits.js';
import CheckoutCard from './components/Profile Page/CheckoutCard.js';
import UserProfileSidebar from './components/UserProfileSidebar';
import Confirmation from './components/Profile Page/CONFIRMATION.js';
import CheckoutCrypto from './components/Profile Page/CheckoutCrypto.js';
import UpdateProfile from './components/Profile Page/UpdateProfile.js';
import EditWallet from './components/Profile Page/EditWallet.js';
import WithdrawFunds from './components/Profile Page/WithdrawFunds.js';
import GameSignupPopup from './components/GameSignupPopup';
import ScrollToTop from './components/ScrollToTop';
import TransactionHistory from './components/Profile Page/TransactionHistory.js';
import ActiveContest from './components/Profile Page/ActiveContest.js';
import WithdrawConfirmation from './components/Profile Page/WithdrawConfirmation.js';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPopup from './components/LoginPopup';
import FeaturedGames from './components/featuredGames.js'
import HeroDemo from './components/HeroDemo.js';
import GameDetailPage from './components/Game-Detail-Page/gameDtailpage.js';

function AppContent() {
  const { isLoginPopupOpen, closeLoginPopup } = useLoginPopup();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <UserProfileSidebar />
      <main>
        <Routes>
          {/* Home Page - Public */}
          <Route
            path="/"
            element={
              <>
                
                <HeroSection />
                <ContestsSection />
                <FeaturedGames />
                <WinnersSection />
                <ReviewsSection />
                <HowItWorksSection />
              </>
            }
          />

          {/* Protected Routes */}
          <Route path="/contest" element={
            <ProtectedRoute>
              <Contest />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/checkout-card" element={
            <ProtectedRoute>
              <CheckoutCard />
            </ProtectedRoute>
          } />
          <Route path="/confirmation" element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          } />
          <Route path="/checkout-crypto" element={
            <ProtectedRoute>
              <CheckoutCrypto />
            </ProtectedRoute>
          } />
          <Route path="/update-profile" element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          } />
          <Route path="/edit-wallet" element={
            <ProtectedRoute>
              <EditWallet />
            </ProtectedRoute>
          } />
          <Route path="/withdraw-funds" element={
            <ProtectedRoute>
              <WithdrawFunds />
            </ProtectedRoute>
          } />
          <Route path="/gaming-signup-popup" element={
            <ProtectedRoute>
              <GameSignupPopup />
            </ProtectedRoute>
          } />
          <Route path="/transaction-history" element={
            <ProtectedRoute>
              <TransactionHistory />
            </ProtectedRoute>
          } />
          <Route path="/active-contest" element={
            <ProtectedRoute>
              <ActiveContest />
            </ProtectedRoute>
          } />
          <Route path="/withdraw-confirmation" element={
            <ProtectedRoute>
              <WithdrawConfirmation />
            </ProtectedRoute>
          } />

          <Route path="/game-detail" element={
            <ProtectedRoute>
              <GameDetailPage />
            </ProtectedRoute>
          } />
          <Route path="/game/:id" element={<GameDetailPage />} />

          {/* Demo Page - Public */}

          {/* Catch all route for invalid URLs */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {isLoginPopupOpen && (
        <LoginPopup 
          onClose={closeLoginPopup}
          onLoginSuccess={(userData) => {
            closeLoginPopup();
          }}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <LoginPopupProvider>
          <ScrollToTop />
          <AppContent />
        </LoginPopupProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
