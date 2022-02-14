import styled from "styled-components";

const Main = styled.main`
  margin-top: 6.4rem;

  h1,
  h2 {
    line-height: 1;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkGreen[700]};
    text-align: center;
  }

  h1 {
    font-size: 6.4rem;
    margin-bottom: 1.2rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  .events {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

const EventsSection = styled.section`
  margin-top: 6.4rem;
  
  h3 {
    position: relative;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.colors.darkGreen[700]};
    margin-bottom: 3.6rem;

    &::before {
      content: '';
      display: block;
      height: 10px;
      width: 80px;
      border-radius: 5px;
      background: ${({theme}) => `linear-gradient(to right, ${theme.colors.lightGreen[500]}, ${theme.colors.orange[500]})`};
    }
  }
`;

const Styled = {
  Main,
  EventsSection
};

export default Styled;
