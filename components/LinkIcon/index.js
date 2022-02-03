import NextLink from "next/link";
import S from './Styled';

const LinkIcon = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <S.Link>
        <img src="img/icons/newsletter.png" alt="" />
        {children}
      </S.Link>
    </NextLink>
  );
};

export default LinkIcon;
