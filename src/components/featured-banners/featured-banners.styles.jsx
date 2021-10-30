import styled from '@emotion/styled';
import { Container } from '../styles/container.styles';

export const FeaturedBannersStyles = styled(Container)`
  /* react slick carousel */
  .slick-prev:before,
  .slick-next:before {
    color: var(--grey);
  }
  .slick-list {
    border-radius: 1em;
  }
`;
