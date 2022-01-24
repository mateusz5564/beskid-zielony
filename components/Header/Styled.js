import styled from "styled-components";

const Header = styled.header`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  padding: .8rem 3.6rem;
  display: flex;
`;

const Banner = styled.div`
  padding-top: 1.6rem;
  text-align: bottom;
  background-color: ${({theme}) => theme.colors.whiteGreen};

  img {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 7rem;
  display: inline-block;
`;

const List = styled.ul`
  padding: 0;
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
  padding: 2.4rem 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.darkGray[600]};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  .dekor {
    display: block;
    height: 5px;
    background-image: ${({theme, isActive}) => isActive ? `linear-gradient(to right, ${theme.colors.lightGreen[500]}, ${theme.colors.orange[500]})` : ''};
  }
`;

const HeaderImg = styled.div`
  position: relative;
  height: 16rem;
  background: url("img/pasek.jpg");
  background-position: center;
  background-size: cover;

  & > div {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Styled = {
  Header,
  Nav,
  Banner,
  HeaderImg,
  Logo,
  List,
  ListItem,
  Link,
};

export default Styled;
