import categories from '../../data/product-categories.json';

export default function Categories() {
  console.log(categories);
  return (
    <form>
      {categories.results?.map(({ data: { name } }) => (
        <div key={name}>
          <input type='checkbox' id='scales' name='scales' />
          <label for='scales'>Scales</label>
          {/* <label htmlFor={name}>
            <input name={name} type='checkbox' />
            {name}
          </label> */}
        </div>
      ))}
    </form>
  );
}
