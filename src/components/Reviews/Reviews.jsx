import React from "react";
import "./Reviews.css";
import { reviewsData } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <div className="reviews" id="reviews">
      <section className="reviews__container">
        <h1 className="reviews__title">РЕЦЕНЗИИ И ОТЗЫВЫ</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          grabCursor={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1125: {
              slidesPerView: 3,
            },
          }}
          navigation={true}
          className=" swiper-wrapper"
        >
          {reviewsData
            .slice(0)
            .reverse()
            .map((review) => (
              <SwiperSlide
                className="swiper-slide "
                style={{
                  display: "grid",
                  height: "auto",
                }}
                key={review.id}
              >
                {review.photo ? (
                  <div className="card__block">
                    <img
                      className="card__image"
                      src={review.photo}
                      alt={review.name}
                    />
                  </div>
                ) : (
                  <div className="card__data">
                    <h2 className="card__name">{review.name}</h2>
                    <span className="card__position">{review.position}</span>
                    <p className="card__description">{review.description}</p>
                  </div>
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Reviews;
