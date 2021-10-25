import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import { SliderContentStyles, SliderItemStyles } from './slider-item.styles';

function SliderItem({ banner }) {
  const { description, main_image: img, title } = banner;
  return (
    <SliderItemStyles>
      <img src={img.url} alt={img.alt || ''} />
      <SliderContentStyles>
        <h2>{title.toLowerCase()}</h2>
        {!!description.length && description.map((p) => <p key={uniqueId()}>{p.text}</p>)}
      </SliderContentStyles>
    </SliderItemStyles>
  );
}

SliderItem.propTypes = {
  banner: PropTypes.shape({
    description: PropTypes.array,
    main_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
  }),
};

export default SliderItem;
