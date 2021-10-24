import { useEffect } from 'react';
import Categories from '../../components/categories/categories.component';
import FeaturedProducts from '../../components/featured-products/featured-products.components';
import products from '../../data/products.json';

export default function ProductListPage() {
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '2em' }}>This is the Product List Page</h1>
      <Categories />
      <FeaturedProducts {...{ products }} />
    </>
  );
}
