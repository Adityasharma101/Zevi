import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'string',
  initialState: '',
  reducers: {
    setString: (state, action) => {
      return action.payload;
    },
  },
});

export const { setString } = searchSlice.actions;

export default searchSlice.reducer;
