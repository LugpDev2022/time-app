import { minutesToSeconds, secondsToMinutes } from "./";

export const incrementTimer = (timer, increment = 1) => {
  const timerMinutes = parseInt(timer.minutes);
  const timerSeconds = parseInt(timer.seconds);

  const timerInSeconds = minutesToSeconds(timerMinutes) + timerSeconds;

  const newTimerInSeconds = timerInSeconds + increment;

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
