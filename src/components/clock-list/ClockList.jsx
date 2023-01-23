import React from "react";
import ClockListItem from "./ClockListItem";

const ClickList = ({ clocks, updatedClock, deleteClock }) => {
  return (
    <>
      {clocks.length === 0 ? (
        <p>no clock available</p>
      ) : (
        clocks.map((clock) => (
          <ClockListItem
            key={clock.id}
            updatedClock={updatedClock}
            deleteClock={deleteClock}
            clock={clock}
          />
        ))
      )}
    </>
  );
};

export default ClickList;
