import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useSetCategories() {
  const [categories, setCategories] = useState([]);

  const { categories: categoriesData, isLoading } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!isLoading) {
      setCategories(categoriesData.map(({ category: { name } }) => name));
    }
  }, [categoriesData, isLoading]);

  return categories;
}
