import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../constants';

export function useLatestAPI() {
  const [apiMetadata, setApiMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ref: apiRef } = useSelector((state) => state.apiMetaData);

  useEffect(() => {
    const controller = new AbortController();

    async function getAPIMetadata() {
      try {
        if (apiRef) {
          return setApiMetadata(apiRef);
        }

        const response = await fetch(API_BASE_URL, {
          signal: controller.signal,
        });
        const { refs: [{ ref } = {}] = [] } = await response.json();

        setApiMetadata(ref);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAPIMetadata();

    return () => {
      controller.abort();
    };
  }, [apiRef]);

  return { ref: apiMetadata, isLoading, error };
}
