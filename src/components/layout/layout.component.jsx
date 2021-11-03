import Header from '../Header';
import Footer from '../Footer';
import { MainContentStyles } from './layout.styles';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContentStyles>{children}</MainContentStyles>
      <Footer />
    </>
  );
}
