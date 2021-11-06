import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFetchProductCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductCategories() {
      try {
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

        setCategories(categories);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProductCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return { categories, isLoading, error };
}
