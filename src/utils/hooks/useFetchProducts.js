import { useState, useEffect } from 'react';
import { concatenateApiUrl } from '../helpers';
import { useLatestAPI } from './useLatestAPI';

export function useFetchProducts(type, params) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        let url;

        const setUrl = concatenateApiUrl(apiRef);

        switch (type) {
          case 'pagination':
            url = `${params}`;
            break;
          case 'categories':
            url = setUrl(
              `&q=${encodeURIComponent(
                `[[at(document.data.category.slug, [${params}])]]`
              )}`
            );
            break;
          case 'fullsearch':
            url = setUrl(
              `&q=${encodeURIComponent(`[[fulltext(document, "${params}")]]`)}`,
              4
            );
            break;
          case 'featured':
            url = setUrl(
              `&q=${encodeURIComponent('[[at(document.tags, ["Featured"])]]')}`,
              16
            );
            break;
          default:
            url = setUrl();
            break;
        }

        const response = await fetch(url, {
          signal: controller.signal,
        });

        const data = await response.json();

        const pagination = {
          activePage: data.page,
          totalPages: data.total_pages,
          nextPage: data.next_page,
          prevPage: data.prev_page,
          totalResults: data.total_results_size,
        };

        const products = data.results?.map(({ id, data: product }) => {
          return { id, product };
        });

        setProducts(products);
        setPagination(pagination);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, type, params]);

  return { products, pagination, isLoading, error };
}
