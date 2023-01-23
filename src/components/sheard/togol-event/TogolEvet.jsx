import React, { useState } from "react";
import EventsAll from "../../events_com/EventsAll";
const TogolEvet = ({ events }) => {
  const [eventShow, seteventShow] = useState(false);
  console.log(events.length);
  return (
    <>
      {Object.keys(events).length > 0 ? (
        <button onClick={() => seteventShow(!eventShow)}>show events</button>
      ) : (
        <p>no events</p>
      )}

      {eventShow && <EventsAll />}
    </>
  );
};

export default TogolEvet;
