import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import LinkIcon from "../../components/LinkIcon";
import Container from "../../components/shared/Container";
import NewsletterForm from "../../components/NewsletterForm";
import BoldText from "../../components/shared/BoldText";
import SkipToMain from "../../components/SkipToMain";
import S from "../../components/pages/co-gdzie-kiedy/Styled";
import museums from "../../utils/museums";
import agrotourism from "../../utils/agrotourism";
import AddEventImg from "../../public/img/illustrations/add_events.png";
import EventImg from "../../public/img/icons/event.png";
import Newsletter2Img from "../../public/img/icons/newsletter2.png";
import TouristImg from "../../public/img/icons/tourist.png";
import { getFormattedDate } from "../../utils/formatDate";

const DynamicSimpleSwiper = dynamic(() => import("../../components/SimpleSwiper"), { ssr: false });

const CoGdzieKiedy = ({ info }) => {
  return (
    <>
      <Head>
        <title>Beskid Zielony | Co? Gdzie? Kiedy?</title>
      </Head>

      <SkipToMain />

      <main id="main">
        <Container $maxWidth="100rem">
          <S.Features>
            <h1>Co? Gdzie? Kiedy?</h1>
            <h2>
              Jeśli zastanawiasz się, jak ciekawie spędzić czas wolny zapraszamy do przejrzenia
              naszych propozycji. Na pewno znajdziesz coś ciekawego dla siebie i swoich
              najbliższych!
            </h2>
            <S.MParagraphWithIcon icon={EventImg}>
              <BoldText>Co? Gdzie? Kiedy?</BoldText> jest stroną, która stanowi swoiste zaprzeczenie
              często wypowiadanej w odniesieniu do mało znanych regionów frazy: „Przecież tutaj nic
              się nie dzieje!”.
            </S.MParagraphWithIcon>
            <S.MParagraphWithIcon icon={Newsletter2Img} right>
              <BoldText> Biuletyn „Informacja Czwartkowa”</BoldText> przeznaczony jest dla
              wszystkich tych, którzy szukają interesujących propozycji spędzenia czasu wolnego w
              Magicznej Krainie Łemków i Pogórzan. W aktualizowanym co czwartek opracowaniu
              biuletynu uwzględniamy bogatą ofertę organizowanych w regionie wydarzeń takich jak np.
              festyny, jarmarki,wystawy, koncerty, spotkania, warsztaty i wiele innych.
            </S.MParagraphWithIcon>
            <S.MParagraphWithIcon icon={TouristImg}>
              Na stronie można także zapoznać się z{" "}
              <BoldText>„Karnetem Turystycznym” i „Karnetem Kulturalnym”</BoldText>, które są
              kompilacją dotyczącą najważniejszych atrakcji turystycznych i wydarzeń kulturalnych
              naszego regionu. W karnetach zgromadzone są informacje merytoryczne i praktyczne,
              mające służyć pomocą uczestnikom oraz odwiedzającym.{" "}
            </S.MParagraphWithIcon>
          </S.Features>
        </Container>

        <LinkIcon href={`/informacja-czwartkowa/${info.id}`}>
          informacja czwartkowa nr {info.nr}/{getFormattedDate(info.data)}
        </LinkIcon>

        <S.HelpUs>
          <Container $maxWidth="70rem">
            <div>
              <Image src={AddEventImg} alt="" />
            </div>
            <h3>
              Zwracamy się z uprzejmą prośbą do osób, które mają bezpośredni kontakt z turystami,
              gośćmi naszego regionu, aby przekazywały informacje o wydarzeniach i atrakcjach, które
              prezentujemy na naszej stronie. Będziemy szczególnie wdzięczni za informacje o tych
              wydarzeniach, które są reprezentatywne dla kultury naszej Magicznej Krainy.
            </h3>
            <p>
              Mamy nadzieję, że z satysfakcją korzystać będziecie Państwo z naszej strony i liczymy
              na współpracę! <br />
              <br />
              Redakcja
            </p>
          </Container>
        </S.HelpUs>
        <S.Newsletter>
          <NewsletterForm />
        </S.Newsletter>
        <S.Ads>
          <DynamicSimpleSwiper
            items={museums}
            slidesPerView={1}
            breakpoints={{
              1200: {
                slidesPerView: 2,
              },
            }}
          />
          <DynamicSimpleSwiper
            items={agrotourism}
            slidesPerView={1}
            breakpoints={{
              1100: {
                slidesPerView: 2,
              },
              1600: {
                slidesPerView: 3,
              },
            }}
          />
        </S.Ads>
      </main>
    </>
  );
};

export async function getStaticProps(context) {
  const apiRoot = process.env.NEXT_PUBLIC_ROOT_ENDPOINT;
  let resJSON;

  try {
    const res = await fetch(`${apiRoot}/informacje-czwartkowe/?sort[0]=data%3Adesc`);
    resJSON = await res.json();
  } catch (e) {
    console.log(e);
  }

  const lastInfo = resJSON.data[0];
  console.log(lastInfo);

  return {
    props: {
      info: {
        id: lastInfo.id,
        nr: lastInfo.attributes.numer,
        data: lastInfo.attributes.data,
      },
    },
  };
}

export default CoGdzieKiedy;
