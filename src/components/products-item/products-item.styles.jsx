import styled from '@emotion/styled';

export const ProductsItemStyles = styled.div`
  background-color: white;
  border-radius: 0.3em;
  overflow: hidden;
  border: 1px solid var(--l_grey);
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0.5em;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    opacity: 0.8;
  }

  p {
    margin: 0;
  }
`;
export const ImageStyles = styled.img`
  border-radius: 0.2em;
  min-height: 70%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  margin-left: auto;
  margin-right: auto;
  flex-basis: 66;
  flex-shrink: 1;
`;
export const ContentStyles = styled.div`
  flex-basis: 33;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TitleStyles = styled.h2`
  margin-top: 0.4em;
  margin-bottom: 0.4em;
  font-size: 1.2rem;
  opacity: 0.8;
  min-height: 2.6rem;
`;
export const PriceStyles = styled.p`
  font-size: 1.4rem;
  align-self: flex-end;
`;
export const CategoryStyles = styled.p`
  position: absolute;
  right: 0.66em;
  top: 0.66em;
  background-color: #fff;
  border-radius: 0.3em;
  padding: 0.1em 0.66em;
  background-color: var(--l_grey);
  color: var(--d_grey);
`;
