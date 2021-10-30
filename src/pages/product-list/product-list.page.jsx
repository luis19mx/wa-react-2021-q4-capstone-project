import { useEffect, useMemo, useState } from 'react';
import Filters from '../../components/filters/filters.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import categoriesJSON from '../../data/product-categories.json';
import productsJSON from '../../data/products.json';
import { useDocumentTitle } from '../../utils/hooks';
import Spinner from '../../components/spinner/spinner.component';
import Pagination from '../../components/pagination/pagination.component';
import {
  ContentStyles,
  FlexStyles,
  ProductListPageStyles,
} from './product-list.styles';

export default function ProductListPage() {
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [categories] = useState(
    useMemo(() => categoriesJSON.results.map(({ data: { name } }) => name), [])
  );
  const [products] = useState(
    useMemo(
      () => productsJSON.results.map(({ id, data }) => ({ id, product: data })),
      []
    )
  );

  useEffect(
    () =>
      setFilters(
        categories.reduce(
          (categories, category) => ({ ...categories, [category]: false }),
          {}
        )
      ),
    [categories]
  );

  useDocumentTitle('Products');

  useEffect(() => setTimeout(() => setIsLoading(false), 1000 * 2));

  const handleChange = ({ target: { name: filter } }) =>
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));

  const setAllFiltersToFalse = () =>
    setFilters(
      Object.keys(filters).reduce(
        (filters, filter) => ({ ...filters, [filter]: false }),
        {}
      )
    );

  const filterProducts = () => {
    if (categories.some((category) => filters[category] === true)) {
      return categories
        .filter((category) => filters[category])
        .map((category) =>
          products.filter(
            ({
              product: {
                category: { slug },
              },
            }) => slug.toLowerCase() === category.toLowerCase()
          )
        )
        .flat();
    }
    return products;
  };

  const filteredProducts = filterProducts();

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductListPageStyles>
      <h1>This is the Product List Page</h1>
      <FlexStyles>
        <Filters
          filters={filters}
          handleChange={handleChange}
          setAllFiltersToFalse={setAllFiltersToFalse}
        />
        <ContentStyles>
          <FeaturedProducts products={filteredProducts} />
          <Pagination resultPages={5} activePage={1} />
        </ContentStyles>
      </FlexStyles>
    </ProductListPageStyles>
  );
}
