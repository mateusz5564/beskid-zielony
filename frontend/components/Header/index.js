import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import S from "./Styled";
import Link from "./Link";
import HeaderImg from "../../public/img/decorations/pasek.jpg";
import Logo from "../../public/img/logo.png";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <S.Header>
      <S.Nav>
        <NextLink href="/">
          <a>
            <S.Logo>
              <Image src={Logo} alt="" />
            </S.Logo>
          </a>
        </NextLink>
        <S.List>
          <S.ListItem>
            <Link href="/co-gdzie-kiedy" isActive={pathname === "/co-gdzie-kiedy"}>
              Co? Gdzie? Kiedy?
            </Link>
          </S.ListItem>

          <S.ListItem>
            <Link
              href="/informacja-czwartkowa/1"
              isActive={pathname.includes("informacja-czwartkowa")}
            >
              Informacja czwartkowa
            </Link>
          </S.ListItem>
        </S.List>
      </S.Nav>
      <S.HeaderImg>
        <Image src={HeaderImg} alt="" layout="fill" />
      </S.HeaderImg>
    </S.Header>
  );
};

export default Header;
