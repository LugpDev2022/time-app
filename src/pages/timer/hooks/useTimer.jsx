import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementTime,
  toggleRunnig,
} from '../../../store/slices/timer/timerSlice';

export const useTimer = () => {
  const [intervalId, setIntervalId] = useState();
  const dispatch = useDispatch();
  const { counter, isRunning, isFinished } = useSelector(state => state.timer);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
      setIntervalId(interval);
      return;
    }

    clearInterval(intervalId);
  }, [isRunning]);

  const handlePlay = () => dispatch(toggleRunnig());

  return { counter, isFinished, isRunning, handlePlay };
};
