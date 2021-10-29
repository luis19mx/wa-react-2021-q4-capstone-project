import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import bannersJSON from '../../data/featured-banners.json';
import SliderItem from '../slider-item/slider-item.component';
import { SliderContainerStyles } from './slider.styles';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

function SliderContainer({ bannersJSON = { results: [] } }) {
  const banners = bannersJSON.results.map(({ id, data }) => ({
    id,
    banner: { ...data },
  }));

  return !!banners.length ? (
    <SliderContainerStyles>
      <Slider {...settings}>
        {banners.map(({ id, banner }) => (
          <SliderItem key={id} {...{ banner }} />
        ))}
      </Slider>
    </SliderContainerStyles>
  ) : null;
}

SliderContainer.propTypes = {
  bannersJSON: PropTypes.shape({
    results: PropTypes.array.isRequired,
  }),
};

export default SliderContainer;
