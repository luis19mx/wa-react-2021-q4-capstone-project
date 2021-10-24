/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import featuredBanners from '../../data/featured-banners.json';
import { Container } from '../../styles/design-system';
import SliderItem from '../slider-item/slider-item.component';

export default function Slider() {
  const banners = featuredBanners.results.map(({ id, data }) => ({ id, banner: { ...data } }));
  return (
    <Container>
      {banners
        .slice(0, 1)
        .map(({ id, banner }) => (
        <SliderItem key={id} {...{ banner }} />
      ))}
    </Container>
  );
}
