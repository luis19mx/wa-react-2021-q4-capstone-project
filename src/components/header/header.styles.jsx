import styled from '@emotion/styled';

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  height: var(--header-height);
  box-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.04);
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
export const LogoStyles = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;
export const FlexStyles = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gutter);
`;
export const SearchStyles = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    height: 80%;
    left: 0.4em;
    opacity: 0.3;
  }
  input {
    width: 30vw;
    min-width: 200px;
    padding-left: 2.2em;
    border-radius: 4em;
  }

  @media (max-width: 40em) {
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
export const ShopppingIconStyles = styled.svg`
  height: 32px;
  cursor: pointer;
`;
