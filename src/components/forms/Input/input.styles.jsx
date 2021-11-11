import styled from '@emotion/styled';
import { shrinkLabel } from 'components/styles/label.styles';

export const InputStyles = styled.div`
  position: relative;
  margin: 44px 0;
  background-color: white;

  input {
    background: none;
    background-color: transparent;
    box-shadow: none;
    color: var(--d_grey);
    padding: 0.4em 1em;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--grey);
    margin: 25px 0;

    &:focus {
      outline: none;
    }
    &:focus ~ label {
      ${shrinkLabel}
    }
  }
`;
