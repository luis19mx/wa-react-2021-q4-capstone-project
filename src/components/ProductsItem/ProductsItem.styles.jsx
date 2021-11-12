/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
    img {
      opacity: 0.66;
    }
    h2 {
      color: black;
    }
    a {
      background-color: var(--primary);
      color: white;
    }
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
export const addToCartStyles = css`
  width: auto;
  font-size: 1rem;
  padding: 0.5em 0.8em 0.8em;
  margin: 0;
  color: inherit;
  background-color: #fff;
  border-radius: 0 0.66em 0 0;
  letter-spacing: 0.33px;
  transition: background-color 0.25s ease-out;
`;
export const AddToCartWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: var(--primary);

  p {
    padding: 0.8em;
    opacity: 0.6;
  }
`;
