import { Component } from 'react';
import Filters from '../../components/filters/filters.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import categoriesJSON from '../../data/product-categories.json';
import productsJSON from '../../data/products.json';
import { ContentStyles, FlexStyles, ProductListPageStyles } from './product-list.styles';
import Spinner from '../../components/spinner/spinner.component';
import Pagination from '../../components/pagination/pagination.component';

export default class ProductListPage extends Component {
  state = {
    filters: {},
    categories: categoriesJSON.results.map(({ data: { name } }) => name),
    products: productsJSON.results.map(({ id, data }) => ({ id, product: data })),
    isLoading: true,
  };

  componentDidMount() {
    this.setState({
      filters: this.state.categories.reduce(
        (acum, curr) => ({
          ...acum,
          [curr]: false,
        }),
        {}
      ),
    });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000 * 2);
  }

  handleChange = ({ target: { name } }) =>
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: !prevState.filters[name],
      },
    }));

  setAllFiltersToFalse = () => {
    this.setState({
      filters: this.state.categories.reduce(
        (acum, curr) => ({
          ...acum,
          [curr]: false,
        }),
        {}
      ),
    });
  };

  filterProducts = () => {
    const { categories, filters, products } = this.state;

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

  render() {
    const { isLoading, filters } = this.state;
    const products = this.filterProducts();

    return isLoading ? (
      <Spinner />
    ) : (
      <ProductListPageStyles>
        <h1>This is the Product List Page</h1>
        <FlexStyles>
          <Filters
            filters={filters}
            handleChange={this.handleChange}
            setAllFiltersToFalse={this.setAllFiltersToFalse}
          />
          <ContentStyles>
            <FeaturedProducts nextToSidebarStyles products={products} />
            <Pagination resultPages={5} activePage={1} />
          </ContentStyles>
        </FlexStyles>
      </ProductListPageStyles>
    );
  }
}
