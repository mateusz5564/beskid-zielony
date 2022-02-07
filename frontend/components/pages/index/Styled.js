import styled from "styled-components";
import TextOnBg from '../../shared/TextOnBg';

const Main = styled.main`
  margin-top: 5rem;
`;

const SectionText = styled.section`
  position: relative;
  margin-top: 10rem;

  ${TextOnBg} {
    margin: 0 auto;
  }

  img {
    height: 20rem;
  }

  .left {
    position: absolute;
    left: 0;
    top: 0;
  }

  .right {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Styled = {
  Main,
  SectionText,
}

export default Styled;