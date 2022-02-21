import styled from "styled-components";

const Main = styled.main`
  margin-top: 6.4rem;

  @media(max-width: 53.5rem) {
      margin-top: 3.2rem;
    }

  .my-masonry-grid {
    display: flex;
    margin-left: -2rem; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 2rem; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > article {
    margin-bottom: 2rem;
  }

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

    @media(max-width: 30rem) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 3.2rem;
    @media(max-width: 30rem) {
      font-size: 2.4rem;
    }
  }
`;

const EventsSection = styled.section`
  margin-top: 6.4rem;

  @media(max-width: 53.5rem) {
      margin-top: 4rem;
    }

  /* @media (max-width: 60rem) {
    max-width: 63rem;
    margin-left: auto;
    margin-right: auto;
  } */

  h3 {
    position: relative;
    line-height: 1.2;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.darkGreen[700]};
    margin-bottom: 3.2rem;

    @media(max-width: 30rem) {
      font-size: 2.4rem;
      margin-bottom: 1.8rem;
    }

    &::before {
      content: "";
      display: block;
      margin-bottom: .8rem;
      height: 10px;
      width: 80px;
      border-radius: 5px;
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.colors.lightGreen[500]}, ${theme.colors.orange[500]})`};
    }
  }
`;

const Styled = {
  Main,
  EventsSection,
};

export default Styled;
