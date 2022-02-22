import Head from "next/head";
import LinkIcon from "../../components/LinkIcon";
import Container from "../../components/shared/Container";
import NewsletterForm from "../../components/NewsletterForm";
import BoldText from "../../components/shared/BoldText";
import SimpleSlider from "../../components/SimpleSwiper";
import S from "../../components/pages/co-gdzie-kiedy/Styled";
import museumsImages from "../../utils/museumsImages";
import agrotourismImages from "../../utils/agrotourismImages";

const CoGdzieKiedy = () => {
  return (
    <>
      <Head>
        <title>Beskid Zielony | Co? Gdzie? Kiedy?</title>
      </Head>

      <main>
        <Container $maxWidth="100rem">
          <S.Features>
            <h1>Co? Gdzie? Kiedy?</h1>
            <h2>
              Jeśli zastanawiasz się, jak ciekawie spędzić czas wolny zapraszamy do przejrzenia
              naszych propozycji. Na pewno znajdziesz coś ciekawego dla siebie i swoich
              najbliższych!
            </h2>
            <S.MParagraphWithIcon iconSrc="img/icons/Event.png">
              <BoldText>Co? Gdzie? Kiedy?</BoldText> jest stroną, która stanowi swoiste zaprzeczenie
              często wypowiadanej w odniesieniu do mało znanych regionów frazy: „Przecież tutaj nic
              się nie dzieje!”.
            </S.MParagraphWithIcon>
            <S.MParagraphWithIcon iconSrc="img/icons/Newsletter2.png" right>
              <BoldText> Biuletyn „Informacja Czwartkowa”</BoldText> przeznaczony jest dla
              wszystkich tych, którzy szukają interesujących propozycji spędzenia czasu wolnego w
              Magicznej Krainie Łemków i Pogórzan. W aktualizowanym co czwartek opracowaniu
              biuletynu uwzględniamy bogatą ofertę organizowanych w regionie wydarzeń takich jak np.
              festyny, jarmarki,wystawy, koncerty, spotkania, warsztaty i wiele innych.
            </S.MParagraphWithIcon>
            <S.MParagraphWithIcon iconSrc="img/icons/Tourist.png">
              Na stronie można także zapoznać się z{" "}
              <BoldText>„Karnetem Turystycznym” i „Karnetem Kulturalnym”</BoldText>, które są
              kompilacją dotyczącą najważniejszych atrakcji turystycznych i wydarzeń kulturalnych
              naszego regionu. W karnetach zgromadzone są informacje merytoryczne i praktyczne,
              mające służyć pomocą uczestnikom oraz odwiedzającym.{" "}
            </S.MParagraphWithIcon>
          </S.Features>
        </Container>

        <LinkIcon href="/">informacja czwartkowa nr 1/06.01.2022</LinkIcon>

        <S.HelpUs>
          <Container $maxWidth="70rem">
            <div>
              <img src="img/illustrations/add_events.png" alt="" />
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
          <SimpleSlider
            images={museumsImages}
            slidesPerView={1}
            breakpoints={{
              1200: {
                slidesPerView: 2,
              },
            }}
          />
          <SimpleSlider
            images={agrotourismImages}
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

export default CoGdzieKiedy;
