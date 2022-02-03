import styled from "styled-components";
import { Swiper } from "swiper/react";

const StyledSwiper = styled(Swiper)`
  margin: 0 auto;

  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      color: ${({ theme }) => theme.colors.orange[500]};
    }
  }
`;

const Styled = {
  StyledSwiper
}

export default Styled