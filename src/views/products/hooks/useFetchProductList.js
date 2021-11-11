import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchProducts } from 'store/products';

export function useFetchProductList() {
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    if (state?.paginationLink) {
      dispatch(fetchProducts(state));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, state]);
}
