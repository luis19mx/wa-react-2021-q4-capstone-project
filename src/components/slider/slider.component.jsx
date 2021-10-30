import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SliderItem from '../slider-item/slider-item.component';
import { SliderContainerStyles } from './slider.styles';

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

function SliderContainer({ bannersJSON = { results: [] } }) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(
      bannersJSON.results?.map(({ id, data }) => ({
        id,
        banner: { ...data },
      }))
    );
  }, [bannersJSON]);

  return !!banners?.length ? (
    <SliderContainerStyles>
      <Slider {...sliderSettings}>
        {banners.map(({ id, banner }) => (
          <SliderItem key={id} banner={banner} />
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

SliderContainer.defaultProps = {
  bannersJSON: {
    results: [],
  },
};

export default SliderContainer;
