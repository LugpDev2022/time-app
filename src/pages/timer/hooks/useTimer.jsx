import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementTime,
  toggleRunnig,
} from '../../../store/slices/timer/timerSlice';
import alarmAudio from '../../../assets/alarm.mp3';
import clockTickAudio from '../../../assets/clock-tick.mp3';

export const useTimer = () => {
  const [intervalId, setIntervalId] = useState();
  const dispatch = useDispatch();
  const { counter, isRunning, isFinished } = useSelector(state => state.timer);

  useEffect(() => {
    const clockTick = new Audio(clockTickAudio);
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(decrementTime());
        clockTick.play();
      }, 1000);
      setIntervalId(interval);
      return;
    }

    clearInterval(intervalId);
  }, [isRunning]);

  if (isFinished) {
    const alarm = new Audio(alarmAudio);
    alarm.play();
  }

  const handlePlay = () => dispatch(toggleRunnig());

  return { counter, isFinished, isRunning, handlePlay };
};
