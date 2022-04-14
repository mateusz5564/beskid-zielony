import styled from "styled-components";

const Button = ({children, disabled}) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background: ${({theme, disabled}) => disabled ? 'gray' : `linear-gradient(to right, ${theme.colors.lightGreen[500]}, ${theme.colors.darkGreen[500]})`};
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  border-radius: 50px;
  border: none;
  padding: 1.6rem 3.2rem;
  font-size: 2.5rem;
  font-weight: 500;

  ${({theme}) => theme.utils.keyboardFocusCss('&')}
`;

export default Button;
