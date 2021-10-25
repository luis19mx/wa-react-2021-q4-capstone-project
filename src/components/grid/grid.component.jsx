import productCategoriesJSON from '../../data/product-categories.json';
import GridItem from '../grid-item/grid-item.component';
import { GridStyles } from './grid.styles';

const categories = productCategoriesJSON.results.map(({ id, data }) => ({ id, category: data }));

export default function Grid() {
  return (
    <GridStyles>
      {categories.map(({ id, category }) => (
        <GridItem key={id} {...{ category }} />
      ))}
    </GridStyles>
  );
}
