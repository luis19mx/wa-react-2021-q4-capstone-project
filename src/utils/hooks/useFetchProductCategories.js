import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFetchProductCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productCategories, setProductCategories] = useState(() => ({
    categories: [],
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductCategories() {
      try {
        setProductCategories({ categories: [], isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        const categories = data.results?.map(({ id, data: category }) => {
          return { id, category };
        });

        setProductCategories({ categories, isLoading: false });
      } catch (err) {
        setProductCategories({ categories: [], isLoading: false });
        console.error(err);
      }
    }

    getProductCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return productCategories;
}
