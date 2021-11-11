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
