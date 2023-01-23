import { addSeconds } from "date-fns";
import React, { useEffect, useState } from "react";

const useTimer = (date) => {
  const [timer, settimer] = useState(date);

  useEffect(() => {
    settimer(date);
  }, [date]);

  let timerHelper = null;

  useEffect(() => {
    if (!timer || timerHelper !== null) return;
    timerHelper = setInterval(() => {
      settimer(addSeconds(timer, 1));
    }, 1000);

    return () => clearInterval(timerHelper);
  }, [timer]);
  return timer;
};

export default useTimer;
