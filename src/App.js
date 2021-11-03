import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCategories } from './redux/categories';

import Layout from './components/Layout';
import HomePage from './pages/home';
import ProductListPage from './pages/products';
import ProductDetailsPage from './pages/product';
import CheckoutPage from './pages/checkout';
import SearchResultsPage from './pages/search';
import NotFoundPage from './pages/404';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchCategories(controller));

    return () => {
      controller.abort();
    }
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
        <Route path={`/checkout`}>
          <CheckoutPage />
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
