import { Link } from 'react-router-dom';
import FeaturedBanners from '../../components/featured-banners/featured-banners.component';
import ProductCategories from '../../components/product-categories/product-categories.component';
import Products from '../../components/products/products.components';
import Spinner from '../../components/spinner/spinner.component';
import { CTA } from '../../components/styles/button.styles';
import {
  useDocumentTitle,
  useFeaturedBanners,
  useProducts,
  useProductCategories,
  useIsPageLoading,
} from '../../utils/hooks';

export default function HomePage() {
  useDocumentTitle();

  const { banners, isLoading: isFeaturedBannersLoading } = useFeaturedBanners();

  const { categories, isLoading: isProductCategoriesLoading } =
    useProductCategories();

  const { products, isLoading: isFeaturedProductsLoading } = useProducts({
    featured: true,
  });

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
      <Products products={products} paddingTopStyles />
      <CTA as={Link} to="/products">
        View all products
      </CTA>
    </>
  );
}
