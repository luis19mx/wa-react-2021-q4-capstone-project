import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PaginationArrowStyles, PaginationStyles } from './pagination.styles';

function Pagination({ pagination }) {
  const { activePage, totalPages, nextPage, prevPage } = pagination;

  return (
    <PaginationStyles>
      {prevPage ? (
        <PaginationArrowStyles
          as={Link}
          to={{
            pathname: '/products',
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
            pathname: '/products',
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
  // activePage: PropTypes.number.isRequired,
  // totalPages: PropTypes.number.isRequired,
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
};

export default Pagination;
