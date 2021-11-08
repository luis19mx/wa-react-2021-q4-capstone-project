import { useSelector } from 'react-redux';
import { useDocumentTitle } from 'utils/hooks';
import ProductFilters from 'components/product-filters/product-filters.component';
import Products from 'components/products/products.components';
import Spinner from 'components/spinner/spinner.component';
import Pagination from 'components/pagination/pagination.component';
import ErrorBoundary from 'components/ErrorBoundary';
import {
  ContentStyles,
  FlexStyles,
  ProductListPageStyles,
} from './products.page.styles';
import {
  useFilteredProducts,
  useUpdateUrlParamsWithActiveFilters,
  useFetchProductList,
  useSetFilters,
} from './hooks';

export default function ProductsPage() {
  useDocumentTitle('Products');
  useFetchProductList();

  const { products, pagination, isLoading } = useSelector(
    (state) => state.products
  );

  const [filters, setFilters] = useSetFilters();
  const filteredProducts = useFilteredProducts(products, filters);
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
