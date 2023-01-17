import { useEffect, useState } from "react";
import { TIME_ZONE_OFFSETS } from "../../utils/utils";

const Clock__Form = ({ title = true, edit = false, hendelClock, formName }) => {
  const [FormState, setFormState] = useState({
    title: "",
    timeZone: "UTC",
    offset: 0,
  });

  useEffect(() => {
    if (TIME_ZONE_OFFSETS[FormState.timeZone]) {
      setFormState((prev) => ({
        ...prev,
        offset: TIME_ZONE_OFFSETS[FormState.timeZone],
      }));
    }
  }, [FormState.timeZone]);

  const hendelChenge = (e) => {
    let { name, value } = e.target;

    name === "offset" && (value = +value * 60);
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    hendelClock(FormState);
  };
  return (
    <form onSubmit={hendelSubmit}>
      <h1>{formName}</h1>
      <div className="title">
        <label htmlFor="title">eneter title</label>
        <input
          type="text"
          id="title"
          value={FormState.title}
          disabled={!title}
          name={"title"}
          onChange={hendelChenge}
        />
      </div>
      <div className="timeZone">
        <label htmlFor="timeZone">eneter timeZone</label>
        <input
          type="text"
          id="timeZone"
          value={FormState.timeZone}
          name={"timeZone"}
          onChange={hendelChenge}
        />
      </div>
      <div className="offset">
        <label htmlFor="offset">eneter offset</label>
        <input
          type="text"
          id="offset"
          name={"offset"}
          onChange={hendelChenge}
          value={FormState.offset}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Clock__Form;
