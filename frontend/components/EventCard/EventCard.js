import { useState } from "react";
import Image from "next/image";
import S from "./Styled";
import { getFormattedDate, getFormattedTime } from "../../utils/formatDate";
import BoldText from "../shared/BoldText";

const EventsCard = ({ event, sponsored }) => {
  const [descExpanded, setDescExpanded] = useState(false);
  
  const handleExpanding = () => {
    setDescExpanded(prevState => !prevState);
  };

  return (
    <S.Wrapper sponsored={sponsored} descExpanded={descExpanded}>
      <div className="top">
        <div className="thumbnail">
          <Image src={event.miniaturka} layout='fill' objectFit="cover" alt="" />
        </div>
        <div className="right">
          <h4 className="title">{event.tytul}</h4>
          <div className="detailWithIcon">
            <img className="icon" src="/img/icons/calendar.png" alt="" />
            <p>
              <BoldText weight="500">
                {!event.czasowe &&
                  `${getFormattedDate(event.termin)}, ${getFormattedTime(event.termin)}`}
                {event.czasowe && `do ${getFormattedDate(event.termin)}`}
              </BoldText>
            </p>
          </div>
          <div className="detailWithIcon">
            <img className="icon" src="/img/icons/location.png" alt="" />
            <p>
              <BoldText weight="500">{event.miejscowosc}</BoldText>, {event.lokalizacja}
            </p>
          </div>
          <div className="detailWithIcon">
            <img className="icon" src="/img/icons/web.png" alt="" />
            <a className="website" href={event.stronaInternetowa}>
              {event.stronaInternetowa}
            </a>
          </div>
          <p className="ticket">wstęp: {event.wstep}</p>
        </div>
      </div>
      <p className="description">{event.opis}</p>
      <button className="expand-btn" onClick={handleExpanding}>
        {descExpanded ? "zwiń opis..." : "rozwiń opis..."}
      </button>
    </S.Wrapper>
  );
};

export default EventsCard;
