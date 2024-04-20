import { useSelector } from 'react-redux';
import { useDocumentTitle } from 'utils/hooks';
import ProductFilters from 'components/ProductFilters';
import Products from 'components/_products';
import Spinner from 'components/_spinner';
import Pagination from 'components/_pagination';
import ErrorBoundary from 'components/ErrorBoundary';
import {
  useFilteredProducts,
  useUpdateUrlParamsWithActiveFilters,
  useFetchProductList,
  useSetFilters,
  useUpdateFiltersWithSearchParams,
} from './hooks';
import {
  ContentStyles,
  FlexStyles,
  ProductListPageStyles,
} from './Products.styles';

export default function ProductsPage() {
  useDocumentTitle('Products');
  useFetchProductList();

  const { products, pagination, isLoading } = useSelector(
    (state) => state.products
  );

  const [filters, setFilters] = useSetFilters();
  const filteredProducts = useFilteredProducts(products, filters);

  useUpdateFiltersWithSearchParams(setFilters);
  useUpdateUrlParamsWithActiveFilters(filters);

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductListPageStyles>
      <h1>Our Products</h1>
      <FlexStyles>
        <ProductFilters filters={filters} setFilters={setFilters} />
        <ContentStyles>
          <ErrorBoundary>
            <Products products={filteredProducts} />
            {filteredProducts?.length ? (
              <Pagination pagination={pagination} />
            ) : null}
          </ErrorBoundary>
        </ContentStyles>
      </FlexStyles>
    </ProductListPageStyles>
  );
}
