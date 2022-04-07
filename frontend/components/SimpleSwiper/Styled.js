import styled from "styled-components";

const Link = styled.a`
  display: block;
  ${({ theme }) => theme.utils.keyboardFocusCss("&", "-5px", 'img')}
`;

const Styled = {
  Link,
};

export default Styled;
