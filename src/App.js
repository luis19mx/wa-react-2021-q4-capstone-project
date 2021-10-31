import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Content from './components/content/content.component';

import GlobalStyles from './components/styles/global-styles/global-styles.component';

import HomePage from './pages/home/home.page';
import ProductListPage from './pages/products/products.page';
import NotFoundPage from './pages/not-found/not-found.page';
import ProductDetailsPage from './pages/product-details/product-details.page';
import SearchResultsPage from './pages/search-results/search-results.page';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Content>
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
        </Content>
        <Footer />
      </Router>
    </>
  );
}

export default App;
