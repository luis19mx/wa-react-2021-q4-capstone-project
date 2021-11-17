import React from 'react';
import { Provider } from 'react-redux';
import initialStore from 'utils/fixtures/initialStore.mock';
import { createTestStore } from 'utils/test-utils/createTestStore';

const store = createTestStore(initialStore);

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);