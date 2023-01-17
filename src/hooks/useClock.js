import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIME_ZONE_OFFSETS } from "../utils/utils";

/**
 * useClock Hook
 * @param {String} timeZone [PST , UTC, GMT]
 * @param {number} offset [-12 -> 12]
 */
const useClock = (timeZone, offset) => {
  const [UTC, setUTC] = useState(null);
  const [LocalOffset, setLocalOffset] = useState(0);
  const [LocalDate, setLocalDate] = useState(null);
  const [LocalTimezone, setLocalTimezone] = useState(null);

  // This will create your current UTC time.
  useEffect(() => {
    // This `date` will reprasent your current date and time.
    let date = new Date();
    // `Loffset` will return the deffrence between your time and UTC time in minutes. -360 (-6 hours). it means that it is 6 hours behind UTC.
    const Loffset = date.getTimezoneOffset();
    // This will return a new Date object that represents the original date, but with the time zone offset added to it. if your time is 12:00PM and Offset is -360/-6 hours, then it will be 6:00AM. (if your offset '0' then its return ORG time not UTC)
    date = addMinutes(date, Loffset);
    setUTC(date);
    setLocalOffset(Loffset);
  }, []);

  useEffect(() => {
    // if UTC not equal to null then the code will run.
    if (UTC !== null) {
      // if user pass any specific timezone then it will run.
      if (timeZone) {
        // if the timezone gevin by user, is that availble on my 'TIME_ZONE_OFFSETS' Object, then offset = that timezone offset otherwise defualt offset.
        offset = TIME_ZONE_OFFSETS[timeZone] ?? offset;
        const newUTC = addMinutes(UTC, offset);
        setLocalDate(newUTC);
      }
      // if user did not pass anything then it will run.
      else {
        // It will subtract the localOffset variable from the provided UTC time. This will convert the UTC time to the local time based on the offset.
        const newUtc = addMinutes(UTC, -LocalOffset);
        // convert the new UTC time to a string in the format "Day, DD Mon YYYY HH:MM:SS GMT". then split the string by the space character, creating an array of substrings.
        const dateStringArr = newUtc.toUTCString().split(" ");
        setLocalDate(newUtc);
        // I need timezone so I cut the last eliment of the array and stored in LocalTimezone state.
        setLocalTimezone(dateStringArr.pop());
      }
    }
  }, [UTC, timeZone, offset]);
  return {
    date: LocalDate,
    dateUTC: UTC,
    offset: offset || -LocalOffset,
    timeZone: timeZone || LocalTimezone,
  };
};

export default useClock;
