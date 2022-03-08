import styled, { css } from "styled-components";

const Header = styled.header`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* margin-bottom: 5rem; */
`;

const Nav = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  z-index: 200;
`;

const Banner = styled.div`
  padding-top: 1.6rem;
  text-align: bottom;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    width: 100%;
  }
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

const sideNavOpenCss = css`
  transform: translateX(0);
`;

const SideNav = styled.ul`
  display: none;
  position: fixed;
  right: 0;
  transform: translateX(100%);
  list-style: none;
  background: ${({ theme }) =>
    `linear-gradient( ${theme.colors.lightGreen[500]}, ${theme.colors.darkGreen[500]})`};
  min-width: 30rem;
  min-height: 100vh;
  padding: 1.6rem;
  padding-top: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;

  @media (max-width: 43rem) {
    display: flex;
  }

  @media (max-width: 25rem) {
    min-width: 100vw;
  }

  ${({ isSideNavOpen }) => (isSideNavOpen ? sideNavOpenCss : null)};
`;

const SideNavItem = styled.li`
  a {
    display: block;
    color: white;
    margin: 1rem 0;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
  }
`;

const hamburgerOpenCss = css`
  span:first-child {
    transform: rotate(45deg);
  }

  span:nth-child(2) {
    display: none;
  }

  span:last-child {
    transform: rotate(-45deg);
    margin-top: -1.1rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  min-height: 6rem;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: 3.2rem;
  cursor: pointer;
  z-index: 200;

  @media (max-width: 43rem) {
    display: block;
  }

  span {
    display: block;
    width: 4rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    background-color: ${({ theme }) => theme.colors.darkGreen[700]};
    transition: all 0.2s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ isSideNavOpen }) => (isSideNavOpen ? hamburgerOpenCss : null)}
`;

const HeaderImg = styled.div`
  height: 16rem;
  position: relative;

  span:nth-child(2) {
    @media (min-width: 62.5rem) {
      display: none !important;
    }
  }
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 3.2rem;
  /* transform: translate(-50%, -50%); */
  border-radius: 10px;
  width: 9rem;
`;

const Styled = {
  Header,
  Nav,
  Banner,
  HeaderImg,
  List,
  ListItem,
  Link,
  Logo,
  Hamburger,
  SideNav,
  SideNavItem,
};

export default Styled;
