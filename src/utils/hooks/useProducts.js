import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(type, params) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    products: [],
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ products: [], isLoading: true });

        let url;

        if (type === 'pagination') {
          url = `${params}`;
        } else {
          url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}`;
          let pageSize = 12;

          if (type === 'search') {
            url += `&q=${encodeURIComponent(
              `[[at(document.data.category.slug, [${params}])]]`
            )}`;
          } else if (type === 'featured') {
            pageSize = 16;

            url += `&q=${encodeURIComponent(
              '[[at(document.tags, ["Featured"])]]'
            )}`;
          }

          url += `&lang=en-us&pageSize=${pageSize}`;
        }

        // console.log(url)

        const response = await fetch(url, {
          signal: controller.signal,
        });

        const data = await response.json();

        const pagination = {
          activePage: data.page,
          totalPages: data.total_pages,
          nextPage: data.next_page,
          prevPage: data.prev_page,
        };

        const products = data.results?.map(({ id, data: product }) => {
          return { id, product };
        });

        setProducts({ products, pagination, isLoading: false });
      } catch (err) {
        setProducts({ products: [], isLoading: false });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, type, params]);

  return products;
}
