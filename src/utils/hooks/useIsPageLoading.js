import { useEffect, useMemo, useState } from 'react';

export function useIsPageLoading(...args) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const loaders = useMemo(() => args.some((loader) => loader), [args]);

  useEffect(() => {
    setIsPageLoading(loaders);
  }, [loaders]);

  return isPageLoading;
}
