import { format } from "date-fns";

function Clock_Display({ date, title, timeZone, offset }) {
  console.log(date);
  //  converting the offset, munite to hour just for displaying.
  const offsetHour = offset / 60;
  return (
    <div>
      {date && (
        <div>
          <h2 className="title">{title}</h2>
          <div className="card">
            {/* date-fns formate function. Its work just displaying date buityfully. */}
            <h1>{format(date, "yyyy-MM-dd <-> hh:mm:ss aaa")}</h1>
          </div>
          <p>
            {timeZone}
            {/* the code is determined that of sing is plus then your local time is ${offset} hour ahead of UTC time zone or if the sign is munis then your local time is ${offset} hour behind of UTC time zone. */}
            {offsetHour > 0
              ? `+${Math.abs(offsetHour)}`
              : `-${Math.abs(offsetHour)}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default Clock_Display;
