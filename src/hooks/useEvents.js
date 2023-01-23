import { useState } from "react";
import { generate } from "shortid";

function useEvents() {
  const [events, setevents] = useState({});

  const getEventByclockId = (clcockId) => {
    const event = Object.keys(events).filter((event) =>
      event.startsWith(clcockId)
    );
    return event;
  };

  const getEvent = (isArray = false) => {
    if (!isArray) return events;
    return Object.values(events);
  };

  const addEvent = (event) => {
    event.id = generate();
    const { id, clockId } = event;
    setevents((prev) => ({
      ...prev,
      [`${clockId}|${id}`]: event,
    }));
  };
  const deleteEvent = (id) => {
    const Fevents = { ...events };
    delete Fevents[id];
    setevents(Fevents);
  };
  const deleteEventByClockId = (clockId) => {
    return Object.keys(events).filter((event) => !event.startsWith(clockId));
  };
  const updateEvent = (updatedEvent, id) => {
    const Fevents = { ...events };
    Fevents[id] = {
      ...Fevents[id],
      ...updatedEvent,
    };
    setevents(Fevents);
  };
  return {
    events,
    addEvent,
    getEvent,
    getEventByclockId,
    deleteEvent,
    deleteEventByClockId,
    updateEvent,
  };
}

export default useEvents;
