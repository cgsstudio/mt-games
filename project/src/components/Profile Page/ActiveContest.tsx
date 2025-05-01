import React from 'react';
import tableimg from '../../image/table-image.png';
import coinicon from '../../image/icons/icon-1.png';
import contestarrow from '../../image/icons/sign-up-ar-2.svg';

const activeContests = [
  {
    id: 1,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    status: 'In Progress',
    entryFee: 1000,
    prizePool: 2000,
    timeLeft: '10:00',
  },
  {
    id: 2,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    status: 'Waiting',
    entryFee: 1000,
    prizePool: 2000,
    timeLeft: '05:00',
  },
  {
    id: 3,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    status: 'Completed',
    entryFee: 1000,
    prizePool: 2000,
    timeLeft: '00:00',
  },
];

export default function ActiveContest() {
  return (
    <div className="w-full">
      <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 py-3 md:py-8">
        <div className="flex items-center gap-3">
          <img src={contestarrow} alt="contestarrow" />
          <h1 className="uppercase font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">Active Contests</h1>
        </div>
      </div>

      <div className="rounded-3xl bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] border-[1px] border-[#d540f3] overflow-hidden mt-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#03060a]">
                <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Game</th>
                <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Event</th>
                <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Status</th>
                <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Entry Fee</th>
                <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Prize Pool</th>
                <th className="py-4 px-12 text-right century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Time Left</th>
              </tr>
            </thead>
            <tbody>
              {activeContests.map((contest) => (
                <tr
                  key={contest.id}
                  className={`border-b border-white/10 hover:bg-purple-500/5 transition-colors ${
                    contest.id % 2 === 0 ? 'bg-[rgba(255,255,255,0.05)]' : ''
                  }`}
                >
                  <td className="py-4 px-12">
                    <div className="flex items-center gap-4">
                      <img
                        src={tableimg}
                        alt={contest.game}
                        className="w-12 h-12 rounded-lg bg-purple-500/20"
                      />
                      <span className="text-[#e4e4e4] text-base barlow-semibold">{contest.game}</span>
                    </div>
                  </td>
                  <td className="py-4 px-12 text-[#8a8787] barlow-bold text-base">{contest.event}</td>
                  <td className="py-4 px-12">
                    <span className={`barlow-bold text-base ${
                      contest.status === 'In Progress' ? 'text-[#2a8fbc]' :
                      contest.status === 'Waiting' ? 'text-[#ff8000]' :
                      'text-[#404040]'
                    }`}>
                      {contest.status}
                    </span>
                  </td>
                  <td className="py-4 px-12">
                    <div className="flex items-center gap-2">
                      <img src={coinicon} alt="coin" className="w-6 h-6" />
                      <span className="text-[#ff8000] barlow-bold text-lg md:text-xl">
                        {contest.entryFee.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-12">
                    <div className="flex items-center gap-2">
                      <img src={coinicon} alt="coin" className="w-6 h-6" />
                      <span className="text-[#ff8000] barlow-bold text-lg md:text-xl">
                        {contest.prizePool.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-12 text-[#089ecf] text-base barlow-bold text-right">{contest.timeLeft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
