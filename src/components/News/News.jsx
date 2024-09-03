import React, { useState } from "react";
import "./News.css";
import sep12 from "../../images/sep12.webp";
import news1 from "../../images/news_1.webp";
import news2 from "../../images/news_2.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const isMobile = windowWidth <= 1150;
  return (
    <div className="news">
      <div className="news__container">
        <h1 className="news__title">НОВОСТИ & МЕРОПРИЯТИЯ</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          grabCursor={true}
          spaceBetween={110}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            bulletActiveClass: "swiper-pagination-bullet-active1",
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper__button-next",
            prevEl: ".swiper__button-prev",
            clickable: true,
          }}
          className="fragment__swiper"
        >
          <SwiperSlide>
            <a
              className="news__link"
              href="https://zstrela.ru/directions/studies/programs/tvorcheskaya-vstrecha-s-nataley-borisovoy-prezentaciya-novoy-knigi-nb#record-p"
              target="_blank"
            >
              <img
                className="news__image"
                src={sep12}
                alt="information about the events"
              />
            </a>
          </SwiperSlide>
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
          <div
            className={`slider__controller ${
              isMobile ? "slider__controller-mobile" : ""
            }`}
          >
            <div className="swiper__button swiper__button-prev">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="swiper-pagination">
              <div className="swiper-pagination-bullet swiper-pagination-bullet-active"></div>
            </div>
            <div className="swiper__button swiper__button-next">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
