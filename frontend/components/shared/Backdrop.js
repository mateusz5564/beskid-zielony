import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={onClick} />,
    document.querySelector("#__next")
  );
};

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export default Backdrop;
