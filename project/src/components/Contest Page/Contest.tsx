import React, { useState } from 'react';
import { ChevronLeft, Play, ChevronDoubleLeft, ChevronDoubleRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import videobanner from '../../image/videobanner1.png';
import videobanner2 from '../../image/secondthumb.png';
import videobanner3 from '../../image/videobanner3.png';
import contestlogo from '../../image/contest-LOGO.svg';
import contestarrow from '../../image/icons/contest-arrow.svg'
import icon1 from '../../image/icons/icon-1.png';
import bgimage from '../../image/contest-bg.png'
import signup01 from '../../image/icons/sign-up-ar-1.svg';
import signup02 from '../../image/icons/sign-up-ar-2.svg';
import shapedivider from '../../image/icons/BG-55.svg'
import mobileshapedivider from '../../image/icons/BG-contest.svg'
import UserProfileMobile from '../../components/UserProfileMobile'


export default function ContestDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  // Create arrays for slide images and thumbnail images
  const slideImages = [
    videobanner,
    videobanner2,
    videobanner3,
   
  ];
  
  const thumbnailImages = [
    videobanner,
    videobanner2,
    videobanner3,   
  ];

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
                <UserProfileMobile  />
          </div>
        <div className="border-b-[2px] border-[#d540f3]  md:px-0 py-4 md:py-8 mx-4 ">
          <div className="flex items-center gap-3">
            <img src={contestarrow} alt="contestarrow"  />
            <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">CONTEST DETAILS</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto p-4">
        {/* Logo */}
        <div className="flex justify-center my-6 mx-w-full md:max-w-3xl">
          <img 
            src={contestlogo} 
            alt="Rebel Speedrun Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Main Content - 2 Column Grid with Custom Widths */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12 ">
          {/* Left Column - Wider (3/5) */}
          <div className="md:col-span-3 space-y-6">
            {/* Video Player Container */}
            <div className="rounded-[12px] overflow-hidden bg-[#161f29]">
              {/* Main Video Swiper */}
              <div className="px-3 pt-3">
                <Swiper
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs]}
                  className="w-full"
                >
                  {slideImages.map((image, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                      <div className="relative aspect-video">
                        <img 
                          src={image} 
                          alt={`Slide ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/40 p-4 flex items-center justify-center cursor-pointer">
                            <Play size={42} className="text-white fill-red-500" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Thumbnails Row */}
              <div className="p-3 bg-[#161f29]">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={8}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                  className="thumbs-swiper"
                >
                  {thumbnailImages.map((thumbnail, index) => (
                    <SwiperSlide key={`thumb-${index}`}>
                      <div className="rounded-[4px] md:rounded-lg overflow-hidden border border-purple-800 cursor-pointer h-[70px]  md:h-[110px] lg:h-[130px]">
                        <img 
                          src={thumbnail} 
                          alt={`Thumbnail ${index + 1}`} 
                          className="w-full h-full object-cover aspect-video"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Description */}
            <div className="barlow-medium text-[#fcfcfc] text-lg leading-none px-0 md:px-12">
              <p className="mb-4">
              Nobody walks away from the Spartan Arena! The only way to enter the MetaTope is to race through an underground tunnel on a stolen hoverbike. 
              </p>
              <p>
              Crash and burn or escape to freedom? The choice is up to you and your skills behind the wheel. The battle has just begun!
              </p>
            </div>
          </div>

          {/* Right Column - Narrower (2/5) */}
          <div className="md:col-span-2 space-y-4  w-[85%] lg:w-[80%] xl:w-full mx-auto">
            {/* Contest Status - EXACTLY MATCHING THE IMAGE */}
            <div className="grid grid-cols-7 p-2 bg-[#161f29] overflow-hidden rounded-[5px]">
              <div className="col-span-3 pl-4  flex items-center">
                <span className="uppercase text-[#f4e6c1] text-lg barlow-condensed-semibold">CONTEST STARTS:</span>
              </div>
              <div className="col-span-4 bg-[#005952] p-3 flex items-center rounded-[4px] justify-center">
                <span className=" text-[#00ff18] barlow-bold  uppercase text-xl ">NOW LIVE</span>
              </div>
            </div>

            {/* Contest Timer - EXACTLY MATCHING THE IMAGE */}
            <div className="grid grid-cols-7 p-2 bg-[#161f29] overflow-hidden rounded-[5px]">
              <div className="col-span-3   flex items-center">
                <span className="uppercase text-[#f4e6c1] pl-4 text-lg barlow-condensed-semibold">CONTEST ENDS:</span>
              </div>
              <div className="col-span-4 bg-[#702121] p-2 flex items-center justify-center rounded-[4px]">
                <div className="grid grid-cols-4 w-full text-center">
                  <div className="px-1">
                    <div className="text-[25px] leading-none digital-7-mono">02</div>
                    <div className="text-base leading-none uppercase digital-7-mono">DAYS</div>
                  </div>
                  <div className="px-1">
                    <div className="text-[25px] leading-none digital-7-mono">03</div>
                    <div className="text-base leading-none uppercase digital-7-mono">HRS</div>
                  </div>
                  <div className="px-1">
                    <div className="text-[25px] leading-none digital-7-mono">24</div>
                    <div className="text-base leading-none uppercase digital-7-mono">MIN</div>
                  </div>
                  <div className="px-1">
                    <div className="text-[25px] leading-none digital-7-mono">19</div>
                    <div className="text-base leading-none uppercase digital-7-mono">SEC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Fee - EXACTLY MATCHING THE IMAGE */}
            <div className="grid grid-cols-7 p-2 bg-[#161f29] overflow-hidden rounded-[5px]">
              <div className="col-span-3   flex items-center">
                <span className="uppercase pl-4 text-[#f4e6c1] text-lg barlow-condensed-semibold">ENTRY FEE:</span>
              </div>
              <div className="col-span-4 bg-[#283643] p-3 flex items-center rounded-[4px] justify-center ">
                <div className="flex items-center">
                    <img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" />
                  {/* <span className="text-yellow-500 mr-2">●</span> */}
                  <span className="text-xl md:text-[25px] lg:text-[30px] orbitron-medium leading-none ">10,000</span>
                </div>
              </div>
            </div>

            {/* Pot Size - EXACTLY MATCHING THE IMAGE */}
            <div className="grid grid-cols-7 p-2 bg-[#161f29] overflow-hidden rounded-[5px]">
              <div className="col-span-3   flex items-center">
                <span className="uppercase pl-4 text-[#f4e6c1] text-lg barlow-condensed-semibold">Current Pot size:</span>
              </div>
              <div className="col-span-4 bg-[#283643] p-3 flex items-center rounded-[4px] justify-center ">
                <div className="flex items-center">
                    <img src={icon1} alt="Gold icon" className="w-5 h-5 mr-2" />
                  {/* <span className="text-yellow-500 mr-2">●</span> */}
                  <span className="text-xl md:text-[23px] orbitron-medium leading-none text-[#00ff18] ">10,000</span>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="p-6 rounded-[15px] border-[2px] border-[#161f29] text-lg text-[#758695] mt-6 bg-[#000000]"  >
              <ul className="space-y-1 barlow-condensed-regular">
                <li>• Limit 1 entry per person.</li>
                <li>• Each entry is worth 3 attempts.</li>
                <li>• Pot size is based on the amount of players entered.</li>
                <li>• Only your best attemp will be counted.</li>
                <li>• Competition ends at 11:59:59 EST 04/30/25.</li>
                <li>• Any attempts not played by close of competition will be forfeited.</li>
                <li>• Top 10 players will be awarded upon close of competition.</li>
              </ul>
            </div>

            {/* Enter Button */}
            <div className="p-[1px] rounded-[10px] bg-gradient-to-b from-[#0560fa] to-[#d93ef9]">
  <button className="w-full  bg-gradient-to-b from-[#0d0917] to-[#3f1261] hover:from-[#0f0b1d] hover:to-[#4f167b] rounded-[10px] text-center barlow-black text-xl uppercase flex items-center justify-center gap-3">
    <img src={signup02} alt="Right Icon" className="w-12 h-12 md:w-16 md:h-16" />
    ENTER NOW!
    <img src={signup01} alt="Left Icon" className="w-12 h-12 md:w-16 md:h-16" />
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}