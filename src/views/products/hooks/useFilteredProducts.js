import { useState, useEffect } from 'react';
import { useSetCategories } from './useSetCategories';

export function useFilteredProducts(products, filters) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categories = useSetCategories();

  useEffect(() => {
    const activeCategories = categories.filter((category) => filters[category]);
    if (activeCategories.length) {
      const updatedProducts = products?.filter(({ product }) => {
        const { slug } = product.category;
        return activeCategories
          .map((category) => category.toLowerCase())
          .includes(slug.toLowerCase());
      });
      setFilteredProducts(updatedProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [products, categories, filters]);

  return filteredProducts;
}
