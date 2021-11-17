import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import { createTestStore } from 'utils/test-utils/createTestStore';
import initialStore from 'utils/fixtures/initialStore.mock';

function renderWithProviders(
  ui,
  {
    route = '/',
    preloadedState = initialStore,
    history = createMemoryHistory({ initialEntries: [route] }),
    store = createTestStore(preloadedState),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
    store,
    Wrapper,
  };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders as render };
