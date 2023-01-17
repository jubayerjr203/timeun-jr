import { useState } from "react";
import { generate } from "shortid";
import ClockList from "./components/clock-list/ClockList";
import LocalClock from "./components/local-clock/LocalClock";
import useClock from "./hooks/useClock";

const LOCAL_CLOCK_INIT = {
  title: "Real-Time",
  timeZone: "UTC",
  offset: 0,
  date: null,
};
const App = () => {
  const [Localclock, setLocalclock] = useState({ ...LOCAL_CLOCK_INIT });
  const [Clocks, setClocks] = useState([]);
  const updateLocalClock = (data) => {
    setLocalclock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  const updateClock = () => {};
  const deleteClock = () => {};
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...Clocks, clock]);
  };
  return (
    <div className="app">
      <LocalClock
        clock={Localclock}
        createClock={createClock}
        updatedClock={updateLocalClock}
      />
      <ClockList
        clocks={Clocks}
        date={Localclock.date}
        updatedClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default App;
