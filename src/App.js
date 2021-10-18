import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import GlobalStyles from './components/global-styles/global-styles.component';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
