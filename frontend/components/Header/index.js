import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import S from "./Styled";
import Link from "./Link";
import HeaderImg from "../../public/img/decorations/pasek.jpg";
import HeaderMobImg from "../../public/img/decorations/pasek_mob.jpg";
import Logo from "../../public/img/logo.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import SrOnly from "../shared/SrOnly";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [latestInfoId, setLatestInfoId] = useState();
  const showDesktopHeaderImg = useMediaQuery("(min-width: 62.5rem)");

  useEffect(async () => {
    const apiRoot = process.env.NEXT_PUBLIC_ROOT_ENDPOINT;

    //next doesn't support static props in components, so we have to get id of the latest newsletter on client-side
    try {
      const res = await fetch(`${apiRoot}/informacje-czwartkowe/?sort[0]=data%3Adesc`);
      const json = await res.json();
      setLatestInfoId(json.data[0].id);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <S.Header>
      <S.Nav aria-label="Menu główne">
        <NextLink href="/">
          <a className="logo-link">
            <SrOnly>Przejdź na strone główną</SrOnly>
            <S.Logo>
              <Image src={Logo} priority alt="" />
            </S.Logo>
          </a>
        </NextLink>
        <S.List>
          <S.ListItem>
            <Link href="/co-gdzie-kiedy" isActive={pathname === "/co-gdzie-kiedy"}>
              Co? Gdzie? Kiedy?
            </Link>
          </S.ListItem>

          {latestInfoId && (
            <S.ListItem>
              <Link
                href={`/informacja-czwartkowa/${latestInfoId}`}
                isActive={pathname.includes("informacja-czwartkowa")}
              >
                Informacja czwartkowa
              </Link>
            </S.ListItem>
          )}
        </S.List>

        <HamburgerMenu />
      </S.Nav>

      <S.HeaderImg>
        {showDesktopHeaderImg === true && (
          <Image src={HeaderImg} alt="" priority layout="fill" objectFit="cover" />
        )}
        {showDesktopHeaderImg === false && (
          <Image src={HeaderMobImg} alt="" priority layout="fill" objectFit="cover" />
        )}
      </S.HeaderImg>
    </S.Header>
  );
};

export default Header;
