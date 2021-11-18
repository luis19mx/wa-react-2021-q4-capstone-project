import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { server } from 'utils/test-utils/server';
import { render, screen } from 'utils/test-utils/render';
import App from 'components/App';
import { useFetchProducts } from 'utils/hooks';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('/search', () => {
  it('renders the product list from search param', async () => {
    const searchParam = 'armchair';

    const { Wrapper } = render(<App />, {
      route: `/search?q=${searchParam}`,
    });

    const { result, waitFor, waitForNextUpdate } = renderHook(
      ({ queryValue }) => useFetchProducts(...queryValue),
      {
        wrapper: Wrapper,
        initialProps: { queryValue: ['fullsearch', searchParam] },
      }
    );

    await waitFor(() => {
      screen.getByText(searchParam)
      screen.getByText(result.current.pagination.totalResults)
    });

    await waitForNextUpdate();
  });
});
