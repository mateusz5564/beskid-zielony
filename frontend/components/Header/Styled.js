import styled from "styled-components";

const Header = styled.header`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* margin-bottom: 5rem; */
`;

const Nav = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  z-index: 5;
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

  span {
    display: block;
    height: 5px;
    background: ${({ theme, isActive }) =>
      isActive
        ? `linear-gradient(to right, ${theme.colors.orange[500]}, ${theme.colors.darkGreen[500]})`
        : theme.colors.white};
  }
`;

const HeaderImg = styled.div`
  height: 16rem;
  position: relative;

  img {
    object-fit: cover;
  }

  /* background: url("img/decorations/pasek.jpg");
  background-position: center;
  background-size: cover; */
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
};

export default Styled;
