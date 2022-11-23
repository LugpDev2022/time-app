import { secondsToMinutes, minutesToSeconds } from "./";

export const handleTimer = (timer, operation = "increment", quantity = 1) => {
  const timerMinutes = parseInt(timer.minutes);
  const timerSeconds = parseInt(timer.seconds);

  const timerInSeconds = minutesToSeconds(timerMinutes) + timerSeconds;

  let newTimerInSeconds = 1;

  if (operation === "increment") {
    newTimerInSeconds = timerInSeconds + quantity;
  } else if (operation === "decrement") {
    newTimerInSeconds = timerInSeconds - quantity;
  }

  const { minutes, seconds } = secondsToMinutes(newTimerInSeconds);

  const newMinutes = minutes.toString();
  const newSeconds = seconds.toString();

  if (newSeconds.length < 2) {
    return {
      minutes: newMinutes,
      seconds: "0" + newSeconds,
    };
  }

  return {
    minutes: newMinutes,
    seconds: newSeconds,
  };
};
