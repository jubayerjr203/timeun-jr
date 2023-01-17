import React from "react";
import ClockListItem from "./ClockListItem";

const ClickList = ({ clocks, date, updatedClock, deleteClock }) => {
  return (
    <>{clocks.length === 0 ? <p>no clock available</p> : <ClockListItem />}</>
  );
};

export default ClickList;
