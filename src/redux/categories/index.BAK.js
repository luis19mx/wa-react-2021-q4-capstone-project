import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: true,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categoriesData.map(
        ({ category: { name } }) => name
      );
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
