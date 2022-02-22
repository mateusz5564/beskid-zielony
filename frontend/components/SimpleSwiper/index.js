import Image from "next/image";
import { Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import S from "./Styled";
import "swiper/css";

const SimpleSlider = ({ images, slidesPerView, breakpoints }) => {
  return (
    <S.StyledSwiper
      modules={[Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={24}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      loop
      breakpoints={breakpoints}
    >
      {images.map((imgSrc, index) => {
        return (
          <SwiperSlide key={index}>
            <Image src={imgSrc} alt="" />
          </SwiperSlide>
        );
      })}
    </S.StyledSwiper>
  );
};

export default SimpleSlider;
