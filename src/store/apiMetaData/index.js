import { createSlice } from '@reduxjs/toolkit';
import fetchMetaData from './fetch';

const initialState = {
  ref: '',
  isLoading: true,
};

export const apiMetaDataSlice = createSlice({
  name: 'apiMetaData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetaData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMetaData.fulfilled, (state, action) => {
        state.ref = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMetaData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { default as fetchMetaData } from './fetch';

export default apiMetaDataSlice.reducer;
