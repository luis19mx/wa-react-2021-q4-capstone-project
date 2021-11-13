import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { createTestStore } from 'utils/test-utils/createTestStore';

export default function renderWithProviders(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = {},
  } = {}
) {
  const store = createTestStore(initialState);

  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
    store,
    Wrapper,
  };
}
