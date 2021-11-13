import { renderHook } from '@testing-library/react-hooks';
import { useIsPageLoading } from './useIsPageLoading';

describe.only('useIsPageLoading', () => {
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
