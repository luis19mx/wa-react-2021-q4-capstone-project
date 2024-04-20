import Header from 'components/_header';
import Footer from 'components/_footer';
import { MainContentStyles } from './_layout.styles';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContentStyles>{children}</MainContentStyles>
      <Footer />
    </>
  );
}
