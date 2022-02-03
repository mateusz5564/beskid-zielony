import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 10rem;
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
`;

const TextContent = styled.div`
  max-width: 80rem;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src="img/logo.png" alt="" />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  align-self: flex-end;
  flex-shrink: 0;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;

  img {
    height: 10rem;
  }
`;

const Authors = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3rem;
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
