import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCategories } from './store/categories';

import GlobalStyles from './components/GlobalStyles';
import Layout from './components/Layout';

import HomePage from './views/home';
import ProductListPage from './views/products';
import ProductDetailsPage from './views/product';
import CartPage from './views/cart';
import CheckoutPage from './views/checkout';
import SearchResultsPage from './views/search';
import NotFoundPage from './views/404';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchCategories(controller));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
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
          <Route path={`/cart`}>
            <CartPage />
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
    </>
  );
}
