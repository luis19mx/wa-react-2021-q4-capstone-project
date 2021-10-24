import productCategories from '../../data/product-categories.json';
import GridItem from '../grid-item/grid-item.component';
import { GridStyles } from './grid.styles';

export default function Grid() {
  const categories = productCategories.results.map(({ id, data }) => ({ id, category: data }));
  return (
    <GridStyles>
      {categories.map(({ id, category }) => (
        <GridItem key={id} {...{ category }} />
      ))}
    </GridStyles>
  );
}
