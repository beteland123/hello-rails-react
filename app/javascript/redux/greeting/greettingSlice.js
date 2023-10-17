import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const response = await axios.get('/greetings/random');
    return response.data.greeting; // Assuming the server response has a 'greeting' property
  } catch (error) {
    throw new Error(error);
  }
});

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingSlice.reducer;