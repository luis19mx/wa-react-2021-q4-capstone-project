/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function GridItem({ category }) {
  const { main_image: img, name } = category;
  return (
    <div
      css={css`
        position: relative;
        border-radius: .3em;
        overflow: hidden;

        &:hover {
          opacity: 0.84;
          cursor: pointer;
        }
      `}
    >
      <img
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
        src={img.url}
        alt={img.alt}
      />
      <h2
        css={css`
          position: absolute;
          background-color: white;
          padding: 0.3em 1em;
          bottom: 0;
          left: 0;
          margin: 0;
        `}
      >
        {name}
      </h2>
    </div>
  );
}
