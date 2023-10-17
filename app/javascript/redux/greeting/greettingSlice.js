import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const response = await fetch('/greetings/random');
    const data = await response.json();
    return data.greeting; 
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  greeting: null, 
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload; 
    });
  },
});

export const getGreeting = (state) => state.greeting.greeting; 
export default greetingSlice.reducer;