import { GridItemStyles, ImageStyles, TitleStyles } from './grid-item.styles';

export default function GridItem({ category }) {
  const { main_image: img, name } = category;
  return (
    <GridItemStyles>
      <ImageStyles src={img.url} alt={img.alt} />
      <TitleStyles>{name}</TitleStyles>
    </GridItemStyles>
  );
}
