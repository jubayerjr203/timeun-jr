import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import Clock__action from "../sheard/clock-action";
import Clock_Display from "../sheard/clock-display";

const LocalClock = ({ updatedClock, createClock, clock }) => {
  console.log("clock---->", clock);
  // here your Time will be UTC time. Becuase the clock.timezone and offset is defualt. so that useClock hooks will return UTC time.
  // while we do not use the useEffect.
  const { date, offset, timeZone } = useClock(clock.timeZone, clock.offset);
  // if we did not use this useEffect, then my crrunt local time was not showing in Local clock. On the contrary showing current UTC time. when the date (coming from useClock) chenged, we pass the data in Main Localclock State through updatedClock function.
  useEffect(() => {
    updatedClock({
      date,
      timeZone,
      offset,
    });
  }, [date]);

  return (
    <div>
      <Clock_Display
        date={date}
        title={clock.title}
        offset={offset}
        timeZone={timeZone}
      />
      <br />
      <Clock__action
        local={true}
        updatedClock={updatedClock}
        createClock={createClock}
      />
    </div>
  );
};

export default LocalClock;
