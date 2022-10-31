import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { secondsToMinutes } from '../helpers';

import { setTimerCounter } from '../../../store/slices/timer';
export const useCounterTimer = () => {
  const { counter } = useSelector(state => state.timer);
  const dispatch = useDispatch();
  const { minutes, seconds } = secondsToMinutes(200);

  useEffect(() => {
    dispatch(
      setTimerCounter({
        minutes: minutes.toString(),
        seconds: seconds.toString(),
      })
    );
  });

  return { counter };
};
