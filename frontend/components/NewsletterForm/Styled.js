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

  input {
    width: 100%;
    margin-bottom: 1.6rem;
    border-radius: 50px;
    border: none;
    padding: 1.6rem 2.4rem;
    font-size: 2.5rem;
    text-align: center;

    &::placeholder {
      font-weight: 300;
      color: ${({ theme }) => theme.colors.darkGreen[500]};
    }
  }
`;

const Styled = { Form };

export default Styled;
