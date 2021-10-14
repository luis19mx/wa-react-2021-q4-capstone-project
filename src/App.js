import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
