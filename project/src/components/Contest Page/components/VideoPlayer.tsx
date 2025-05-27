import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import play from '../../../image/icons/videoplay.svg';

interface Slide {
  type: 'video' | 'image';
  url: string;
  thumbnail?: string;
}

interface VideoPlayerProps {
  slides: Slide[];
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="contest-video-container rounded-xl overflow-hidden">
      <div className="px-3 pt-3">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="w-full"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setPlaying(false);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <div className="relative aspect-video" role="region" aria-label={`Slide ${index + 1}`}>
                {slide.type === 'video' ? (
                  <>
                    <video
                      ref={videoRef}
                      src={slide.url}
                      poster={slide.thumbnail}
                      className="w-full h-full object-cover rounded-md border-2 border-[#283643]"
                      onEnded={() => setPlaying(false)}
                      aria-label="Contest video"
                    />
                    {!playing && (
                      <button 
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={handlePlayVideo}
                        aria-label="Play video"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform">
                          <img src={play} alt="Play button" className="w-full h-full" />
                        </div>
                      </button>
                    )}
                  </>
                ) : (
                  <img 
                    src={slide.url} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-md border-2 border-[#283643]"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-3 bg-[#161f29]">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="thumbs-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`thumb-${index}`}>
              <button 
                className={`w-full h-full rounded-lg overflow-hidden cursor-pointer border-2 
                  ${activeIndex === index ? 'border-purple-800' : 'border-gray-700'}`}
                aria-label={`View slide ${index + 1}`}
              >
                <img
                  src={slide.type === 'video' ? slide.thumbnail : slide.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-[70px] md:h-[110px] lg:h-[130px] object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
