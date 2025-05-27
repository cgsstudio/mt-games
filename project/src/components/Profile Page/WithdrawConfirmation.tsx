import React from 'react';
import { useNavigate } from 'react-router-dom';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import UserProfileMobile from '../../components/UserProfileMobile';

// Styled components constants
const styles = {
  container: "w-full bg-[#000000] h-screen text-white py-10 md:py-16 relative",
  header: {
    wrapper: "2xl:max-w-6xl xl:max-w-5xl mx-auto",
    border: "border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4",
    title: "font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]"
  },
  content: {
    wrapper: "2xl:max-w-6xl xl:max-w-5xl mx-auto py-0 md:py-4 px-4 md:px-0",
    container: "flex flex-col w-full mt-0 md:mt-6",
    messageBox: "border-[2px] border-[#161f29] rounded-[4px] md:rounded-[7px] text-center py-4 md:py-6 px-4 mb-6 mt-6 md:mt-0",
    messageText: "text-[#758695] text-[25px] leading-[33px] barlow-condensed-regular"
  }
};

interface WithdrawConfirmationProps {}

const WithdrawConfirmation: React.FC<WithdrawConfirmationProps> = () => {
  const navigate = useNavigate();

  const ShapeDivider = () => (
    <div className="absolute top-0 md:-top-10 left-0 w-full">
      <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
      <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
    </div>
  );

  const Header = () => (
    <div className={styles.header.wrapper}>
      <div className='block md:hidden mt-4 px-6'>
        <UserProfileMobile />
      </div>
      <div className={styles.header.border}>
        <div className="flex items-center gap-3">
          <h1 className={styles.header.title}>WITHDRAWAL CONFIRMATION</h1>
        </div>
      </div>
    </div>
  );

  const ConfirmationMessage = () => (
    <div className="flex flex-col max-w-2xl mx-auto w-full">
      <div className={styles.content.messageBox}>
        <p className={styles.content.messageText}>
          Withdrawal Submission Confirmed.
        </p>
        <p className={styles.content.messageText}>
          Please allow up to 72 hours for deposit to appear in your account.
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <ShapeDivider />
      <Header />
      
      <div className={styles.content.wrapper}>
        <div className={styles.content.container}>
          <ConfirmationMessage />
        </div>
      </div>
    </div>
  );
};

export default WithdrawConfirmation;
