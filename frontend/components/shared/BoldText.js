import styled from "styled-components";

const BoldText = ({ children, weight }) => {
  return <Bold $weight={weight}>{children}</Bold>;
};

const Bold = styled.b`
  font-weight: ${({$weight}) => $weight ? $weight : '700'};
`;

export default BoldText;
