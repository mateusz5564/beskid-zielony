import styled from "styled-components";

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background: ${({theme}) => `linear-gradient(to right, ${theme.colors.lightGreen[500]}, ${theme.colors.darkGreen[500]})`};
  color: ${({theme}) => theme.colors.white};
  border-radius: 50px;
  border: none;
  padding: 1.6rem 3.2rem;
  font-size: 2.5rem;
  font-weight: 500;
`;

export default Button;
