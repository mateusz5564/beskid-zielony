import styled from "styled-components";

const BoldText = ({ children }) => {
  return <Bold>{children}</Bold>;
};

const Bold = styled.b`
  font-weight: 700;
`;

export default BoldText;
