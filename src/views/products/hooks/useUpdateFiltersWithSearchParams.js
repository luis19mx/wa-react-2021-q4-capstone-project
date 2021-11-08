import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetCategories } from './useSetCategories';

export function useUpdateFiltersWithSearchParams() {
  const [filters, setFilters] = useState({});
  const { search } = useLocation();
  const categories = useSetCategories();

  const categoriesSearch = useMemo(() => {
    console.log(search)
    const searchParams = new URLSearchParams(search);
    return searchParams.get('category');
  }, [search]);

  useEffect(() => {
    if (categoriesSearch) {
      setFilters({
        ...categories.reduce((categories, category) => {
          return { ...categories, [category]: false };
        }, {}),
        ...categoriesSearch?.split(',').reduce((categories, category) => {
          return { ...categories, [category]: true };
        }, {}),
      });
    }
  }, [categoriesSearch, categories]);

  return filters;
}
