import Container from "../shared/Container";
import S from "./Styled";
import Link from "./Link";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Logo src="img/logo.png" alt="" />
        <S.List>
          <S.ListItem>
            <S.Link href="#">
              Co? Gdzie? Kiedy?
            </S.Link>
          </S.ListItem>

          <S.ListItem>
            <Link href="#" isActive>Informacja czwartkowa</Link>
          </S.ListItem>
        </S.List>
      </S.Nav>
      <S.HeaderImg></S.HeaderImg>
      <S.Banner>
        <img src="img/bsz_banner.svg" alt="" />
      </S.Banner>
    </S.Header>
  );
};

export default Header;
