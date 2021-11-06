/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addItemToCart } from '../../store/cart';

import { CTA } from '../styles/button.styles';

function AddToCart({ product, bubbles = true, ctaStyles = null }) {
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  const handleAddToCart = (() => {
    return bubbles
      ? () => dispatch(addItemToCart({ id, name, price, img }))
      : (evt) => {
          evt.stopPropagation();
          return dispatch(addItemToCart({ id, name, price, img }));
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
