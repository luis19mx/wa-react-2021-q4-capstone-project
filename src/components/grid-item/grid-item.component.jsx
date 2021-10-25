import PropTypes from 'prop-types';
import { GridItemStyles, ImageStyles, TitleStyles } from './grid-item.styles';

function GridItem({ category }) {
  const { main_image: img, name } = category;
  return (
    <GridItemStyles>
      <ImageStyles src={img.url} alt={img.alt || ''} />
      <TitleStyles>{name}</TitleStyles>
    </GridItemStyles>
  );
}

GridItem.propTypes = {
  category: PropTypes.shape({
    main_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
  }),
};

export default GridItem;
