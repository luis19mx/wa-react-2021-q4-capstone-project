import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { createTestStore } from 'utils/test-utils/createTestStore';
import initialStore from 'utils/fixtures/initialStore.mock';
import { useFetchSingleProduct } from './useFetchSingleProduct';

describe('useFetchSingleProduct', () => {
  it('returns expected initial state', async () => {
    const store = createTestStore(initialStore);

    const { result, waitForNextUpdate } = renderHook(
      ({ productId }) => useFetchSingleProduct(productId),
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
        initialProps: { productId: 'YWJI7hIAACkAy8Cv' },
      }
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
