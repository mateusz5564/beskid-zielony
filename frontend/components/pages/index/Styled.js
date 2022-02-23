import styled from "styled-components";
import TextOnBg from '../../shared/TextOnBg';

const Main = styled.main`
  margin-top: 5rem;

  @media (max-width: 800px) {
    margin-top: 2.4rem;
  }
`;

const SectionText = styled.section`
  position: relative;
  margin-top: 10rem;

  @media (max-width: 800px) {
    margin-top: 2.4rem;
  }

  ${TextOnBg} {
    margin: 0 auto;
  }

  img {
    height: 20rem;
  }

  .left, .right {
    position: absolute;

    @media (max-width: 66rem) {
      display: none;
    }
  }

  .left {
    left: 0;
    top: 0;
  }

  .right {
    right: 0;
    bottom: 0;
  }
`;

const Styled = {
  Main,
  SectionText,
}

export default Styled;