import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSetCategories } from './useSetCategories';

export function useUpdateUrlParamsWithActiveFilters(filters) {
  const history = useHistory();
  const { state } = useLocation();
  const categories = useSetCategories();

  useEffect(() => {
    const activeCategories = categories.filter((category) => filters[category]);
    const search = activeCategories.length
      ? `?category=${encodeURIComponent(activeCategories.join(','))}`
      : '';

    history.replace({
      search,
      state,
    });
  }, [categories, filters, history, state]);
}
