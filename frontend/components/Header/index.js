import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import S from "./Styled";
import Link from "./Link";
import HeaderImg from "../../public/img/decorations/pasek.jpg";
import HeaderMobImg from "../../public/img/decorations/pasek_mob.jpg";
import Logo from "../../public/img/logo.png";
import Backdrop from "../shared/Backdrop";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showDesktopHeaderImg, setShowDesktopHeaderImg] = useState(null);

  const closeModal = () => {
    setIsSideNavOpen(false);
    document.body.classList.remove("disable-scrollbar");
  };

  const openModal = () => {
    setIsSideNavOpen(true);
    document.body.classList.add("disable-scrollbar");
  };

  const handleHamburger = () => {
    isSideNavOpen ? closeModal() : openModal();
  };

  useEffect(() => {
    setShowDesktopHeaderImg(window.matchMedia("(min-width: 62.5rem)").matches);
  }, []);

  return (
    <S.Header>
      <S.Nav>
        <NextLink href="/">
          <a>
            <S.Logo>
              <Image src={Logo} priority alt="Home page" />
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

        <S.SideNav isSideNavOpen={isSideNavOpen}>
          {isSideNavOpen && <Backdrop onClick={closeModal} />}
          <S.SideNavItem>
            <NextLink
              href="/informacja-czwartkowa/1"
              isActive={pathname.includes("informacja-czwartkowa")}
            >
              <a onClick={closeModal}>Informacja czwartkowa</a>
            </NextLink>
          </S.SideNavItem>
          <S.SideNavItem>
            <NextLink href="/co-gdzie-kiedy" isActive={pathname === "/co-gdzie-kiedy"}>
              <a onClick={closeModal}>Co? Gdzie? Kiedy?</a>
            </NextLink>
          </S.SideNavItem>
        </S.SideNav>
        <S.Hamburger isSideNavOpen={isSideNavOpen} onClick={handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </S.Hamburger>
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
