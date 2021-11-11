import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import {
  FeaturedBannersContentStyles,
  FeaturedBannersItemStyles,
} from './featured-banners-item.styles';

function FeaturedBannersItem({ banner }) {
  const { description, main_image: img, title } = banner;
  return (
    <FeaturedBannersItemStyles>
      <img src={img.url} alt={img.alt || ''} />
      <FeaturedBannersContentStyles>
        <h2>{title.toLowerCase()}</h2>
        {!!description.length &&
          description.map(({ text }) =>
            text ? <p key={uniqueId()}>{text}</p> : null
          )}
      </FeaturedBannersContentStyles>
    </FeaturedBannersItemStyles>
  );
}

FeaturedBannersItem.propTypes = {
  banner: PropTypes.shape({
    description: PropTypes.array,
    main_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
  }),
};

export default FeaturedBannersItem;
