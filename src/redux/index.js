import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import categoriesReducer from './categories';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
  middleware: [logger, thunk],
});
