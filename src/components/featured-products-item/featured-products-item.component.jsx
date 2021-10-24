import {
  CategoryStyles,
  ContentStyles,
  FeaturedProductsItemStyles,
  ImageStyles,
  PriceStyles,
  TitleStyles,
} from './featured-products-item.styles';

export default function FeaturedProductsItem({ product }) {
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
