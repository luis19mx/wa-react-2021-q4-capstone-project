import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FeaturedBanners from '../../components/featured-banners/featured-banners.component';
import ProductCategories from '../../components/product-categories/product-categories.component';
import ProductDetails from '../../components/product-details/product-details.component';
import Spinner from '../../components/spinner/spinner.component';
import { CTA } from '../../components/styles/button.styles';
import {
  useDocumentTitle,
  useFetchFeaturedBanners,
  useFetchProducts,
  useIsPageLoading,
} from '../../utils/hooks';

export default function HomePage() {
  useDocumentTitle();

  const { banners, isLoading: isFeaturedBannersLoading } =
    useFetchFeaturedBanners();

  const { categories, isLoading: isProductCategoriesLoading } = useSelector(
    (state) => state.categories
  );

  const { products, isLoading: isFeaturedProductsLoading } =
    useFetchProducts('featured');

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const [product] = products.map(({ id, product }) => ({
      id,
      ...product,
      gallery: [
        ...product.images.map(({ image }) => ({
          ...image,
        })),
      ],
    }));

    setProduct(product);
  }, [products]);

  const isPageLoading = useIsPageLoading(
    isFeaturedBannersLoading,
    isProductCategoriesLoading,
    isFeaturedProductsLoading
  );

  return isPageLoading ? (
    <Spinner />
  ) : (
    <>
      <FeaturedBanners banners={banners} />
      <ProductCategories categories={categories} />
      <CTA as={Link} to="/products">
        View all products
      </CTA>
      <ProductDetails product={product} featured={true} />
    </>
  );
}
