/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import uniqueId from 'lodash/uniqueId';

export default function SliderItem({ banner }) {
  const { description, main_image: img, title } = banner;
  return (
    <div
      css={css`
        position: relative;
        border-radius: 1em;
        overflow: hidden;
        cursor: pointer;
        /* margin-left: 5vw; */
        /* margin-right: 5vw; */
        @media (max-width: 32em) {
          border: 1px solid var(--grey);
          padding: 0.66em;

          img {
            border-radius: 0.5em;
          }
        }
      `}
    >
      <img src={img.url} alt={img.alt} />
      <div
        css={css`
          position: absolute;
          right: 2%;
          bottom: 5%;
          background-color: hsla(0, 100%, 100%, 0.66);
          padding: 2em;
          backdrop-filter: blur(4px);
          border-radius: 0.3em;

          h2 {
            margin-bottom: 0.4em;
          }
          p {
            margin-bottom: 0;
          }
          @media (max-width: 40em) {
            padding: 1em 1em 0;
            h2 {
              font-size: 3.5vw;
            }
            p {
              font-size: 2.5vw;
            }
          }

          @media (max-width: 32em) {
            position: relative;

            h2 {
              font-size: 5vw;
            }
            p {
              font-size: 4vw;
            }
          }
        `}
      >
        <h2
          css={css`
            text-transform: capitalize;
          `}
        >
          {title.toLowerCase()}
        </h2>
        {description.map((p) => (
          <p key={uniqueId()}>{p.text}</p>
        ))}
      </div>
    </div>
  );
}
