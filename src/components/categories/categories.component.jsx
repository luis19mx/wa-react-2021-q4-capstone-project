import { Component } from 'react';
import categoriesJSON from '../../data/product-categories.json';

export default class Categories extends Component {
  state = {
    filters: categoriesJSON.results
      // .map(({ data: { name } }) => name.toLowerCase().replace(/\s/g, '-'))
      .map(({ data: { name } }) => name.toLowerCase())
      .reduce(
        (filters, filter) => ({
          ...filters,
          [filter]: false,
        }),
        {}
      ),
  };
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    return (
      <form>
        {/* {categories.results?.map(({ data: { name } }) => (
        <div key={name}>
          <label htmlFor={name}>
            <input name={name} type='checkbox' />
            {name}
          </label>
        </div>
      ))} */}
      </form>
    );
  }
}
