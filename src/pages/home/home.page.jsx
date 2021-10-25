import SliderContainer from '../../components/slider/slider.component';
import Grid from '../../components/grid/grid.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import productsJSON from '../../data/featured-products.json';
import { Button } from '../../styles/design-system';
import Hooks from '../../hooks';

const products = productsJSON.results.map(({ id, data }) => ({ id, product: data }));

export default function HomePage({ setIsHomePageActive }) {
  Hooks.useDocumentTitle();

  return (
    <>
      <SliderContainer />
      <Grid />
      <FeaturedProducts {...{ products }} paddingTop />
      <Button ctaStyles onClick={() => setIsHomePageActive(false)}>
        View all products
      </Button>
    </>
  );
}
