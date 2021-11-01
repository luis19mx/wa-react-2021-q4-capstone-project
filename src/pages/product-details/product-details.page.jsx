import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../utils/hooks';
import Spinner from '../../components/spinner/spinner.component';
import ProductDetails from '../../components/product-details/product-details.component';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const { product: productData, isLoading } = useProductDetails(productId);

  useEffect(() => {
    if (!isLoading) {
      setProduct(productData);
    }
  }, [isLoading, productData]);

  return isLoading || !product ? (
    <Spinner />
  ) : (
    <ProductDetails product={product} />
  );
}
