import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  useDocumentTitle,
  useFetchFeaturedBanners,
  useFetchFeaturedProduct,
  useIsPageLoading,
} from 'utils/hooks';
import FeaturedBanners from 'components/FeaturedBanners';
import ProductCategories from 'components/ProductCategories';
import ProductDetails from 'components/ProductDetails';
import Spinner from 'components/spinner';
import { CTA } from 'components/styles';

export default function HomePage() {
  useDocumentTitle();

  const { categories, isLoading: isProductCategoriesLoading } = useSelector(
    (state) => state.categories
  );

  const { featuredBanners: banners, isLoading: isFeaturedBannersLoading } =
    useFetchFeaturedBanners();

  const { product, isLoading: isFeaturedProductsLoading } =
    useFetchFeaturedProduct();

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
