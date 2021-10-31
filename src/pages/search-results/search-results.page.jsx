import { useLocation } from 'react-router-dom';
import { useFetchProducts } from '../../utils/hooks';
import Products from '../../components/products/products.components';
import Spinner from '../../components/spinner/spinner.component';
import Pagination from '../../components/pagination/pagination.component';

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
      <h1>Search results</h1>
      <p>
        Found {pagination.totalResults}{' '}
        result{products?.length > 1 ? 's' : ''}{' '}
        for {searchParams.get('q')}
      </p>
      <Products products={products} />
      <Pagination pagination={pagination} />
    </>
  ) : (
    <p>No product found!!</p>
  );
}
