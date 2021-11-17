import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from 'store';

export function createTestStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState,
  });
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  return store;
}
