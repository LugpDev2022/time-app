import { createSlice } from '@reduxjs/toolkit';

export const clocksListSlice = createSlice({
  //TODO: fetch the api to get the data

  name: 'clocksList',
  initialState: {
    worldClocks: [
      {
        city: 'Quebec',
        date: '00/00/00',
        clock: '00:00',
      },
    ],
    chargingData: true,
    error: false,
  },

  reducers: {
    addClock: (state, action) => {
      state.worldClocks.push({
        city: action.payload.city,
        date: '00/00/00',
        clock: '00:00',
      });
    },
  },
});

export const { addClock } = clocksListSlice.actions;
