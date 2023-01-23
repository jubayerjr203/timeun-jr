import { useState } from "react";
import useClock from "../../hooks/useClock";
import useEvents from "../../hooks/useEvents";
import useTimer from "../../hooks/useTimer";
import EventForm from "../EventForm/EventForm";
import Clock__action from "../sheard/clock-action";
import Clock_Display from "../sheard/clock-display";
import TogolEvet from "../sheard/togol-event/TogolEvet";

const ClockListItem = ({ updatedClock, deleteClock, clock }) => {
  const { date } = useClock(clock.timeZone, clock.offset);
  const timer = useTimer(date);
  const { addEvent, events } = useEvents();
  const [eventCreate, seteventCreate] = useState(false);
  console.log("cli", events);
  return (
    <>
      {timer && (
        <Clock_Display
          title={clock.title}
          timeZone={clock.timeZone}
          date={timer}
          offset={clock.offset}
        />
      )}

      <Clock__action
        clock={clock}
        deleteClock={deleteClock}
        updatedClock={updatedClock}
      />
      <p>__|-|__</p>
      <button onClick={() => seteventCreate(!eventCreate)}>create event</button>
      <TogolEvet events={events} />
      {eventCreate && <EventForm clockId={clock.id} createEvent={addEvent} />}
    </>
  );
};

export default ClockListItem;
