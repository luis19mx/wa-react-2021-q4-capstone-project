import { useState, useEffect } from 'react';
import { useFetchProducts } from 'utils/hooks';

export function useFetchFeaturedProduct() {
  const { products, isLoading } = useFetchProducts('featured');

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

    setProduct(product);
  }, [products]);

  return { product, isLoading };
}
