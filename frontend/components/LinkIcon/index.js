import NextLink from "next/link";
import S from './Styled';

const LinkIcon = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <S.Link>
        <img src="img/icons/newsletter.png" alt="" />
        {children}
        <img src="img/icons/newsletter.png" alt="" />
      </S.Link>
    </NextLink>
  );
};

export default LinkIcon;
