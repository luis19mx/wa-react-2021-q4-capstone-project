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
        const data = { ...action.payload };

        const pagination = {
          activePage: data.page,
          totalPages: data.total_pages,
          nextPage: data.next_page,
          prevPage: data.prev_page,
          totalResults: data.total_results_size,
        };

        const products = data.results?.map(({ id, data: product }) => {
          return { id, product };
        });

        products[0].product.stock = 0;
        products[4].product.stock = 0;
        console.log(products.map(({product}) => product.stock))

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
