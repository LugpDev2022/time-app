import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTimer } from "../../../store/slices/timer/timerSlice";

export const useNewTimer = () => {
  const dispatch = useDispatch();
  const [newTimer, setNewTimer] = useState({
    minutes: "0",
    seconds: "00",
  });

  const navigate = useNavigate();

  const handleAccept = () => {
    const action = {
      minutes: newTimer.minutes,
      seconds: newTimer.seconds,
    };
    dispatch(setTimer(action));
    navigate("/timer");
  };

  const handleIncrementTimer = () => {
    //TODO: Disable accept button when timer is 0:00

    const seconds = parseInt(newTimer.seconds);
    const minutes = parseInt(newTimer.minutes);

    if (minutes === 59 && seconds >= 55) {
      setNewTimer({
        minutes,
        seconds: "59",
      });
      setDisabledButtons({
        ...disabledButtons,
        increaseButtonDisabled: true,
      });
      return;
    }

    if (seconds === 55) {
      setNewTimer({
        minutes: (minutes + 1).toString(),
        seconds: "00",
      });
      return;
    }

    if (seconds === 0) {
      setNewTimer({
        minutes,
        seconds: "0" + (seconds + 5).toString(),
      });
      return;
    }

    setNewTimer({
      minutes,
      seconds: (seconds + 5).toString(),
    });
  };

  const handleDecrementTimer = () => {
    const seconds = parseInt(newTimer.seconds);
    const minutes = parseInt(newTimer.minutes);

    if (seconds === 0 && minutes >= 1) {
      setNewTimer({
        minutes: (minutes - 1).toString(),
        seconds: "55",
      });
      return;
    }

    if (seconds === 10 || seconds === 5) {
      setNewTimer({
        minutes,
        seconds: "0" + (seconds - 5).toString(),
      });
      return;
    }

    if (seconds === 0 && minutes === 0) {
      return;
    }

    setNewTimer({
      minutes,
      seconds: (seconds - 5).toString(),
    });
  };

  return {
    newTimer,
    handleAccept,
    handleIncrementTimer,
    handleDecrementTimer,
  };
};
