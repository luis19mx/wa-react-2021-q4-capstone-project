import styled from '@emotion/styled';

export const ProductFiltersStyles = styled.aside`
  flex-basis: 240px;
  flex-grow: 1;
  padding-left: 1em;
  padding-right: 1em;
  position: sticky;
  top: 5rem;
  align-self: flex-start;
  margin-bottom: 5vh;

  @media(max-width: 52em) {
    position: relative;
    top: auto;
  }
`;
export const ProductFiltersButton = styled.button`
  padding: 0.1em 1.5em;
  display: flex;
  align-items: center;
  border-radius: 2em;
  margin-top: 1em;
  font-size: small;
  width: 100%;
  background-color: var(--primary);
  color: white;
  transition: background-color .25s ease-out;

  &:hover {
    background-color: var(--primary_d);
  }

  span {
    font-family: 'Telegraf',sans-serif;
    font-size: x-large;
  }
`;
