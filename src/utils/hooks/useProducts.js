import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(type) {
  const featured = type !== undefined ? type.featured : false;

  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ products: {}, isLoading: true });

        const tag = featured
          ? `&q=${encodeURIComponent('[[at(document.tags, ["Featured"])]]')}`
          : '';
        const pageSize = featured ? 16 : 12;

        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}${tag}&lang=en-us&pageSize=${pageSize}`;

        // console.log(url);

        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        const products = data.results?.map(({ id, data: product }) => {
          return { id, product };
        });

        setProducts({ products, isLoading: false });
      } catch (err) {
        setProducts({ products: [], isLoading: false });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, featured]);

  return products;
}
