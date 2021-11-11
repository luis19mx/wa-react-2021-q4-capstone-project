import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export function useCartEmptyRedirect() {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();

  useEffect(() => {
    if (!cartItems?.length) {
      history.push('/products');
    }
  }, [cartItems, history]);
}