import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventStart, formatDuration } from "../../utils";
import { iconSize } from "../../constants";
import { Event, EventTitle, EventInfo, EventChip } from "./EventCard.styled";

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const formatedDuration = formatDuration(start, end);

  // console.log(css);
  // console.log(type);
  // console.log(css[type]);

  return (
    <Event>
      <EventTitle>{name}</EventTitle>
      <EventInfo>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedStart}
      </EventInfo>
      <EventInfo>
        <FaClock size={iconSize.sm} />
        {formatedDuration}
      </EventInfo>
      <EventChip eventType={type}>{type}</EventChip>
    </Event>
  );
};

// className={`${css.chip} ${css[type]}`}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
