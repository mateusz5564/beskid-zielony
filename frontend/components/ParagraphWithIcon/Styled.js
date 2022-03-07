import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
  text-align: justify;
  flex-direction: ${({ right }) => (right ? "row-reverse" : "row")};

  .icon {
    flex: 20rem 0 0;
    margin-left: ${({ right }) => (right ? "3.2rem" : "0")};
    margin-right: ${({ right }) => (!right ? "3.2rem" : "0")};
  }

  .text {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.darkGreen[700]};
  }

  b {
    font-weight: 700;
  }
`;

const Styled = { Wrapper };

export default Styled;
