import styled, { css } from "styled-components";

const Header = styled.header`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderImg = styled.div`
  height: 16rem;
  position: relative;
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 3.2rem;
  border-radius: 10px;
  width: 9rem;
`;

const Nav = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  min-height: 6rem;
  z-index: 200;

  ${({ theme }) => theme.utils.keyboardFocusCss(".logo-link", "4px", "span")};
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 15.4rem;
`;

const ListItem = styled.li`
  flex-shrink: 0;
  display: inline-block;
  margin-right: 0.8rem;
`;

const Link = styled.a`
  display: inline-block;
  padding: 1.6rem 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray[600]};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  ${({ theme }) => theme.utils.keyboardFocusCss("&", "-4px")};

  @media (max-width: 43rem) {
    display: none;
  }

  span {
    display: block;
    height: 5px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    background-image: ${({ theme, isActive }) =>
      isActive
        ? `linear-gradient(to right, ${theme.colors.orange[500]}, ${theme.colors.darkGreen[500]})`
        : theme.colors.white};
    transition: all 0.3s ease-in;
  }

  &:hover span {
    background-image: ${({ theme }) =>
      `linear-gradient(to right, ${theme.colors.orange[500]}, ${theme.colors.darkGreen[500]})`};
    opacity: 1;
  }
`;

const Styled = {
  Header,
  Nav,
  HeaderImg,
  List,
  ListItem,
  Link,
  Logo,
};

export default Styled;
