import React, { useState } from "react";

const EventForm = ({ createEvent, clockId }) => {
  const [FormState, setFormState] = useState({});
  const henlsubmit = (e) => {
    e.preventDefault();
    FormState.clockId = clockId;
    createEvent(FormState);
  };
  const hendelChenge = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={henlsubmit}>
      <div className="form_child">
        <input
          name="title"
          value={FormState.value}
          onChange={hendelChenge}
          type="text"
          placeholder="event name"
        />
      </div>
      <div className="form_child">
        <input
          name="started"
          value={FormState.started}
          onChange={hendelChenge}
          type="date"
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default EventForm;
