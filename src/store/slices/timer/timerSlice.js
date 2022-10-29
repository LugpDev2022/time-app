import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    counter: {
      minutes: '00',
      seconds: '00',
    },
  },
  reducers: {},
});

export const { increment } = timerSlice.actions;
