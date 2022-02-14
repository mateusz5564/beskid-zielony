import S from "./Styled";
import { getFormattedDate, getFormattedTime } from "../../utils/formatDate";

const EventsCard = ({ event }) => {

  return (
    <S.Wrapper>
      <div className="top">
        <div className="thumbnail">
          <img  src={`http://localhost:1337${event.miniaturka}`} alt="" />
        </div>
        <div className="right">
          <div>
            <h4 className="title">{event.tytul}</h4>
            <p className="detailWithIcon">
              <img className="icon" src="/img/icons/calendar.png" alt="" />
              {`${getFormattedDate(event.termin)}, ${getFormattedTime(event.termin)}`}
            </p>
            <p className="detailWithIcon">
              <img className="icon" src="/img/icons/location.png" alt="" />
              {event.miejscowosc}, {event.lokalizacja}
            </p>
          <p className="detailWithIcon test">
            <img className="icon" src="/img/icons/web.png" alt="" />
            {event.stronaInternetowa}
          </p>
            <p className="ticket">wstęp: {event.wstep}</p>
          </div>
        </div>
      </div>
      <p className="description">{event.opis}</p>
    </S.Wrapper>
  );
};

export default EventsCard;
