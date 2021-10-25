import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import { PaginationArrowStyles, PaginationStyles, PaginatorStyles } from './pagination.styles';

function Pagination({ resultPages, activePage }) {
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

Pagination.propTypes = {
  resultPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default Pagination;
