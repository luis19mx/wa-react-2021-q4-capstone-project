import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import renderWithProviders from 'utils/test-utils/renderWithProviders';
import initialStore from 'utils/fixtures/initialStore.mock';
import { useFetchSingleProduct } from 'utils/hooks';
import App from 'components/App';

describe('/product/:productId', () => {
  // it.only('/', () => {});
  it('renders the product', async () => {
    const { getByTestId, Wrapper } = renderWithProviders(<App />, {
      route: '/product/YWJI7hIAACkAy8Cv',
      initialState: initialStore,
    });

    const { result, waitForNextUpdate } = renderHook(
      ({ productId }) => useFetchSingleProduct(productId),
      {
        wrapper: Wrapper,
        initialProps: { productId: 'YWJI7hIAACkAy8Cv' },
      }
    );

    await waitForNextUpdate();

    const productEl = getByTestId('product-details');

    expect(result.current.product.id).toBe('YWJI7hIAACkAy8Cv');
    expect(productEl).toBeInTheDocument();
  });
});
