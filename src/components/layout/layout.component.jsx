import Header from '../header/header.component';
import Footer from '../footer/footer.component';
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
