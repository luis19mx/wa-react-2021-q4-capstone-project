import Slider from '../../components/slider/slider.component';
import Grid from '../../components/grid/grid.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';

export default function HomePage() {
  return (
    <section>
      <Slider />
      <Grid />
      <FeaturedProducts />
    </section>
  );
}
