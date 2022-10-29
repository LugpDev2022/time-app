import { configureStore } from '@reduxjs/toolkit';
import { timerSlice } from './slices/timer';

export const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
  },
});
