import styled from "styled-components";

const Wrapper = styled.article`
  font-size: 2rem;
  background-color: ${({ theme, sponsored }) =>
    sponsored ? theme.colors.darkYellow[500] : theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGray[600]};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  .top {
    display: flex;
    border-bottom: 10px solid white;

    @media (max-width: 27rem) {
      flex-wrap: wrap;
    }

    .thumbnail {
      position: relative;
      flex-basis: 40%;
      flex-shrink: 0;

      @media (max-width: 27rem) {
        flex-basis: 100%;
      }

      &::before,
      &::after {
        content: "";
        display: ${({ sponsored }) => (sponsored ? "inline-block" : "none")};
        position: absolute;
        width: 10px;
        background-color: ${({ theme }) => theme.colors.darkYellow[500]};
        opacity: 0.8;
        height: 20%;
      }

      &::before {
        left: 10px;
        top: 0;
        width: 20%;
        height: 10px;
      }

      &::after {
        left: 0;
        top: 0;
      }

      img {
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
      }
    }

    .right {
      padding: 1.6rem;

      .title {
        font-size: 3rem;
        line-height: 1;
        margin-bottom: 1.2rem;
      }

      p {
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
        line-height: 1;
      }

      .website {
        text-decoration: none;
        color: inherit;

        &:hover {
          color: ${({ theme }) => theme.colors.darkGreen[500]};
        }
      }

      .ticket {
        display: inline-block;
        padding: 0.8rem 1.6rem;
        border: 1px solid black;
      }

      .detailWithIcon {
        display: flex;
        align-items: center;
      }

      .icon {
        width: 1.6rem;
        margin-right: 0.8rem;
      }
    }
  }

  .description {
    position: relative;
    height: 100%;
    background-color: ${({ theme, sponsored }) =>
      sponsored ? theme.colors.darkYellow[500] : theme.colors.lightGreen[50]};

    @media (max-width: 60rem) {
      height: ${({descExpanded}) => descExpanded ? 'auto' : '4rem'};
      padding-bottom: 3.75rem;
    }

    p {
      text-align: justify;
      padding: 1.6rem;
      font-size: 2rem;
    }

    .expand-btn {
      display: none;

      @media (max-width: 60rem) {
        display: block;
      }

      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 1rem 0;
      margin: 0;
      border: 0;
      line-height: 1;
      cursor: pointer;
      color: inherit;
      background-color: ${({ theme, sponsored }) =>
        sponsored ? theme.colors.darkYellow[500] : theme.colors.lightGreen[50]};
    }
  }
`;

const Styled = {
  Wrapper,
};

export default Styled;
