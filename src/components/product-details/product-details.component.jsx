import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils';
import ProductGallery from '../product-gallery/product-gallery.component';
import AddToCart from '../add-to-cart/add-to-cart.component';
import { CategoryStyles } from '../products-item/products-item.styles';

import {
  addToCartStyles,
  ButtonWrapperStyles,
  GalleryWrapper,
  GalleryStyles,
  ProductDetailsStyles,
  PriceStyles,
  SkuStyles,
  TagsWrapperStyles,
  TagsStyles,
  SpecsStyles,
  FooterPadding,
  ColumnLeftStyles,
  ColumnRightStyles,
  FeaturedTitleStyles,
} from './product-details.styles';

function ProductDetails({ product, featured = false }) {
  const {
    id,
    name,
    price,
    gallery,
    category,
    sku,
    tags,
    short_description,
    specs,
  } = product;

  return product ? (
    <>
      <FooterPadding />
      <ProductDetailsStyles featuredStyles={featured}>
        {featured ? (
          <FeaturedTitleStyles>Featured product</FeaturedTitleStyles>
        ) : null}
        <ColumnLeftStyles>
          <h1>{name}</h1>
          <GalleryWrapper>
            <GalleryStyles>
              <ProductGallery gallery={gallery} />
              <CategoryStyles>{category?.slug}</CategoryStyles>
            </GalleryStyles>
            <PriceStyles>{formatMoney(price)}</PriceStyles>
          </GalleryWrapper>
          <SkuStyles>SKU: #{sku}</SkuStyles>
          <TagsWrapperStyles>
            {tags?.length
              ? tags.map((tag) => <TagsStyles key={tag}>{tag}</TagsStyles>)
              : null}
          </TagsWrapperStyles>
          <p>{short_description}</p>
        </ColumnLeftStyles>
        <ColumnRightStyles>
          <ButtonWrapperStyles featured={featured}>
            <AddToCart
              ctaStyles={addToCartStyles}
              product={{ id, name, price, img: gallery[0] }}
            />
          </ButtonWrapperStyles>
          {specs?.length ? (
            <SpecsStyles>
              <h3>Specs:</h3>
              <dl>
                {specs.map(({ spec_name, spec_value }) => (
                  <Fragment key={spec_name}>
                    <dt>{spec_name}</dt>
                    <dd>{spec_value}</dd>
                  </Fragment>
                ))}
              </dl>
            </SpecsStyles>
          ) : null}
        </ColumnRightStyles>
      </ProductDetailsStyles>
    </>
  ) : null;
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      })
    ).isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string,
    }),
    sku: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    short_description: PropTypes.string,
    specs: PropTypes.arrayOf(
      PropTypes.shape({
        spec_name: PropTypes.string,
        spec_value: PropTypes.string,
      })
    ),
  }).isRequired,
  featured: PropTypes.bool,
};

export default ProductDetails;
