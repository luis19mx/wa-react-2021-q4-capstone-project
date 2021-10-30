import styled from '@emotion/styled';

export const GridItemStyles = styled.div`
  position: relative;
  border-radius: 0.3em;
  overflow: hidden;

  &:hover {
    opacity: 0.84;
    cursor: pointer;
  }
`;
export const ImageStyles = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const TitleStyles = styled.h2`
  position: absolute;
  background-color: white;
  padding: 0.3em 1em;
  bottom: 0;
  left: 0;
  margin: 0;
`;
