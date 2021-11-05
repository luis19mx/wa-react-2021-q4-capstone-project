import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartVisibility } from "../redux/cart";

export function useHideCartDropdownOnPageLoad() {
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  const { cartIsHidden } = useSelector((state) => state.cart);

  useEffect(() => {
    if (firstRender.current) {
      if (!cartIsHidden) {
        dispatch(toggleCartVisibility());
      }
      firstRender.current = false;
    }
  });
}