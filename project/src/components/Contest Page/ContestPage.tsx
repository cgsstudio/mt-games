import React, { useState } from 'react';
import EnterNow from './EnterNow';

const ContestPage: React.FC = () => {
  const [isEnterNowOpen, setIsEnterNowOpen] = useState(false);
  const [userCredits] = useState(15000); // Set to 5000 for testing insufficient funds

  const handleOpenPopup = () => {
    console.log("Opening popup with credits:", userCredits);
    setIsEnterNowOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Enter Contest</button>
      {/* <EnterNow
        isOpen={isEnterNowOpen}
        onClose={() => setIsEnterNowOpen(false)}
        entryFee={10000}
        contestEndTime={new Date(Date.now() + 24 * 60 * 60 * 1000)}
        userCredits={userCredits}
      /> */}
    </div>
  );
};

export default ContestPage;