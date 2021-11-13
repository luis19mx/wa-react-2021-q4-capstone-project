import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import renderWithProviders from 'utils/test-utils/renderWithProviders';
import initialStore from 'utils/fixtures/initialStore.mock';
import App from 'components/App';
import {
  useFetchFeaturedBanners,
  useFetchFeaturedProduct,
  useIsPageLoading,
} from 'utils/hooks';

describe('/home', () => {
  it('renders the home page', async () => {
    const { Wrapper, getByTestId } = renderWithProviders(<App />, {
      route: '/home',
      initialState: initialStore,
    });

    const { waitForNextUpdate: waitForBannerNextUpdate } = renderHook(
      () => useFetchFeaturedBanners(),
      { wrapper: Wrapper }
    );

    await waitForBannerNextUpdate();

    const { waitForNextUpdate: waitForFeaturedNextUpdate } = renderHook(
      () => useFetchFeaturedProduct(),
      { wrapper: Wrapper }
    );

    await waitForFeaturedNextUpdate();

    renderHook(({ args }) => useIsPageLoading(...args), {
      initialProps: { args: [false, false, false] },
    });

    const featuredBanners = getByTestId('featured-banners');
    const productCategories = getByTestId('product-categories');
    const featuredProduct = getByTestId('product-details');

    expect(featuredBanners).toBeInTheDocument();
    expect(productCategories).toBeInTheDocument();
    expect(featuredProduct).toBeInTheDocument();
  });
});
