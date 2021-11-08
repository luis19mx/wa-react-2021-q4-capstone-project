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
    decreaseItemQuantity: (state, action) => {
      const cartItem = action.payload;

      if (cartItem.quantity <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    increaseItemQuantity: (state, action) => {
      const cartItem = action.payload;

      state.cartItems = state.cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    removeItem: (state, action) => {
      const cartItem = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartItem.id
      );
    },
  },
});

export const {
  toggleCartVisibility,
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;

// SELECTORS
const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((count, { quantity }) => count + quantity, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((count, { quantity, price }) => count + quantity * price, 0)
);
