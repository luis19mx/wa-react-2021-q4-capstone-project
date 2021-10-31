import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { PaginationArrowStyles, PaginationStyles } from './pagination.styles';

function Pagination({ pagination }) {
  const { activePage, totalPages, nextPage, prevPage } = pagination;
  const { pathname, search } = useLocation();

  return (
    <PaginationStyles>
      {prevPage ? (
        <PaginationArrowStyles
          as={Link}
          to={{
            pathname,
            search,
            state: { paginationLink: prevPage },
          }}
        >
          &lsaquo;
        </PaginationArrowStyles>
      ) : null}
      Page {activePage} of {totalPages}
      {nextPage ? (
        <PaginationArrowStyles
          as={Link}
          to={{
            pathname,
            search,
            state: { paginationLink: nextPage },
          }}
        >
          &rsaquo;
        </PaginationArrowStyles>
      ) : null}
    </PaginationStyles>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    activePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
  }),
};

export default Pagination;
