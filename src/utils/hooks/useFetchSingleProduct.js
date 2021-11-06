import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFetchSingleProduct(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProduct() {
      try {
        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[at(document.id, "${productId}")]]`
        )}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        const [product] = data.results?.map(({ id, data, tags }) => {
          return {
            id,
            ...data,
            gallery: [
              ...data.images.map(({ image }) => ({
                ...image,
              })),
            ],
            tags,
          };
        });

        setProduct(product);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return { product, isLoading, error };
}
