import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    counter: {
      minutes: "25",
      seconds: "00",
    },
    isRunning: false,
    isFinished: false,
  },
  reducers: {
    toggleRunnig: (state) => {
      state.isRunning = !state.isRunning;
    },
    decrementTime: (state) => {
      const secondsInNumber = parseInt(state.counter.seconds);

      if (
        parseInt(state.counter.minutes) === 0 &&
        parseInt(state.counter.seconds) === 0
      ) {
        state.isRunning = false;
        state.isFinished = true;
        return;
      }

      if (secondsInNumber === 0) {
        state.counter.minutes = parseInt(state.counter.minutes) - 1;
        state.counter.seconds = "59";
        return;
      }
      if (secondsInNumber <= 10) {
        state.counter.seconds = "0" + (secondsInNumber - 1).toString();
        return;
      }

      state.counter.seconds = (secondsInNumber - 1).toString();
    },
    setTimer: (state, action) => {
      state.counter.minutes = action.payload.minutes;
      state.counter.seconds = action.payload.seconds;
      state.isFinished = false;
    },
  },
});

export const { toggleRunnig, decrementTime, setTimer } = timerSlice.actions;
