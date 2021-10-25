import { FilterButton, FiltersStyles } from './filters.styles';

export default function Filters({ filters, handleChange, setAllFiltersToFalse }) {
  return (
    <FiltersStyles>
      <h3>Filters</h3>
      <form>
        {Object.keys(filters).map((filter) => (
          <div key={filter}>
            <label htmlFor={filter}>
              <input
                type='checkbox'
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
      {Object.keys(filters).some((filter) => filters[filter] === true) && (
        <FilterButton onClick={setAllFiltersToFalse}>
          <span>&times;</span>&emsp;Removed all filters
        </FilterButton>
      )}
    </FiltersStyles>
  );
}
