import { createSlice } from '@reduxjs/toolkit';

export const clocksListSlice = createSlice({
  name: 'clocksList',
  initialState: {
    worldClocks: [],
    chargingData: true,
    error: false,
  },

  reducers: {},
});

export const {} = clocksListSlice.actions;
