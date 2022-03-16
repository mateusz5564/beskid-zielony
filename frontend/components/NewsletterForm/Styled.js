import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  p {
    font-size: 2.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkGreen[700]};
    margin-bottom: 2.4rem;
  }

  button {
    margin-top: 1.6rem;
  }

  .errorMsg {
    font-size: 2rem;
    margin: 0;
    margin-top: 0.8rem;
    color: red;
  }
`;

const TextField = styled.input`
  width: 100%;
  border-radius: 50px;
  border: none;
  padding: 1.6rem 2.4rem;
  font-size: 2.5rem;
  text-align: center;
  outline: ${({ isInvalid }) => (isInvalid ? "3px solid red" : "none")};

  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGreen[500]};
  }
`;

const Styled = { Form, TextField };

export default Styled;
