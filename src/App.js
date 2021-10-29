import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home.page';
import ProductListPage from './pages/product-list/product-list.page';
import NotFoundPage from './pages/not-found/not-found.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Content from './components/content/content.component';

import GlobalStyles from './components/global-styles/global-styles.component';

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
