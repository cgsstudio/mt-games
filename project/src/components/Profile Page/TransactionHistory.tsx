import { useState } from 'react';
import { TYPOGRAPHY } from '../../constants/typography';
import { Transaction } from '../../types/transaction';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import UserProfileMobile from '../UserProfileMobile';
import tableimg from '../../image/table-image.png';
import icon1 from '../../image/icons/icon-1.png';

const TABS = {
  ALL: 'all',
  DEPOSITS: 'deposits',
  CONTESTS: 'contests'
} as const;

const TableHeader = () => (
  <div className="bg-[#161f29] grid grid-cols-5 py-4 px-6 rounded-[6px] mb-6 md:mb-8">
    {['DATE', 'EVENT', 'STATUS', '$', '+/-'].map(header => (
      <div key={header} className={TYPOGRAPHY.TABLE_HEADER}>{header}</div>
    ))}
  </div>
);

const TransactionRow = ({ transaction }: { transaction: Transaction }) => {
  const isDepositOrWithdrawal = transaction.event === 'DEPOSIT' || transaction.event === 'WITHDRAWAL';
  const rowClass = isDepositOrWithdrawal ? 'transaction-row-deposit' : 'transaction-row-contest';

  const statusClass = 
    transaction.status === 'Failed' ? 'transaction-status-failed' :
    transaction.status === 'Pending' ? 'transaction-status-pending' :
    'transaction-status-complete';

  const coinsClass = 
    transaction.status === 'Failed' || transaction.status === 'Pending' ? 'transaction-coins-failed' :
    transaction.change === '-' ? 'transaction-coins-negative' :
    transaction.change === '+' ? 'transaction-coins-positive' :
    'transaction-coins-neutral';

  return (
    <div className={`grid grid-cols-5 items-center py-4 px-6 rounded-[6px] ${rowClass}`}>
      <div className={TYPOGRAPHY.TABLE_DATE}>{transaction.date}</div>
      <div className="flex items-center justify-center md:justify-start gap-4">
        {transaction.profileImg && (
          <img
            src={transaction.profileImg}
            alt="game"
            className="w-6 h-6 rounded-lg bg-purple-500/20 transaction-game-image"
          />
        )}
        <span className={TYPOGRAPHY.TABLE_EVENT}>{transaction.event}</span>
      </div>
      <div className={`flex items-center md:items-start justify-center md:justify-start ${TYPOGRAPHY.TABLE_STATUS} ${statusClass}`}>
        {transaction.status}
      </div>
      <div className={`flex items-center md:items-start justify-center md:justify-start ${TYPOGRAPHY.TABLE_AMOUNT}`}>
        {transaction.amount}
      </div>
      <div className="flex items-center justify-end">
        {transaction.change && (
          <span className={`${transaction.change === '+' ? 'text-green-500' : 'text-red-500'} mr-2 ${TYPOGRAPHY.CHANGE_INDICATOR} hidden md:block`}>
            {transaction.change}
          </span>
        )}
        <div className="flex gap-1 md:gap-3 items-center">
          <img src={icon1} alt="coin" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          <span className={`${TYPOGRAPHY.COINS_VALUE} ${coinsClass}`}>
            {transaction.coins.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function TransactionHistory() {
  const [activeTab, setActiveTab] = useState<keyof typeof TABS>(TABS.ALL);

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
    switch (activeTab) {
      case TABS.DEPOSITS:
        return depositsWithdrawals;
      case TABS.CONTESTS:
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

      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto">
        <div className="block md:hidden mt-4 px-6">
          <UserProfileMobile />
        </div>

        {/* Header */}
        <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
          <h1 className={TYPOGRAPHY.PAGE_TITLE}>Transaction History</h1>
        </div>

        {/* Content */}
        <div className="py-4">
          {/* Navigation Tabs */}
          <div className="flex justify-center md:justify-start pb-2 opacity-[45%]">
            {Object.entries({
              [TABS.ALL]: 'All Transactions',
              [TABS.DEPOSITS]: 'Deposits & Withdrawals',
              [TABS.CONTESTS]: 'Contests'
            }).map(([tab, label], index, arr) => (
              <>
                <button
                  key={tab}
                  className={`mr-4 ${TYPOGRAPHY.TAB_TEXT} ${activeTab === tab ? 'text-[#2a8fbc]' : 'text-[#adb0bc]'}`}
                  onClick={() => setActiveTab(tab as keyof typeof TABS)}
                >
                  {label}
                </button>
                {index < arr.length - 1 && <div className="text-[#adb0bc] mr-4">|</div>}
              </>
            ))}
          </div>

          {/* Transaction Table */}
          <div className="rounded overflow-hidden space-y-4 mt-8 md:mt-10 px-2 md:px-0">
            <TableHeader />
            <div className="space-y-4">
              {displayTransactions.map(transaction => (
                <TransactionRow key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}