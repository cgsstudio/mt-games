import React from 'react';

interface StatusBoxProps {
  label: string;
  icon: string;
  value: number;
  className?: string;
}

export const StatusBox: React.FC<StatusBoxProps> = ({ label, icon, value, className }) => (
  <div className="grid grid-cols-7 p-1 bg-[#050d19] overflow-hidden rounded-[5px]">
    <div className="col-span-3 flex items-center">
      <span className="uppercase text-[#f4e6c1] pl-4 text-lg barlow-condensed-semibold">
        {label}:
      </span>
    </div>
    <div className={`col-span-4 p-2 flex items-center justify-center rounded-[4px] ${className}`}>
      <div className="flex items-center">
        <img src={icon} alt="" className="w-5 h-5 mr-2" aria-hidden="true" />
        <span className="text-xl md:text-[25px] lg:text-[30px] orbitron-medium leading-none">
          {value.toLocaleString()}
        </span>
      </div>
    </div>
  </div>
);
