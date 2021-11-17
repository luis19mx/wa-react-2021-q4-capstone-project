import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from 'utils/test-utils/render';
import App from 'components/App';
import { useFetchProducts } from 'utils/hooks';

const searchParam = 'armchair';

describe('/search', () => {
  it('renders the product list', async () => {
    const { Wrapper } = render(<App />, {
      route: `/search?q=${searchParam}`,
    });

    const { result, waitFor } = renderHook(
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
  });
});
