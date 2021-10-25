import Slider from '../../components/slider/slider.component';
import Grid from '../../components/grid/grid.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import productsJSON from '../../data/featured-products.json';
import { Button } from '../../styles/design-system';

const products = productsJSON.results.map(({ id, data }) => ({ id, product: data }));

export default function HomePage({ setIsHomePageActive }) {
  return (
    <>
      <Slider />
      <Grid />
      <FeaturedProducts {...{ products }} paddingTop={true} />
      <Button
        style={{ margin: 'auto', width: '90%', maxWidth: '200px', textAlign: 'center' }}
        onClick={() => setIsHomePageActive(false)}
      >
        View all products
      </Button>
    </>
  );
}
