import Image from "next/image";
import { A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import S from "./Styled";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const MainSwiper = ({ images, breakpoints }) => {
  return (
    <S.StyledSwiper
      modules={[A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination]}
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={1}
      breakpoints={breakpoints}
      coverflowEffect={{
        rotate: 20,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      loop
      keyboard={{ enabled: true }}
      navigation
      pagination={{ clickable: true }}
      a11y={{
        containerMessage: "Zdjęcia przedstawiające beskid niski",
        firstSlideMessage: "To jest pierwsze zdjęcie",
        lastSlideMessage: "To jest ostanie zdjęcie",
        prevSlideMessage: "Poprzednie zdjęcie",
        nextSlideMessage: "Nastepne zdjęcie",
        paginationBulletMessage: "Przejdź do zdjęcia nr {{index}}",
        slideRole: "img",
      }}
    >
      {images.map(img => {
        return (
          <SwiperSlide key={img.src}>
            <Image src={img} placeholder="blur" layout="responsive" alt="" />
          </SwiperSlide>
        );
      })}
    </S.StyledSwiper>
  );
};

export default MainSwiper;
