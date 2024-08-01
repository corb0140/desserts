import Image from "next/image";
import addToCart from "@/public/images/icon-add-to-cart.svg";
import Button from "@/app/UI/Button/Button";
import UpdateQuantityButton from "@/app/UI/Button/UpdateQuantityButton";

import { useState, useRef, useEffect } from "react";

const ProductItem = ({ products }) => {
  const [active, setActive] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const numberOfItemsRef = useRef(0);

  const toggleActiveButton = (id) => {
    setActive((state) => ({ ...state, [id]: !state[id] }));

    numberOfItemsRef.current = numberOfItemsRef.current + 1;

    console.log(id);
  };

  const addItemToCart = (item) => {
    setCartItems((state) => [...state, item]);
  };

  const increaseQuantity = (id) => {
    setQuantities((state) => ({ ...state, [id]: (state[id] || 1) + 1 }));
    numberOfItemsRef.current = numberOfItemsRef.current + 1;
  };

  const decreaseQuantity = (id) => {
    setQuantities((state) => {
      const newQuantity = (state[id] || 1) - 1;
      if (newQuantity < 1) {
        setActive((state) => {
          state[id] = false;
          return state;
        });
        const { [id]: _, ...rest } = state;
        return rest;
      }
      console.log(newQuantity);
      return { ...state, [id]: newQuantity };
    });
    numberOfItemsRef.current = numberOfItemsRef.current - 1;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div>
      <div className="h-[22rem] w-full flex flex-col justify-between">
        <div className="relative h-[14rem] w-full rounded-lg">
          <Image
            src={products.image.mobile}
            alt={products.name}
            height={240}
            width={240}
            style={{ objectFit: "cover" }}
            className="rounded-lg w-full h-full"
          />

          {active[products.id] ? (
            <UpdateQuantityButton
              decrease={() => {
                decreaseQuantity(products.id);
              }}
              currentNumber={quantities[products.id] || 1}
              increase={() => {
                increaseQuantity(products.id);
              }}
            />
          ) : (
            <Button
              src={addToCart}
              text="Add to Cart"
              style="absolute -bottom-[1.2rem] left-[50%] -translate-x-[50%] w-1/2 h-11 lg:w-2/3 lg:h-10"
              id={active}
              click={() => {
                toggleActiveButton(products.id);
                addItemToCart(products);
              }}
            />
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-sm text-Rose400">{products.category}</p>
          <p className="font-semibold tracking-wide text-ProductName">
            {products.name}
          </p>
          <p className="text-primary font-semibold">${products.price}0</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
