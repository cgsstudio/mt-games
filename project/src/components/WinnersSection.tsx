import React from 'react';
import { Trophy } from 'lucide-react';
import tableimg from '../image/table-image.png'
import coinicon from '../image/icons/icon-1.png'

const winners = [
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

export default function WinnersSection() {
  return (
    <section className="bg-[#050d19] py-20" id='winners'>
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-[linear-gradient(-41deg,rgb(42,35,78)_0%,rgb(5,12,17)_100%)] border-[1px] border-[#d540f3] overflow-hidden">
          <h2 className="text-2xl md:text-3xl border-b border-[#d540f3] text-white orbitron-medium p-6 px-12">
            Winners Circle
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#03060a]">
                  <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Game</th>
                  <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Event</th>
                  <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">User Name</th>
                  <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Rank</th>
                  <th className="py-4 px-12 text-left century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Winnings</th>
                  <th className="py-4 px-12 text-right century-gothic-bold text-[#adb0bc] uppercase text-sm md:text-xl">Time</th>
                </tr>
              </thead>
              <tbody>
                {winners.map((winner) => (
                  <tr
                    key={winner.id}
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
                        <span className="text-[#e4e4e4] text-base barlow-semibold">{winner.game}</span>
                      </div>
                    </td>
                    <td className="py-4 px-12 text-[#8a8787] barlow-bold text-base">{winner.event}</td>
                    <td className="py-4 px-12 text-white barlow-bold text-base">{winner.username}</td>
                    <td className="py-4 px-12">
                      <span className="text-[#089ecf] barlow-black text-lg md:text-xl">{winner.rank}</span>
                    </td>
                    <td className="py-4 px-12">
  <div className="flex items-center gap-2">
    {/* Custom SVG as an image */}
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

                    <td className="py-4 px-12 text-[#089ecf] text-base barlow-bold text-right">{winner.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}