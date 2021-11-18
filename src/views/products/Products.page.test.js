import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { server } from 'utils/test-utils/server';
import { render, screen, fireEvent } from 'utils/test-utils/render';
import App from 'components/App';
import { useFetchProductList } from 'views/products/hooks';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('/products', () => {
  it('renders the products', async () => {
    const { Wrapper, store } = render(<App />, {
      route: '/products',
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

  it('should update history.location.state on click to next link', async () => {
    const { Wrapper, history } = render(<App />, {
      route: '/products',
    });

    const { waitForNextUpdate } = renderHook(() => useFetchProductList(), {
      wrapper: Wrapper,
    });

    await waitForNextUpdate();

    expect(history.location.state).toBeUndefined();

    const nextPageLink = screen.getByRole('link', { name: '›' });
    fireEvent.click(nextPageLink);

    const paginationLink = history.location.state.paginationLink;
    expect(paginationLink).toBeTruthy();
    expect(paginationLink).toContain('page=2');
  });
});
