import { renderHook } from '@testing-library/react-hooks';
import { ReduxProvider } from 'utils/test-utils/ReduxProvider';
import { useFetchFeaturedBanners } from './useFetchFeaturedBanners';
import { useFetchFeaturedProduct } from './useFetchFeaturedProduct';
import { useFetchSingleProduct } from './useFetchSingleProduct';
import { useIsPageLoading } from './useIsPageLoading';

describe('useFetchFeaturedBanners', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate: nextBanners } = renderHook(
      () => useFetchFeaturedBanners(),
      { wrapper: ReduxProvider }
    );

    expect(result.current.featuredBanners).toStrictEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await nextBanners();

    expect(result.current.featuredBanners.length).toBeTruthy();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});

describe('useFetchFeaturedProduct', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchFeaturedProduct(),
      { wrapper: ReduxProvider }
    );

    expect(result.current.product).toBe(null);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.product.name).toBe('Grayton Armchair');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});

describe('useFetchSingleProduct', () => {
  const productId = 'YWJI7hIAACkAy8Cv';

  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchSingleProduct(productId),
      { wrapper: ReduxProvider }
    );

    expect(result.current.product).toBe(null);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.product.id).toBe('YWJI7hIAACkAy8Cv');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});

describe('useIsPageLoading', () => {
  const { result, rerender } = renderHook(
    ({ args }) => useIsPageLoading(...args),
    {
      initialProps: { args: [true, false, false] },
    }
  );

  it('returns true if some loader is still loading', async () => {
    expect(result.current).toBeTruthy();
  });

  it('returns false when all loaders are false', async () => {
    rerender({ args: [false, false, false] });

    expect(result.current).toBeFalsy();
  });
});
