import styled from '@emotion/styled';

export const SearchStyles = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    height: 80%;
    left: 0.4em;
    opacity: 0.3;
    pointer-events: none;
  }
  input {
    width: 30vw;
    min-width: 200px;
    padding-left: 2.2em;
    padding-right: 2.77em;
    border-radius: 4em;
  }
  button {
    background-color: var(--primary);
    color: white;
    position: absolute;
    border-radius: 0 4em 4em 0;
    top: 0.0625em;
    right: 0.0625em;
    padding-left: 0.66em;
    padding-right: 0.66em;
    box-shadow: -0.0625em 0 0.125em rgb(10 10 10 / 25%);
    transition: opacity 0.25s linear;

    &[disabled] {
      opacity: 0;
      pointer-events: none;
    }
  }

  @media (max-width: 24em) {
    width: 32px;
    overflow: hidden;

    input {
      border-color: transparent;
    }
    svg {
      opacity: 1;
    }
  }
`;
