import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Backdrop from "../shared/Backdrop";
import S from "./Styled";
import SrOnly from "../shared/SrOnly";

const HamburgerMenu = ({ latestInfoId }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const hamburgerBtnRef = useRef(null);
  const linksListRef = useRef(null);
  const activeIndexRef = useRef(0);

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

  const moveFocus = (focusableElements, direction = "down") => {
    const length = focusableElements.length;

    if (direction === "down") {
      if (activeIndexRef.current === length - 1) {
        activeIndexRef.current = 0;
      } else {
        activeIndexRef.current++;
      }
    }
    if (direction === "up") {
      if (activeIndexRef.current === 0) {
        activeIndexRef.current = length - 1;
      } else {
        activeIndexRef.current--;
      }
    }

    focusableElements[activeIndexRef.current].focus();
  };

  const handleKeyboardTrap = e => {
    const hamburgerBtnEl = hamburgerBtnRef.current;
    const linksListEl = linksListRef.current;
    const listItems = [...linksListEl.children];
    const links = listItems.map(item => item.firstChild);

    const focusableElements = [hamburgerBtnEl, ...links];
    if (e.keyCode === 9 && !e.shiftKey) {
      e.preventDefault();
      moveFocus(focusableElements);
    }
    if (e.keyCode === 9 && e.shiftKey) {
      e.preventDefault();
      moveFocus(focusableElements, "up");
    }
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isSideNavOpen) {
      document.addEventListener("keydown", handleKeyboardTrap);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyboardTrap);
    };
  }, [isSideNavOpen]);

  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", handleKeyboardTrap);
    };
  }, []);

  return (
    <>
      <S.Hamburger
        id="hamburger-btn"
        ref={hamburgerBtnRef}
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
      <S.SideNav id="hamburger-menu" ref={linksListRef} isSideNavOpen={isSideNavOpen}>
        {isSideNavOpen && <Backdrop onClick={closeModal} />}
        {latestInfoId && (
          <S.SideNavItem>
            <NextLink
              href={`/informacja-czwartkowa/${latestInfoId}`}
              isActive={pathname.includes("informacja-czwartkowa")}
            >
              <a onClick={closeModal}>Informacja czwartkowa</a>
            </NextLink>
          </S.SideNavItem>
        )}
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
