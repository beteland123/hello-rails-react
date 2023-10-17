import { configureStore } from '@reduxjs/toolkit';
import greattingReducer from './greeting/greettingSlice';

const store = configureStore({
  reducer: {
    greatting: greattingReducer,
  },
});

export default store;