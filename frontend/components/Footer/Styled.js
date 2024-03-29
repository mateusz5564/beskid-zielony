import styled from "styled-components";

const Footer = styled.footer`
  padding-top: 7.6rem;
  margin-top: auto;
  text-align: center;

  & > img {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.lightGreen[500]}, ${theme.colors.darkGreen[500]})`};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 44rem) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContent = styled.div`
  max-width: 80rem;
  margin: 0 3.2rem;

  @media (max-width: 44rem) {
    margin-top: 1.8rem;
  }
`;

const Logo = styled.div`
  align-self: flex-end;
  flex-shrink: 0;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  width: 9rem;

  &.secondLogo {
    @media (max-width: 44rem) {
      display: none;
    }
  }
`;

const Authors = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3.2rem;
  text-align: justify;

  @media (max-width: 31rem) {
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 1.2rem;
`;

const Styled = {
  Authors,
  Content,
  Copyright,
  Footer,
  Logo,
  TextContent,
};

export default Styled;
