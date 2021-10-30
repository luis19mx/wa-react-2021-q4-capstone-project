import styled from '@emotion/styled';

export const PaginationStyles = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  span {
    padding: 0.4em 0.8em;
    cursor: pointer;
    background-color: transparent;
    border-radius: 0.6em;

    &:hover {
      background-color: var(--l_grey);
    }
  }
`;
export const PaginationArrowStyles = styled.span`
  margin-left: 0.3em;
  margin-right: 0.3em;
  transform: scale(1.4) translateY(-1px);
`;
export const PaginatorStyles = styled.span`
  border: 1px solid;
  border-color: ${({ activePageStyles }) => {
    return activePageStyles ? 'var(--primary)' : 'transparent';
  }};
  text-decoration: ${({ activePageStyles }) => {
    return activePageStyles && 'underline';
  }};
`;
