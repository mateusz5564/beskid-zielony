import styled from "styled-components";

const Wrapper = styled.article`
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGray[600]};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  .top {
    display: flex;

    .thumbnail {
      flex-basis: 25rem;
      flex-shrink: 0;
      
      img {
        width: 25rem;
        height: 100%;
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
    align-self: stretch;
    height: 100%;
    padding: 1.6rem;
    font-size: 2rem;
    background-color: ${({theme}) => theme.colors.lightGreen[50]};
  }
`;

const Styled = {
  Wrapper,
};

export default Styled;
