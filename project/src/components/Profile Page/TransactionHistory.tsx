import { useState } from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import doublearrow from '../../image/icons/sign-up-ar-2.svg';
import UserProfileMobile from '../UserProfileMobile'
import tableimg from '../../image/table-image.png'
import icon1 from '../../image/icons/icon-1.png';

export default function TransactionHistory() {
    const [activeTab, setActiveTab] = useState('all');
  
    // Sample transaction data matching the image
    const allTransactions = [
      { id: 1, date: '04.03.25', event: '', profileImg: tableimg, status: 'Complete', amount: '—', change: '-', coins: 10000, color: 'text-blue-400' },
      { id: 2, date: '04.03.25', event: '', profileImg: tableimg, status: 'Complete', amount: '—', change: '+', coins: 10000, color: 'text-blue-400' },
      { id: 3, date: '04.03.25', event: 'WITHDRAWAL', profileImg: null, status: 'Failed', amount: '$1.00', change: '', coins: 10000, color: 'text-red-500' },
      { id: 4, date: '04.03.25', event: 'DEPOSIT', profileImg: null, status: 'Complete', amount: '$1.00', change: '+', coins: 10000, color: 'text-blue-400' },
      { id: 5, date: '04.03.25', event: '', profileImg: tableimg, status: 'Pending', amount: '—', change: '', coins: 10000, color: 'text-gray-400' },
      { id: 6, date: '04.03.25', event: 'DEPOSIT', profileImg: null, status: 'Complete', amount: '$1.00', change: '+', coins: 10000, color: 'text-blue-400' },
    ];
  
    const depositsWithdrawals = allTransactions.filter(t => 
      t.event === 'DEPOSIT' || t.event === 'WITHDRAWAL'
    );
  
    const contests = allTransactions.filter(t => 
      t.profileImg !== null
    );
  
    // Determine which transactions to display based on active tab
    const getDisplayTransactions = () => {
      switch(activeTab) {
        case 'deposits':
          return depositsWithdrawals;
        case 'contests':
          return contests;
        default:
          return allTransactions;
      }
    };
  
    const displayTransactions = getDisplayTransactions();

    return (
        <div className="w-full bg-[#000000] text-white py-10 md:py-16 relative">
            {/* Shape Divider */}
            <div className="absolute top-0 md:-top-10 left-0 w-full">
                <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
                <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
            </div>

            {/* Header */}
            <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
                <div className='block md:hidden mt-4'>
                    <UserProfileMobile />
                </div>


                <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 py-3 md:py-8 ">
                    <div className="flex items-center gap-3">
                        {/* <img src={contestarrow} alt="contestarrow"  /> */}
                        <h1 className="uppercase font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">Transaction History</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto py-4">
            <div className="bg-black text-white min-h-screen">
      {/* Navigation Tabs with divider */}
      <div className="flex barlow-condensed-bold justify-center md:justify-start text-base md:text-xl mb-6  pb-2 opacity-[45%]">
        <button 
          className={`mr-4 uppercase ${activeTab === 'all' ? 'text-[#2a8fbc] barlow-condensed-bold text-base md:text-xl' : 'text-[#adb0bc]'}`}
          onClick={() => setActiveTab('all')}
        >
          All Transactions
        </button>
        <div className="text-[#adb0bc] mr-4">|</div>
        <button 
          className={`mr-4 uppercase ${activeTab === 'deposits' ? 'text-[#2a8fbc] barlow-condensed-bold text-base md:text-xl' : 'text-[#adb0bc]'}`}
          onClick={() => setActiveTab('deposits')}
        >
          Deposits & Withdrawals
        </button>
        <div className="text-[#adb0bc] mr-4">|</div>
        <button 
          className={`uppercase ${activeTab === 'contests' ? 'text-[#2a8fbc] barlow-condensed-bold text-base md:text-xl' : 'text-[#adb0bc]'}`}
          onClick={() => setActiveTab('contests')}
        >
          Contests
        </button>
      </div>

      {/* Transaction Table */}
      <div className="rounded overflow-hidden space-y-4 px-2 md:px-0">
        {/* Table Header */}
        <div className="bg-[#161f29] barlow-condensed-bold text-lg md:text-xl  grid grid-cols-5 py-4 px-6  text-[#adb0bc] rounded-[6px] my-6">
          <div>DATE</div>
          <div>EVENT</div>
          <div>STATUS</div>
          <div>$</div>
          <div>+/-</div>
        </div>

        {/* Table Body */}
        <div className=" space-y-4 ">
          {displayTransactions.map((transaction) => {
            // Determine background color based on transaction type
            const bgColor = transaction.event === 'DEPOSIT' || transaction.event === 'WITHDRAWAL' 
              ? 'linear-gradient( 180deg, 	#1a051f 0%, #330b3d 100%)' 
              : 'linear-gradient( 180deg, 	rgb(3, 8, 16) 0%, rgb(7, 18, 33) 100%)';
              
            return (
              <div key={transaction.id} className={`grid grid-cols-5 itmes-center  py-4 px-6 rounded-[6px] `} style={{ background: bgColor }}>
                <div className="text-[#ffdfcd] barlow-semibold text-[12px] md:text-base">{transaction.date}</div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {transaction.profileImg && (
                    <img
                      src={transaction.profileImg}
                      alt="game"
                      className=" w-5 h-5 rounded-lg bg-purple-500/20"
                      style={{ transform: "scale(2.0)" }}
                    />
                  )}
                  <span className="uppercase text-[#ffdfcd] barlow-bold text-[12px] md:text-base">{transaction.event}</span>
                </div>
                <div className={`flex items-center md:items-start justify-center md:justify-start barlow-bold text-[12px] md:text-base ${transaction.status === 'Failed' ? 'text-[#ff0000]' : (transaction.status === 'Pending' ? 'text-[#404040]' : 'text-[#2a8fbc]')}`}>
                  {transaction.status}
                </div>
                <div className="flex items-center md:items-start justify-center md:justify-start barlow-bold text-[14px] md:text-base text-[#ffeccd]">{transaction.amount}</div>
                <div className="flex items-center">
                  {transaction.change && (
                    <span className={transaction.change === '+' ? 'text-green-500 mr-2' : 'text-red-500 mr-2'}>
                      {transaction.change}
                    </span>
                  )}
                  <div className="flex gap-1 md:gap-3 items-center">
                    <img src={icon1} alt="coin" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
                    <span className={`barlow-bold text-base md:text-xl ${
                      transaction.status === 'Failed' || transaction.status === 'Pending' 
                        ? 'text-[#404040]' 
                        : transaction.change === '-' 
                          ? 'text-[#ff0000]' 
                          : transaction.change === '+' 
                            ? 'text-[#00ff06]' 
                            : 'text-[#ff8000]'
                    }`}>{transaction.coins.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>



            </div>
        </div>
    );
}