import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FeaturedBannersItem from '../featured-banners-item/featured-banners-item.component';
import { FeaturedBannersStyles } from './featured-banners.styles';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

function FeaturedBanners({ banners }) {
  return Array.isArray(banners) && banners.length ? (
    <FeaturedBannersStyles>
      <Slider {...SLIDER_SETTINGS}>
        {banners.map(({ id, banner }) => (
          <FeaturedBannersItem key={id} banner={banner} />
        ))}
      </Slider>
    </FeaturedBannersStyles>
  ) : null;
}

FeaturedBanners.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FeaturedBanners.defaultProps = {
  banners: [],
};

export default FeaturedBanners;
