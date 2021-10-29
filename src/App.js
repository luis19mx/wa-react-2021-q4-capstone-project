import { useState } from 'react';
import HomePage from './pages/home/home.page';
import ProductListPage from './pages/product-list/product-list.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Content from './components/content/content.component';

import GlobalStyles from './components/global-styles/global-styles.component';

import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const [isHomePageActive, setIsHomePageActive] = useState(true);
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <GlobalStyles />
      <Header {...{ setIsHomePageActive }} />
      <Content>{isHomePageActive ? <HomePage {...{ setIsHomePageActive }} /> : <ProductListPage />}</Content>
      <Footer />
    </>
  );
}

export default App;
