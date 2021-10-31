import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../utils/hooks';
import Spinner from '../../components/spinner/spinner.component';

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
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.sku}</p>
      <p>{product.category?.slug}</p>
      <p>{product.category?.tags.length ? product.tags : null}</p>
      <p>{product.short_description}</p>
      <p>ADD TO CART</p>
      {product.specs?.length ? (
        <>
          <h3>Specs:</h3>
          <dl>
            {product.specs.map(({ spec_name, spec_value }) => (
              <Fragment key={spec_name}>
                <dt>{spec_name}</dt>
                <dd>{spec_value}</dd>
              </Fragment>
            ))}
          </dl>
        </>
      ) : null}
    </div>
  );
}
