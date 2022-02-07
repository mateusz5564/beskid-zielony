import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "120rem")};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "initial")};
  margin: 0 auto;
`;

export default Container;
