import styled from '@emotion/styled';
import { Container } from '../../styles/design-system';

export const SliderContainerStyles = styled(Container)`
  /* react slick carousel */
  .slick-prev:before,
  .slick-next:before {
    color: var(--grey);
    /* color: var(--primary); */
    /* opacity: 0.5; */
  }
`;
