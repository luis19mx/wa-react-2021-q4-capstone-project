import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import featuredBanners from '../../data/featured-banners.json';
import SliderItem from '../slider-item/slider-item.component';
import { SliderContainerStyles } from './slider.styles';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

export default function SliderContainer() {
  const banners = featuredBanners.results.map(({ id, data }) => ({ id, banner: { ...data } }));
  return (
    <SliderContainerStyles>
      <Slider {...settings}>
        {banners.map(({ id, banner }) => (
          <SliderItem key={id} {...{ banner }} />
        ))}
      </Slider>
    </SliderContainerStyles>
  );
}
