import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "120rem")};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "initial")};
  margin: 0 auto;
  padding: 0 2rem;
`;

export default Container;
