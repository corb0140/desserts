"use client";

import { data } from "@/Data/Data";
import Image from "next/image";
import addToCart from "@/public/images/icon-add-to-cart.svg";
import emptyCart from "@/public/images/illustration-empty-cart.svg";
import Button from "./UI/Button/Button";
import UpdateQuantityButton from "./UI/Button/UpdateQuantityButton";
import { useEffect, useState, useRef } from "react";
import Cart from "./components/Cart/Cart";

export default function Home() {
  const [active, setActive] = useState({});
  const [quantities, setQuantities] = useState({});
  const numberOfItemsRef = useRef(0);

  const toggleActiveButton = (id) => {
    setActive((state) => ({ ...state, [id]: !state[id] }));

    numberOfItemsRef.current = numberOfItemsRef.current + 1;

    console.log(id);
  };

  const increaseQuantity = (id) => {
    setQuantities((state) => ({ ...state, [id]: (state[id] || 1) + 1 }));
    numberOfItemsRef.current = numberOfItemsRef.current + 1;
  };

  const decreaseQuantity = (id) => {
    setQuantities((state) => {
      const newQuantity = (state[id] || 1) - 1;
      if (newQuantity < 1) {
        const { [id]: _, ...rest } = state;
        return rest;
      }
      return { ...state, [id]: newQuantity };
    });
    numberOfItemsRef.current = numberOfItemsRef.current - 1;
  };

  useEffect(() => {}, []);

  return (
    <main className="flex min-h-screen flex-col p-5 lg:px-24 lg:py-10">
      <h1 className="text-4xl font-bold tracking-wide">Desserts</h1>

      <div className="flex flex-col gap-y-5 pt-8 lg:grid lg:grid-cols-3 lg:gap-x-5 lg:w-2/3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[22rem] w-full flex flex-col justify-between"
            >
              <div className="relative h-[14rem] w-full rounded-lg">
                <Image
                  src={item.image.mobile}
                  alt={item.name}
                  height={240}
                  width={240}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg w-full h-full"
                />

                {active[item.id] ? (
                  <UpdateQuantityButton
                    decrease={() => {
                      decreaseQuantity(item.id);
                    }}
                    currentNumber={quantities[item.id] || 1}
                    increase={() => {
                      increaseQuantity(item.id);
                    }}
                  />
                ) : (
                  <Button
                    src={addToCart}
                    text="Add to Cart"
                    style="absolute -bottom-[1.2rem] left-[50%] -translate-x-[50%] w-1/2 h-11 lg:w-2/3 lg:h-10"
                    id={active}
                    click={() => {
                      toggleActiveButton(item.id);
                    }}
                  />
                )}
              </div>

              <div className="flex flex-col gap-y-1">
                <p className="text-sm text-Rose400">{item.category}</p>
                <p className="font-semibold tracking-wide text-ProductName">
                  {item.name}
                </p>
                <p className="text-primary font-semibold">${item.price}0</p>
              </div>
            </div>
          );
        })}
      </div>

      <Cart emptyCart={emptyCart} numberOfItems={numberOfItemsRef.current} />
    </main>
  );
}
