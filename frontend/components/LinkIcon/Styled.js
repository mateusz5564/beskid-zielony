import styled from "styled-components";

const Link = styled.a`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 3.2rem;
  background: ${({theme}) => `radial-gradient(circle at center, ${theme.colors.darkYellow[500]}, ${theme.colors.lightGreen[50]})`};
  color: ${({theme}) => theme.colors.darkGreen[700]};
  font-size: 2.4rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;

  ${({theme}) => theme.utils.keyboardFocusCss('&', '-8px')}

  @media (max-width: 44rem) {
    text-align: center;
    word-break: break-word;
  }

  & > img {
    margin: .8rem 1.6rem;
    height: 4.5rem;

    @media (max-width: 32rem) {
      display: none;
    }
  }
`;

const Styled = {
  Link,
}

export default Styled;