/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addItemToCart } from 'store/cart';
import { CTA } from 'components/styles';

function AddToCart({ product, bubbles = true, ctaStyles = null }) {
  const dispatch = useDispatch();

  const handleAddToCart = (() => {
    return bubbles
      ? () => dispatch(addItemToCart(product))
      : (evt) => {
          evt.stopPropagation();
          return dispatch(addItemToCart(product));
        };
  })();

  return (
    <CTA css={ctaStyles} onClick={handleAddToCart}>
      Add to cart
    </CTA>
  );
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  bubbles: PropTypes.bool,
  ctaStyles: PropTypes.object,
};

export default AddToCart;
