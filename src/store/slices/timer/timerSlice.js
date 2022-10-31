import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    counter: {
      minutes: '00',
      seconds: '00',
    },
  },
  reducers: {
    setTimerCounter: (state, action) => {
      if (action.payload.seconds.length === 1) {
        state.counter.minutes = action.payload.minutes;
        state.counter.seconds = '0' + action.payload.seconds;
        return;
      }

      state.counter.minutes = action.payload.minutes;
      state.counter.seconds = action.payload.seconds;
    },
  },
});

export const { setTimerCounter } = timerSlice.actions;
