import featuredProducts from '../../data/featured-products.json';
import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';

export default function FeaturedProducts() {
  const products = featuredProducts.results.map(({ id, data }) => ({ id, product: data }));
  const product = products[0];
  return (
    <div>
      <FeaturedProductsItem product={product.product} />
      {/* {products.map(({ id, product }) => (
        <FeaturedProductsItem key={id} {...{ product }} />
      ))} */}
    </div>
  );
}
