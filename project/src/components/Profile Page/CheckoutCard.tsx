import React, { useState } from 'react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import contestarrow from '../../image/icons/contest-arrow.svg';
import UserProfileMobile from '../../components/UserProfileMobile';
import icon1 from '../../image/icons/icon-1.png';

const CheckoutCard: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  const handleExpDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setExpDate(value);
    } else {
      setExpDate(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCvv(value);
  };

  return (
    <div className="w-full bg-[#000000] text-white py-10 md:py-16 mb-6 relative">
      {/* Shape Divider */}
      <div className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
      </div>

      {/* Header */}
      <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
        <div className='block md:hidden mt-4 px-6'>
          <UserProfileMobile />
        </div>
        <div className="border-b-[2px] border-[#d540f3]  md:px-0 pt-3 pb-2 md:pt-8 md:pb-4 mx-4 md:mx-0">
          <div className="flex items-center gap-3">
          <img 
              src={contestarrow} 
              alt="contestarrow" 
              className="cursor-pointer" 
              onClick={() => window.history.back()}
            />
            <h1 className="font-mono orbitron-medium tracking-wider text-[25px] md:text-[33px]">CHECKOUT</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto py-6 md:py-20 px-4">

        {/* Purple line - matching the border-[#d540f3] from your component */}
        {/* <div className="h-px bg-[#d540f3] w-full mb-6"></div> */}

        {/* Credits and Amount */}
        <div className="grid grid-cols-[1fr_1.5fr] mb-12 bg-[#161f29] p-[5px] rounded-[12px]">
          <div className="flex items-center pl-4">
            {/* <div className="bg-yellow-500 rounded-full h-4 w-4 mr-2"></div> */}
            <img src={icon1} alt="Gold icon" className="w-8 h-8 mr-2" />
            <span className="text-[23px] md:text-[25px] leading-none orbitron-semibold">1,200</span>
          </div>
          <div className="bg-[#283643] p-4 text-center rounded-[2px] md:rounded-[6px]">
            <span className="text-[#ff0000] text-[27px] md:text-[29px] leading-none orbitron-semibold">$100</span>
          </div>
        </div>




        {/* Credit Card Form */}
        <div className="space-y-8">
          <div className="space-y-2">

            <div>
              <label className="pl-2 block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">
                Credit Card Number
              </label>
              <input
                type="text"
                className="w-full p-4 bg-[#050d19] rounded-[5px] barlow-semibold text-[#758695] text-[20px] leading-none placeholder:text-[#283643] placeholder:barlow-semibold  border-[2px] border-[#161f29] focus:outline-none focus:border-[#d540f3]"
                placeholder="**** **** **** ****"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="pl-2 block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">
                  Exp. Date
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-[#050d19] rounded-[5px] barlow-semibold text-[#758695] text-[20px] leading-none placeholder:text-[#283643] placeholder:barlow-semibold flex items-center border-[2px] border-[#161f29] focus:outline-none focus:border-[#d540f3]"
                  placeholder="MM/YY"
                  value={expDate}
                  onChange={handleExpDateChange}
                  maxLength={5}
                />
              </div>
              <div className="flex-1">
                <label className="pl-2 block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">
                  CVV
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-[#050d19] rounded-[5px] barlow-semibold text-[#758695] text-[20px] leading-none placeholder:text-[#283643] placeholder:barlow-semibold flex items-center border-[2px] border-[#161f29] focus:outline-none focus:border-[#d540f3]"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="***"
                  maxLength={3}
                />
              </div>
            </div>

          </div>


          {/* Notice */}
          <div className="border-[2px] border-[#161f29] px-3 py-5 rounded-[6px] text-center text-xl  leading-[1.2] text-[#758695] barlow-condensed-regular">
            <p >This transaction is non-refundable.</p>
            <p>All Credits must be assigned before they can be withdrawn.</p>
          </div>

          {/* Submit Button - matching the blue color from your component */}
          <button className="w-full bg-[#194272] border-[2px] border-[#38638b] text-xl text-white py-5 rounded-[0px] md:rounded-[6px] uppercase  barlow-bold">
            Submit Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
