import { createSlice } from '@reduxjs/toolkit';
import fetchCategories from './fetch';

const initialState = {
  categories: [],
  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const categories = action.payload.results?.map(
          ({ id, data: category }) => ({ id, category })
        );
        state.categories = categories;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { default as fetchCategories } from './fetch';

export default categoriesSlice.reducer;
