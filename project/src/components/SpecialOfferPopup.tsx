import React from 'react';

// Asset imports
import popupbg from '../image/icons/spacialofferbg.png';
import glowingline from "../image/icons/glowing-line.svg";
import signup01 from '../image/icons/sign-up-ar-1.svg';
import signup02 from '../image/icons/sign-up-ar-2.svg';
import icon1 from '../image/icons/icon-1.png';

interface SpecialOfferPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const SpecialOfferPopup: React.FC<SpecialOfferPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
            <div
                className="relative w-full h-full lg:max-h-[90vh] 2xl:max-h-[70vh] max-w-5xl rounded-[12px] overflow-hidden p-[2px] mx-4 md:mx-0"
                style={{
                    background: 'linear-gradient(to bottom, #0560fa, #d93ef9)',
                    borderRadius: '12px'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute orbitron-light text-[37px] right-2 -top-3 text-[#758695] hover:text-white rotate-45 z-30"
                    aria-label="Close popup"
                >
                    +
                </button>

                <div className="w-full h-full rounded-[10px] relative z-20 overflow-hidden"
                    style={{
                        background: 'linear-gradient(-41deg, rgb(42, 35, 78) 0%, rgb(5, 12, 17) 100%)'
                    }}>
                    <div
                        className="absolute z-10 inset-0"
                        style={{
                            backgroundImage: `url(${popupbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />

                    <div className="relative z-10 px-4 md:px-6 pt-3 pb-3 md:pt-10 md:pb-6 flex flex-col justify-between h-full">
                        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                            <section className="flex flex-col items-start space-y-2 py-0 px-0 md:py-4 md:px-4">
                                <header className="relative flex flex-col items-center justify-center h-full">
                                    <h2 className="text-[33px] leading-none text-center barlow-black text-[#ffefc9]">
                                        TODAY'S DEAL
                                    </h2>
                                    <img src={glowingline} alt="decorative line" className="w-full" />
                                    
                                    <div className="text-center flex flex-col gap-2 mb-3 px-2 pb-2 md:px-4 md:pb-4 w-full">
                                        <div className="offer-button px-3 py-1 rounded-[12px]">
                                            <h3 className="cygun-bold text-[42px] leading-none">20% discount</h3>
                                        </div>
                                        
                                        <div className="offer-button px-3 py-2 rounded-[12px]">
                                            <div className="text-center">
                                                <p className="cygun-bold text-[58px] leading-[50px] flex items-center justify-center gap-2">
                                                    <img src={icon1} alt="coin" className="w-[50px] h-[50px]" />
                                                    25,000
                                                </p>
                                                <p className="cygun-bold text-[58px] leading-[50px]">FOR $20</p>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                            </section>
                        </div>

                        <footer className="p-4 flex justify-center">
                            <div className="w-[400px] h-[75px] p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9] mt-4">
                                <button
                                    onClick={onClose}
                                    className="w-full bg-gradient-to-b h-[73px] px-6 from-[#0d0917] to-[#3f1261] hover:from-[#0f0b1d] hover:to-[#4f167b] rounded-[10px] text-center barlow-black text-[24px] md:text-[29px] leading-none uppercase flex items-center justify-between"
                                >
                                    <img src={signup02} alt="" className="md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                                    redeem NOW
                                    <img src={signup01} alt="" className="md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOfferPopup;
