import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCategories } from './redux/categories';

import Layout from './components/layout/layout.component';
import HomePage from './pages/home/home.page';
import ProductListPage from './pages/products/products.page';
import NotFoundPage from './pages/not-found/not-found.page';
import ProductDetailsPage from './pages/product-details/product-details.page';
import SearchResultsPage from './pages/search-results/search-results.page';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/products">
          <ProductListPage />
        </Route>
        <Route path={`/product/:productId`}>
          <ProductDetailsPage />
        </Route>
        <Route path={`/search`}>
          <SearchResultsPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}
