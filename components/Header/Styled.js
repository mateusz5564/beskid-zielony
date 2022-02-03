import styled from "styled-components";

const Header = styled.header`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 6px solid ${({theme}) => theme.colors.darkGreen[500]};
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
  background-color: ${({theme}) => theme.colors.whiteGreen};
  margin-bottom: 5rem;
  
  img {
    width: 100%;
  }
  `;

const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 3.2rem;
  `;

const ListItem = styled.li`
  flex-shrink: 0;
  display: inline-block;
  margin-right: 3.6rem;
  `;

const Link = styled.a`
  display: inline-block;
  padding: 1.6rem .8rem;
  font-size: 1.6rem;
  color: ${({ theme, isActive }) => isActive ? theme.colors.white : theme.colors.darkGray[600]};
  background: ${({ theme, isActive }) => isActive ? `linear-gradient(${theme.colors.darkGreen[500]}, ${theme.colors.lightGreen[500]})` : theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
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

const Styled = {
  Header,
  Nav,
  Banner,
  HeaderImg,
  List,
  ListItem,
  Link,
};

export default Styled;
