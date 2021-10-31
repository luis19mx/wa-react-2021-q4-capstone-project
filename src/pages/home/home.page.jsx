import { Link } from 'react-router-dom';
import FeaturedBanners from '../../components/featured-banners/featured-banners.component';
import ProductCategories from '../../components/product-categories/product-categories.component';
import Products from '../../components/products/products.components';
import Spinner from '../../components/spinner/spinner.component';
import { CTA } from '../../components/styles/button.styles';
import {
  useDocumentTitle,
  useFeaturedBanners,
  useFetchProducts,
  useProductCategories,
  useIsPageLoading,
} from '../../utils/hooks';

export default function HomePage() {
  useDocumentTitle();

  const { banners, isLoading: isFeaturedBannersLoading } = useFeaturedBanners();

  const { categories, isLoading: isProductCategoriesLoading } =
    useProductCategories();

  const { products, isLoading: isFeaturedProductsLoading } =
    useFetchProducts('featured');

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
      {/* TEMP */}
      <h2 style={{ textAlign: 'center' }}>
        <Link to="/search?q=armchair">Armchair Search</Link>
      </h2>
      {/* TEMP */}
      <ProductCategories categories={categories} />
      <Products products={products} paddingTopStyles />
      <CTA as={Link} to="/products">
        View all products
      </CTA>
    </>
  );
}
