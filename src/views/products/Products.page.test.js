import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen, fireEvent } from 'utils/test-utils/render';
import App from 'components/App';
import { useFetchProductList } from 'views/products/hooks';
import productsStore from 'utils/fixtures/productsStore.mock';

describe('/products', () => {
  it('renders the products', async () => {
    const { Wrapper, store } = render(<App />, {
      route: '/products',
      preloadedState: productsStore,
    });

    const { waitForNextUpdate } = renderHook(() => useFetchProductList(), {
      wrapper: Wrapper,
    });

    await waitForNextUpdate();

    const title = screen.getByText(/Our Products/);
    const prevPageLink = screen.queryAllByRole('link', { name: '<' });
    const nextPageLink = screen.getByRole('link', { name: '›' });

    expect(title).toBeInTheDocument();
    expect(prevPageLink).toHaveLength(0);
    expect(nextPageLink).toBeInTheDocument();
    expect(store.getState().products.products).toHaveLength(12);
  });
});
