import styled from "styled-components";

const Wrapper = styled.main`
  h1 {
    margin-bottom: 2.4rem;
  }

  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.darkGray[600]};
  font-size: 1.4rem;
`;

const Illustration = styled.div`
  max-width: 40rem;
  margin: 0 auto;

`;

const Styled = {
  Wrapper,
  Illustration,
};

export default Styled;
