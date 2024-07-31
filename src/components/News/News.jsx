import React from "react";
import "./News.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {
  return (
    <div className="news">
      <div className="news__container">
        <h1 className="news__title">НОВОСТИ & МЕРОПРИЯТИЯ</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          grabCursor={true}
          spaceBetween={120}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1125: {
              slidesPerView: 2,
            },
          }}
          navigation={true}
        >
          <SwiperSlide className="news__swiper">
            <div className="news__block"></div>
          </SwiperSlide>
          <SwiperSlide className="news__swiper">
            <div className="news__block"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
