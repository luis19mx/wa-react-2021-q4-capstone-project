import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  cartIsHidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartVisibility: (state) => {
      state.cartIsHidden = !state.cartIsHidden;
    },
    addItemToCart: (state, action) => {
      const cartItemToAdd = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
      );
      console.log(existingCartItem);
      console.log('indexOf');

      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems.push({ ...cartItemToAdd, quantity: 1 });
      }
    },
  },
});

export const { toggleCartVisibility, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;

// SELECTORS
const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((count, { quantity }) => count + quantity, 0)
);
