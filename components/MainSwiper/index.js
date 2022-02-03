import Image from "next/image";
import { Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper";
import { SwiperSlide } from "swiper/react";
import S from './Styled';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const MainSwiper = ({ images }) => {
  return (
    <S.StyledSwiper
      modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 20,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      loop
      navigation
      pagination={{ clickable: true }}
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

export default MainSwiper;
