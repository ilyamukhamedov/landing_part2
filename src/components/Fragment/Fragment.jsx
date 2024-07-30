import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Fragment.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { fragmentDesktop, fragmentMobile } from "../../utils/constants";

const Fragments = ({ handleOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const isMobile = windowWidth <= 1150;
  const stretch = isMobile ? 90 : 400;

  return (
    <div className="fragment">
      <div className="fragment__container">
        <h1 className="fragment__title">ФРАГМЕНТЫ</h1>
        <Swiper
          effect={"coverflow"}
          speed={600}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 2,
            stretch: stretch,
            depth: 30,
            modifier: 1,
            slideShadows: false,
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
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="fragment__swiper"
        >
          {isMobile
            ? fragmentMobile.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    className="fragment__image-mobile"
                    src={item.image}
                    alt={item.alt}
                    onClick={() => handleOpen(item.image)}
                  />
                </SwiperSlide>
              ))
            : fragmentDesktop.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    className="fragment__image-desktop"
                    src={item.image}
                    alt={item.alt}
                    onClick={() => handleOpen(item.image)}
                  />
                </SwiperSlide>
              ))}
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

export default Fragments;
