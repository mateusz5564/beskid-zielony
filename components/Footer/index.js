import S from "./Styled";

const Footer = () => {
  return (
    <S.Footer>
      <img src="img/decorations/footer_wave.png" alt="" />
      <S.Content>
        <S.Logo />
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
        <S.Logo />
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
