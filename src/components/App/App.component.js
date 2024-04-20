import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchMetaData } from 'store/apiMetaData';
import { fetchCategories } from 'store/categories';

import GlobalStyles from 'components/GlobalStyles';
import Spinner from 'components/_spinner';
import Layout from 'components/_layout';

const HomePage = lazy(() => import('views/home'));
const ProductListPage = lazy(() => import('views/products'));
const ProductDetailsPage = lazy(() => import('views/product'));
const CartPage = lazy(() => import('views/cart'));
const CheckoutPage = lazy(() => import('views/checkout'));
const SearchResultsPage = lazy(() => import('views/search'));
const NotFoundPage = lazy(() => import('views/404'));

export default function App() {
  const dispatch = useDispatch();

  dispatch(fetchMetaData());
  dispatch(fetchCategories());

  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
}
