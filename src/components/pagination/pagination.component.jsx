import { uniqueId } from 'lodash';
import { PaginationArrowStyles, PaginationStyles, PaginatorStyles } from './pagination.styles';

export default function Pagination({ resultPages, activePage }) {
  return (
    <PaginationStyles>
      <PaginationArrowStyles>&lsaquo;</PaginationArrowStyles>
      {Array(resultPages)
        .fill(null)
        .map((_, index) => {
          const page = index + 1;
          return (
            <PaginatorStyles activePage={activePage === page} key={uniqueId()}>
              {page}
            </PaginatorStyles>
          );
        })}
      <PaginationArrowStyles>&rsaquo;</PaginationArrowStyles>
    </PaginationStyles>
  );
}
