import styled from '@emotion/styled';
import { Container } from '../../styles/design-system';

export const SliderContainerStyles = styled(Container)`
  /* react slick carousel */
  .slick-prev:before,
  .slick-next:before {
    color: var(--grey);
  }
  .slick-list {
    border-radius: 1em;
  }
`;
