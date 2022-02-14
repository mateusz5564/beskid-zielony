import { useRouter } from "next/router";
import Head from "next/head";
import S from "../../components/pages/informacja-czwartkowa/Styled";
import Container from "../../components/shared/Container";
import EventCard from "../../components/EventCard/EventCard";

const ThursdayNewsletter = ({ info }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!info.id) {
    return (
      <>
        <h1>Nie znaleziono biuletynu</h1>
      </>
    );
  }

  const events = info.attributes.wydarzenia.data.map(event => {
    return ({
      id: event.id,
      sponsorowane: event.attributes.sponsorowane,
      czasowe: event.attributes.czasowe,
      tytul: event.attributes.tytul,
      termin: event.attributes.termin,
      miejscowosc: event.attributes.miejscowosc,
      lokalizacja: event.attributes.lokalizacja,
      wstep: event.attributes.wstep,
      stronaInternetowa: event.attributes.stronaInternetowa,
      opis: event.attributes.opis,
      miniaturka: event.attributes.obrazek.data.attributes.url,
    });
  });

  return (
    <>
      <Head>
        <title>Beskid Zielony | Informacja Czwartkowa {info.attributes.data}</title>
      </Head>

      <S.Main>
        <Container $max-width="120rem">
          <h1>Informacja czwartkowa</h1>
          <h2>
            Biuletyn - Newsletter nr {info.attributes.numer}/{info.attributes.data}
          </h2>
          <S.EventsSection>
            <h3>Bieżące wydarzenia</h3>
            <div className="events">
              {events.map(event => {
                return (<EventCard event={event}></EventCard>)
              })}
            </div>
          </S.EventsSection>
        </Container>
      </S.Main>
    </>
  );
};

export async function getStaticPaths() {
  let resJSON;

  try {
    const res = await fetch("http://localhost:1337/api/informacje-czwartkowe/");
    resJSON = await res.json();
  } catch (e) {
    console.log(e);
  }

  const paramsArr = resJSON.data.map(newsletter => {
    return { params: { id: `${newsletter.id}` } };
  });

  return {
    paths: [...paramsArr],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let resJSON;

  try {
    const res = await fetch(
      `http://localhost:1337/api/informacje-czwartkowe/${params.id}?populate[wydarzenia][populate][0]=obrazek`
    );
    resJSON = await res.json();
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      info: { ...resJSON.data },
    },
  };
}

export default ThursdayNewsletter;
