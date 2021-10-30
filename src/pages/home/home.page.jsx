import { Link } from 'react-router-dom';
import SliderContainer from '../../components/slider/slider.component';
import Grid from '../../components/grid/grid.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import productsJSON from '../../data/featured-products.json';
import { Button } from '../../components/styles/button.styles';

import { useDocumentTitle, useFeaturedBanners } from '../../utils/hooks';

const products = productsJSON.results.map(({ id, data }) => ({
  id,
  product: data,
}));

export default function HomePage() {
  useDocumentTitle();

  const { data, isLoading } = useFeaturedBanners();

  return (
    <>
      {!isLoading ? <SliderContainer bannersJSON={data} /> : null}
      <Grid />
      <FeaturedProducts products={products} paddingTopStyles />
      <Button ctaStyles as={Link} to="/products">
        View all products
      </Button>
    </>
  );
}
