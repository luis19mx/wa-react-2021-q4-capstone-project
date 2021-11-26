import { useState, useEffect } from 'react';
import { useFetchProducts } from 'utils/hooks';

export function useFetchFeaturedProduct() {
  const { products, isLoading, error } = useFetchProducts('featured');

  const [productsWithGallery, setProductsWithGallery] = useState(null);

  useEffect(() => {
    products
      ? setProductsWithGallery(
          products.map(({ id, product }) => ({
            id,
            ...product,
            gallery: [
              ...product.images.map(({ image }) => ({
                ...image,
              })),
            ],
          }))
        )
      : setProductsWithGallery(null);
  }, [products]);

  return { productsWithGallery, isLoading, error };
}
