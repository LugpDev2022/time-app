export const secondsToMinutes = (s = 0) => {
  const minutes = parseInt(s / 60);
  const seconds = s - 60 * minutes;

  return { minutes, seconds };
};
