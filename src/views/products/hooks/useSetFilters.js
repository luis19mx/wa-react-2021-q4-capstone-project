import { useEffect, useState } from 'react';
import { useSetCategories } from './useSetCategories';

export function useSetFilters() {
  const categories = useSetCategories();

  const [filters, setFilters] = useState({});

  useEffect(() => {
    setFilters(
      categories.reduce((categories, category) => {
        return { ...categories, [category]: false };
      }, {})
    );
  }, [categories, setFilters]);

  return [filters, setFilters];
}
