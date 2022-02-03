import S from "./Styled";
import NextLink from "next/link";

const Link = ({ children, href, isActive }) => {
  return (
    <NextLink href={href}>
      <S.Link isActive={isActive}>{children}</S.Link>
    </NextLink>
  );
};

export default Link;
