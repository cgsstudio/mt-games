import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    text: "Gameplay smooth like butter. Rebel Speedrun is my new favorite game no cap.",
    author: "CaptainZ"
  },
  // Add more reviews here
];

const PlayerReviews = () => {
  return (
    <div className="player-reviews">
      <h2 className="reviews-title">PLAYER REVIEWS</h2>
      
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="reviews-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-content">
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.author}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default PlayerReviews; 