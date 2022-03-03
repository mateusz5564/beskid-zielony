import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import S from "../../components/pages/informacja-czwartkowa/Styled";
import Container from "../../components/shared/Container";
import EventCard from "../../components/EventCard/EventCard";
import Masonry from "react-masonry-css";

const ThursdayNewsletter = ({ info }) => {
  const router = useRouter();
  const [breakpointColumnsObj, setBreakpointColumnsObj] = useState({});

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

  const allEvents = info.attributes.wydarzenia.data
    .map(event => {
      return {
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
      };
    })
    .sort((firstEv, secondEv) => {
      if (firstEv.termin > secondEv.termin) return 1;
      return -1;
    });

  const standardEvents = allEvents.filter(event => event.czasowe === false);
  const deadlineEvents = allEvents.filter(event => event.czasowe === true);

  useEffect(() => {
    // 62.5% of browser font size, because we set font-size of root to 62.5%
    const computedRootFontSize = parseFloat(
      window.getComputedStyle(document.documentElement).getPropertyValue("font-size")
    );
    // but we use rems in media queries and they are based on 100% font-size of root
    const originalRootFontSize = computedRootFontSize * (1000 / 625);

    setBreakpointColumnsObj({
      default: 2,
      [75 * originalRootFontSize]: 1,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Beskid Zielony | Informacja Czwartkowa {info.attributes.data}</title>
      </Head>

      <S.Main>
        <Container $maxWidth="150rem">
          <h1>Informacja czwartkowa</h1>
          <h2>
            Biuletyn - Newsletter nr {info.attributes.numer}/{info.attributes.data}
          </h2>

          <S.EventsSection>
            <h3>Bieżące wydarzenia</h3>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {standardEvents.map(event => {
                return (
                  <EventCard
                    key={event.id}
                    event={event}
                    sponsored={event.sponsorowane}
                  ></EventCard>
                );
              })}
            </Masonry>
          </S.EventsSection>
          <S.EventsSection>
            <h3>Wydarzenia czasowe</h3>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {deadlineEvents.map(event => {
                return (
                  <EventCard
                    key={event.id}
                    event={event}
                    sponsored={event.sponsorowane}
                  ></EventCard>
                );
              })}
            </Masonry>
          </S.EventsSection>
        </Container>
      </S.Main>
    </>
  );
};

const apiRoot = process.env.ROOT_ENDPOINT;

export async function getStaticPaths() {
  let resJSON;

  try {
    const res = await fetch(`${apiRoot}/informacje-czwartkowe/`);
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
      `${apiRoot}/informacje-czwartkowe/${params.id}?populate[wydarzenia][populate][0]=obrazek`
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
