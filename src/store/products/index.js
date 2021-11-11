import { createSlice } from '@reduxjs/toolkit';
import fetchProducts from './fetch';

const initialState = {
  products: [],
  pagination: null,
  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const {
          page,
          total_pages,
          next_page,
          prev_page,
          total_results_size,
          results,
        } = action.payload;

        const pagination = {
          activePage: page,
          totalPages: total_pages,
          nextPage: next_page,
          prevPage: prev_page,
          totalResults: total_results_size,
        };

        const products = results?.map(({ id, data: product }) => {
          return { id, product };
        });

        // out of stock functionality
        products[1].product.stock = 0;
        products[4].product.stock = 0;

        state.products = products;
        state.pagination = pagination;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { default as fetchProducts } from './fetch';

export default categoriesSlice.reducer;
