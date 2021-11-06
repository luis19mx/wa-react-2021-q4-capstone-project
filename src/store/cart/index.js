import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  cartIsHidden: true,
  cartItems: [
    {
      id: 'YWMCzxIAACkAzwFP',
      name: 'Thatcher Armchair',
      price: 1931.13,
      img: {
        dimensions: {
          width: 696,
          height: 900,
        },
        alt: 'Thatcher Armchair',
        copyright: null,
        url: 'https://images.prismic.io/wizeline-academy/de78ba20-fbd5-45d6-92ef-8d7d6f55d2ad_1.webp?auto=compress,format',
      },
      quantity: 1,
    },
    {
      id: 'YWJKhBIAACkAy8ew',
      name: 'Tyler Poly Reclining Leather Armchair',
      price: 2124.25,
      img: {
        dimensions: {
          width: 696,
          height: 900,
        },
        alt: 'Tyler Poly Reclining Leather Armchair',
        copyright: null,
        url: 'https://images.prismic.io/wizeline-academy/6b30b79d-12c6-4411-9808-2f629d141afe_1.webp?auto=compress,format',
      },
      quantity: 6,
    },
    {
      id: 'YWL8XBIAAC0AzuPZ',
      name: 'Tallulah Sofa Gray',
      price: 1834.57,
      img: {
        dimensions: {
          width: 696,
          height: 900,
        },
        alt: 'Tallulah Sofa Gray',
        copyright: null,
        url: 'https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format',
      },
      quantity: 1,
    },
  ],
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

export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((count, { quantity, price }) => count + quantity * price, 0)
);
