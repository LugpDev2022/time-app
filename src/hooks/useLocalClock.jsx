import { useState, useEffect } from 'react';

export const useLocalClock = () => {
  const [{ hours, minutes }, setTime] = useState({
    hours: new Date().getHours().toString(),
    minutes: new Date().getMinutes().toString(),
  });

  if (hours.length < 2) {
    setTime({ minutes, hours: '0' + hours });
  }

  if (minutes.length < 2) {
    setTime({ minutes: '0' + minutes, hours });
  }

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const newMinutes = date.getMinutes().toString();
      const newHours = date.getHours().toString();

      if (minutes !== newMinutes) {
        setTime({ hours: newHours, minutes: newMinutes });
      }
    }, 5000);
  }, []);

  return { hours, minutes };
};
