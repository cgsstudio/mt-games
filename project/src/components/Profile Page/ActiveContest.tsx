// Import external dependencies
import React from 'react';

// Import components
import UserProfileMobile from '../UserProfileMobile';

// Import assets
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import tableimg from '../../image/table-image.png';
import icon1 from '../../image/icons/icon-1.png';

// Types
interface Attempt {
  current: string;
  total: string;
}

interface Contest {
  id: number;
  profileImg: string;
  entryFee: number;
  attempts: Attempt;
  timeRaimining: string;
}

// Mock data
const MOCK_CONTESTS: Contest[] = [
  { id: 1, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "1 Day" },
  { id: 2, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "12 Hours" },
  { id: 3, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "5 Hours" },
  { id: 4, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "30 Minutes" },
  { id: 5, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "12 Days" },
  { id: 6, profileImg: tableimg, entryFee: 10000, attempts: { current: "X", total: "N" }, timeRaimining: "5 Minutes" },
];

// Component
const ActiveContest: React.FC = () => {
  // Render helpers
  const renderHeader = () => (
    <header className="active-contests-header-container">
      <div className="active-contests-mobile-profile">
        <UserProfileMobile />
      </div>
      <div className="active-contests-title-border">
        <div className="flex items-center gap-3">
          <h1 className="active-contests-title">Active Contests</h1>
        </div>
      </div>
    </header>
  );

  const renderTableHeader = () => (
    <div role="rowheader" className="active-contests-table-header">
      <h3 className="flex items-center">GAME</h3>
      <h3 className="flex items-center">ENTRY FEE</h3>
      <h3 className="flex items-center justify-center">ATTEMPTS</h3>
      <h3 className="flex items-center text-center md:text-left justify-center">TIME REMAINING</h3>
    </div>
  );

  const renderContestRow = (contest: Contest) => (
    <article key={contest.id} role="row" className="active-contests-row">
      <div role="cell" className="flex items-center">
        <img
          src={contest.profileImg}
          alt={`Game ${contest.id} thumbnail`}
          className="active-contests-game-image"
        />
      </div>
      <div role="cell" className="flex items-center gap-2">
        <img src={icon1} alt="Currency icon" className="active-contests-coin-icon" />
        <strong className="active-contests-entry-fee">
          {contest.entryFee.toLocaleString()}
        </strong>
      </div>
      <div role="cell" className="active-contests-attempts">
        <span className="attempts-current">{contest.attempts.current}</span>
        <span className="attempts-total">/{contest.attempts.total}</span>
      </div>
      <div role="cell" className="active-contests-time">
        <time className={`time-remaining ${contest.timeRaimining.includes('Minutes') ? 'urgent' : ''}`}>
          {contest.timeRaimining}
        </time>
      </div>
    </article>
  );

  return (
    <main className="active-contests-container">
      <div className="active-contests-shape-divider" role="presentation">
        <img src={shapedivider} alt="" className="shape-divider-desktop" />
        <img src={mobileshapedivider} alt="" className="shape-divider-mobile" />
      </div>

      {renderHeader()}

      <section className="active-contests-content">
        <div role="table" aria-label="Active Contests List" className="active-contests-table-container">
          {renderTableHeader()}
          <div role="rowgroup" className="space-y-4">
            {MOCK_CONTESTS.map(renderContestRow)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActiveContest;