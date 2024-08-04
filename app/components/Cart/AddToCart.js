"use client";

import Button from "@/app/UI/Button/Button";
import UpdateQuantityButton from "@/app/UI/Button/UpdateQuantityButton";

import cartIcon from "@/public/images/icon-add-to-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQty,
} from "@/app/redux/slices/cartSlice";

const AddToCart = ({ products, increasePerClick = false }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const existingItem = cartItems.find((item) => item.id === products.id);
  const qty = existingItem ? existingItem.qty : 1;

  const addToCartHandler = () => {
    let newQty = qty;
    const existingItem = cartItems.find((item) => item.id === products.id);

    if (increasePerClick && existingItem) {
      newQty += 1;
    }
    dispatch(addToCart({ ...products, qty: newQty }));
    dispatch(updateQty({ id: products.id, qty: newQty }));
  };

  const subtractFromCartHandler = () => {
    let newQty = qty;
    const existingItem = cartItems.find((item) => item.id === products.id);

    if (increasePerClick && existingItem) {
      newQty -= 1;
    }

    if (newQty > 0) {
      dispatch(updateQty({ id: products.id, qty: newQty }));
    } else {
      dispatch(removeFromCart(products.id));
    }
  };

  return (
    <>
      {!existingItem ? (
        <Button
          src={cartIcon}
          text="Add to Cart"
          style="absolute -bottom-[1.2rem] left-[50%] -translate-x-[50%] w-1/2 h-11 lg:w-2/3 lg:h-10"
          click={addToCartHandler}
        />
      ) : (
        <UpdateQuantityButton
          increase={addToCartHandler}
          currentNumber={qty}
          decrease={subtractFromCartHandler}
        />
      )}
    </>
  );
};

export default AddToCart;
