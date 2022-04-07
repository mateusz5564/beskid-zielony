import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import S from "./Styled";
import "swiper/css";
import "swiper/css/autoplay";
import SrOnly from "../shared/SrOnly";

const SimpleSwiper = ({ items, slidesPerView, breakpoints }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={24}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      breakpoints={breakpoints}
    >
      {items.map(item => {
        return (
          <SwiperSlide key={item.url}>
            <S.Link href={item.url} target="_blank">
              <Image src={item.img} placeholder="blur" layout="responsive" alt="" />
              <SrOnly>{item.linkLabel}</SrOnly>
            </S.Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SimpleSwiper;
