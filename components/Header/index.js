import { useRouter } from "next/router";
import Image from "next/image";
import S from "./Styled";
import Link from "./Link";
import HeaderImg from "../../public/img/decorations/pasek.jpg";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <S.Header>
      <S.Nav>
        <S.List>
          <S.ListItem>
            <Link href="/" isActive={pathname === "/"}>
              Strona główna
            </Link>
          </S.ListItem>

          <S.ListItem>
            <Link href="/co-gdzie-kiedy" isActive={pathname === "/co-gdzie-kiedy"}>
              Co? Gdzie? Kiedy?
            </Link>
          </S.ListItem>
        </S.List>
      </S.Nav>
      <S.HeaderImg>
        <Image src={HeaderImg} layout="fill" alt="" />
      </S.HeaderImg>
      <S.Banner>
        <img src="img/decorations/bsz_banner.svg" alt="" />
      </S.Banner>
    </S.Header>
  );
};

export default Header;
