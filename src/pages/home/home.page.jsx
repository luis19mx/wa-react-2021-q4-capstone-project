import SliderContainer from '../../components/slider/slider.component';
import Grid from '../../components/grid/grid.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import productsJSON from '../../data/featured-products.json';
import { Button } from '../../styles/design-system';
import Hooks from '../../hooks';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { Link } from 'react-router-dom';

export default function HomePage() {
  Hooks.useDocumentTitle();

  const products = productsJSON.results.map(({ id, data }) => ({
    id,
    product: data,
  }));

  const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <>
      {!isLoading ? <SliderContainer bannersJSON={data} /> : null}
      <Grid />
      <FeaturedProducts {...{ products }} paddingTop />
      {/* <Link to='/products' component={Button} /> */}
      <Button ctaStyles as={Link} to="/products">
        View all products
      </Button>
    </>
  );
}
