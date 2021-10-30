import { useEffect, useMemo, useState } from 'react';

import categoriesJSON from '../../data/product-categories.json';
import productsJSON from '../../data/products.json';

import { useDocumentTitle } from '../../utils/hooks';

import Filters from '../../components/filters/filters.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import Spinner from '../../components/spinner/spinner.component';
import Pagination from '../../components/pagination/pagination.component';

import {
  ContentStyles,
  FlexStyles,
  ProductListPageStyles,
} from './product-list.styles';

export default function ProductListPage() {
  const categories = useMemo(() => {
    return categoriesJSON.results.map(({ data: { name } }) => name);
  }, []);
  const products = useMemo(() => {
    return productsJSON.results.map(({ id, data }) => ({ id, product: data }));
  }, []);

  const [filters, setFilters] = useState(
    categories.reduce((categories, category) => {
      return { ...categories, [category]: false };
    }, {})
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

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

  useEffect(() => {
    const activeCategories = categories
      .filter((category) => filters[category])
      .map((category) => category.toLowerCase());

    if (activeCategories && !!activeCategories.length) {
      const updatedProducts = products.filter(({ product }) => {
        const { slug } = product.category;
        return activeCategories.includes(slug.toLowerCase());
      });

      setFilteredProducts(updatedProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [filters, products, categories]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductListPageStyles>
      <h1>Our Products</h1>
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
