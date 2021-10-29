import HomePage from './pages/home/home.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Content from './components/content/content.component';

import GlobalStyles from './components/global-styles/global-styles.component';

import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Content>
        <HomePage />
      </Content>
      <Footer />
    </>
  );
}

export default App;
