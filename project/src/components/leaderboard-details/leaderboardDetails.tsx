import React, { useState } from 'react';
import { X } from 'lucide-react';
import GameSignupPopup from '../GameSignupPopup';
import coinsIcon from '../../image/icons/icon-1.png';
import playersIcon from '../../image/icons/tournament.svg';
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import { GAMES } from '../data/GAMEs';

interface LeaderboardDetailsProps {
    isOpen: boolean;
    onClose: () => void;
}

interface LeaderboardPlayer {
    place: number;
    username: string;
    score: number;
    prize: number;
}

const LeaderboardDetails: React.FC<LeaderboardDetailsProps> = ({ isOpen, onClose }) => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    // Get the rebel brawlers game object since it's the default game
    const defaultGame = GAMES.find(game => game.slug === 'rebel-brawlers');
    
    if (!isOpen) return null;

    const leaderboardData: LeaderboardPlayer[] = [
        { place: 1, username: 'Username', score: 12345, prize: 40000 },
        { place: 2, username: 'Username', score: 12345, prize: 30000 },
        { place: 3, username: 'Username', score: 12345, prize: 20000 },
        { place: 4, username: 'Username', score: 12345, prize: 10000 },
        { place: 5, username: 'Username', score: 12345, prize: 9000 },
        { place: 6, username: 'Username', score: 12345, prize: 8000 },
        { place: 7, username: 'Username', score: 12345, prize: 7000 },
        { place: 8, username: 'Username', score: 12345, prize: 6000 },
        { place: 9, username: 'Username', score: 12345, prize: 5000 },
        { place: 10, username: 'Username', score: 12345, prize: 4000 },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="absolute inset-0 bg-black/80" onClick={onClose} />

            {/* Add GameSignupPopup */}
            <GameSignupPopup 
                isOpen={isSignupOpen} 
                onClose={() => setIsSignupOpen(false)}
                game={defaultGame}
            />

            <div className="relative w-full max-w-5xl">
                <div className="leaderboard-gradient-border">
                    <div className="bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] rounded-[18px] px-8 pb-6 pt-4">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute orbitron-light text-[37px] right-2 -top-3 text-[#758695] hover:text-white rotate-45 z-30"
                            aria-label="Close popup"
                        >
                            +
                        </button>
                        {/* Header */}
                        <div className="relative flex justify-center items-center mb-6">
                            <h2 className="text-[25px] leading-none md:text-[37px]  barlow-black text-[#ffeeca]">LEADERBOARD DETAILS</h2>

                        </div>

                        {/* Main content grid */}
                        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-6 mb-6">
                            {/* Prize Pool Info - Shown above table on mobile */}
                            <div className="md:hidden flex justify-between gap-4 mb-0 md:mb-4">
                                {/* Players */}
                                <div className="bg-[#000000] w-[180px] h-[50px] flex items-center  rounded-[9px] justify-center ">
                                    <div className="flex items-center">
                                        <img src={playersIcon} alt="Gold icon" className='mr-4 drop-shadow-[0_0_8px_#ff00cc]' />
                                        <p className="text-[20px] md:text-[25px] barlow-condensed-semibold leading-[13px] text-[#f4e6c1] uppercase "><span className='text-[#00ff18]'>∞</span> Players</p>
                                    </div>
                                </div>
                                {/* Entry */}
                                <div className="bg-[#000000] flex items-center  rounded-[9px] justify-center w-[180px] h-[50px]">
                                    <div className="flex items-center">
                                        <img src={coinsIcon} alt="Gold icon" className="w-8 h-8 mr-2" />
                                        <p className="text-[#f4e6c1] text-[20px] md:text-[25px] barlow-condensed-semibold leading-[13px] uppercase "><span className='text-[#00ff18]'>2400</span> Entry</p>
                                    </div>
                                </div>
                            </div>

                            {/* Left Column - Leaderboard Table */}
                            <div className="bg-[#000000] rounded-[10px] p-4">
                                <div className="h-[250px] md:h-[480px] overflow-y-auto">
                                    {leaderboardData.map((player) => (
                                        <div
                                            key={player.place}
                                            className="grid grid-cols-4 items-center  "
                                        >
                                            <span className="text-white text-[16px] leading-[39px] md:text-[25px] md:leading-[48px] barlow-condensed-medium">{player.place}{getOrdinal(player.place)} Place</span>
                                            <span className="text-[#dbceae] text-[16px] leading-[39px] md:text-[25px] md:leading-[48px] barlow-condensed-regular">{player.username}</span>
                                            <span className="text-[#089ecf] text-[16px] leading-[39px] md:text-[25px] md:leading-[48px] barlow-condensed-regular">{player.score.toLocaleString()}</span>
                                            <span className="text-white text-[16px] leading-[39px] md:text-[25px] md:leading-[48px] barlow-condensed-bold flex items-center gap-2">
                                                <img src={coinsIcon} alt="coins" className="w-8 h-8" />
                                                {player.prize.toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Info & Rules */}
                            <div className="flex flex-col">
                                {/* Prize Pool Info - Hidden on mobile */}
                                <div className="hidden md:flex justify-between gap-4 mb-4">
                                    {/* Players */}
                                    <div className="bg-[#000000] w-[180px] h-[50px] flex items-center rounded-[2px] md:rounded-[9px] justify-center ">
                                        <div className="flex items-center">
                                            <img src={playersIcon} alt="Gold icon" className='mr-4 drop-shadow-[0_0_8px_#ff00cc]' />

                                            <p className="text-[27px] lg:text-[25px] barlow-condensed-semibold leading-[13px] text-[#f4e6c1] uppercase "><span className='text-[#00ff18]'>∞</span> Players</p>
                                        </div>
                                    </div>
                                    {/* Entry */}
                                    <div className="bg-[#000000]  flex items-center rounded-[2px] md:rounded-[9px] justify-center w-[180px] h-[50px]">
                                        <div className="flex items-center">
                                            <img src={coinsIcon} alt="Gold icon" className="w-8 h-8 mr-2" />

                                            <p className="text-[#f4e6c1] text-[27px] lg:text-[25px] barlow-condensed-semibold leading-[13px] uppercase "><span className='text-[#00ff18]'>2400</span> Entry</p>
                                        </div>
                                    </div>


                                </div>

                                {/* Rules - with flex-grow to fill remaining space */}
                                <div className="bg-[#000000] rounded-[10px] p-6 flex-grow overflow-y-auto">
                                    <h3 className="text-[#ffeeca] text-xl text-center barlow-condensed-semibold mb-2 sticky top-0 ">RULES:</h3>
                                    <ul className="space-y-6 text-base md:text-xl text-[#758695]text-base md:text-xl text-[#758695] barlow-condensed-regular">
                                        <li>• 5 entries per player.</li>
                                        <li>• 1 attempt per entry.</li>
                                        <li>• Once you hit CONFIRM ENTRY, credits will be deducted from your account. This action is non-refundable.</li>
                                        <li>• If you close out of the app before or during play, your funds may be forfeited.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section - Confirm Button */}
                        <footer className="contest-enter-wrapper p-[1px] mt-4">
                            <button
                                onClick={() => setIsSignupOpen(true)}
                                className="contest-enter-button w-full text-center barlow-black text-2xl md:text-[29px] leading-[60px] uppercase flex items-center justify-center gap-3 "
                                aria-label="Enter contest"
                            >
                                <img src={signup02} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                                <span>CONFIRM ENTRY</span>
                                <img src={signup01} alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to add ordinal suffix to numbers
const getOrdinal = (n: number): string => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
};

export default LeaderboardDetails;
