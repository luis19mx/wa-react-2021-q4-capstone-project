import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import apiMetaDataReducer from './apiMetaData';
import categoriesReducer from './categories';
import cartReducer from './cart';
import productsReducer from './products';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const rootReducer = {
  apiMetaData: apiMetaDataReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  products: productsReducer,
}

export default configureStore({
  reducer: rootReducer,
  middleware,
});
