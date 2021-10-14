import productCategories from '../../data/product-categories.json';
import GridItem from '../grid-item/grid-item.component';

export default function Grid() {
  const categories = productCategories.results.map(({ id, data }) => ({ id, category: data }));
  const category = categories[0];
  return (
    <div>
      <GridItem category={category.category} />
      {/* {categories.map(({ id, category }) => (
        <GridItem key={id} {...{ category }} />
      ))} */}
    </div>
  );
}
