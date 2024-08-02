import React from "react";
import "./News.css";
import news1 from "../../images/news_1.webp";
import news2 from "../../images/news_2.webp";
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
          spaceBetween={115}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            // 1125: {
            //   slidesPerView: 2,
            // },
          }}
          navigation={true}
        >
          <SwiperSlide>
            <img
              className="news__image"
              src={news1}
              alt="information about the events"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="news__image"
              src={news2}
              alt="information about the events"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
