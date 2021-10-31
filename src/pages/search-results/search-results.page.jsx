import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchProduct } from '../../utils/hooks';
import Products from '../../components/products/products.components';
import Spinner from '../../components/spinner/spinner.component';

export default function SearchResultsPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { data, isLoading } = useSearchProduct(searchParams.get('q'));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setProducts(
        data.results?.map(({ id, data: product }) => {
          return { id, product };
        })
      );
    }
  }, [data, isLoading]);

  return isLoading && !products?.length ? (
    <Spinner />
  ) : products?.length ? (
    <>
      <h1>Search results</h1>
      <p>
        Found {products?.length}&nbsp;
        item{products?.length > 1 ? 's' : ''}&nbsp;
        for {searchParams.get('q')}
      </p>
      <Products products={products} />
    </>
  ) : (
    <p>No product found!!</p>
  );
}

// const [data, setData] = useState({});
// const handleChange = debounce(async ({ target: { value } }) => {
//   if (value === '') return setData({});
//   try {
//     const result = await fetch(
//       `https://api.github.com/search/users?q=${value}`
//     );
//     const d = await result.json();
//     setData(d);
//   } catch (error) {
//     console.error(error);
//     setData({});
//   }
// }, 500);
