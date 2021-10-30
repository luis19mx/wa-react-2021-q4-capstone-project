import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SliderItem from '../slider-item/slider-item.component';
import { FeaturedBannersStyles } from './featured-banners.styles';

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

function FeaturedBanners({ banners }) {
  return Array.isArray(banners) && banners.length ? (
    <FeaturedBannersStyles>
      <Slider {...sliderSettings}>
        {banners.map(({ id, banner }) => (
          <SliderItem key={id} banner={banner} />
        ))}
      </Slider>
    </FeaturedBannersStyles>
  ) : null;
}

FeaturedBanners.propTypes = {
  bannersData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FeaturedBanners.defaultProps = {
  bannersData: [],
};

export default FeaturedBanners;
