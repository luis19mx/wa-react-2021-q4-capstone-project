import { SearchStyles } from './search-products.styles';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchProducts() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!search) return;

    history.push({
      pathname: '/search',
      search: `?q=${search}`,
    });

    setSearch('')
  };

  const handleChange = ({ target: { value } }) => setSearch(value);
  return (
    <SearchStyles>
      <SearchIcon />
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="search"
          placeholder="try armchair…"
          value={search}
          onChange={handleChange}
        />
        <button disabled={!search} type="submit">
          go
        </button>
      </form>
    </SearchStyles>
  );
}
