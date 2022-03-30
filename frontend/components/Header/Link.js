import S from "./Styled";
import NextLink from "next/link";

const Link = ({ children, href, isActive }) => {
  return (
    <NextLink href={href} passHref>
      <S.Link isActive={isActive}>{children}<span></span></S.Link>
    </NextLink>
  );
};

export default Link;
