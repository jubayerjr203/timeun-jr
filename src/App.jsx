import ClockList from "./components/clock-list/ClockList";
import LocalClock from "./components/local-clock/LocalClock";
import useClock from "./hooks/useClock";

const App = () => {
  const { date, dateUTC } = useClock();

  console.log(`[title: ${date}]`, "-|-", `[date utc: ${dateUTC}]`);
  return (
    <div className="app">
      <LocalClock />
      <ClockList />
    </div>
  );
};

export default App;
