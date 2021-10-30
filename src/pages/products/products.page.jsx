import { useEffect, useState } from 'react';

import ProductFilters from '../../components/product-filters/product-filters.component';
import Products from '../../components/products/products.components';
import Spinner from '../../components/spinner/spinner.component';
import Pagination from '../../components/pagination/pagination.component';

import {
  ContentStyles,
  FlexStyles,
  ProductListPageStyles,
} from './products.page.styles';

import {
  useDocumentTitle,
  useProductCategories,
  useProducts,
} from '../../utils/hooks';

export default function ProductsPage() {
  const { categories: categoriesData, isLoading: isCategoriesLoading } =
    useProductCategories();

  const { products, isLoading: isProductsLoading } = useProducts();

  const [filters, setFilters] = useState({});
  const [categories, setCategories] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useDocumentTitle('Products');

  useEffect(() => {
    if (!isCategoriesLoading) {
      setCategories(categoriesData.map(({ category: { name } }) => name));
    }
  }, [categoriesData, isCategoriesLoading]);

  useEffect(() => {
    setFilters(
      categories.reduce((categories, category) => {
        return { ...categories, [category]: false };
      }, {})
    );
  }, [categories]);

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

  return isCategoriesLoading || isProductsLoading ? (
    <Spinner />
  ) : (
    <ProductListPageStyles>
      <h1>Our Products</h1>
      <FlexStyles>
        <ProductFilters
          filters={filters}
          handleChange={handleChange}
          setAllFiltersToFalse={setAllFiltersToFalse}
        />
        <ContentStyles>
          <Products products={filteredProducts} />
          {filteredProducts.length ? (
            <Pagination resultPages={5} activePage={1} />
          ) : null}
        </ContentStyles>
      </FlexStyles>
    </ProductListPageStyles>
  );
}
