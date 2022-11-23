import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTimer } from "../../../store/slices/timer/timerSlice";
import { handleTimer } from "../helpers";

export const useNewTimer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isTimerValid, setIsTimerValid] = useState(false);
  const [newTimer, setNewTimer] = useState({
    minutes: "0",
    seconds: "00",
  });

  useEffect(() => {
    if (parseInt(newTimer.minutes) === 0 && parseInt(newTimer.seconds) === 0) {
      setIsTimerValid(false);
      return;
    }
    setIsTimerValid(true);
  }, [newTimer.seconds]);

  const handleAccept = () => {
    const payload = {
      minutes: newTimer.minutes,
      seconds: newTimer.seconds,
    };
    dispatch(setTimer(payload));
    navigate("/timer");
  };

  const handleIncrementTimer = () => {
    if (parseInt(newTimer.minutes) <= 59 && parseInt(newTimer.seconds) <= 55) {
      const timer = handleTimer(newTimer, "increment", 5);
      setNewTimer(timer);
    }
  };

  const handleDecrementTimer = () => {
    if (parseInt(newTimer.minutes) === 0 && parseInt(newTimer.seconds) === 0) {
      return;
    }
    const timer = handleTimer(newTimer, "decrement", 5);
    setNewTimer(timer);
  };

  return {
    isTimerValid,
    newTimer,
    handleAccept,
    handleIncrementTimer,
    handleDecrementTimer,
  };
};
