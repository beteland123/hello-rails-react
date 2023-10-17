import { configureStore } from '@reduxjs/toolkit';
import greattingReducer from './greeting/greettingSlice';

const store = configureStore({
  reducer: {
    greetings: greattingReducer,
  },
});

export default store;