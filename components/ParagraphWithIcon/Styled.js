import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.6rem 3.2rem;
  max-width: 60rem;
  text-align: ${({ right }) => (right ? "right" : "left")};
  flex-direction: ${({ right }) => (right ? "row-reverse" : "row")};
  margin-left: ${({ right }) => (right ? "auto" : "0")};

  .corner {
    position: absolute;
  }

  .left {
    top: 0;
    left: 0;
  }

  .right {
    bottom: 0;
    right: 0;
  }

  .icon {
    margin-left: ${({ right }) => (right ? "2rem" : "0")};
    margin-right: ${({ right }) => (!right ? "2rem" : "0")};
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.darkGreen[500]};
  }

  b {
    font-weight: 700;
  }
`;

const Styled = { Wrapper };

export default Styled;
