import { configureStore } from '@reduxjs/toolkit';
import { timerSlice } from './slices/timer';
import { clocksListSlice } from './slices/worldClock/clocksListSlice';

export const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    clocksList: clocksListSlice.reducer,
  },
});
