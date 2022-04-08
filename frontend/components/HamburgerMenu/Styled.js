import styled, { css } from "styled-components";

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
    visibility: ${({ isSideNavOpen }) => (isSideNavOpen ? "visible" : "hidden")};
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
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
  }
`;

const hamburgerOpenCss = css`
  span:first-of-type {
    transform: rotate(45deg);
  }

  span:nth-of-type(2) {
    display: none;
  }

  span:last-of-type {
    transform: rotate(-45deg);
    margin-top: -1.1rem;
  }
`;

const Hamburger = styled.button`
  position: absolute;
  display: none;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 3.2rem;
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

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${({ isSideNavOpen }) => (isSideNavOpen ? hamburgerOpenCss : null)}
`;

const Styled = {
  Hamburger,
  SideNav,
  SideNavItem,
};

export default Styled;
