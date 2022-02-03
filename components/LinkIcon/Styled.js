import styled from "styled-components";

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1.6rem 3.2rem;
  border-radius: 5px;
  background: ${({theme}) => `linear-gradient(${theme.colors.darkYellow[500]}, ${theme.colors.orange[500]})`};
  color: ${({theme}) => theme.colors.darkGreen[700]};
  font-size: 2.4rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  & > img {
    margin-right: 1.6rem;
    height: 4.5rem;
  }
`;

const Styled = {
  Link,
}

export default Styled;