import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Backdrop from "../shared/Backdrop";
import S from "./Styled";
import SrOnly from "../shared/SrOnly";

const HamburgerMenu = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

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

  return (
    <>
      <S.Hamburger
        id="hamburger-btn"
        isSideNavOpen={isSideNavOpen}
        onClick={handleHamburger}
        aria-haspopup="true"
        aria-expanded={isSideNavOpen}
        aria-controls="hamburger-menu"
      >
        <span></span>
        <span></span>
        <span></span>
        <SrOnly>{isSideNavOpen ? "Zamknij menu" : "Otwórz menu"}</SrOnly>
      </S.Hamburger>
      <S.SideNav id="hamburger-menu" isSideNavOpen={isSideNavOpen}>
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
    </>
  );
};

export default HamburgerMenu;
