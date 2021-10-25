import PropTypes from 'prop-types';
import {
  CategoryStyles,
  ContentStyles,
  FeaturedProductsItemStyles,
  ImageStyles,
  PriceStyles,
  TitleStyles,
} from './featured-products-item.styles';

function FeaturedProductsItem({ product }) {
  const {
    mainimage: img,
    name,
    category: { slug: category },
    price,
  } = product;

  return (
    <FeaturedProductsItemStyles>
      <ImageStyles src={img.url} alt={img.alt} />
      <ContentStyles>
        <TitleStyles>{name}</TitleStyles>
        <PriceStyles>${price}</PriceStyles>
        <CategoryStyles>{category}</CategoryStyles>
      </ContentStyles>
    </FeaturedProductsItemStyles>
  );
}

FeaturedProductsItem.propTypes = {
  product: PropTypes.shape({
    mainimage: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeaturedProductsItem;
