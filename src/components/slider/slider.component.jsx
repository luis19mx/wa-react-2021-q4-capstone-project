import featuredBanners from '../../data/featured-banners.json';
import SliderItem from '../slider-item/slider-item.component';

export default function Slider() {
  const banners = featuredBanners.results.map(({ id, data }) => ({ id, banner: { ...data } }));
  const banner = banners[0];
  return (
    <div>
      <SliderItem banner={banner.banner} />
      {/* {banners.map(({ id, banner }) => (
        <SliderItem key={id} {...{ banner }} />
      ))} */}
    </div>
  );
}
