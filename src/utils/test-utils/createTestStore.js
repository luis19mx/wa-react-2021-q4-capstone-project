import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'store';

export function createTestStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  return store;
}
