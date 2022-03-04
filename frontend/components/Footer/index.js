import Image from "next/image";
import S from "./Styled";
import Wave from "../../public/img/decorations/footer_wave.png";
import Logo from "../../public/img/logo.png";

const Footer = () => {
  return (
    <S.Footer>
      <Image src={Wave} layout="responsive" priority alt="" />
      <S.Content>
        <S.Logo>
          <Image src={Logo} layout="responsive" priority alt="" />
        </S.Logo>
        <S.TextContent>
          <S.Authors>
            Autor koncepcji przekzywanie informacji oraz projektów graficznych - Robert Łętowski.
            Grafika komputerowa - Konrad Korona, Kamil Radziak. Redakcja informacji: Gabriela Walus,
            Robert Łętowski, Patryk Kusek. Obsługa administracyjna i informatyczna: Kamil Radziak.
          </S.Authors>
          <S.Copyright>
            Tekst, zdjęcia, grafika, sposób prezentacji i inne materiały zamieszczone na stronach
            portalu chronią prawa autorskie. Wykorzystywanie, przetwarzanie bez pisemnej zgody
            administratora serwisu jest zabronione. 2019-2020 © beskidzielony.pl
          </S.Copyright>
        </S.TextContent>
        <S.Logo className="secondLogo">
          <Image src={Logo} layout="responsive" priority alt="" />
        </S.Logo>
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
