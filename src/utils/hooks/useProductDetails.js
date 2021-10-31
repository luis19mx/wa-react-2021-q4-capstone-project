import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductDetails(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [product, setProduct] = useState(() => ({
    product: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProduct() {
      try {
        setProduct({ product: {}, isLoading: true });

        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[at(document.id, "${productId}")]]`
        )}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        const [product] = data.results?.map(({ id, data }) => {
          return { ...data, id };
        });

        setProduct({ product, isLoading: false });
      } catch (err) {
        setProduct({ product: {}, isLoading: false });
        console.error(err);
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return product;
}
