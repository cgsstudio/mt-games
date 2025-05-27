import React from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerDisplayProps {
  timeLeft: TimeLeft;
  className?: string;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft, className }) => {
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="grid grid-cols-7 p-1 bg-[#050d19] overflow-hidden rounded-[5px]">
      <div className="col-span-3 flex items-center">
        <span className="uppercase text-[#f4e6c1] pl-4 text-lg barlow-condensed-semibold">
          CONTEST ENDS:
        </span>
      </div>
      <div className={`col-span-4 p-1 flex items-center justify-center rounded-[4px] ${className}`}>
        <div className="flex justify-center w-full text-center">
          {[
            { value: timeLeft.days, label: 'DAYS' },
            { value: timeLeft.hours, label: 'HRS' },
            { value: timeLeft.minutes, label: 'MIN' },
            { value: timeLeft.seconds, label: 'SEC' }
          ].map((item, index) => (
            <div key={item.label} className="px-1 bg-[#702121]">
              <div className="text-[25px] leading-none digital-7-mono">
                {formatNumber(item.value)}{index < 3 ? ':' : ''}
              </div>
              <div className="text-[#f4e6c1] text-base leading-none uppercase digital-7-mono">
                {item.label}:
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
