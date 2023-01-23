import { useEffect, useState } from "react";
import { generate } from "shortid";
import ClockList from "./components/clock-list/ClockList";
import LocalClock from "./components/local-clock/LocalClock";
import useEvents from "./hooks/useEvents";

const LOCAL_CLOCK_INIT = {
  title: "Real-Time",
  timeZone: "UTC",
  offset: 0,
  date: null,
};
const App = () => {
  const [Localclock, setLocalclock] = useState({ ...LOCAL_CLOCK_INIT });
  const [Clocks, setClocks] = useState([]);

  // ------------------testing--------------------

  // ------------------testing--------------------

  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem("clocks"));
    if (dataFromStorage) {
      setClocks(dataFromStorage);
    }
  }, []);

  const updateLocalClock = (data) => {
    setLocalclock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  const updatedClock = (updetedData) => {
    const ud = Clocks.map((clock) => {
      if (clock.id === updetedData.id) {
        return updetedData;
      }
      return clock;
    });
    setClocks(ud);
  };
  const deleteClock = (id) => {
    const datas = Clocks.filter((clk) => clk.id !== id);
    setClocks(datas);
    localStorage.setItem("clocks", JSON.stringify(datas));
  };
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...Clocks, clock]);
    localStorage.setItem("clocks", JSON.stringify([...Clocks, clock]));
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
        updatedClock={updatedClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default App;
