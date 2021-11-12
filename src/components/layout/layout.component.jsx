import Header from 'components/Header';
import Footer from 'components/Footer';
import { MainContentStyles } from './Layout.styles';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContentStyles>{children}</MainContentStyles>
      <Footer />
    </>
  );
}
