import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SimpleSwiper = ({ items, slidesPerView, breakpoints }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={24}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      loop
      breakpoints={breakpoints}
    >
      {items.map(item => {
        return (
          <SwiperSlide key={item.url}>
            <a href={item.url} target="_blank">
              <Image src={item.img} placeholder="blur" layout="responsive" alt="" />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SimpleSwiper;
