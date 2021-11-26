import { createSlice } from '@reduxjs/toolkit';
import fetchProducts from './fetch';

const initialState = {
  products: [],
  pagination: null,
  isLoading: true,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProductStock: (state, action) => {
      const productId = action.payload;
      const index = state.products.findIndex(({ id }) => id === productId);

      if (index > -1) {
        const product = state.products[index];
        state.products[index] = {
          ...product.id,
          product: {
            ...product.product,
            stock: product.product.stock - 1,
          },
        };
      }
    },
  },
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

        // state.products.map((product) => {});

        // if (state.products.length) {
        //   products.forEach((product) => {
        //     const isInStore = state.products.find(
        //       (storeProduct) => storeProduct.id === product.id
        //     );
        //   });
        // } else {}

        state.products = products;
        state.pagination = pagination;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { updateProductStock } = productSlice.actions;

export { default as fetchProducts } from './fetch';

export default productSlice.reducer;
