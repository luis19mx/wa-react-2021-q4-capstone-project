import { css } from "@emotion/react";
import styled from '@emotion/styled';

export const shrinkLabel = ({ shrink }) => css`
  ${shrink &&
  `
  transform: translateY(-30px);
  font-size: 12px;
  color: var(--dark);
  `}
`;
export const Label = styled.label`
  color: #888;
  font-size: 0.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 1.25em;
  top: 0.72em;
  transition: all 0.3s ease;

  ${shrinkLabel}
`;
