import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from 'utils/test-utils/render';
import App from 'components/App';
import {
  useFetchFeaturedBanners,
  useFetchFeaturedProduct,
  useIsPageLoading,
} from 'utils/hooks';

describe('/home', () => {
  it('renders the home page', async () => {
    const { Wrapper } = render(<App />, {
      route: '/home',
    });

    const { waitForNextUpdate: waitForBannerNextUpdate } = renderHook(
      () => useFetchFeaturedBanners(),
      { wrapper: Wrapper }
    );

    const { waitForNextUpdate: waitForFeaturedNextUpdate } = renderHook(
      () => useFetchFeaturedProduct(),
      { wrapper: Wrapper }
    );

    await waitForBannerNextUpdate();
    await waitForFeaturedNextUpdate();

    const { waitFor } = renderHook(() => useIsPageLoading(false, false, false));

    await waitFor(() => {
      const featuredBanners = screen.getByTestId('featured-banners');
      const productCategories = screen.getByTestId('product-categories');
      const featuredProduct = screen.getByTestId('product-details');

      expect(featuredBanners).toBeInTheDocument();
      expect(productCategories).toBeInTheDocument();
      expect(featuredProduct).toBeInTheDocument();
    });
  });
});
