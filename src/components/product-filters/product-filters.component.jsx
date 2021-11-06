import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ProductFiltersButton, ProductFiltersStyles } from './product-filters.styles';

function ProductFilters({ filters, handleChange, setAllFiltersToFalse }) {
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    setIsFilterActive(Object.keys(filters).some((filter) => filters[filter]));
  }, [filters]);

  return (
    <ProductFiltersStyles>
      <h3>Filters</h3>
      <form>
        {Object.keys(filters).map((filter) => (
          <div key={filter}>
            <label htmlFor={filter}>
              <input
                type="checkbox"
                name={filter}
                id={filter}
                onChange={handleChange}
                checked={filters[filter]}
              />
              &ensp;
              {filter}
            </label>
          </div>
        ))}
      </form>
      {isFilterActive && (
        <ProductFiltersButton onClick={setAllFiltersToFalse}>
          <span>&times;</span>&emsp;Removed all filters
        </ProductFiltersButton>
      )}
    </ProductFiltersStyles>
  );
}

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setAllFiltersToFalse: PropTypes.func.isRequired,
};

export default ProductFilters;
