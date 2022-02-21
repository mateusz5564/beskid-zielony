import styled from "styled-components";

const Wrapper = styled.article`
  position: relative;
  font-size: 2rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.darkGray[600]};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 4rem;
  word-break: break-word;

  .top {
    display: flex;
    border-bottom: 10px solid white;
    background-color: ${({ theme, sponsored }) =>
      sponsored ? theme.colors.darkYellow[500] : theme.colors.white};

    @media (max-width: 35rem) {
      flex-wrap: wrap;
    }

    .thumbnail {
      position: relative;
      flex-basis: 40%;
      flex-shrink: 0;

      @media (max-width: 35rem) {
        flex-basis: 100%;
      }

      &::before,
      &::after {
        content: "";
        display: ${({ sponsored }) => (sponsored ? "inline-block" : "none")};
        position: absolute;
        background-color: ${({ theme }) => theme.colors.darkYellow[500]};
        opacity: 0.8;
      }

      &::before {
        left: 1rem;
        top: 0;
        width: 20%;
        height: 1rem;
      }

      &::after {
        left: 0;
        top: 0;
        width: 1rem;
        height: 20%;
      }

      img {
        width: 100%;
      }
    }

    .right {
      padding: 1.6rem;

      .title {
        line-height: 1;
        margin-bottom: 1.2rem;
        font-size: 3.2rem;

        @media (max-width: 30rem) {
          font-size: 2.4rem;
        }
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
        font-size: 1.6rem;
        padding: 0.8rem 1.6rem;
        border: 1px solid black;
      }

      .detailWithIcon {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        margin-bottom: 0.8rem;

        line-height: 1.1;
      }

      .icon {
        width: 1.6rem;
        margin-right: 0.8rem;
      }
    }
  }

  .description {
    height: 100%;
    background-color: ${({ theme, sponsored }) =>
      sponsored ? theme.colors.darkYellow[500] : theme.colors.lightGreen[50]};
    height: ${({ descExpanded }) => (descExpanded ? "auto" : "0")};
    text-align: justify;
    /* padding: 1.6rem; */
    padding: ${({ descExpanded }) => (descExpanded ? "1.6rem" : "0")};
    /* padding-bottom: 0; */
    font-size: 2rem;
  }

  .expand-btn {
    display: block;
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
      sponsored ? theme.colors.darkYellow[600] : theme.colors.lightGreen[100]};
  }
`;

const Styled = {
  Wrapper,
};

export default Styled;
