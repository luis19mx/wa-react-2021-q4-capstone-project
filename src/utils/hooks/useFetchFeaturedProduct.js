import { useState, useEffect } from 'react';
import { useFetchProducts } from 'utils/hooks';

export function useFetchFeaturedProduct() {
  const { products, isLoading, error } = useFetchProducts('featured');

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const [product] = products.map(({ id, product }) => ({
      id,
      ...product,
      gallery: [
        ...product.images.map(({ image }) => ({
          ...image,
        })),
      ],
    }));

    product ? setProduct(product) : setProduct(null);
  }, [products]);

  return { product, isLoading, error };
}
