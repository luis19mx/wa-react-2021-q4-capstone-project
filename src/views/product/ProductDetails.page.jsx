import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentTitle, useFetchSingleProduct } from 'utils/hooks';
import Spinner from 'components/Spinner';
import ProductDetails from 'components/ProductDetails';

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);

  useDocumentTitle(`${product ? product.name : 'Product'}`);

  const { productId } = useParams();

  const { product: productData, isLoading } = useFetchSingleProduct(productId);

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
