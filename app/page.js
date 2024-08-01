"use client";

import { data } from "@/app/data/Data";
import { useState, useRef } from "react";
import Cart from "./components/Cart/Cart";
import ProductItem from "@/app/components/Products/ProductItem";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  return (
    <main className="flex min-h-screen flex-col p-5 lg:px-24 lg:py-10">
      <h1 className="text-4xl font-bold tracking-wide">Desserts</h1>

      <div className="flex flex-col gap-y-5 pt-8 lg:grid lg:grid-cols-3 lg:gap-x-5 lg:w-2/3">
        {data.map((item) => {
          return <ProductItem products={item} key={item.id} />;
        })}
      </div>

      <Cart items={cartItems} />
    </main>
  );
}
