import S from "./Styled";
import { getFormattedDate, getFormattedTime } from "../../utils/formatDate";
import BoldText from "../shared/BoldText";

const EventsCard = ({ event, sponsored }) => {
  return (
    <S.Wrapper sponsored={sponsored}>
      <div className="top">
        <div className="thumbnail">
          <img src={`http://localhost:1337${event.miniaturka}`} alt="" />
        </div>
        <div className="right">
          <div>
            <h4 className="title">{event.tytul}</h4>
            <p className="detailWithIcon">
              <img className="icon" src="/img/icons/calendar.png" alt="" />
              <BoldText weight="500">
                {!event.czasowe &&
                  `${getFormattedDate(event.termin)}, ${getFormattedTime(event.termin)}`}
                {event.czasowe && `do ${getFormattedDate(event.termin)}`}
              </BoldText>
            </p>
            <p className="detailWithIcon">
              <img className="icon" src="/img/icons/location.png" alt="" />
              <div><BoldText weight='500'>{event.miejscowosc}</BoldText>, {event.lokalizacja}</div>
            </p>
            <p className="detailWithIcon">
              <img className="icon" src="/img/icons/web.png" alt="" />
              <a className="website" href={event.stronaInternetowa}>{event.stronaInternetowa}</a>
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
