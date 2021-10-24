import uniqueId from 'lodash/uniqueId';
import { SliderContentStyles, SliderItemStyles } from './slider-item.styles';

export default function SliderItem({ banner }) {
  const { description, main_image: img, title } = banner;
  return (
    <SliderItemStyles>
      <img src={img.url} alt={img.alt} />
      <SliderContentStyles>
        <h2>{title.toLowerCase()}</h2>
        {description.map((p) => (
          <p key={uniqueId()}>{p.text}</p>
        ))}
      </SliderContentStyles>
    </SliderItemStyles>
  );
}
