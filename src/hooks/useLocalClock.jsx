import { useState, useEffect } from 'react';

export const useLocalClock = () => {
  const [{ hours, minutes }, setTime] = useState({
    hours: new Date().getHours().toString(),
    minutes: new Date().getMinutes().toString(),
  });

  useEffect(() => {
    if (hours.length < 2) {
      setTime({ minutes, hours: `0${hours}` });
    }

    if (minutes.length < 2) {
      setTime({ minutes: `0${minutes}`, hours });
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const newMinutes = date.getMinutes().toString();
      const newHour = date.getHours().toString();

      if (minutes !== newMinutes) {
        if (newMinutes.length < 2) {
          setTime({ hours, minutes: `0${newMinutes}` });
          return;
        }

        setTime({ hours, minutes: newMinutes });
      }

      if (hours !== newHour) {
        if (newHour.length < 2) {
          setTime({ minutes, hours: `0${newHour}` });
          return;
        }

        setTime({ minutes, hours: newHour });
      }
    }, 5000);
  }, []);

  return { hours, minutes };
};
