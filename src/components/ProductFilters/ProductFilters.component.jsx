import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ProductFiltersButton,
  ProductFiltersStyles,
} from './ProductFilters.styles';

function ProductFilters({ filters, setFilters }) {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const history = useHistory();
  const { state } = useLocation();

  const setAllFiltersToFalse = () => {
    history.replace({ search: '', state });

    setFilters(
      Object.keys(filters).reduce(
        (filters, filter) => ({
          ...filters,
          [filter]: false,
        }),
        {}
      )
    );
  };

  const handleChange = ({ target: { name } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: !prevFilters[name],
    }));
  };

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
  setFilters: PropTypes.func.isRequired,
};

export default ProductFilters;
