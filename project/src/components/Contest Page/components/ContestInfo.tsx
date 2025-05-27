import React from 'react';
import icon1 from '../../../image/icons/icon-1.png';

interface ContestInfoProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const StatusBox: React.FC<StatusBoxProps> = ({ label, content, contentClass }) => (
  <div className="grid grid-cols-7 p-1 contest-status-box">
    <div className="col-span-3 pl-4 flex items-center">
      <h3 className="uppercase text-[#f4e6c1] text-xl barlow-condensed-semibold">
        {label}
      </h3>
    </div>
    <div className={`col-span-4 ${contentClass} p-2 flex items-center justify-center rounded-md`}>
      {content}
    </div>
  </div>
);

export const ContestInfo: React.FC<ContestInfoProps> = ({ timeLeft }) => {
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="space-y-4">
      <StatusBox
        label="CONTEST STARTS:"
        content={<h2 className="contest-status-live-text barlow-bold text-2xl md:text-3xl">NOW LIVE</h2>}
        contentClass="contest-status-live"
      />

      <StatusBox
        label="CONTEST ENDS:"
        content={
          <div className="flex flex-col w-full text-center">
            <h2 className="text-3xl leading-none digital-7-mono">
              {`${formatNumber(timeLeft.days)}:${formatNumber(timeLeft.hours)}:${formatNumber(timeLeft.minutes)}:${formatNumber(timeLeft.seconds)}`}
            </h2>
            <div className="flex justify-center gap-2 md:gap-3">
              {['DAYS:', 'HRS:', 'MIN:', 'SEC'].map((label) => (
                <p key={label} className="px-1 text-lg text-[#f4e6c1] leading-none uppercase digital-7-mono">
                  {label}
                </p>
              ))}
            </div>
          </div>
        }
        contentClass="contest-timer-box"
      />

      <StatusBox
        label="ENTRY FEE:"
        content={
          <div className="flex items-center">
            <img src={icon1} alt="Gold icon" className="w-7 h-7 md:w-8 md:h-8 mr-2" />
            <h3 className="text-3xl md:text-4xl orbitron-medium">10,000</h3>
          </div>
        }
        contentClass="contest-info-box"
      />

      <StatusBox
        label="CURRENT POT SIZE:"
        content={
          <div className="flex items-center">
            <img src={icon1} alt="Gold icon" className="w-6 h-6 md:w-7 md:h-7 mr-2" />
            <h3 className="text-2xl md:text-3xl orbitron-medium text-[#00ff18]">10,000</h3>
          </div>
        }
        contentClass="contest-info-box"
      />
    </div>
  );
};

interface StatusBoxProps {
  label: string;
  content: React.ReactNode;
  contentClass: string;
}
