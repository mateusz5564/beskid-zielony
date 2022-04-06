import styled from "styled-components";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const SkipToMain = ({ elementId = 'main' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  return mounted
    ? createPortal(
        <Link href={`#${elementId}`}>Przejdź do głównej treści</Link>,
        document.getElementById("skip-content")
      )
    : null;
};

const Link = styled.a`
  position: absolute;
  z-index: 1000;
  font-size: 2rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 2px;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.lightGreen[500]};
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(-100%);

  &:focus {
    transform: translateX(0);
  }
`;

export default SkipToMain;
