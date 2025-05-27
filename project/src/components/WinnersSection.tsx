import React from 'react';
import tableimg from '../image/table-image.png';
import coinicon from '../image/icons/icon-1.png';

type Winner = {
  id: number;
  game: string;
  event: string;
  username: string;
  rank: number;
  winnings: number;
  time: string;
};

const WINNERS_DATA: Winner[] = [
  {
    id: 1,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    username: 'JarBar19',
    rank: 1,
    winnings: 10000,
    time: 'Now',
  },
  {
    id: 2,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    username: 'JarBar19',
    rank: 2,
    winnings: 10000,
    time: '1 hour ago',
  },
  {
    id: 3,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    username: 'JarBar19',
    rank: 3,
    winnings: 10000,
    time: '2 days ago',
  },
  {
    id: 4,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    username: 'JarBar19',
    rank: 4,
    winnings: 10000,
    time: '1 week ago',
  },
  {
    id: 5,
    game: 'Rebel Speedrun',
    event: 'HeadToHead',
    username: 'JarBar19',
    rank: 5,
    winnings: 10000,
    time: '1 year ago',
  },
];

const WinnerRow: React.FC<{ winner: Winner }> = ({ winner }) => (
  <tr
    className={`border-b border-white/10 hover:bg-purple-500/5 transition-colors ${
      winner.id % 2 === 0 ? 'bg-[rgba(255,255,255,0.05)]' : ''
    }`}
  >
    <td className="py-4 px-12">
      <div className="flex items-center gap-4">
        <img
          src={tableimg}
          alt={winner.game}
          className="w-12 h-12 rounded-lg bg-purple-500/20"
        />
        <span className="text-[#e4e4e4] text-base barlow-semibold">
          {winner.game}
        </span>
      </div>
    </td>
    <td className="py-4 px-12 text-[#8a8787] barlow-bold text-base">
      {winner.event}
    </td>
    <td className="py-4 px-12 text-white barlow-bold text-base">
      {winner.username}
    </td>
    <td className="py-4 px-12">
      <span className="text-[#089ecf] barlow-black text-lg md:text-xl">
        {winner.rank}
      </span>
    </td>
    <td className="py-4 px-12">
      <div className="flex items-center gap-2">
        <img
          src={coinicon} // <-- replace with your image path
          alt="coin"
          className="w-6 h-6"
        />
        <span className="text-[#ff8000] barlow-bold text-lg md:text-xl">
          {winner.winnings.toLocaleString()}
        </span>
      </div>
    </td>
    <td className="py-4 px-12 text-[#089ecf] text-base barlow-bold text-right">
      {winner.time}
    </td>
  </tr>
);

const TableHeader: React.FC = () => (
  <tr className="bg-[#03060a]">
    {['Game', 'Event', 'User Name', 'Rank', 'Winnings', 'Time'].map((header) => (
      <th
        key={header}
        className={`py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl ${
          header === 'Time' ? 'text-right' : ''
        }`}
      >
        {header}
      </th>
    ))}
  </tr>
);

export default function WinnersSection() {
  return (
    <section className="bg-[#050d19] py-20" id="winners">
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] border-[1px] border-[#d540f3] overflow-hidden">
          <h1 className="text-2xl md:text-3xl border-b border-[#d540f3] text-white orbitron-medium p-6 px-12">
            Winners Circle
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                {WINNERS_DATA.map((winner) => (
                  <WinnerRow key={winner.id} winner={winner} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}