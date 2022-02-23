import Head from "next/head";
import MainSwiper from "../components/MainSwiper";
import Container from "../components/shared/Container";
import TextOnBg from "../components/shared/TextOnBg";
import regionImages from "../utils/regionImages";
import S from "../components/pages/index/Styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beskid Zielony | Lokalna Organizacja Turystyczna</title>
      </Head>
      <S.Main>
        <Container>
          <MainSwiper
            images={regionImages}
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
            }}
          />
        </Container>
        <S.SectionText>
          <img className="left" src="img/decorations/dekor_left.png" alt="" />
          <img className="right" src="img/decorations/dekor_right.png" alt="" />
          <Container>
            <TextOnBg>
              Znajdujecie się Państwo na portalu, który aspiruje do miana wizytówki “Magicznej
              Krainy Łemków i Pogórzan”. Portal będzie odnosił się do dziedzictwa kulturowego i
              naturalnego związanego z rdzennymi kulturami regionu: łemkowska i pogórzańska, nie
              zapominając o żydowskiej. Wszystkich których sercu bliska jest mozaika kulturowa
              naszej krainy, serdecznie zapraszamy do korzystania z portalu i aktywnego udziału w
              jego redagowaniu!
            </TextOnBg>
          </Container>
        </S.SectionText>
      </S.Main>
    </>
  );
}
