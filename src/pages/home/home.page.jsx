import Slider from '../../components/slider/slider.component';
import Grid from '../../components/grid/grid.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import { Button } from '../../styles/design-system';

export default function HomePage({setIsHomePageActive}) {
  return (
    <>
      <Slider />
      <Grid />
      <FeaturedProducts />
      <Button
        style={{ margin: 'auto', width: '90%', maxWidth: '200px', textAlign: 'center' }}
        onClick={() => setIsHomePageActive(false)}
      >
        View all products
      </Button>
    </>
  );
}
