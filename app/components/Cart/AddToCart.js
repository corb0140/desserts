"use client";

import Button from "@/app/UI/Button/Button";
import UpdateQuantityButton from "@/app/UI/Button/UpdateQuantityButton";

import cartIcon from "@/public/images/icon-add-to-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";

import { useState } from "react";

const AddToCart = ({
  products,
  //   showQty = true,
  //   redirect = true,
  increasePerClick = false,
}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    const existingItem = cartItems.find((item) => item.id === products.id);
    if (increasePerClick && existingItem) {
      newQty = existingItem.qty + 1;
      setQty(newQty);
    }
    dispatch(addToCart({ ...products, qty: newQty }));

    console.log("cartItems", cartItems);
  };

  const subtractFromCartHandler = () => {
    let newQty = qty;
    const existingItem = cartItems.find((item) => item.id === products.id);

    if (increasePerClick) {
      newQty = existingItem.qty - 1;
      setQty(newQty);
    }

    dispatch(addToCart({ ...products, qty: newQty }));
  };

  const isProductInCart = cartItems.find((item) => item.id === products.id);

  return (
    <>
      {!isProductInCart ? (
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
