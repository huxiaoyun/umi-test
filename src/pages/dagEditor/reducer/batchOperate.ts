import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    searchNode: (state) => {
      console.log('selectNode');
    },
    selectNode: (state) => {
      console.log('selectNode');
    },
    deleteNode: (state) => {
      console.log('deleteNode');
    },
  },
});

export default counterSlice.reducer;
