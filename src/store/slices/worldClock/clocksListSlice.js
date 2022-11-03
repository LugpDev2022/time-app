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
        id: '123',
      },
    ],
    chargingData: true,
    error: {
      isError: false,
      type: '',
    },
  },

  reducers: {
    addClock: (state, action) => {
      state.worldClocks.push({
        city: action.payload.city,
        date: '00/00/00',
        clock: '00:00',
      });
    },

    handleError: (state, action) => {
      state.error.isError = true;
      state.error.type = action.payload.errorType;
    },

    resetError: state => {
      state.error.isError = false;
      state.error.type = '';
    },
  },
});

export const { addClock, handleError, resetError } = clocksListSlice.actions;
