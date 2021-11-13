import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { createTestStore } from 'utils/test-utils/createTestStore';
import initialStore from 'utils/fixtures/initialStore.mock';
import { useFetchFeaturedBanners } from './useFetchFeaturedBanners';

describe('useFetchFeaturedBanners', () => {
  it('returns expected initial state', async () => {
    const store = createTestStore(initialStore);

    const { result, waitForNextUpdate } = renderHook(
      () => useFetchFeaturedBanners(),
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    expect(result.current.featuredBanners).toStrictEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.featuredBanners.length).toBeTruthy();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
