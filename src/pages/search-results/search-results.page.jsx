import { useLocation } from 'react-router-dom';
import { useFetchProducts } from '../../utils/hooks';
import Products from '../../components/products/products.components';
import Spinner from '../../components/spinner/spinner.component';
import Pagination from '../../components/pagination/pagination.component';
import { SearchTop } from './search-results.styles';

export default function SearchResultsPage() {
  const { search, state } = useLocation();
  const searchParams = new URLSearchParams(search);

  let fetchArgs = ['fullsearch', searchParams.get('q')];
  if (state?.paginationLink) {
    fetchArgs = ['pagination', state.paginationLink];
  }
  const { products, pagination, isLoading } = useFetchProducts(...fetchArgs);

  return isLoading ? (
    <Spinner />
  ) : products?.length ? (
    <>
      <SearchTop>
        <h1>Search results for <span>{searchParams.get('q')}</span></h1>
      <p>
        {pagination.totalResults}{' '}
        item{products?.length > 1 ? 's' : ''} founded.
      </p>
      </SearchTop>
      <Products products={products} />
      <Pagination pagination={pagination} />
    </>
  ) : (
    <p>No product found!!</p>
  );
}
