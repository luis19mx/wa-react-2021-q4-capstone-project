import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Global } from '@emotion/react';
import { useFetchProducts } from 'utils/hooks';
import Products from 'components/Products';
import Spinner from 'components/Spinner';
import Pagination from 'components/Pagination';
import noProductFoundGif from 'assets/pulp-fiction-john-travolta.gif';
import {
  SearchTop,
  NotFoundStyles,
  NotFoundBody,
} from './SearchResults.styles';

function SearchResultsPage() {
  const { search, state } = useLocation();

  const queryValue = useMemo(() => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get('q');
  }, [search]);

  const fetchArgs = useMemo(() => {
    return state?.paginationLink
      ? ['pagination', state.paginationLink]
      : ['fullsearch', queryValue];
  }, [state, queryValue]);

  const { products, pagination, isLoading } = useFetchProducts(...fetchArgs);

  return isLoading ? (
    <Spinner />
  ) : products?.length ? (
    <>
      <SearchTop>
        <h1>
          Search results for <span>{queryValue}</span>
        </h1>
        <p>
          <span>{pagination.totalResults}</span> item{products?.length > 1 ? 's' : ''}{' '}
          founded.
        </p>
      </SearchTop>
      <Products products={products} />
      <Pagination pagination={pagination} />
    </>
  ) : (
    <>
      <Global styles={NotFoundBody} />
      <NotFoundStyles>
        <p>
          No product found.
          <span>Try again using a different keyword</span>
        </p>
        <img src={noProductFoundGif} alt="" />
      </NotFoundStyles>
    </>
  );
}

export default SearchResultsPage;
