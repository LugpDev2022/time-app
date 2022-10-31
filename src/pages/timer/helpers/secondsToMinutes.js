export const secondsToMinutes = s => {
  const minutes = parseInt(s / 60);
  const seconds = s - 60 * minutes;

  return { minutes, seconds };
};
