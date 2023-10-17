import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const response = await fetch('/greetings/random');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  greetings: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greetings = action.payload;
    });
  },
});
export const getGreeting = (state) => state.greetings.greetings;
export default greetingSlice.reducer;