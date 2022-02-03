import styled from "styled-components";

const StyledText = styled.h2`
  max-width: 70rem;
  border-radius: 20px;
  padding: 3rem;
  font-size: 2.2rem;
  font-weight: 100;
  background-color: ${({ theme }) => theme.colors.lightGreen[500]};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export default StyledText;
