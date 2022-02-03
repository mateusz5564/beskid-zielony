import Head from "next/head";
import styled from "styled-components";
import MainSwiper from "../components/MainSwiper";
import Container from "../components/shared/Container";
import TextOnBg from "../components/shared/TextOnBg";
import regionImages from "../utils/regionImages";

export default function Home() {
  console.log(regionImages)

  return (
    <>
      <Head>
        <title>Beskid Zielony | Lokalna Organizacja Turystyczna</title>
      </Head>
      <main>
        <Container>
          <MainSwiper images={regionImages} />
        </Container>
        <StyledSection>
          <img className="left" src="img/decorations/dekor_left.png" alt="" />
          <img className="right" src="img/decorations/dekor_right.png" alt="" />
          <TextOnBg>
            Znajdujecie się Państwo na portalu, który aspiruje do miana wizytówki “Magicznej Krainy
            Łemków i Pogórzan”. Portal będzie odnosił się do dziedzictwa kulturowego i naturalnego
            związanego z rdzennymi kulturami regionu: łemkowska i pogórzańska, nie zapominając o
            żydowskiej. Wszystkich których sercu bliska jest mozaika kulturowa naszej krainy,
            serdecznie zapraszamy do korzystania z portalu i aktywnego udziału w jego redagowaniu!
          </TextOnBg>
        </StyledSection>
      </main>
    </>
  );
}

const StyledSection = styled.section`
  position: relative;
  margin-top: 10rem;

  ${TextOnBg} {
    margin: 0 auto;
  }

  img {
    height: 20rem;
  }

  .left {
    position: absolute;
    left: 0;
    top: 0;
  }

  .right {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
