import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    counter: {
      minutes: '10',
      seconds: '00',
    },
    isRunning: false,
  },
  reducers: {
    toggleRunnig: state => {
      state.isRunning = !state.isRunning;
    },
    decrementTime: state => {
      console.log('decrementTime');
    },
  },
});

export const { toggleRunnig, decrementTime } = timerSlice.actions;
