import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import categoriesReducer from './categories';
import cartReducer from './cart';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
  },
  middleware,
});
