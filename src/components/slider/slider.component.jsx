import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bannersJSON from '../../data/featured-banners.json';
import SliderItem from '../slider-item/slider-item.component';
import { SliderContainerStyles } from './slider.styles';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

const banners = bannersJSON.results.map(({ id, data }) => ({ id, banner: { ...data } }));

export default function SliderContainer() {
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
